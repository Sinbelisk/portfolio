import styles from "../../Styles/Components/ui/AvailabilityBadge.module.css";

interface AvailabilityBadgeProps {
  available: boolean;
}

function AvailabilityBadge({ available }: AvailabilityBadgeProps) {
  if (!available) return null;

  return (
    <span className={styles.badge}>
      <span className={styles.dot} aria-hidden />
      Disponible para trabajar
    </span>
  );
}

export default AvailabilityBadge;
