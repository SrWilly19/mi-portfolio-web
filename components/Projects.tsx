
'use client';

import React, { useState } from 'react';
import { ExternalLink, Layers, ArrowUpRight, CheckCircle2 } from 'lucide-react';

interface WebProject {
  id: string;
  siteName: string; // Nombre de la página / aplicación web
  company: string;  // Empresa o cliente para el que se hizo
  description: string; // Qué se realizó en esta página concreta
  highlights: string[]; // Lista rápida de lo que implementaste
  tags: string[];   // Stack de esa página
  category: 'all' | 'fullstack' | 'frontend' | 'realtime';
  siteUrl?: string; // Enlace a la web en vivo
  githubUrl?: string;
}

const WEB_PROJECTS: WebProject[] = [
  {
    id: 'hp-3d-dashboard',
    siteName: '3D Printer Control Center',
    company: 'HP Inc.',
    description: 'Aplicación web para la monitorización y gestión remota en tiempo real de impresoras 3D industriales.',
    highlights: [
      'Desarrollo de interfaz de usuario con actualización en tiempo real (<50ms)',
      'Integración de gráficos de telemetría y estado de impresión',
      'Implementación de pruebas unitarias e integración con Jest'
    ],
    tags: ['React', 'TypeScript', 'WebSockets', 'TailwindCSS', 'Jest'],
    category: 'realtime',
  },
  {
    id: 'kova-fintech-app',
    siteName: 'Kova Financial Portal',
    company: 'Kova',
    description: 'Plataforma web de gestión de activos y analítica financiera para usuarios finales y administradores.',
    highlights: [
      'Optimización del rendimiento web (Core Web Vitals) pasando de 49 a 92 pts',
      'Desarrollo del panel de visualización de métricas en tiempo real',
      'Conexión con APIs backend en Python y gestión de estado complejo'
    ],
    tags: ['Next.js', 'React', 'TypeScript', 'Python', 'TailwindCSS'],
    category: 'fullstack',
  },
  {
    id: 'beonretail-store',
    siteName: 'BE ON RETAIL E-Commerce',
    company: 'BE ON RETAIL',
    description: 'Portal de comercio electrónico y catálogo interactivo enfocado en conversión y velocidad de carga.',
    highlights: [
      'Implementación de Server-Side Rendering (SSR) para maximizar el SEO',
      'Diseño modular de componentes de catálogo y pasarela de pago',
      'Maquetación responsiva orientada a experiencia Mobile-First'
    ],
    tags: ['Next.js', 'TailwindCSS', 'Node.js', 'REST API'],
    category: 'frontend',
  },
];

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState<'all' | 'fullstack' | 'frontend' | 'realtime'>('all');

  const filteredProjects =
    activeFilter === 'all'
      ? WEB_PROJECTS
      : WEB_PROJECTS.filter((p) => p.category === activeFilter);

  return (
    <section id="proyectos" className="py-20 px-4 relative z-10 max-w-6xl mx-auto">
      
      {/* Cabecera */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-bg-card border border-border-main text-accent text-xs font-mono font-medium mb-3">
            <Layers className="w-3.5 h-3.5" /> Portafolio Web
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-text-main tracking-tight">
            Páginas & <span className="text-accent">Proyectos Web</span>
          </h2>
          <p className="text-text-muted text-base sm:text-lg mt-2 max-w-xl">
            Listado de aplicaciones y sitios web desarrollados, el stack utilizado y las funcionalidades clave realizadas en cada uno.
          </p>
        </div>

        {/* Filtros */}
        <div className="flex flex-wrap gap-2 bg-bg-card p-1.5 rounded-xl border border-border-main self-start md:self-auto">
          {[
            { label: 'Todas', value: 'all' },
            { label: 'Full Stack', value: 'fullstack' },
            { label: 'Real-time', value: 'realtime' },
            { label: 'Frontend', value: 'frontend' },
          ].map((cat) => (
            <button
              key={cat.value}
              onClick={() => setActiveFilter(cat.value as any)}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-mono transition-all ${
                activeFilter === cat.value
                  ? 'bg-accent text-bg-main font-semibold shadow-sm'
                  : 'text-text-muted hover:text-text-main'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </div>

      {/* Grid de Páginas/Proyectos */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProjects.map((project) => (
          <div
            key={project.id}
            className="group relative bg-bg-card border border-border-main hover:border-accent/60 rounded-2xl p-6 transition-all duration-300 flex flex-col justify-between hover:shadow-xl hover:-translate-y-1"
          >
            <div>
              {/* Cliente / Empresa */}
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-mono px-2.5 py-1 rounded-md bg-bg-main border border-border-main text-accent font-semibold">
                  {project.company}
                </span>
                {project.siteUrl && (
                  <a
                    href={project.siteUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="text-xs text-text-muted hover:text-accent flex items-center gap-1 font-mono transition-colors"
                  >
                    <span>Visitar Web</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                )}
              </div>

              {/* Nombre de la Página Web */}
              <h3 className="text-xl font-bold text-text-main group-hover:text-accent transition-colors">
                {project.siteName}
              </h3>

              <p className="text-text-muted text-sm mt-2 leading-relaxed">
                {project.description}
              </p>

              {/* Qué se ha realizado (Puntos Clave) */}
              <div className="mt-4 space-y-2">
                <p className="text-xs font-mono text-text-main font-semibold">Lo que realicé:</p>
                <ul className="space-y-1.5">
                  {project.highlights.map((item, idx) => (
                    <li key={idx} className="text-xs text-text-muted flex items-start gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-accent shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Stack Tecnológico y Enlaces */}
            <div className="mt-6 pt-4 border-t border-border-main/60 space-y-3">
              <div className="flex items-center justify-between">
                <p className="text-xs font-mono text-text-muted">Stack utilizado:</p>
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    aria-label="Ver código en GitHub"
                    className="p-1 text-text-muted hover:text-accent transition-colors"
                  >
                    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                    </svg>
                  </a>
                )}
              </div>

              <div className="flex flex-wrap gap-1.5">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-[11px] font-mono bg-bg-main text-text-main px-2 py-0.5 rounded border border-border-main"
                  >
                    {tag}
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