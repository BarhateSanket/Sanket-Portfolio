export interface ProjectItem {
  id: string;
  title: string;
  description: string;
  period: string;
  type: string;
  role?: string;
  domain: string;
  stack: string[];
  tags: string[];
  highlights: string[];
  githubUrl: string;
  liveUrl?: string;
  caseStudyPdf?: string;
  caseStudyName?: string;
  color: string;
}

export interface BlogPost {
  id: string;
  title: string;
  date: string;
  preview: string;
  tags: string[];
  link?: string;
  content?: string;
}

export interface TimelineEntry {
  id: string;
  title: string;
  date: string;
  subtitle: string;
  description: string[];
}

export interface SkillGroup {
  category: string;
  year?: string;
  skills: {
    name: string;
    level: number;
  }[];
}

export interface StatItem {
  label: string;
  value: string;
}
