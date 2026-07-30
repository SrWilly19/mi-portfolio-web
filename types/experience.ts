export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  period: string;
  location: string;
  current?: boolean;
  type: string;
  description: string;
  achievements: string[];
  skills: string[];
}