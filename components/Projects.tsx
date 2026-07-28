'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { 
  Globe, 
  ExternalLink, 
  Sparkles, 
  CheckCircle2, 
  Cpu, 
  Search, 
  Code2, 
  Layers,
  Lock
} from 'lucide-react';

interface Project {
  id: string;
  title: string;
  company: string;
  category: 'Full Stack' | 'Frontend' | 'SEO / WPO' | 'WordPress' | 'Personal';
  description: string;
  highlights: string[];
  tags: string[];
  image: string; // Ruta a la imagen en /public/projects/
  demoUrl?: string;
  featured?: boolean;
}

const PROJECTS_DATA: Project[] = [
  // --- PROYECTOS DESTACADOS & PERSONALES ---
  {
    id: 'grand-line-birth',
    title: 'Grand Line Birth — One Piece Chapter Finder',
    company: 'Proyecto Destacado',
    category: 'Full Stack',
    featured: true,
    description: 'Aplicación interactiva que busca y muestra el capítulo exacto de One Piece publicado el día de nacimiento del usuario.',
    highlights: [
      'Web Scraping con Node.js para extraer +1,100 capítulos a JSON.',
      'Monetización dinámica integrada con Amazon Afiliados por tomo.',
      'Optimización de imágenes WebP y UI oscura responsiva.'
    ],
    tags: ['React', 'Vite', 'Node.js', 'Tailwind CSS', 'Vercel'],
    image: '/projects/grand-line-birth.jpg',
    demoUrl: 'https://grand-line-birth.vercel.app'
  },
  {
    id: 'hp-3d-printer',
    title: '3D Printer Test Workflow System',
    company: 'HP Inc.',
    category: 'Full Stack',
    featured: true,
    description: 'Sistema web interno para la planificación, ejecución y trazabilidad de pruebas técnicas en impresoras 3D industriales.',
    highlights: [
      'Gestión del ciclo de vida de tests: Activo → Limpieza / Sandblaster → Verificación.',
      'Asignación de parámetros técnicos y archivos de impresión para ingenieros y técnicos.',
      'Panel de control centralizado para supervisión de laboratorio.'
    ],
    tags: ['React', 'TypeScript', 'Node.js', 'WebSockets', 'Tailwind CSS'],
    image: '/projects/hp-3d.jpg'
  },
  {
    id: 'pancake-swap-clone',
    title: 'PancakeSwap Interface Replica',
    company: 'Proyecto Personal',
    category: 'Personal',
    description: 'Réplica interactiva de la interfaz de usuario del DEX PancakeSwap con diseño Web3 responsivo.',
    highlights: [
      'Maquetación fiel de componentes interactivos Web3.',
      'Ajustes de UI/UX y animaciones fluidas.'
    ],
    tags: ['React', 'Tailwind CSS', 'Vercel'],
    image: '/projects/pancakeswap.jpg',
    demoUrl: 'https://replica-pancake-swap.vercel.app/'
  },

  // --- KOVA BUILDER ---
  {
    id: 'sofkredit',
    title: 'Sofkredit — Portal Financiero',
    company: 'Kova Builder',
    category: 'SEO / WPO',
    description: 'Mantenimiento web y optimización SEO técnica para el mercado de España, Francia e Italia.',
    highlights: [
      'Auditorías SEO periódicas e implementación de mejoras de rendimiento.',
      'Corrección de errores estructurales y optimización multi-idioma.'
    ],
    tags: ['JavaScript', 'Bootstrap', 'jQuery', 'HTML5', 'CSS3', 'SEO'],
    image: '/projects/sofkredit.jpg',
    demoUrl: 'https://sofkredit.com/es'
  },
  {
    id: 'finandon',
    title: 'Finandon — Comparador Financiero',
    company: 'Kova Builder',
    category: 'SEO / WPO',
    description: 'Auditorías SEO técnicas y mantenimiento continuo para España y Portugal.',
    highlights: [
      'Detección y resolución de errores de indexación.',
      'Optimización de carga y estructura SEO para captación orgánica.'
    ],
    tags: ['JavaScript', 'Bootstrap', 'jQuery', 'HTML5', 'CSS3', 'SEO'],
    image: '/projects/finandon.jpg',
    demoUrl: 'https://finandon.com/es'
  },
  {
    id: 'kreditiweb',
    title: 'Kreditiweb — Plataforma de Créditos',
    company: 'Kova Builder',
    category: 'SEO / WPO',
    description: 'Rediseño del header principal, mantenimiento y SEO internacional (ES, FR, IT, DE).',
    highlights: [
      'Reestructuración de la cabecera (Header) para mejor navegación y conversiones.',
      'Auditorías SEO y corrección de bugs en maquetación.'
    ],
    tags: ['JavaScript', 'Bootstrap', 'jQuery', 'HTML5', 'CSS3', 'SEO'],
    image: '/projects/kreditiweb.jpg',
    demoUrl: 'https://kreditiweb.com/es'
  },
  {
    id: 'preslo',
    title: 'Preslo — Gestión de Préstamos',
    company: 'Kova Builder',
    category: 'SEO / WPO',
    description: 'Modificación integral de páginas, depuración de contenido duplicado y SEO multi-país (ES, FR, IT, DE).',
    highlights: [
      'Eliminación sistemática de contenido duplicado para evitar penalizaciones SEO.',
      'Rediseño de secciones completas y cabeceras del portal.'
    ],
    tags: ['JavaScript', 'Bootstrap', 'jQuery', 'HTML5', 'CSS3', 'SEO'],
    image: '/projects/preslo.jpg',
    demoUrl: 'https://preslo.com/es'
  },

  // --- BE ON RETAIL ---
  {
    id: 'intranet-optometristas',
    title: 'Intranet Colegio de Ópticos Optometristas',
    company: 'BE ON RETAIL',
    category: 'Full Stack',
    description: 'Desarrollo de mejoras en el sistema interno de certificación por puntos para profesionales optometristas.',
    highlights: [
      'Optimización del flujo de tramitación de certificados oficiales.',
      'Refactorización de código backend/frontend y corrección de errores del sistema.'
    ],
    tags: ['PHP', 'JavaScript', 'MySQL', 'HTML5/CSS3'],
    image: '/projects/intranet-optometristas.jpg',
    demoUrl: 'https://intranetoptometristas.es/'
  },
  {
    id: 'aural-cepedal',
    title: 'Aural Cepedal Chiclana — Web Oficial',
    company: 'BE ON RETAIL',
    category: 'WordPress',
    description: 'Desarrollo integral de la página web corporativa adaptada a las especificaciones del cliente y normativas SEO.',
    highlights: [
      'Programación de funciones a medida mediante inyección de código (JS/CSS).',
      'Maquetación responsiva personalizada y optimización SEO.'
    ],
    tags: ['WordPress', 'Elementor', 'JavaScript', 'CSS3'],
    image: '/projects/aural-cepedal.jpg',
    demoUrl: 'https://auralcepedalchiclana.com/'
  },
  {
    id: 'cnoo',
    title: 'Consejo General de Colegios de Ópticos Optometristas',
    company: 'BE ON RETAIL',
    category: 'Frontend',
    description: 'Corrección de elementos defectuosos y aplicación de buenas prácticas de desarrollo web.',
    highlights: [
      'Resolución de errores de funcionamiento en componentes interactivos.',
      'Alineación de la web con los estándares modernos de accesibilidad y SEO.'
    ],
    tags: ['PHP', 'JavaScript', 'HTML5', 'CSS3'],
    image: '/projects/cnoo.jpg',
    demoUrl: 'https://www.cnoo.es/'
  },
  {
    id: 'revista-gacetaudio',
    title: 'Revista Gacetaudio — Portal Digital',
    company: 'BE ON RETAIL',
    category: 'WordPress',
    description: 'Mantenimiento continuo, publicación de ediciones de la revista digital y reestructuración de diseño.',
    highlights: [
      'Modificación de maquetación en columnas y formularios interactivos.',
      'Mantenimiento del servidor de archivos y cargas periódicas.'
    ],
    tags: ['WordPress', 'PHP', 'JavaScript', 'HTML5/CSS3'],
    image: '/projects/gacetaudio.jpg',
    demoUrl: 'https://www.revistagacetaudio.es/'
  },
  {
    id: 'centro-auditivo-perea',
    title: 'Centro Auditivo Perea — Landing Page',
    company: 'BE ON RETAIL',
    category: 'WordPress',
    description: 'Diseño y desarrollo completo de landing page orientada a la captación de nuevos clientes.',
    highlights: [
      'Maquetación enfocada en altas tasas de conversión (CRO).',
      'Inyección de código personalizado para funcionalidades a medida.'
    ],
    tags: ['WordPress', 'Elementor', 'CSS3', 'JavaScript'],
    image: '/projects/centro-auditivo-perea.jpg',
    demoUrl: 'https://centroauditivoperea.com/'
  },
  {
    id: 'opticas-perea-vision',
    title: 'Ópticas Perea Visión — Landing Page',
    company: 'BE ON RETAIL',
    category: 'WordPress',
    description: 'Creación integral de landing page de captación comercial con diseño corporativo elegante.',
    highlights: [
      'Optimización de tiempos de carga y respuesta en dispositivos móviles.',
      'Integración de formularios de contacto y llamada a la acción.'
    ],
    tags: ['WordPress', 'Elementor', 'CSS3', 'JavaScript'],
    image: '/projects/opticas-perea.jpg',
    demoUrl: 'https://opticaspereavision.es/'
  },
  {
    id: 'la-gafetina-plan',
    title: 'La Gafetina — Plan Cuidado Audiología',
    company: 'BE ON RETAIL',
    category: 'Frontend',
    description: 'Desarrollo de landing page especializada para promocionar el plan de cuidado audiológico.',
    highlights: [
      'Estructura limpia orientada a la interacción del usuario.',
      'Adaptabilidad 100% móvil y optimización de recursos.'
    ],
    tags: ['PHP', 'JavaScript', 'HTML5', 'CSS3'],
    image: '/projects/la-gafetina.jpg',
    demoUrl: 'https://lagafetina.com/plan-cuidado-audiologia/'
  },
  {
    id: 'rebeca-ayala',
    title: 'Centro Auditivo Rebeca Ayala',
    company: 'BE ON RETAIL',
    category: 'WordPress',
    description: 'Auditoría SEO previa, optimización de puntuación en buscadores y popups interactivos.',
    highlights: [
      'Implementación de popups personalizados para captación de leads.',
      'Optimización de metaetiquetas y estructura SEO.'
    ],
    tags: ['WordPress', 'Elementor', 'JavaScript', 'SEO'],
    image: '/projects/rebeca-ayala.jpg',
    demoUrl: 'https://www.centroauditivorebecaayala.com/'
  },
  {
    id: 'macsony',
    title: 'Macsony — Centro Audiológico',
    company: 'BE ON RETAIL',
    category: 'WordPress',
    description: 'Auditoría SEO, corrección de estándares de calidad y desarrollo de ventanas emergentes a medida.',
    highlights: [
      'Mejora de las puntuaciones en Core Web Vitals.',
      'Ajustes de estilo y componentes dinámicos con código personalizado.'
    ],
    tags: ['WordPress', 'Elementor', 'JavaScript', 'SEO'],
    image: '/projects/macsony.jpg',
    demoUrl: 'https://macsony.es/'
  },
  {
    id: 'sonibel-audinea',
    title: 'Sonibel Audinea',
    company: 'BE ON RETAIL',
    category: 'WordPress',
    description: 'Auditoría técnica previa, ajustes en maquetación y popups promocionales personalizados.',
    highlights: [
      'Corrección de errores de maquetación y rendimiento.',
      'Integración de elementos flotantes interactivos.'
    ],
    tags: ['WordPress', 'Elementor', 'JavaScript', 'SEO'],
    image: '/projects/sonibel.jpg',
    demoUrl: 'http://sonibelaudinea.com/'
  },
  {
    id: 'funsavi',
    title: 'Funsavi — Fundación San Vital',
    company: 'BE ON RETAIL',
    category: 'Frontend',
    description: 'Depuración y corrección de elementos rotos y malas prácticas en la web corporativa.',
    highlights: [
      'Restauración de funcionalidades y módulos no operativos.',
      'Limpieza y optimización de código legado.'
    ],
    tags: ['PHP', 'JavaScript', 'HTML5', 'CSS3'],
    image: '/projects/funsavi.jpg',
    demoUrl: 'https://www.funsavi.es/'
  },
  {
    id: 'audionex',
    title: 'Audionex — Portal & Landing Web',
    company: 'BE ON RETAIL',
    category: 'WordPress',
    description: 'Auditoría integral, desarrollo del sitio completo con todas sus secciones y landing page de atracción de tráfico.',
    highlights: [
      'Creación de la web desde cero basada en los requerimientos del cliente.',
      'Estructuración SEO completa para campañas de marketing.'
    ],
    tags: ['WordPress', 'Elementor', 'JavaScript', 'SEO'],
    image: '/projects/audionex.jpg'
  }
];

