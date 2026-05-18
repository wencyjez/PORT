export interface TechStack {
  name: string;
  icon: string;
}

export interface TechCategory {
  label: string;
  icon: string;
  color: string;
  techs: TechStack[];
}

export interface Stat {
  value: string;
  label: string;
}

export interface WorkExperience {
  role: string;
  company: string;
  type: string;
  period: string;
  color: string;
  description: string;
  highlights: string[];
  stats: Stat[];
}

export interface EducationItem {
  degree: string;
  school: string;
  period: string;
  level: string;
  icon: string;
  color: string;
  featured: boolean;
  description: string;
  achievements: string[];
  gwa: string | null;
}

export interface CertificationItem {
  name: string;
  issuer: string;
  year: string;
  icon: string;
}
