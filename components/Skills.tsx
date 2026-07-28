'use client';

import React from 'react';
import { Cpu, Layout, Server, Wrench, Sparkles, CheckCircle2 } from 'lucide-react';

interface SkillCategory {
  title: string;
  icon: React.ReactNode;
  description: string;
  skills: {
    name: string;
    level?: string; // Opcional, por si quieres poner "Avanzado", "Experto", etc.
    featured?: boolean; // Para resaltar tecnologías clave
  }[];
}

const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: 'Frontend & UI',
    icon: <Layout className="w-5 h-5 text-accent" />,
    description: 'Especializado en la creación de interfaces web modernas, reactivas y accesibles.',
    skills: [
      { name: 'React.js', featured: true },
      { name: 'Next.js', featured: true },
      { name: 'TypeScript', featured: true },
      { name: 'Tailwind CSS', featured: true },
      { name: 'JavaScript (ES6+)', featured: true },
      { name: 'HTML5 / CSS3' },
      { name: 'Jest / Testing' },
      { name: 'Zustand / Redux' },
    ],
  },
  {
    title: 'Backend & Tiempo Real',
    icon: <Server className="w-5 h-5 text-accent" />,
    description: 'Desarrollo de servicios robustos, comunicación en tiempo real e integración con BDD.',
    skills: [
      { name: 'Python', featured: true },
      { name: 'Node.js', featured: true },
      { name: 'WebSockets', featured: true },
      { name: 'REST APIs', featured: true },
      { name: 'PostgreSQL' },
      { name: 'FastAPI / Express' },
    ],
  },
  {
    title: 'Herramientas & WPO',
    icon: <Wrench className="w-5 h-5 text-accent" />,
    description: 'Flujo de trabajo, control de versiones y optimización de rendimiento web.',
    skills: [
      { name: 'Git / GitHub', featured: true },
      { name: 'WPO (Core Web Vitals)', featured: true },
      { name: 'Docker' },
      { name: 'Scrum / Kanban' },
      { name: 'Vercel / CI/CD' },
      { name: 'Figma to Code' },
    ],
  },
];

export default function Skills() {
  return (
    <section id="habilidades" className="py-20 px-4 relative z-10 max-w-6xl mx-auto">
      
      {/* Header de la Sección */}
      <div className="mb-16 text-center md:text-left">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-bg-card border border-border-main text-accent text-xs font-mono font-medium mb-3">
          <Cpu className="w-3.5 h-3.5" /> Dominio Técnico
        </div>
        <h2 className="text-3xl sm:text-5xl font-extrabold text-text-main tracking-tight">
          Habilidades & <span className="text-accent">Stack Técnico</span>
        </h2>
        <p className="text-text-muted text-base sm:text-lg mt-2 max-w-xl">
          Tecnologías, marcos de trabajo y herramientas que utilizo diariamente para dar vida a proyectos escalables.
        </p>
      </div>

      {/* Grid de Categorías */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {SKILL_CATEGORIES.map((cat, idx) => (
          <div
            key={idx}
            className="bg-bg-card border border-border-main hover:border-accent/50 rounded-2xl p-6 flex flex-col justify-between transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
          >
            <div>
              {/* Encabezado de la Categoría */}
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2.5 rounded-xl bg-bg-main border border-border-main">
                  {cat.icon}
                </div>
                <h3 className="text-xl font-bold text-text-main">{cat.title}</h3>
              </div>

              <p className="text-text-muted text-xs sm:text-sm leading-relaxed mb-6">
                {cat.description}
              </p>

              {/* Lista de Habilidades */}
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill) => (
                  <div
                    key={skill.name}
                    className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-mono border transition-all ${
                      skill.featured
                        ? 'bg-bg-main border-accent/40 text-text-main font-medium shadow-sm'
                        : 'bg-bg-main/50 border-border-main text-text-muted'
                    }`}
                  >
                    <CheckCircle2
                      className={`w-3.5 h-3.5 ${
                        skill.featured ? 'text-accent' : 'text-text-muted/60'
                      }`}
                    />
                    <span>{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Pie de Tarjeta decorativo */}
            <div className="mt-8 pt-4 border-t border-border-main/50 flex items-center justify-between text-[11px] font-mono text-text-muted">
              <span>{cat.skills.length} Tecnologías</span>
              <span className="flex items-center gap-1 text-accent">
                <Sparkles className="w-3 h-3" /> Dominado
              </span>
            </div>

          </div>
        ))}
      </div>

    </section>
  );
}