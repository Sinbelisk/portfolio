import type { Project } from '../../Data/types'
import TagList from './TagList'
import styles from '../../Styles/Components/ui/ProjectCard.module.css'

interface ProjectCardProps {
  project: Project
}

function ProjectCard({ project }: ProjectCardProps) {
  const { title, date, dateLabel, description, technologies, repoUrl } = project

  return (
    <article className={styles.card}>
      <header className={styles.head}>
        <h3 className={styles.title}>{title}</h3>
        <time className={styles.date} dateTime={date}>
          {dateLabel}
        </time>
      </header>
      <p className={styles.description}>{description}</p>
      <TagList items={technologies} />
      {repoUrl && (
        <a className={styles.repo} href={repoUrl} target="_blank" rel="noreferrer">
          Ver repositorio
        </a>
      )}
    </article>
  )
}

export default ProjectCard
