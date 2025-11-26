export interface ExperienceItem {
  company: string;
  role: string;
  period: string;
  type: string;
  description: string;
}

export interface ProjectItem {
  title: string;
  role: string;
  description: string;
}

export interface EducationItem {
  institution: string;
  degree: string;
  details: string[];
}

export interface SkillCategory {
  category: string;
  items: string[];
}

export interface ResumeData {
  personal: {
    name: string;
    title: string;
    email: string;
    phone: string;
    location: string;
    linkedin: string;
    summary: string;
  };
  skills: SkillCategory[];
  experience: ExperienceItem[];
  projects: ProjectItem[];
  education: EducationItem[];
}