import { Layout, Server, Wrench, SearchCheck, HardDrive } from 'lucide-react';
import { SkillCategory } from '../types/skills';

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: 'Frontend, UI & CMS',
    icon: Layout,
    description: 'Especializado en la creación de interfaces web modernas, reactivas, accesibles y optimizadas.',
    skills: [
      { name: 'React.js / Next.js', featured: true },
      { name: 'TypeScript', featured: true },
      { name: 'Tailwind CSS / Bootstrap', featured: true },
      { name: 'JavaScript (ES6+) / jQuery', featured: true },
      { name: 'WordPress / Elementor / PHP', featured: true },
      { name: 'HTML5 / CSS3 (Avanzado)' },
      { name: 'Jest / Testing' },
      { name: 'Zustand / Redux' },
    ],
  },
  {
    title: 'Backend & Tiempo Real',
    icon: Server,
    description: 'Desarrollo de servicios robustos, comunicación en tiempo real e integración con BDD.',
    skills: [
      { name: 'Python', featured: true },
      { name: 'Node.js / Express', featured: true },
      { name: 'WebSockets / Telemetría', featured: true },
      { name: 'REST APIs & Integración IA', featured: true },
      { name: 'SQL / PostgreSQL & Migraciones', featured: true },
      { name: 'FastAPI' },
    ],
  },
  {
    title: 'WPO, SEO Técnico & Accesibilidad',
    icon: SearchCheck,
    description: 'Auditorías de rendimiento en PageSpeed/Lighthouse y optimización SEO/WCAG.',
    skills: [
      { name: 'WPO (Core Web Vitals)', featured: true },
      { name: 'PageSpeed 100/100', featured: true },
      { name: 'SEO Técnico & Indexación', featured: true },
      { name: 'Accesibilidad WCAG (a11y)', featured: true },
      { name: 'LiteSpeed Cache & WebP', featured: true },
      { name: 'Google Fonts / Swap Opt.' },
    ],
  },
  {
    title: 'Herramientas, IT & SysAdmin',
    icon: Wrench,
    description: 'Flujo de trabajo, administración técnica de servidores y control de versiones.',
    skills: [
      { name: 'Git / GitHub', featured: true },
      { name: 'Mantenimiento IT & Backups', featured: true },
      { name: 'Docker' },
      { name: 'Scrum / Kanban / ONP' },
      { name: 'Vercel / CI/CD' },
      { name: 'Figma to Code' },
    ],
  },
];