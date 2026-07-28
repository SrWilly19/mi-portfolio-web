'use client';

import React from 'react';
import { Mail, ArrowUp, Sparkles, Terminal } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative z-10 bg-bg-card border-t border-border-main pt-16 pb-12 px-4 mt-20">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
        
        {/* Lado Izquierdo: Branding & Descripción breve */}
        <div className="space-y-3 text-center md:text-left">
          <div className="flex items-center justify-center md:justify-start gap-2">
            <span className="text-xl font-extrabold tracking-tight text-text-main">
              Wellington <span className="text-accent">Hidalgo</span>
            </span>
            <span className="text-xs font-mono bg-bg-main border border-border-main px-2 py-0.5 rounded text-accent">
              v2.0
            </span>
          </div>
          <p className="text-text-muted text-sm max-w-sm leading-relaxed">
            Full Stack Developer enfocado en aplicaciones web de alto rendimiento, sistemas en tiempo real y experiencias interactivas.
          </p>
        </div>

        {/* Centro: Enlaces Rápidos de Navegación */}
        <nav className="flex flex-wrap justify-center gap-6 text-xs font-mono text-text-muted">
          <a href="#proyectos" className="hover:text-accent transition-colors">
            Proyectos
          </a>
          <a href="#experiencia" className="hover:text-accent transition-colors">
            Experiencia
          </a>
          <a href="#habilidades" className="hover:text-accent transition-colors">
            Habilidades
          </a>
          <a href="mailto:wahc1998@gmail.com" className="hover:text-accent transition-colors flex items-center gap-1">
            <Mail className="w-3.5 h-3.5 text-accent" />
            Contacto
          </a>
        </nav>

        {/* Lado Derecho: Botón Volver Arriba y Redes */}
        <div className="flex items-center gap-4">
          {/* GitHub */}
          <a
            href="https://github.com/SrWilly19"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            className="p-2.5 bg-bg-main border border-border-main rounded-xl text-text-muted hover:text-accent hover:border-accent transition-all"
          >
            <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
            </svg>
          </a>

          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/wahc/"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            className="p-2.5 bg-bg-main border border-border-main rounded-xl text-text-muted hover:text-accent hover:border-accent transition-all"
          >
            <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
            </svg>
          </a>

          {/* Botón Scroll to Top */}
          <button
            onClick={scrollToTop}
            aria-label="Volver arriba"
            className="p-2.5 bg-accent text-bg-main font-bold rounded-xl hover:opacity-90 transition-all active:scale-95 shadow-md"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>

      </div>

      {/* Línea final de Copyright */}
      <div className="max-w-6xl mx-auto mt-12 pt-6 border-t border-border-main/50 flex flex-col sm:flex-row items-center justify-between text-xs font-mono text-text-muted gap-2">
        <p>© {new Date().getFullYear()} Wellington Hidalgo. Desarrollado con Next.js & Tailwind CSS.</p>
        <p className="flex items-center gap-1">
          <span>Valencia, España</span>
          <span className="text-accent">•</span>
          <span className="text-emerald-500 font-semibold">Disponible</span>
        </p>
      </div>
    </footer>
  );
}