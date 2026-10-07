import styles from "../../Styles/Components/ui/AvailabilityBadge.module.css";

interface AvailabilityBadgeProps {
  available: boolean;
  className?: string;
}

function AvailabilityBadge({ available, className }: AvailabilityBadgeProps) {
  if (!available) return null;

  return (
    <span className={className ? `${styles.badge} ${className}` : styles.badge}>
      <span className={styles.dot} aria-hidden />
      Disponible para trabajar
    </span>
  );
}

export default AvailabilityBadge;
