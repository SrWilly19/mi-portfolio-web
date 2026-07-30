import { LucideIcon } from 'lucide-react';

export interface SkillCategory {
  title: string;
  icon: LucideIcon; //  Referencia al tipo de componente icono
  description: string;
  skills: {
    name: string;
    level?: string;
    featured?: boolean;
  }[];
}