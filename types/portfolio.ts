export interface PersonalInfo {
  name: string;
  title: string;
  location: string;
  bio: string;
  email: string;
  phone: string;
  linkedin: string;
  github: string;
  avatarUrl: string;
  resumeUrl: string;
}

export interface EducationItem {
  degree: string;
  institution: string;
  period: string;
  status?: string;
  description?: string;
}

export interface ExperienceItem {
  role: string;
  company: string;
  duration: string;
  isLeadership?: boolean;
  highlights: string[];
}

export interface ProjectItem {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  features: string[];
  githubUrl: string;
  liveUrl?: string;
  isFeatured?: boolean;
  categoryBadge?: string;
  subcategoryBadge?: string;
}

export interface SkillCategory {
  category: string;
  skills: {
    name: string;
    iconName?: string;
  }[];
}

export interface CertificationItem {
  title: string;
  issuer: string;
  verifyUrl?: string;
}

export interface PortfolioData {
  personal: PersonalInfo;
  typingRoles: string[];
  education: EducationItem[];
  experience: ExperienceItem[];
  projects: ProjectItem[];
  skills: SkillCategory[];
  certifications: CertificationItem[];
}
