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
  email: "rafjimray21y@proton.me",
  repoUrl: "https://codeberg.org/Sinbelisk/portfolio",
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
    date: "2025",
    dateLabel: "2025",
    description: "Calculadora gráfica web con calculos a nivel de backend.",
    roles: ["Desarrollador backend", "Sistema de autenticación"],
    technologies: ["React", "TypeScript", "Spring", "Java", "Docker"],
    repoUrl: "https://github.com/lPhiNix/aleph-zero-legacy",
  },
  {
    id: "webforms",
    title: "Gestor de formularios",
    date: "2025",
    dateLabel: "2025-2026",
    description:
      "Gestor de formularios web desarrollado para la empresa Bodegas Campos",
    technologies: ["Node.js", "PostgreSQL", "Docker"],
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
  { label: "GitHub", href: "https://github.com/Sinbelisk" },
  { label: "Codeberg", href: "https://codeberg.org/Sinbelisk" },
];
