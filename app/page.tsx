// app/page.tsx
import ClippyIA from '../components/ClippyIA'; // <-- Importación adaptada
import Hero from '@/components/Hero';
import Projects from '@/components/Projects';
import Experience from '@/components/Experience';
import Skills from '@/components/Skills';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="bg-slate-950 min-h-screen text-slate-100 selection:bg-blue-500 selection:text-white">
      {/* Hero Section */}
      <Hero />
      {/* Projects Section */}
      <Projects />
      {/* Experience Section */}
      <Experience />
      {/* Skills Section */}
      <Skills />
      {/* Footer Section */}
      <Footer />
      {/* Nuestro Widget Flotante */}
      <ClippyIA />
    </main>
  );
}