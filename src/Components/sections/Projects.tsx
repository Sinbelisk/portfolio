import type { Project } from "../../Data/types";
import Section from "../ui/Section";
import ProjectCard from "../ui/ProjectCard";
import styles from "../../Styles/Components/sections/Projects.module.css";

interface ProjectsProps {
  projects: Project[];
}

function Projects({ projects }: ProjectsProps) {
  return (
    <Section id="projects" title="Proyectos" accent="projects">
      <ul className={styles.grid}>
        {projects.map((project) => (
          <li key={project.id}>
            <ProjectCard project={project} />
          </li>
        ))}
      </ul>
    </Section>
  );
}

export default Projects;
