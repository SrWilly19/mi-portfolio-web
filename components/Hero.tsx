'use client';

import { useState, useEffect, useRef } from 'react';
import { Terminal, Sparkles, Send, ArrowUpRight, Mail, CheckCircle2, Bot, User, CornerDownLeft } from 'lucide-react';

interface Message {
  id: string;
  sender: 'user' | 'clippy';
  text: string;
}

export default function Hero() {
  // Pestaña activa por defecto ahora es 'chat'
  const [activeTab, setActiveTab] = useState<'chat' | 'terminal'>('chat');

  // Estados del Chat IA
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 'welcome',
      sender: 'clippy',
      text: '¡Hola! Soy la IA asistente de Wellington. Pregúntame sobre su experiencia en HP, su stack o sus proyectos.',
    },
  ]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const chatContainerRef = useRef<HTMLDivElement>(null);

  // Auto-scroll al final del chat cuando hay mensajes o cambiamos a la pestaña
  useEffect(() => {
  if (activeTab === 'chat' && chatContainerRef.current) {
    chatContainerRef.current.scrollTo({
      top: chatContainerRef.current.scrollHeight,
      behavior: 'smooth',
    });
  }
}, [messages, activeTab]);

  // Función para enviar mensaje a la IA
  const handleSend = async (textToSend?: string) => {
    const userText = textToSend || input;
    if (!userText.trim() || loading) return;

    // Aseguramos estar en la pestaña del chat
    if (activeTab !== 'chat') setActiveTab('chat');

    const userMsg: Message = {
      id: Date.now().toString(),
      sender: 'user',
      text: userText,
    };

    const updatedMessages = [...messages, userMsg];
    setMessages(updatedMessages);

    if (!textToSend) setInput('');
    setLoading(true);

    try {
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: userText }),
      });

      const data = await res.json();

      const clippyMsg: Message = {
        id: (Date.now() + 1).toString(),
        sender: 'clippy',
        text: data.response || '¡Vaya! Hubo un pequeño problema al procesar la respuesta.',
      };

      setMessages([...updatedMessages, clippyMsg]);
    } catch (error) {
      console.error(error);
      setMessages((prev) => [
        ...prev,
        { id: Date.now().toString(), sender: 'clippy', text: 'Error de conexión con el servidor.' },
      ]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="relative min-h-[90vh] flex flex-col justify-center items-center px-4 py-16 overflow-hidden">
      {/* Background Glow */}
      <div
        className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full blur-[130px] pointer-events-none"
        style={{ backgroundColor: 'var(--accent-glow)' }}
      />

      <div className="max-w-6xl w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
        
        {/* COLUMNA IZQUIERDA: Presentación */}
        <div className="lg:col-span-7 space-y-6 text-left">
          
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-bg-card border border-border-main text-accent text-xs font-medium backdrop-blur-md">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-accent"></span>
            </span>
            Disponible para roles Remotos / Valencia, ES
          </div>

          <div>
            <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-text-main">
              Wellington <br />
              <span className="text-accent">Hidalgo</span>
            </h1>
            <p className="text-xl sm:text-2xl text-text-muted font-mono mt-2 flex items-center gap-2">
              <span className="text-accent">&gt;</span> Full Stack Developer
              <span className="animate-pulse text-accent">|</span>
            </p>
          </div>

          <p className="text-text-muted text-base sm:text-lg max-w-xl leading-relaxed">
            Especializado en construir aplicaciones web escalables y de alto rendimiento. 
            +4 años de experiencia creando sistemas complejos en tiempo real en{' '}
            <span className="text-text-main font-semibold underline decoration-accent/50 underline-offset-4">
              HP Inc.
            </span>{' '}
            y plataformas fintech/retail.
          </p>

          {/* Botones de Acción + Redes Sociales en la misma línea */}
          <div className="flex flex-wrap items-center gap-4 pt-2">
            <a
              href="#proyectos"
              className="flex items-center gap-2 bg-accent hover:opacity-90 text-bg-main font-bold px-6 py-3 rounded-xl transition-all shadow-lg active:scale-95"
            >
              Explorar Proyectos
              <ArrowUpRight className="w-4 h-4" />
            </a>

            <a
              href="mailto:wahc1998@gmail.com"
              className="flex items-center gap-2 bg-bg-card hover:bg-border-main text-text-main border border-border-main font-medium px-5 py-3 rounded-xl transition-all backdrop-blur-sm active:scale-95"
            >
              <Mail className="w-4 h-4 text-accent" />
              Contactar
            </a>

            {/* Redes Sociales al lado de Contactar */}
            <div className="flex items-center gap-2">
              {/* GitHub */}
              <a
                href="https://github.com/SrWilly19"
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
                className="p-3 bg-bg-card border border-border-main rounded-xl text-text-muted hover:text-accent hover:border-accent transition-all active:scale-95"
              >
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                </svg>
              </a>

              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/in/wahc/"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="p-3 bg-bg-card border border-border-main rounded-xl text-text-muted hover:text-accent hover:border-accent transition-all active:scale-95"
              >
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Preguntas Rápidas */}
          <div className="pt-4 border-t border-border-main">
            <p className="text-xs text-accent font-mono mb-2 flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5" /> Preguntas rápidas para la IA:
            </p>
            <div className="flex flex-wrap gap-2">
              {[
                '¿Qué hizo en HP?',
                '¿Cuál es su stack principal?',
                'Proyectos en Kova y BE ON RETAIL',
              ].map((q, i) => (
                <button
                  key={i}
                  onClick={() => handleSend(q)}
                  className="text-xs bg-bg-card hover:border-accent border border-border-main text-text-muted hover:text-text-main px-3 py-1.5 rounded-lg transition-all flex items-center gap-1.5 group"
                >
                  <span>"{q}"</span>
                  <Send className="w-3 h-3 text-text-muted group-hover:text-accent group-hover:translate-x-0.5 transition-all" />
                </button>
              ))}
            </div>
          </div>

        </div>

        {/* COLUMNA DERECHA: IA Asistente por defecto + Terminal */}
        <div className="lg:col-span-5">
          <div className="relative group">
            
            <div className="relative bg-bg-card border border-border-main rounded-2xl overflow-hidden shadow-2xl backdrop-blur-xl h-[420px] flex flex-col">
              
              {/* Header de la Ventana con Pestañas (IA Primero) */}
              <div className="bg-bg-main/60 px-4 py-2.5 border-b border-border-main flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500/80" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                  <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                </div>

                {/* Tabs Selector (IA primero) */}
                <div className="flex items-center gap-1 bg-bg-main p-1 rounded-lg border border-border-main text-xs font-mono">
                  <button
                    onClick={() => setActiveTab('chat')}
                    className={`px-2.5 py-1 rounded-md transition-all flex items-center gap-1.5 ${
                      activeTab === 'chat'
                        ? 'bg-bg-card text-accent font-semibold shadow-sm'
                        : 'text-text-muted hover:text-text-main'
                    }`}
                  >
                    <Bot className="w-3 h-3" /> Willy IA
                  </button>
                  <button
                    onClick={() => setActiveTab('terminal')}
                    className={`px-2.5 py-1 rounded-md transition-all flex items-center gap-1.5 ${
                      activeTab === 'terminal'
                        ? 'bg-bg-card text-accent font-semibold shadow-sm'
                        : 'text-text-muted hover:text-text-main'
                    }`}
                  >
                    <Terminal className="w-3 h-3" /> experience.json
                  </button>
                </div>
              </div>

              {/* PESTAÑA 1: Chat IA (Por defecto) */}
              {activeTab === 'chat' && (
                <div className="flex flex-col flex-1 h-full overflow-hidden">
                  
                  {/* Lista de Mensajes con el ref correcto */}
                  <div 
                    ref={chatContainerRef} 
                    className="flex-1 p-4 overflow-y-auto space-y-3 text-xs sm:text-sm"
                  >
                    {messages.map((m) => (
                      <div
                        key={m.id}
                        className={`flex gap-2.5 ${m.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                      >
                        {m.sender === 'clippy' && (
                          <div className="w-6 h-6 rounded-full bg-accent/20 border border-accent/40 flex items-center justify-center shrink-0 mt-0.5">
                            <Bot className="w-3.5 h-3.5 text-accent" />
                          </div>
                        )}

                        <div
                          className={`max-w-[80%] p-3 rounded-xl leading-relaxed ${
                            m.sender === 'user'
                              ? 'bg-accent text-bg-main font-medium rounded-tr-none'
                              : 'bg-bg-main border border-border-main text-text-main rounded-tl-none'
                          }`}
                        >
                          {m.text}
                        </div>

                        {m.sender === 'user' && (
                          <div className="w-6 h-6 rounded-full bg-border-main flex items-center justify-center shrink-0 mt-0.5">
                            <User className="w-3.5 h-3.5 text-text-muted" />
                          </div>
                        )}
                      </div>
                    ))}

                    {loading && (
                      <div className="flex gap-2 items-center text-text-muted text-xs font-mono">
                        <Bot className="w-4 h-4 text-accent animate-spin" />
                        <span>Willy está pensando...</span>
                      </div>
                    )}
                    {/* <div ref={chatEndRef} /> ya no hace falta esta línea */}
                  </div>

                  {/* Input del Chat */}
                  <form
                    onSubmit={(e) => {
                      e.preventDefault();
                      handleSend();
                    }}
                    className="p-3 border-t border-border-main bg-bg-main flex items-center gap-2"
                  >
                    <input
                      type="text"
                      value={input}
                      onChange={(e) => setInput(e.target.value)}
                      placeholder="Escribe tu pregunta sobre Wellington..."
                      className="flex-1 bg-bg-card border border-border-main rounded-lg px-3 py-2 text-xs text-text-main focus:outline-none focus:border-accent"
                    />
                    <button
                      type="submit"
                      disabled={loading || !input.trim()}
                      className="p-2 bg-accent text-bg-main rounded-lg hover:opacity-90 disabled:opacity-50 transition-all"
                    >
                      <CornerDownLeft className="w-3.5 h-3.5" />
                    </button>
                  </form>
                </div>
              )}
              {/* PESTAÑA 2: Vista Terminal (JSON) */}
              {activeTab === 'terminal' && (
                <div className="p-5 font-mono text-xs sm:text-sm space-y-3 text-text-main leading-relaxed overflow-y-auto flex-1">
                  <div>
                    <span className="text-accent">wellington@dev</span>:<span className="text-text-muted">~</span>$ cat experience.json
                  </div>

                  <div className="pl-4 border-l-2 border-border-main space-y-2 text-text-muted">
                    <p><span className="text-text-muted">"yearsOfExp"</span>: <span className="text-accent">4</span>,</p>
                    <p><span className="text-text-muted">"keyRoles"</span>: [<span className="text-accent-light">"3D Print Real-time UI (HP)"</span>, <span className="text-accent-light">"Fintech Apps"</span>],</p>
                    <p><span className="text-text-muted">"coreStack"</span>: [<span className="text-accent-light">"React"</span>, <span className="text-accent-light">"Next.js"</span>, <span className="text-accent-light">"TypeScript"</span>, <span className="text-accent-light">"Python"</span>],</p>
                    <p><span className="text-text-muted">"wpoOptimization"</span>: <span className="text-accent">"49 → 92 pts"</span></p>
                  </div>

                  <div className="pt-2">
                    <span className="text-accent">wellington@dev</span>:<span className="text-text-muted">~</span>$ <span className="animate-pulse">_</span>
                  </div>

                  <div className="pt-4 border-t border-border-main grid grid-cols-2 gap-2 text-xs font-sans mt-auto">
                    <div className="flex items-center gap-1.5 text-text-main bg-bg-main p-2 rounded-lg border border-border-main">
                      <CheckCircle2 className="w-3.5 h-3.5 text-accent shrink-0" />
                      <span>HP Inc. Verified</span>
                    </div>
                    <div className="flex items-center gap-1.5 text-text-main bg-bg-main p-2 rounded-lg border border-border-main">
                      <CheckCircle2 className="w-3.5 h-3.5 text-accent shrink-0" />
                      <span>Full Stack Ready</span>
                    </div>
                  </div>
                </div>
              )}

            </div>
          </div>
        </div>

      </div>
    </section>
  );
}