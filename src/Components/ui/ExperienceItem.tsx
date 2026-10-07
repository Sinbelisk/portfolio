import type { ExperienceItem as ExperienceEntry } from "../../Data/types";
import styles from "../../Styles/Components/ui/ExperienceItem.module.css";

interface ExperienceItemProps {
  item: ExperienceEntry;
}

function ExperienceItem({ item }: ExperienceItemProps) {
  const { role, company, startLabel, endLabel, description } = item;

  return (
    <li className={styles.item}>
      <article className={styles.card}>
        <p className={styles.period}>
          <time>{startLabel}</time> — <time>{endLabel}</time>
        </p>
        <h3 className={styles.role}>{role}</h3>
        <p className={styles.company}>{company}</p>
        <p className={styles.description}>{description}</p>
      </article>
    </li>
  );
}

export default ExperienceItem;
