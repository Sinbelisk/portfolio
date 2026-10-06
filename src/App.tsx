import { useEffect, useState } from "react";
import {
  getExperience,
  getNavLinks,
  getProfile,
  getProjects,
  getSkills,
  getSocialLinks,
} from "./Data/api";
import type { Theme } from "./Data/types";
import Header from "./Components/layout/Header";
import BackToTop from "./Components/layout/BackToTop";
import Footer from "./Components/layout/Footer";
import Introduction from "./Components/sections/Introduction";
import About from "./Components/sections/About";
import Skills from "./Components/sections/Skills";
import Projects from "./Components/sections/Projects";
import Experience from "./Components/sections/Experience";
import Contact from "./Components/sections/Contact";
import styles from "./Styles/App.module.css";

const navLinks = getNavLinks();
const profile = getProfile();
const skillGroups = getSkills();
const projects = getProjects();
const experience = getExperience();
const socialLinks = getSocialLinks();

function App() {
  const [theme, setTheme] = useState<Theme>(() =>
    document.documentElement.dataset.theme === "dark" ? "dark" : "light",
  );
  const [activeHref, setActiveHref] = useState(navLinks[0]?.href ?? "");

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    localStorage.setItem("theme", theme);
  }, [theme]);

  // Highlight the section currently in view
  useEffect(() => {
    const sections = navLinks
      .map((link) => document.querySelector<HTMLElement>(link.href))
      .filter((section): section is HTMLElement => section !== null);

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        const first = visible[0];
        if (first) setActiveHref(`#${first.target.id}`);
      },
      { rootMargin: "-45% 0px -50% 0px" },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  const toggleTheme = () =>
    setTheme((current) => (current === "light" ? "dark" : "light"));

  return (
    <div className={styles.page} id="top">
      <a className={styles.skipLink} href="#main">
        Ir al contenido
      </a>
      <Header
        name={profile.name}
        navLinks={navLinks}
        activeHref={activeHref}
        theme={theme}
        onToggleTheme={toggleTheme}
      />
      <main className={styles.main} id="main">
        <Introduction profile={profile} />
        <About profile={profile} />
        <Skills groups={skillGroups} />
        <Projects projects={projects} />
        <Experience items={experience} />
        <Contact profile={profile} socialLinks={socialLinks} />
      </main>

      <Footer name={profile.name} />
      <BackToTop />
    </div>
  );
}

export default App;
