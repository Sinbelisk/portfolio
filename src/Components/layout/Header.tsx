import type { NavLink, Theme } from '../../Data/types'
import ThemeToggle from './ThemeToggle'
import styles from '../../Styles/Components/layout/Header.module.css'

interface HeaderProps {
  name: string
  navLinks: NavLink[]
  activeHref: string
  theme: Theme
  onToggleTheme: () => void
}

function Header({
  name,
  navLinks,
  activeHref,
  theme,
  onToggleTheme,
}: HeaderProps) {
  return (
    <header className={styles.header}>
      <a className={styles.brand} href="#top">
        {name}
      </a>
      <nav className={styles.nav} aria-label="Navegación principal">
        <ul className={styles.list}>
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                className={styles.link}
                href={link.href}
                aria-current={activeHref === link.href ? 'location' : undefined}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
        <ThemeToggle theme={theme} onToggle={onToggleTheme} />
      </nav>
    </header>
  )
}

export default Header
