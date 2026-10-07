import type { IconType } from "react-icons";
import {
  SiCssmodules,
  SiDocker,
  SiExpress,
  SiFigma,
  SiGit,
  SiGo,
  SiHtml5,
  SiJavascript,
  SiLinux,
  SiNodedotjs,
  SiPostgresql,
  SiPython,
  SiReact,
  SiRedis,
  SiTypescript,
  SiVite,
} from "react-icons/si";
import type { SkillIconName } from "../../Data/types";

// Maps data-layer icon keys to Simple Icons brand glyphs.
export const skillIcons: Record<SkillIconName, IconType> = {
  typescript: SiTypescript,
  javascript: SiJavascript,
  python: SiPython,
  go: SiGo,
  react: SiReact,
  vite: SiVite,
  cssmodules: SiCssmodules,
  html: SiHtml5,
  node: SiNodedotjs,
  express: SiExpress,
  postgresql: SiPostgresql,
  redis: SiRedis,
  git: SiGit,
  docker: SiDocker,
  linux: SiLinux,
  figma: SiFigma,
};
