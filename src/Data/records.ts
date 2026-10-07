import type {
  ExperienceItem,
  NavLink,
  Profile,
  Project,
  SkillGroup,
  SocialLink,
} from "./types";

export const profile: Profile = {
  name: "Lorem Ipsum",
  role: "Lorem ipsum dolor sit amet",
  tagline:
    "Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  about:
    "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
  contactMessage:
    "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  email: "lorem.ipsum@example.com",
};

export const navLinks: NavLink[] = [
  { label: "Inicio", href: "#home" },
  { label: "Sobre mí", href: "#about" },
  { label: "Conocimientos", href: "#skills" },
  { label: "Proyectos", href: "#projects" },
  { label: "Experiencia", href: "#experience" },
  { label: "Contacto", href: "#contact" },
];

export const skillGroups: SkillGroup[] = [
  {
    category: "Lenguajes",
    items: ["TS", "JS", "Java", "PHP"],
  },
  {
    category: "Frontend",
    items: ["React", "CSS", "HTML"],
  },
  {
    category: "Backend",
    items: ["Spring Boot", "Laravel"],
  },
  {
    category: "Bases de Datos",
    items: ["PostgreSQL", "MySQL", "SQL", "Redis"],
  },
  {
    category: "Herramientas",
    items: ["Git", "Docker", "Linux"],
  },
];

export const projects: Project[] = [
  {
    id: "alephzero",
    title: "Aleph Zero",
    date: "2024-03-01",
    dateLabel: "Mar 2024",
    description: "Calculadora gráfica con calculos a nivel de backend.",
    roles: ["Desarrollador backend", "Sistema de autenticación"],
    technologies: ["React", "TypeScript", "Spring", "Java"],
    repoUrl: "https://github.com/lPhiNix/aleph-zero-legacy",
  },
  {
    id: "lorem-2",
    title: "Dolor Sit Amet",
    date: "2023-11-01",
    dateLabel: "Nov 2023",
    description:
      "Ut ebim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo.",
    technologies: ["Node.js", "PostgreSQL", "Docker"],
  },
  {
    id: "lorem-3",
    title: "Consectetur Adipiscing",
    date: "2023-06-01",
    dateLabel: "Jun 2023",
    description:
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    technologies: ["Python", "FastAPI", "Redis"],
    repoUrl: "https://example.com/repo/lorem-3",
  },
];

export const experience: ExperienceItem[] = [
  {
    id: "exp-1",
    role: "Lorem Ipsum Developer",
    company: "Dolor Sit Amet Inc.",
    startLabel: "Ene 2023",
    endLabel: "Actualidad",
    description:
      "Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    id: "exp-2",
    role: "Junior Lorem Engineer",
    company: "Consectetur Labs",
    startLabel: "Jun 2021",
    endLabel: "Dic 2022",
    description:
      "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
  {
    id: "exp-3",
    role: "Lorem Intern",
    company: "Adipiscing Studio",
    startLabel: "Ene 2020",
    endLabel: "May 2021",
    description:
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
  },
];

export const socialLinks: SocialLink[] = [
  { label: "GitHub", href: "https://github.com/" },
  { label: "Codeberg", href: "https://codeberg.org/" },
  { label: "LinkedIn", href: "https://www.linkedin.com/" },
];
