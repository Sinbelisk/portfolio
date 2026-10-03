import type { Profile } from '../../Data/types'
import Section from '../ui/Section'
import styles from '../../Styles/Components/sections/About.module.css'

interface AboutProps {
  profile: Profile
}

function About({ profile }: AboutProps) {
  return (
    <Section id="about" title="Sobre mí" accent="about">
      <p className={styles.text}>{profile.about}</p>
    </Section>
  )
}

export default About
