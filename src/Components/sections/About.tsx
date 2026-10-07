import { useState } from "react";
import type { Profile } from "../../Data/types";
import Section from "../ui/Section";
import styles from "../../Styles/Components/sections/About.module.css";

// Drop the portrait file in public/ and adjust the extension if needed
const PORTRAIT_URL = "/portrait.png";

interface AboutProps {
  profile: Profile;
}

function About({ profile }: AboutProps) {
  const [portraitFailed, setPortraitFailed] = useState(false);
  const paragraphs = profile.about.split(/\n{2,}/);

  return (
    <Section id="about" title="Sobre mí" accent="about">
      <div className={styles.body}>
        <div className={styles.text}>
          {paragraphs.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>
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
              alt={`Retrato de ${profile.name}`}
              onError={() => setPortraitFailed(true)}
            />
          )}
        </figure>
      </div>
    </Section>
  );
}

export default About;
