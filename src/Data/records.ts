import type {
  ExperienceItem,
  NavLink,
  Profile,
  Project,
  SkillGroup,
  SocialLink,
} from "./types";

export const profile: Profile = {
  name: "Rafael Francisco Jiménez Rayo",
  role: "Desarrollador de software",
  tagline:
    "Desarrollador de software con base en Java y Spring Boot. Quiero crecer en backend, aunque también me manejo en frontend con React y TypeScript/JavaScript u otras tecnologías.",
  about:
    "Soy Técnico Superior en Desarrollo de Aplicaciones Multiplataforma, entusiasta del software libre y del código abierto. Me interesan sobre todo el backend, la programación de bajo nivel y el funcionamiento interno de los sistemas informáticos: me gusta entender cómo funcionan las cosas por dentro. Actualmente curso el segundo año de Desarrollo de Aplicaciones Web.",
  contactMessage:
    "Actualmente estoy abierto a nuevas oportunidades. Si buscas un desarrollador para tu equipo, escríbeme.",
  socialMessage: "Puedes ver más de mi código y trabajo en:",
  email: "rafjimray21y@proton.me",
  location: "Córdoba, España",
  repoUrl: "https://codeberg.org/Sinbelisk/portfolio",
};

export const brandName = "v1.0";

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
    items: ["TypeScript", "JavaScript", "Java", "PHP"],
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
    items: ["PostgreSQL", "MySQL", "Redis"],
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
    description: "Calculadora gráfica web con cálculos a nivel de backend.",
    roles: ["Desarrollador backend", "Autenticación", "Mantenedor"],
    technologies: ["React", "TypeScript", "Spring", "Java", "Docker"],
    repoUrl: "https://github.com/lPhiNix/aleph-zero-legacy",
  },
  {
    id: "webforms",
    title: "Gestor de formularios",
    date: "2025",
    dateLabel: "2025-2026",
    description:
      "Aplicación web a medida para Bodegas Campos para crear y gestionar formularios de forma dinámica y centralizada.",
    technologies: ["Java", "Spring Boot", "React", "TypeScript"],
  },
  {
    id: "scaffold",
    title: "Scaffold",
    date: "2026",
    dateLabel: "2026",
    description:
      "Herramienta para desarrolladores que combina una CLI con un lenguaje declarativo para definir, componer y generar proyectos, configuraciones, entornos y artefactos de forma reproducible.",
    technologies: ["Go"],
    developing: true,
  },
];

export const experience: ExperienceItem[] = [
  {
    id: "tempfreelance",
    role: "Desarrollador",
    company: "Bodegas Campos",
    startLabel: "2025",
    endLabel: "2026",
    description:
      "Desarrollo de una aplicación web de gestión de formularios en Java, Spring Boot y React, tras completar la Formación en Centros de Trabajo (FCT).",
  },
];

export const socialLinks: SocialLink[] = [
  { label: "GitHub", href: "https://github.com/Sinbelisk" },
  { label: "Codeberg", href: "https://codeberg.org/Sinbelisk" },
];
