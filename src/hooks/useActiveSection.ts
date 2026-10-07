import { useEffect, useState } from "react";
import type { NavLink } from "../Data/types";

// Returns the href of the section currently under the header
export function useActiveSection(navLinks: NavLink[]): string {
  const [activeHref, setActiveHref] = useState(navLinks[0]?.href ?? "");

  useEffect(() => {
    const sections = navLinks
      .map((link) => document.querySelector<HTMLElement>(link.href))
      .filter((section): section is HTMLElement => section !== null);

    const update = () => {
      const header = document.querySelector<HTMLElement>("header");
      const line = (header?.offsetHeight ?? 0) + 24;

      // Last section whose top already crossed the line under the header
      let active = sections[0];
      for (const section of sections) {
        if (section.getBoundingClientRect().top <= line) active = section;
      }

      // The last section can't always reach the line
      if (
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight - 2
      ) {
        active = sections[sections.length - 1];
      }

      setActiveHref(`#${active.id}`);
    };

    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, [navLinks]);

  return activeHref;
}
