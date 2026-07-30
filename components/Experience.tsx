'use client';

import React, { useEffect, useRef, useState } from 'react';
import { Briefcase, Calendar, MapPin, Sparkles, ChevronRight } from 'lucide-react';
import { EXPERIENCES } from '../data/experienceData';

// Componente individual para controlar el scroll de cada tarjeta
function ExperienceCard({ item, index }: { item: typeof EXPERIENCES[0]; index: number }) {
  const [isVisible, setIsVisible] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Opcional: una vez visible, dejamos de observar para mejorar rendimiento
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.15, // Se activa cuando el 15% de la tarjeta es visible
        rootMargin: '0px 0px -50px 0px', // Un pequeño margen inferior para que se active justo antes
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
      style={{ transitionDelay: `${index * 100}ms` }} // Retardo en cascada si aparecen varias a la vez
      className={`relative pl-6 sm:pl-10 group transition-all duration-700 ease-out transform ${
        isVisible
          ? 'opacity-100 translate-x-0 scale-100'
          : 'opacity-0 translate-x-12 scale-95 pointer-events-none'
      }`}
    >
      {/* Nodo/Punto de la línea de tiempo con animación de iluminación */}
      <div
        className={`absolute -left-[9px] top-1.5 w-4 h-4 rounded-full border-2 transition-all duration-500 ${
          isVisible
            ? item.current
              ? 'bg-accent border-bg-main ring-4 ring-accent/30 animate-pulse'
              : 'bg-accent border-accent shadow-[0_0_12px_var(--accent)]'
            : 'bg-bg-main border-border-main'
        }`}
      />

      {/* Tarjeta de Experiencia */}
      <div className="bg-bg-card border border-border-main hover:border-accent/50 rounded-2xl p-6 sm:p-8 transition-all duration-300 shadow-sm hover:shadow-xl hover:-translate-y-1">
        
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
  );
}

export default function Experience() {
  return (
    <section id="experiencia" className="py-20 px-4 relative z-10 max-w-5xl mx-auto overflow-hidden">
      
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
        {EXPERIENCES.map((item, index) => (
          <ExperienceCard key={item.id} item={item} index={index} />
        ))}
      </div>

    </section>
  );
}