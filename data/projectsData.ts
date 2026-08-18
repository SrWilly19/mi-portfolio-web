import { Project } from '../types/project';

export const PROJECTS_DATA: Project[] = [
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
    image: '/projects/grand-line-birth.webp',
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
    image: '/projects/hp.webp'
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
    image: '/projects/replica-pancake-swap-vercel-app.webp',
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
    image: '/projects/sofkredit.webp',
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
    image: '/projects/finandon.webp',
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
    image: '/projects/kreditiweb.webp',
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
    image: '/projects/preslo.webp',
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
    tags: ['PHP', 'JavaScript', 'MySQL', 'HTML5', 'CSS3'],
    image: '/projects/intranetoptometristas.webp',
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
    image: '/projects/auralcepedalchiclana.webp',
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
    image: '/projects/cnoo.webp',
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
    tags: ['WordPress', 'PHP', 'JavaScript', 'HTML5', 'CSS3'],
    image: '/projects/gacetaudio.webp',
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
    image: '/projects/centroauditivoperea.webp',
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
    image: '/projects/opticaspereavision.webp',
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
    image: '/projects/lagafetina.webp',
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
    image: '/projects/rebeca-ayala.webp',
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
    image: '/projects/macsony.webp',
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
    image: '/projects/sonibelaudinea.webp',
    demoUrl: 'http://sonibelaudinea.com/'
  },
  {
    id: 'funsavi',
    title: 'Funsavi — Fundación Salud Visual',
    company: 'BE ON RETAIL',
    category: 'Frontend',
    description: 'Depuración y corrección de elementos rotos y malas prácticas en la web corporativa.',
    highlights: [
      'Restauración de funcionalidades y módulos no operativos.',
      'Limpieza y optimización de código legado.'
    ],
    tags: ['PHP', 'JavaScript', 'HTML5', 'CSS3'],
    image: '/projects/funsavi.webp',
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
    image: '/projects/audionex.webp'
  }
];
