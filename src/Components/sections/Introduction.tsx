import type { Profile } from "../../Data/types";
import styles from "../../Styles/Components/sections/Introduction.module.css";

interface IntroductionProps {
  profile: Profile;
}

function Introduction({ profile }: IntroductionProps) {
  const { name, role, tagline } = profile;

  return (
    <section id="home" className={styles.section}>
      <p className={styles.eyebrow}>{role}</p>
      <h1 className={styles.name}>{name}</h1>
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
