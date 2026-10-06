import { useState } from "react";
import type { Profile } from "../../Data/types";
import styles from "../../Styles/Components/sections/Introduction.module.css";

// public/
const PORTRAIT_URL = "/portrait.png";

interface IntroductionProps {
  profile: Profile;
}

function Introduction({ profile }: IntroductionProps) {
  const { name, role, tagline } = profile;
  const [portraitFailed, setPortraitFailed] = useState(false);

  return (
    <section id="home" className={styles.section}>
      <p className={styles.eyebrow}>{role}</p>
      <h1 className={styles.name}>{name}</h1>
      <figure className={styles.portrait}>
        {portraitFailed ? (
          <svg
            className={styles.placeholder}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            aria-hidden="true"
            focusable="false"
          >
            <circle cx="12" cy="8" r="4" />
            <path d="M4 21c0-4.2 3.6-7 8-7s8 2.8 8 7" />
          </svg>
        ) : (
          <img
            src={PORTRAIT_URL}
            alt={`Retrato de ${name}`}
            onError={() => setPortraitFailed(true)}
          />
        )}
      </figure>
      <p className={styles.tagline}>{tagline}</p>
      <div className={styles.actions}>
        <a className={styles.primary} href="#projects">
          Ver proyectos
        </a>
        <a className={styles.secondary} href="#contact">
          Contacto
        </a>
      </div>
    </section>
  );
}

export default Introduction;
