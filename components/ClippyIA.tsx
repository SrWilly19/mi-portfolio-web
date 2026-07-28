'use client';

import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Send, Bot, Sparkles, User, CornerDownLeft } from 'lucide-react';

interface Message {
  id: string;
  sender: 'user' | 'clippy';
  text: string;
}

export default function ClippyIA() {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      sender: 'clippy',
      text: '¡Hola! Soy Willy, el asistente virtual de Wellington. 🤖 Pregúntame sobre su experiencia en HP, su stack o sus proyectos.',
    },
  ]);

  const chatEndRef = useRef<HTMLDivElement>(null);

  // Auto-scroll al final del chat cuando llegan mensajes
  useEffect(() => {
    if (isOpen) {
      chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages, isOpen]);

  // FUNCIÓN DE ENVÍO
  const handleSend = async (textToSend?: string) => {
    const userText = textToSend || input;
    if (!userText.trim() || loading) return;

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
        text: data.response || '¡Vaya! Hubo un pequeño despiste en mis circuitos.',
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

  // Escuchador de eventos personalizados
  useEffect(() => {
    const handleOpenClippy = (e: CustomEvent<{ question?: string }>) => {
      setIsOpen(true);
      const question = e.detail?.question;
      if (question) {
        handleSend(question);
      }
    };

    window.addEventListener('open-clippy', handleOpenClippy as EventListener);
    return () => window.removeEventListener('open-clippy', handleOpenClippy as EventListener);
  }, [input, messages]);

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
      {/* Ventana flotante del Chat */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            className="mb-4 w-80 sm:w-96 rounded-2xl bg-bg-card border border-border-main shadow-2xl overflow-hidden flex flex-col h-[480px] backdrop-blur-xl"
          >
            {/* Header */}
            <div className="bg-bg-main/80 p-4 text-text-main border-b border-border-main flex justify-between items-center backdrop-blur-md">
              <div className="flex items-center gap-2.5">
                <div className="p-2 bg-accent/10 border border-accent/20 rounded-xl">
                  <Bot className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <h3 className="font-bold text-sm text-text-main">Willy IA</h3>
                  <span className="text-[10px] text-text-muted flex items-center gap-1.5 font-mono">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                    Asistente de Wellington
                  </span>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="hover:bg-bg-card p-1.5 rounded-lg border border-transparent hover:border-border-main text-text-muted hover:text-text-main transition-colors"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Lista de Mensajes */}
            <div className="flex-1 p-4 overflow-y-auto space-y-3 bg-bg-main/40 text-xs sm:text-sm">
              {messages.map((msg) => (
                <div
                  key={msg.id}
                  className={`flex gap-2 ${
                    msg.sender === 'user' ? 'justify-end' : 'justify-start'
                  }`}
                >
                  {msg.sender === 'clippy' && (
                    <div className="w-6 h-6 rounded-full bg-accent/20 border border-accent/40 flex items-center justify-center shrink-0 mt-0.5">
                      <Bot className="w-3.5 h-3.5 text-accent" />
                    </div>
                  )}

                  <div
                    className={`max-w-[80%] p-3 rounded-xl leading-relaxed ${
                      msg.sender === 'user'
                        ? 'bg-accent text-bg-main font-medium rounded-tr-none'
                        : 'bg-bg-main border border-border-main text-text-main rounded-tl-none'
                    }`}
                  >
                    {msg.text}
                  </div>

                  {msg.sender === 'user' && (
                    <div className="w-6 h-6 rounded-full bg-border-main flex items-center justify-center shrink-0 mt-0.5">
                      <User className="w-3.5 h-3.5 text-text-muted" />
                    </div>
                  )}
                </div>
              ))}

              {loading && (
                <div className="flex gap-2 items-center text-text-muted text-xs font-mono pt-1">
                  <Bot className="w-3.5 h-3.5 text-accent animate-spin" />
                  <span>Willy está pensando...</span>
                </div>
              )}
              <div ref={chatEndRef} />
            </div>

            {/* Input de texto */}
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleSend();
              }}
              className="p-3 bg-bg-main border-t border-border-main flex gap-2"
            >
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Escribe tu duda sobre Wellington..."
                className="flex-1 bg-bg-card text-xs text-text-main placeholder-text-muted rounded-xl px-3 py-2 outline-none border border-border-main focus:border-accent transition-colors"
              />
              <button
                type="submit"
                disabled={loading || !input.trim()}
                className="bg-accent hover:opacity-90 disabled:opacity-50 text-bg-main p-2 rounded-xl transition-all flex items-center justify-center font-bold"
              >
                <CornerDownLeft className="w-4 h-4" />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Botón flotante */}
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(!isOpen)}
        className="relative group bg-accent text-bg-main p-4 rounded-2xl shadow-xl hover:shadow-accent/20 transition-all duration-300 flex items-center justify-center border border-accent/30 font-bold"
      >
        <span className="absolute -top-1 -right-1 flex h-3 w-3">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3 w-3 bg-accent"></span>
        </span>
        {isOpen ? (
          <X className="w-5 h-5" />
        ) : (
          <Sparkles className="w-5 h-5 animate-pulse" />
        )}
      </motion.button>
    </div>
  );
}