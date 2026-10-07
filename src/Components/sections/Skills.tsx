import type { SkillGroup } from "../../Data/types";
import Section from "../ui/Section";
import SkillList from "../ui/SkillList";
import styles from "../../Styles/Components/sections/Skills.module.css";

interface SkillsProps {
  groups: SkillGroup[];
}

function Skills({ groups }: SkillsProps) {
  return (
    <Section id="skills" title="Conocimientos técnicos" accent="skills">
      <ul className={styles.groups}>
        {groups.map((group) => (
          <li key={group.category} className={styles.group}>
            <h3 className={styles.category}>{group.category}</h3>
            <SkillList items={group.items} />
          </li>
        ))}
      </ul>
    </Section>
  );
}

export default Skills;
