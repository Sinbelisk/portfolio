import styles from "../../Styles/Components/ui/TagList.module.css";

interface TagListProps {
  items: string[];
}

function TagList({ items }: TagListProps) {
  return (
    <ul className={styles.list}>
      {items.map((item) => (
        <li key={item} className={styles.tag}>
          {item}
        </li>
      ))}
    </ul>
  );
}

export default TagList;
