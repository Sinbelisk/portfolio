import type { ReactNode } from 'react'
import styles from '../../Styles/Components/ui/Section.module.css'

export type SectionAccent =
  | 'about'
  | 'skills'
  | 'projects'
  | 'experience'
  | 'contact'

interface SectionProps {
  id: string
  title: string
  accent: SectionAccent
  children: ReactNode
}

// Shared block wrapper: consistent spacing and per-section accent color
function Section({ id, title, accent, children }: SectionProps) {
  return (
    <section id={id} data-accent={accent} className={styles.section}>
      <header className={styles.head}>
        <h2 className={styles.title}>{title}</h2>
      </header>
      {children}
    </section>
  )
}

export default Section
