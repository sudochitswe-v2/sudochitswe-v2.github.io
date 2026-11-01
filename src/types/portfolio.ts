export type ThemeId = 'modern' | 'brutalism' | 'retro' | 'soviet';

export interface ThemeMeta {
  id: ThemeId;
  name: string;
  tagline: string;
  description: string;
  icon: string;
  accentColor: string;
  badge?: string;
}

export interface ProfileData {
  name: string;
  title: string;
  introduction: string;
  roleBadge?: string;
  dossierNumber?: string;
  avatarUrl?: string;
  contact: {
    email: string;
  };
  socialLinks: {
    linkedin: string;
    github: string;
    mastodon: string;
  };
}

export interface SkillsByLevel {
  Expert: string[];
  Intermediate: string[];
  Beginner: string[];
}

export interface WorkExperience {
  id: number;
  company: string;
  role: string;
  period: string;
  location: string;
  description: string;
  achievements: string[];
  technologies: string[];
}

export interface EducationItem {
  id: number;
  institution: string;
  degree: string;
  years: string;
}

export interface CompanyProject {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  imageUrlId: string;
  startDate?: string;
  endDate?: string;
}

export interface PersonalProject {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  githubUrl?: string;
  demoUrl?: string;
  imageUrl?: string;
}

export interface CertificateItem {
  id: number;
  title: string;
  issuer: string;
  issueDate: string;
  credentialUrl?: string;
  skills?: string[];
}
