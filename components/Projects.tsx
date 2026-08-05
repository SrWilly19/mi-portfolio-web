'use client';

import { useState, useEffect, useCallback } from 'react';
import { PROJECTS_DATA } from '../data/projectsData';
import { 
  Globe, 
  ExternalLink, 
  CheckCircle2, 
  Lock,
  ChevronLeft,
  ChevronRight,
  Pause,
  Play
} from 'lucide-react';
import { TechIcon } from './TechIcon';

// Subcomponente robusto para manejar la imagen o mostrar el fallback (Globo)
function ProjectImage({ src, alt, company }: { src: string; alt: string; company: string }) {
  const [hasError, setHasError] = useState<boolean>(false);

  // Si cambia la URL del proyecto, reseteamos el estado de error
  useEffect(() => {
    setHasError(false);
  }, [src]);

  // Si la imagen falla o no existe, mostramos el contenedor del Globo
  if (hasError || !src) {
    return (
      <div className="w-full h-full bg-gradient-to-br from-bg-card to-bg-main flex flex-col items-center justify-center gap-2 p-4 text-center select-none">
        <Globe className="w-10 h-10 text-accent/40" />
        <span className="text-xs font-mono text-text-muted">{company}</span>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
      onError={() => {
        console.warn(`[ProjectImage] No se pudo cargar: ${src}`);
        setHasError(true);
      }}
    />
  );
}

export default function Projects() {
  const [filter, setFilter] = useState<string>('Todas');
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [isPaused, setIsPaused] = useState<boolean>(false);

  const categories = ['Todas', 'Full Stack', 'Frontend', 'SEO / WPO', 'WordPress', 'Personal'];

  const filteredProjects = filter === 'Todas' 
    ? PROJECTS_DATA 
    : PROJECTS_DATA.filter(p => p.category === filter);

  // Funciones de navegación con useCallback
  const handleNext = useCallback(() => {
    setCurrentIndex((prev) => (prev === filteredProjects.length - 1 ? 0 : prev + 1));
  }, [filteredProjects.length]);

  const handlePrev = useCallback(() => {
    setCurrentIndex((prev) => (prev === 0 ? filteredProjects.length - 1 : prev - 1));
  }, [filteredProjects.length]);

  // Lógica de Autoplay Inteligente (Cambia cada 5s si no está pausado)
  useEffect(() => {
    if (isPaused || filteredProjects.length <= 1) return;

    const interval = setInterval(() => {
      handleNext();
    }, 5000);

    return () => clearInterval(interval);
  }, [isPaused, handleNext, filteredProjects.length]);

  // Reiniciar índice al cambiar filtro
  const handleFilterChange = (cat: string) => {
    setFilter(cat);
    setCurrentIndex(0);
  };

  return (
    <section id="proyectos" className="py-20 px-4 max-w-[1400px] mx-auto relative z-10">
      
      {/* Header y Filtros */}
      <div className="mb-12 text-center md:text-left flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-bg-card border border-border-main text-accent text-xs font-mono font-medium mb-3">
            <Globe className="w-3.5 h-3.5" /> Portafolio Web ({PROJECTS_DATA.length} Proyectos)
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-text-main tracking-tight">
            Páginas & <span className="text-accent">Proyectos Web</span>
          </h2>
        </div>

        {/* Filtros */}
        <div className="flex flex-wrap gap-2 justify-center md:justify-end">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => handleFilterChange(cat)}
              className={`px-3 py-1.5 rounded-xl text-xs font-mono transition-all border cursor-pointer ${
                filter === cat
                  ? 'bg-accent text-bg-main font-bold border-accent shadow-md'
                  : 'bg-bg-card text-text-muted border-border-main hover:border-accent/50'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* CARRUSEL TIPO PROFUNDIDAD */}
      <div 
        className="relative w-full mx-auto min-h-[620px] flex flex-col items-center justify-center"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        
        {/* Indicador y Estado del Autoplay */}
        <div className="absolute -top-6 left-1/2 -translate-x-1/2 z-30 flex items-center gap-2 font-mono text-xs text-text-muted bg-bg-card px-3 py-1 rounded-full border border-border-main shadow-sm">
          <span>{currentIndex + 1} / {filteredProjects.length}</span>
          <span className="w-1 h-1 rounded-full bg-border-main" />
          {isPaused ? (
            <span className="flex items-center gap-1 text-accent text-[10px]">
              <Pause className="w-3 h-3" /> Pausado
            </span>
          ) : (
            <span className="flex items-center gap-1 text-emerald-400 text-[10px]">
              <Play className="w-2.5 h-2.5 animate-pulse" /> Auto
            </span>
          )}
        </div>

        {/* Contenedor de Tarjetas */}
        <div className="relative w-full h-[580px] flex justify-center items-center overflow-visible">
          {filteredProjects.map((project, index) => {
            let offset = index - currentIndex;

            // Bucle infinito
            if (offset < -1 && index === 0) offset += filteredProjects.length;
            if (offset > 1 && index === filteredProjects.length - 1) offset -= filteredProjects.length;

            const isActive = offset === 0;
            const isPrev = offset === -1 || (currentIndex === 0 && index === filteredProjects.length - 1);
            const isNext = offset === 1 || (currentIndex === filteredProjects.length - 1 && index === 0);

            if (!isActive && !isPrev && !isNext) return null;

            return (
              <div
                key={project.id}
                onClick={() => {
                  if (isPrev) handlePrev();
                  if (isNext) handleNext();
                }}
                style={{
                  transform: `translateX(${offset * 62}%) scale(${isActive ? 1 : 0.82})`,
                }}
                className={`absolute w-[95%] sm:w-[720px] lg:w-[820px] min-h-[500px] transition-all duration-500 ease-out cursor-pointer rounded-2xl bg-bg-card border border-border-main shadow-2xl p-6 md:p-8 flex flex-col md:flex-row gap-6 lg:gap-8 ${
                  isActive 
                    ? 'z-20 opacity-100 blur-0 pointer-events-auto border-accent/40 shadow-accent/5' 
                    : 'z-10 opacity-30 blur-[1.5px] pointer-events-auto hover:opacity-60'
                }`}
              >
                {/* Contenido Texto */}
                <div className="flex-1 flex flex-col justify-between order-2 md:order-1">
                  <div>
                    <div className="flex items-center justify-between text-xs font-mono text-accent mb-3">
                      <span className="font-semibold bg-bg-main px-2.5 py-1 rounded border border-border-main">
                        {project.company}
                      </span>
                      <span className="bg-bg-main px-2.5 py-1 rounded border border-border-main text-text-muted">
                        {project.category}
                      </span>
                    </div>

                    <h3 className="text-xl sm:text-2xl font-extrabold text-text-main mb-3 leading-snug">
                      {project.title}
                    </h3>

                    <p className="text-text-muted text-xs sm:text-sm leading-relaxed mb-5">
                      {project.description}
                    </p>

                    {/* Highlights */}
                    <div className="space-y-2 mb-6">
                      {project.highlights.map((h, i) => (
                        <div key={i} className="flex items-start gap-2 text-xs text-text-main">
                          <CheckCircle2 className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                          <span className="leading-tight">{h}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Footer de la Tarjeta */}
                  <div className="pt-4 border-t border-border-main/60 flex flex-wrap sm:flex-nowrap items-center justify-between gap-3">
                    <div className="flex flex-wrap gap-1.5">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className=" inline-flex flex-row items-center gap-1.5 px-2.5 py-1 rounded bg-bg-main border border-border-main text-[10px] font-mono text-text-muted"
                        >
                          <TechIcon name={tag} />

                          <span>{tag}</span>
                        </span>
                      ))}
                    </div>

                    {project.demoUrl ? (
                      <a
                        href={project.demoUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-2 px-4 py-2 bg-accent text-bg-main font-bold rounded-xl text-xs hover:opacity-90 transition-all shadow-sm shrink-0"
                      >
                        <span>Visitar Sitio</span>
                        <ExternalLink className="w-3.5 h-3.5" />
                      </a>
                    ) : (
                      <div className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-bg-main text-text-muted border border-border-main font-mono rounded-xl text-xs shrink-0">
                        <Lock className="w-3.5 h-3.5 text-accent" />
                        <span>Interno</span>
                      </div>
                    )}
                  </div>
                </div>

                {/* Imagen Lateral Derecha limpia sin capas superpuestas */}
                <div className="w-full md:w-[300px] lg:w-[320px] h-52 md:h-[320px] bg-bg-main border border-border-main rounded-xl overflow-hidden shrink-0 relative order-1 md:order-2 group">
                  <ProjectImage 
                    src={project.image} 
                    alt={project.title} 
                    company={project.company} 
                  />
                </div>

              </div>
            );
          })}
        </div>

        {/* Navegación Inferior */}
        <div className="mt-4 flex flex-col sm:flex-row items-center justify-between w-full max-w-[820px] gap-4 z-30 px-2">
          <div className="flex items-center gap-3">
            <button 
              onClick={handlePrev}
              className="p-3 bg-bg-card border border-border-main text-text-main rounded-full shadow-lg hover:border-accent hover:text-accent transition-all cursor-pointer active:scale-95"
              aria-label="Anterior"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button 
              onClick={handleNext}
              className="p-3 bg-bg-card border border-border-main text-text-main rounded-full shadow-lg hover:border-accent hover:text-accent transition-all cursor-pointer active:scale-95"
              aria-label="Siguiente"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>

          <div className="flex items-center gap-1.5 overflow-x-auto max-w-full py-1">
            {filteredProjects.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`h-2 rounded-full transition-all cursor-pointer ${
                  currentIndex === idx 
                    ? 'w-6 bg-accent' 
                    : 'w-2 bg-border-main hover:bg-text-muted'
                }`}
                aria-label={`Ir al proyecto ${idx + 1}`}
              />
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}