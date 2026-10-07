import type { Profile } from "../../Data/types";
import { getIcon } from "../../Data/api";
import AvailabilityBadge from "../ui/AvailabilityBadge";
import styles from "../../Styles/Components/sections/Introduction.module.css";

const LocationIcon = getIcon("location");

interface IntroductionProps {
  profile: Profile;
  available: boolean;
}

function Introduction({ profile, available }: IntroductionProps) {
  const { name, role, tagline, location } = profile;

  return (
    <section id="home" className={styles.section}>
      <div className={styles.roleRow}>
        <p className={styles.eyebrow}>{role}</p>
        <p className={styles.location}>
          <LocationIcon
            className={styles.locationIcon}
            aria-hidden
            focusable={false}
          />
          {location}
        </p>
      </div>
      <h1 className={styles.name}>{name}</h1>
      <p className={styles.tagline}>{tagline}</p>
      <div className={styles.actions}>
        <a className={styles.primary} href="#projects">
          Ver proyectos
        </a>
        <a className={styles.secondary} href="#contact">
          Contacto
        </a>
        <AvailabilityBadge available={available} className={styles.availability} />
      </div>
    </section>
  );
}

export default Introduction;
