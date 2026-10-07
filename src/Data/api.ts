import type { IconType } from "react-icons";
import { TbCode } from "react-icons/tb";
import { iconMap } from "./iconsMap";
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

const normalizeIconName = (name: string) =>
  name.toLowerCase().replace(/[^a-z0-9]/g, "");

// Query functions consumed by the components
export const getProfile = (): Profile => profile;
export const getNavLinks = (): NavLink[] => navLinks;
export const getSkills = (): SkillGroup[] => skillGroups;
export const getProjects = (): Project[] => projects;
export const getExperience = (): ExperienceItem[] => experience;
export const getSocialLinks = (): SocialLink[] => socialLinks;
export const getIcon = (name: string): IconType =>
  iconMap[normalizeIconName(name)] ?? TbCode;
