'use client';

import React, { useEffect, useRef, useState } from 'react';
import { Cpu, Sparkles, CheckCircle2 } from 'lucide-react';
import { SKILL_CATEGORIES } from '../data/skillsData';

// Componente para manejar la animación de cada tarjeta de Skills
function SkillCategoryCard({ 
  cat, 
  index 
}: { 
  cat: typeof SKILL_CATEGORIES[0]; 
  index: number 
}) {
  const [isVisible, setIsVisible] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);
  const IconComponent = cat.icon;

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -40px 0px',
      }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={cardRef}
      style={{ transitionDelay: `${index * 120}ms` }}
      className={`bg-bg-card border border-border-main hover:border-accent/50 rounded-2xl p-6 flex flex-col justify-between transition-all duration-700 ease-out hover:shadow-2xl hover:-translate-y-1.5 h-full transform group/card ${
        isVisible
          ? 'opacity-100 translate-y-0 scale-100'
          : 'opacity-0 translate-y-8 scale-95 pointer-events-none'
      }`}
    >
      <div>
        {/* Encabezado */}
        <div className="flex items-center gap-3 mb-4">
          <div className="p-2.5 rounded-xl bg-bg-main border border-border-main shrink-0 transition-transform duration-300 group-hover/card:scale-110 group-hover/card:border-accent/40">
            <IconComponent className="w-5 h-5 text-accent" />
          </div>
          <h3 className="text-xl font-bold text-text-main group-hover/card:text-accent transition-colors">
            {cat.title}
          </h3>
        </div>

        <p className="text-text-muted text-xs sm:text-sm leading-relaxed mb-6 min-h-[40px]">
          {cat.description}
        </p>

        {/* Lista de Habilidades con animación en casillero y hover interactivo */}
        <div className="flex flex-wrap gap-2 group/skills">
          {cat.skills.map((skill, skillIdx) => (
            <div
              key={skill.name}
              style={{
                transitionDelay: isVisible ? `${(index * 120) + (skillIdx * 40)}ms` : '0ms',
              }}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-mono border transition-all duration-300 cursor-default transform hover:scale-105 hover:z-10 ${
                skill.featured
                  ? 'bg-bg-main border-accent/40 text-text-main font-medium shadow-sm hover:border-accent hover:shadow-accent/20'
                  : 'bg-bg-main/50 border-border-main text-text-muted hover:border-accent/50 hover:text-text-main'
              } ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
              }`}
            >
              <CheckCircle2
                className={`w-3.5 h-3.5 transition-colors ${
                  skill.featured ? 'text-accent' : 'text-text-muted/60'
                }`}
              />
              <span>{skill.name}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Pie de Tarjeta */}
      <div className="mt-8 pt-4 border-t border-border-main/50 flex items-center justify-between text-[11px] font-mono text-text-muted">
        <span>{cat.skills.length} Tecnologías</span>
        <span className="flex items-center gap-1 text-accent font-semibold">
          <Sparkles className="w-3 h-3 animate-pulse" /> Dominado
        </span>
      </div>
    </div>
  );
}

export default function Skills() {
  return (
    <section id="habilidades" className="py-20 px-4 relative z-10 max-w-6xl mx-auto overflow-hidden">
      
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
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {SKILL_CATEGORIES.map((cat, idx) => (
          <SkillCategoryCard key={idx} cat={cat} index={idx} />
        ))}
      </div>
    </section>
  );
}