export default function Projects() {
  const [filter, setFilter] = useState<string>('Todas');

  const categories = ['Todas', 'Full Stack', 'Frontend', 'SEO / WPO', 'WordPress', 'Personal'];

  const filteredProjects = filter === 'Todas' 
    ? PROJECTS_DATA 
    : PROJECTS_DATA.filter(p => p.category === filter);

  return (
    <section id="proyectos" className="py-20 px-4 max-w-6xl mx-auto relative z-10">
      
      {/* Header de Sección */}
      <div className="mb-12 text-center md:text-left flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-bg-card border border-border-main text-accent text-xs font-mono font-medium mb-3">
            <Globe className="w-3.5 h-3.5" /> Portafolio Web ({PROJECTS_DATA.length} Proyectos)
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-text-main tracking-tight">
            Páginas & <span className="text-accent">Proyectos Web</span>
          </h2>
          <p className="text-text-muted text-base sm:text-lg mt-2 max-w-xl">
            Listado individual de proyectos, aplicaciones web e intervenciones técnicas realizadas.
          </p>
        </div>

        {/* Filtros */}
        <div className="flex flex-wrap gap-2 justify-center md:justify-end">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-3 py-1.5 rounded-xl text-xs font-mono transition-all border ${
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

      {/* Grid de Tarjetas Individuales (3 columnas en pantallas grandes) */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProjects.map((project) => (
          <div
            key={project.id}
            className={`bg-bg-card border rounded-2xl flex flex-col justify-between transition-all duration-300 hover:shadow-xl relative overflow-hidden group ${
              project.featured 
                ? 'border-accent/50 hover:border-accent' 
                : 'border-border-main hover:border-accent/30'
            }`}
          >
            {/* Header de la Imagen */}
            <div className="relative w-full h-44 bg-bg-main border-b border-border-main overflow-hidden flex items-center justify-center">
              {/* Imagen con fallback/placeholder si no existe la foto aún */}
              <img
                src={project.image}
                alt={project.title}
                onError={(e) => {
                  // Si no encuentra la imagen local, muestra un degradado elegante con icono
                  e.currentTarget.style.display = 'none';
                }}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              
              {/* Fallback visual con gradiente si no carga la imagen */}
              <div className="absolute inset-0 bg-gradient-to-br from-bg-card to-bg-main flex flex-col items-center justify-center gap-2 -z-0 p-4 text-center">
                <Globe className="w-8 h-8 text-accent/40" />
                <span className="text-[11px] font-mono text-text-muted">{project.company}</span>
              </div>

              {/* Badge Destacado */}
              {project.featured && (
                <div className="absolute top-3 right-3 bg-accent text-bg-main text-[10px] font-mono font-bold px-2.5 py-1 rounded-lg flex items-center gap-1 shadow-md z-10">
                  <Sparkles className="w-3 h-3" /> Destacado
                </div>
              )}
            </div>

            {/* Cuerpo de la Tarjeta */}
            <div className="p-5 flex-1 flex flex-col justify-between">
              <div>
                {/* Empresa y Categoría */}
                <div className="flex items-center justify-between text-[11px] font-mono text-accent mb-2">
                  <span className="font-semibold">{project.company}</span>
                  <span className="bg-bg-main px-2 py-0.5 rounded border border-border-main text-text-muted">
                    {project.category}
                  </span>
                </div>

                {/* Título */}
                <h3 className="text-base font-bold text-text-main mb-2 group-hover:text-accent transition-colors line-clamp-2">
                  {project.title}
                </h3>

                {/* Descripción */}
                <p className="text-text-muted text-xs leading-relaxed mb-4 line-clamp-3">
                  {project.description}
                </p>

                {/* Puntos Clave */}
                <div className="space-y-1.5 mb-5">
                  {project.highlights.map((h, i) => (
                    <div key={i} className="flex items-start gap-1.5 text-[11px] text-text-main">
                      <CheckCircle2 className="w-3.5 h-3.5 text-accent shrink-0 mt-0.5" />
                      <span className="line-clamp-2">{h}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Footer de Tarjeta: Tags y Botón Demo */}
              <div className="pt-4 border-t border-border-main/60 flex flex-col gap-3">
                <div className="flex flex-wrap gap-1">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-0.5 rounded bg-bg-main border border-border-main text-[9px] font-mono text-text-muted"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {project.demoUrl ? (
                  <a
                    href={project.demoUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="w-full inline-flex items-center justify-center gap-1.5 px-3 py-2 bg-accent text-bg-main font-bold rounded-xl text-xs hover:opacity-90 transition-all shadow-sm"
                  >
                    <span>Visitar Sitio Web</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                ) : (
                  <div className="w-full inline-flex items-center justify-center gap-1.5 px-3 py-2 bg-bg-main text-text-muted border border-border-main font-mono rounded-xl text-[11px]">
                    <Lock className="w-3 h-3 text-accent" />
                    <span>Sistema Interno / Confidencial</span>
                  </div>
                )}
              </div>

            </div>

          </div>
        ))}
      </div>

    </section>
  );
}