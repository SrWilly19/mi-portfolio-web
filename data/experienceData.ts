import { ExperienceItem } from '../types/experience';

export const EXPERIENCES: ExperienceItem[] = [
  {
    id: 'be-on-retail',
    role: 'Programador Web, WPO & IA Specialist',
    company: 'Be On Retail',
    period: 'Sept. 2025 — Jun. 2026',
    location: 'España / Remoto',
    current: false,
    type: 'Jornada completa',
    description:
      'Desarrollo web a medida, optimización de rendimiento (WPO/SEO) y gestión integral de IT. Co-desarrollo de plataformas innovadoras y administración técnica de intranets, e-commerce y medios digitales.',
    achievements: [
      'WPO & Performance: Elevé puntuaciones de Core Web Vitals en Lighthouse de 49 a 92-100 pts en SEO y rendimiento mediante minificación de JS/CSS, fuentes asíncronas (swap) y migración a formatos WebP.',
      'Desarrollo Web & IA: Maquetación personalizada (HTML5, CSS3, JS, PHP, WordPress) y co-desarrollo de "Salud 360", plataforma médica con Inteligencia Artificial y dinámicas de gamificación.',
      'Responsable de IT & Mantenimiento: Control de infraestructura, seguridad, backups (UpdraftPlus) y mantenimiento técnico para plataformas de gran volumen (CNOO, Intranet Optometristas, Revista Gaceta Audio, Funsavi).',
      'Estrategia SEO & Conversión: Desarrollo integral de landing pages de alta captación (Perea Visión, Centro Auditivo Perea, La Gafetina, Audionex) y auditorías técnicas con estándares de accesibilidad WCAG[cite: 2, 3].',
    ],
    skills: [
      'WordPress',
      'JavaScript (ES6+)',
      'PHP',
      'SQL',
      'WPO / PageSpeed',
      'SEO Técnico',
      'Integración de APIs / IA',
      'HTML5 / CSS3',
    ],
  },
  {
    id: 'kova-builder',
    role: 'Desarrollador Web & SEO Lead',
    company: 'KOVA BUILDER',
    period: 'Jun. 2024 — Dic. 2024',
    location: 'Valencia, España / Híbrido',
    current: false,
    type: 'Jornada completa',
    description:
      'Diseño, desarrollo y arquitectura técnica para plataformas fintech (Sofkredit, Finandon, Kreditiweb, Preslo). Optimización de visibilidad orgánica, migraciones de base de datos y coordinación entre equipos técnicos y creativos.',
    achievements: [
      'Desarrollo Full Stack & Base de Datos: Conexión de bases de datos, refactorización de frontend/backend y ejecución de migraciones de código para garantizar despliegues ágiles.',
      'SEO Técnico Internacional: Auditorías y mejoras de arquitectura/código (tipografía, WPO, estructura de headers) adaptando plataformas para mercados de España, Francia, Italia, Portugal y Alemania.',
      'Gestión de Proyectos & Liderazgo: Creación de documentos ONP (Open New Project) para estructurar tareas de diseño/dev y liderazgo del equipo de estrategia de contenido (vía Hostinger) para impulsar el tráfico orgánico.',
    ],
    skills: [
      'JavaScript (ES6+)',
      'jQuery',
      'Bootstrap',
      'Next.js',
      'Python',
      'Migración de BD',
      'SEO Técnico',
      'Gestión ONP',
    ],
  },
  {
    id: 'hp',
    role: 'Programador de Automatización & QA 3D',
    company: 'HP Inc.',
    period: 'Jul. 2021 — May. 2024',
    location: 'Sant Cugat del Vallès, Barcelona / Híbrido',
    current: false,
    type: 'Contrato por obra o servicio',
    description:
      'Desarrollo de software y automatización de procesos para el control de calidad, calibración y flujo de trabajo en la división de Impresión 3D industrial.',
    achievements: [
      'Automatización de Tests: Programación y desarrollo de scripts para automatizar pruebas funcionales, de rendimiento, precisión y calibración en impresoras 3D.',
      'Gestión del Flujo 3D: Configuración, supervisión y control del ciclo de vida del prototipado 3D (Planificación, Activo, Limpieza/Sandblaster, Verificación y Cierre).',
      'Análisis & Laboratorio: Análisis telemetríaco de resultados, documentación de hallazgos y optimización de flujos de trabajo en colaboración con equipos multidisciplinares de ingeniería.',
    ],
    skills: [
      'Python',
      'JavaScript',
      'Automatización QA',
      'Impresión 3D Industrial',
      'WebSockets / Telemetría',
      'Control de Calidad (Testing)',
    ],
  },
];