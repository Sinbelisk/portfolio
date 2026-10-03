import {
  experience,
  navLinks,
  profile,
  projects,
  skillGroups,
  socialLinks,
} from "./records";
import type {
  ExperienceItem,
  NavLink,
  Profile,
  Project,
  SkillGroup,
  SocialLink,
} from "./types";

// Query functions consumed by the components
export const getProfile = (): Profile => profile;
export const getNavLinks = (): NavLink[] => navLinks;
export const getSkills = (): SkillGroup[] => skillGroups;
export const getProjects = (): Project[] => projects;
export const getExperience = (): ExperienceItem[] => experience;
export const getSocialLinks = (): SocialLink[] => socialLinks;
