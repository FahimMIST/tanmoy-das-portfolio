
export interface Experience {
  id: string;
  role: string;
  company: string;
  location: string;
  period: string;
  description: string[];
  tools?: string;
}

export interface Project {
  id: string;
  title: string;
  problem: string;
  solution: string;
  tags: string[];
  image: string;
  metrics?: string[];
  links?: { label: string; url: string }[];
}

export interface Education {
  id: string;
  degree: string;
  institution: string;
  period: string;
  details?: string;
}

export interface SkillCategory {
  title: string;
  skills: string[];
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company?: string;
  text: string;
  initials: string;
}