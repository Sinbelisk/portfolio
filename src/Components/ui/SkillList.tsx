import { getIcon } from "../../Data/api";
import styles from "../../Styles/Components/ui/SkillList.module.css";

interface SkillListProps {
  items: string[];
}

// Stylized skill pills: brand icon + name, tinted with the section accent.
function SkillList({ items }: SkillListProps) {
  return (
    <ul className={styles.list}>
      {items.map((name) => {
        const Icon = getIcon(name);
        return (
          <li key={name} className={styles.tag}>
            <Icon className={styles.icon} aria-hidden focusable={false} />
            {name}
          </li>
        );
      })}
    </ul>
  );
}

export default SkillList;
