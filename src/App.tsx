import { useEffect, useState } from "react";
import {
  getBrandName,
  getExperience,
  getNavLinks,
  getProfile,
  getProjects,
  getSkills,
  getSocialLinks,
} from "./Data/api";
import type { Theme } from "./Data/types";
import Header from "./Components/layout/Header";
import BackToTop from "./Components/layout/BackToTop";
import Footer from "./Components/layout/Footer";
import Introduction from "./Components/sections/Introduction";
import About from "./Components/sections/About";
import Skills from "./Components/sections/Skills";
import Projects from "./Components/sections/Projects";
import Experience from "./Components/sections/Experience";
import Contact from "./Components/sections/Contact";
import styles from "./Styles/App.module.css";

const navLinks = getNavLinks();
const profile = getProfile();
const brandName = getBrandName();
const skillGroups = getSkills();
const projects = getProjects();
const experience = getExperience();
const socialLinks = getSocialLinks();

// Hardcoded availability status: flip to false when not job hunting
const isAvailable = true;

function App() {
  const [theme, setTheme] = useState<Theme>(() =>
    document.documentElement.dataset.theme === "dark" ? "dark" : "light",
  );

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () =>
    setTheme((current) => (current === "light" ? "dark" : "light"));

  return (
    <div className={styles.page} id="top">
      <a className={styles.skipLink} href="#main">
        Ir al contenido
      </a>
      <Header
        brandName={brandName}
        navLinks={navLinks}
        theme={theme}
        onToggleTheme={toggleTheme}
      />
      <main className={styles.main} id="main">
        <Introduction profile={profile} available={isAvailable} />
        <About profile={profile} />
        <Skills groups={skillGroups} />
        <Projects projects={projects} />
        <Experience items={experience} />
        <Contact
          profile={profile}
          socialLinks={socialLinks}
          available={isAvailable}
        />
      </main>

      <Footer name={profile.name} repoUrl={profile.repoUrl} />
      <BackToTop />
    </div>
  );
}

export default App;
