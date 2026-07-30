export interface Project {
  id: string;
  title: string;
  company: string;
  category: 'Full Stack' | 'Frontend' | 'SEO / WPO' | 'WordPress' | 'Personal';
  description: string;
  highlights: string[];
  tags: string[];
  image: string;
  demoUrl?: string;
  featured?: boolean;
}