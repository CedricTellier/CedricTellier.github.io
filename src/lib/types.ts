export type Theme = 'dark' | 'light';

export interface ThemeTokens {
  bg: string;
  bg2: string;
  bgAlt: string;
  bgBlur: string;
  fg: string;
  muted: string;
  border: string;
  accent: string;
  accentFg: string;
  inputBg: string;
  fontMono: string;
  fontSerif: string;
}

export interface Achievement {
  value: string;
  label: string;
  note: string;
}

export interface Service {
  id: string;
  title: string;
  desc: string;
  bullets: string[];
}

export interface SkillGroup {
  management: string[];
  delivery: string[];
  tech: string[];
}

export interface Experience {
  period: string;
  role: string;
  company: string;
  location: string;
  desc: string;
  bullets: string[];
}

export interface Education {
  school: string;
  title: string;
}

export interface Language {
  name: string;
  level: string;
}

export interface Profile {
  name: string;
  role: string;
  pitchShort: string;
  pitchLong: string;
  location: string;
  status: string;
  yearsXP: number;
  teamSize: number;
  txVolume: string;
  email: string;
  phone: string;
  address: string;
  github: string;
  linkedin: string;
  cv: string;
}
