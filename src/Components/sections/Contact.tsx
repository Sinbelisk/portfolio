import type { Profile, SocialLink } from '../../Data/types'
import Section from '../ui/Section'
import styles from '../../Styles/Components/sections/Contact.module.css'

interface ContactProps {
  profile: Profile
  socialLinks: SocialLink[]
}

function Contact({ profile, socialLinks }: ContactProps) {
  return (
    <Section id="contact" title="Contacto" accent="contact">
      <p className={styles.lead}>{profile.contactMessage}</p>
      <div className={styles.primary}>
        <a className={styles.mail} href={`mailto:${profile.email}`}>
          Mail me
        </a>
        <span className={styles.email}>{profile.email}</span>
      </div>
      <ul className={styles.social}>
        {socialLinks.map((link) => (
          <li key={link.href}>
            <a href={link.href} target="_blank" rel="noreferrer">
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </Section>
  )
}

export default Contact
