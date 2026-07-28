'use client';

import React from 'react';
import { Briefcase, Calendar, MapPin, Sparkles, ChevronRight } from 'lucide-react';

interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  period: string;
  location: string;
  current?: boolean;
  description: string;
  achievements: string[];
  skills: string[];
}

const EXPERIENCES: ExperienceItem[] = [
  {
    id: 'hp',
    role: 'Full Stack Developer',
    company: 'HP Inc.',
    period: '2022 — Presente',
    location: 'Valencia, España / Remoto',
    current: true,
    description:
      'Desarrollo y mantenimiento de interfaces complejas para la división de Impresión 3D industrial. Trabajo en aplicaciones en tiempo real enfocadas en telemetría y rendimiento.',
    achievements: [
      'Lideré la implementación de módulos UI con comunicación por WebSockets en tiempo real (<50ms de latencia).',
      'Colaboré estrechamente con equipos multidisciplinares bajo metodologías Ágiles (Scrum/Kanban).',
      'Integración de suites de test con Jest para asegurar alta cobertura y estabilidad del software.',
    ],
    skills: ['React', 'TypeScript', 'WebSockets', 'Jest', 'TailwindCSS', 'Python'],
  },
  {
    id: 'kova',
    role: 'Full Stack Developer',
    company: 'Kova',
    period: '2021 — 2022',
    location: 'Remoto',
    description:
      'Creación de plataformas fintech y paneles analíticos para la visualización de datos financieros complejos.',
    achievements: [
      'Optimicé métricas clave de rendimiento WPO (Core Web Vitals), subiendo la puntuación en Lighthouse de 49 a 92 pts.',
      'Desarrollé endpoints e integraciones backend en Python consumidas por clientes web en Next.js.',
      'Diseño e implementación de arquitectura de estado global para paneles financieros.',
    ],
    skills: ['Next.js', 'React', 'TypeScript', 'Python', 'PostgreSQL'],
  },
  {
    id: 'be-on-retail',
    role: 'Frontend Developer',
    company: 'BE ON RETAIL',
    period: '2020 — 2021',
    location: 'Valencia, España',
    description:
      'Desarrollo de e-commerce y soluciones de digitalización para el sector retail.',
    achievements: [
      'Construcción de componentes reusables orientados a la experiencia de usuario y maquetación responsive.',
      'Integración con pasarelas de pago y servicios REST para gestión de stock en tiempo real.',
    ],
    skills: ['JavaScript', 'React', 'TailwindCSS', 'Node.js', 'REST API'],
  },
];

export default function Experience() {
  return (
    <section id="experiencia" className="py-20 px-4 relative z-10 max-w-5xl mx-auto">
      
      {/* Header de la Sección */}
      <div className="mb-16 text-center md:text-left">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-bg-card border border-border-main text-accent text-xs font-mono font-medium mb-3">
          <Briefcase className="w-3.5 h-3.5" /> Trayectoria Profesional
        </div>
        <h2 className="text-3xl sm:text-5xl font-extrabold text-text-main tracking-tight">
          Experiencia <span className="text-accent">Laboral</span>
        </h2>
        <p className="text-text-muted text-base sm:text-lg mt-2 max-w-xl">
          Más de 4 años creando software robusto en entornos corporativos, startups y proyectos de alto rendimiento.
        </p>
      </div>

      {/* Timeline Vertical */}
      <div className="relative border-l-2 border-border-main/80 ml-3 sm:ml-6 space-y-12">
        {EXPERIENCES.map((item) => (
          <div key={item.id} className="relative pl-6 sm:pl-10 group">
            
            {/* Nodo/Punto de la línea de tiempo */}
            <div className={`absolute -left-[9px] top-1.5 w-4 h-4 rounded-full border-2 transition-all duration-300 ${
              item.current 
                ? 'bg-accent border-bg-main ring-4 ring-accent/20 animate-pulse' 
                : 'bg-bg-main border-border-main group-hover:border-accent group-hover:bg-accent'
            }`} />

            {/* Tarjeta de Experiencia */}
            <div className="bg-bg-card border border-border-main hover:border-accent/50 rounded-2xl p-6 sm:p-8 transition-all duration-300 shadow-sm hover:shadow-xl">
              
              {/* Encabezado: Puesto, Empresa y Fechas */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4">
                <div>
                  <div className="flex items-center gap-2 flex-wrap">
                    <h3 className="text-xl sm:text-2xl font-bold text-text-main group-hover:text-accent transition-colors">
                      {item.role}
                    </h3>
                    <span className="text-accent font-mono text-sm sm:text-base font-semibold">
                      @ {item.company}
                    </span>
                    {item.current && (
                      <span className="text-[10px] font-mono font-bold bg-accent/10 text-accent border border-accent/30 px-2 py-0.5 rounded-full uppercase tracking-wider">
                        Actual
                      </span>
                    )}
                  </div>
                </div>

                {/* Info de Fecha y Ubicación */}
                <div className="flex flex-wrap sm:flex-col sm:items-end gap-3 sm:gap-1 text-xs font-mono text-text-muted">
                  <span className="flex items-center gap-1.5 bg-bg-main px-2.5 py-1 rounded-md border border-border-main">
                    <Calendar className="w-3.5 h-3.5 text-accent" />
                    {item.period}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5" />
                    {item.location}
                  </span>
                </div>
              </div>

              {/* Descripción Resumen */}
              <p className="text-text-muted text-sm sm:text-base leading-relaxed mb-4">
                {item.description}
              </p>

              {/* Hitos / Responsabilidades Destacadas */}
              <div className="space-y-2 mb-6 bg-bg-main/50 p-4 rounded-xl border border-border-main/50">
                <p className="text-xs font-mono text-text-main font-semibold flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-accent" />
                  Impacto & Logros clave:
                </p>
                <ul className="space-y-2">
                  {item.achievements.map((ach, idx) => (
                    <li key={idx} className="text-xs sm:text-sm text-text-muted flex items-start gap-2">
                      <ChevronRight className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                      <span>{ach}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Stack Tecnológico del Puesto */}
              <div className="flex flex-wrap gap-1.5 pt-2">
                {item.skills.map((skill) => (
                  <span
                    key={skill}
                    className="text-[11px] font-mono bg-bg-main text-text-main px-2.5 py-1 rounded-md border border-border-main"
                  >
                    {skill}
                  </span>
                ))}
              </div>

            </div>
          </div>
        ))}
      </div>

    </section>
  );
}