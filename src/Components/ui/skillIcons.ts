import type { IconType } from "react-icons";
import { DiJava } from "react-icons/di";
import { GrOracle } from "react-icons/gr";
import {
  SiCss,
  SiCssmodules,
  SiDocker,
  SiExpress,
  SiFigma,
  SiGit,
  SiGo,
  SiHtml5,
  SiJavascript,
  SiLaravel,
  SiLinux,
  SiMysql,
  SiNodedotjs,
  SiPhp,
  SiPostgresql,
  SiPython,
  SiReact,
  SiRedis,
  SiSpringboot,
  SiTypescript,
  SiVite,
} from "react-icons/si";
import { TbCode } from "react-icons/tb";

// Global dictionary: normalized skill name -> brand icon.
// Add a key here to give a skill its logo; unknown names fall back to TbCode.
const skillIcons: Record<string, IconType> = {
  ts: SiTypescript,
  typescript: SiTypescript,
  js: SiJavascript,
  javascript: SiJavascript,
  java: DiJava,
  go: SiGo,
  python: SiPython,
  react: SiReact,
  vite: SiVite,
  css: SiCss,
  cssmodules: SiCssmodules,
  html: SiHtml5,
  nodejs: SiNodedotjs,
  express: SiExpress,
  postgresql: SiPostgresql,
  redis: SiRedis,
  git: SiGit,
  docker: SiDocker,
  linux: SiLinux,
  figma: SiFigma,
  springboot: SiSpringboot,
  laravel: SiLaravel,
  php: SiPhp,
  mysql: SiMysql,
  sql: GrOracle,
};

const normalize = (name: string) =>
  name.toLowerCase().replace(/[^a-z0-9]/g, "");

export const getSkillIcon = (name: string): IconType =>
  skillIcons[normalize(name)] ?? TbCode;
