import type { ExperienceItem as ExperienceEntry } from "../../Data/types";
import Section from "../ui/Section";
import ExperienceItem from "../ui/ExperienceItem";
import styles from "../../Styles/Components/sections/Experience.module.css";

interface ExperienceProps {
  items: ExperienceEntry[];
}

function Experience({ items }: ExperienceProps) {
  return (
    <Section id="experience" title="Experiencia laboral" accent="experience">
      <ol className={styles.timeline}>
        {items.map((item) => (
          <ExperienceItem key={item.id} item={item} />
        ))}
      </ol>
    </Section>
  );
}

export default Experience;
