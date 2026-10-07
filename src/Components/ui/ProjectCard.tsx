import type { Project } from "../../Data/types";
import TagList from "./TagList";
import styles from "../../Styles/Components/ui/ProjectCard.module.css";

interface ProjectCardProps {
  project: Project;
}

function ProjectCard({ project }: ProjectCardProps) {
  const {
    title,
    date,
    dateLabel,
    description,
    roles,
    technologies,
    repoUrl,
    developing = false,
  } = project;

  return (
    <article className={styles.card}>
      <header className={styles.head}>
        <h3 className={styles.title}>{title}</h3>
        <div className={styles.meta}>
          {developing && <span className={styles.badge}>Desarrollando</span>}
          <time className={styles.date} dateTime={date}>
            {dateLabel}
          </time>
        </div>
      </header>
      <p className={styles.description}>{description}</p>
      {roles && roles.length > 0 && (
        <p className={styles.roles}>
          <span className={styles.rolesLabel}>
            {roles.length === 1 ? "Rol" : "Roles"}:
          </span>{" "}
          {roles.join(", ")}
        </p>
      )}
      <TagList items={technologies} />
      {repoUrl && (
        <a
          className={styles.repo}
          href={repoUrl}
          target="_blank"
          rel="noreferrer"
        >
          Ver repositorio
        </a>
      )}
    </article>
  );
}

export default ProjectCard;
