// Shared types for the portfolio data layer

export type Theme = "light" | "dark";

export interface Profile {
  name: string;
  role: string;
  tagline: string;
  about: string;
  contactMessage: string;
  email: string;
}

export interface NavLink {
  label: string;
  href: string;
}

export interface SkillGroup {
  category: string;
  items: string[];
}

export interface Project {
  id: string;
  title: string;
  date: string;
  dateLabel: string;
  description: string;
  technologies: string[];
  repoUrl?: string;
}

export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  startLabel: string;
  endLabel: string;
  description: string;
}

export interface SocialLink {
  label: string;
  href: string;
}
