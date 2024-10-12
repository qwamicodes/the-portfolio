import { LucideIcon } from "lucide-react";

import { IconProps } from "@/components/icons";

interface ILink<T> {
  href: string;
  icon: T;
  label: string;
}
interface ISocial {
  name: string;
  url: string;
  icon: (props: IconProps) => JSX.Element;
  navbar: boolean;
}
interface IContact {
  email: string;
  tel: string;
  social: Record<string, ISocial>;
}
interface IWork {
  company: string;
  href: string;
  badges: string[];
  location: string;
  title: string;
  logoUrl: string;
  start: `${string} ${number}` | "present";
  end: `${string} ${number}` | "present";
  description: string[];
}
interface IEducation {
  school: string;
  href: string;
  logoUrl: string;
  degree: string;
  start: `${string} ${number}` | "present";
  end: `${string} ${number}` | "present";
  completed: boolean;
}
export interface IProjects {
  title: string;
  type: "website" | "webApp" | "mobile" | "SaaS";
  href: string;
  dates:
    | `${string} ${number} - ${string} ${number}`
    | `${string} ${number} - present`;
  maintainer: boolean;
  active: boolean;
  description: string;
  technologies: string[];
  links: {
    type: string;
    href: string;
    icon: JSX.Element;
  }[];
  image: string;
  video: string;
}
export interface IHackathons {
  title: string;
  dates: string;
  location: string;
  description: string;
  image: string;
  mlh?: string;
  links: {
    title: string;
    href: string;
    icon: JSX.Element;
  }[];
}

export interface IData {
  name: string;
  initials: string;
  url: string;
  location: string;
  locationLink: string;
  description: string;
  summary: string;
  avatarUrl: string;
  skills: string[];
  navbar: ILink<LucideIcon>[];
  contact: IContact;
  work: IWork[];
  education: IEducation[];
  projects: IProjects[];
  hackathons: IHackathons[];
}
