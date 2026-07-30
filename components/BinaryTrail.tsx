'use client';

import React, { useEffect, useRef } from 'react';

interface Particle {
  x: number;
  y: number;
  text: string;
  opacity: number;
  size: number;
  speedY: number;
  speedX: number;
}

export default function BinaryTrail() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let particles: Particle[] = [];
    let lastTime = 0;

    // Redimensionar el canvas al tamaño total de la ventana
    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    // Capturar movimiento del ratón para generar partículas
    const handleMouseMove = (e: MouseEvent) => {
      const currentTime = Date.now();
      // Limitar la frecuencia de creación para no saturar (cada 35ms)
      if (currentTime - lastTime < 35) return;
      lastTime = currentTime;

      const binaryText = Math.random() > 0.5 ? '1' : '0';

      particles.push({
        x: e.clientX,
        y: e.clientY,
        text: binaryText,
        opacity: 1, // Empieza completamente visible
        size: Math.floor(Math.random() * 4) + 12, // Tamaño font entre 12px y 16px
        speedY: (Math.random() - 0.5) * 0.8 + 0.5, // Leve caída hacia abajo
        speedX: (Math.random() - 0.5) * 1.2,      // Micro dispersión horizontal
      });
    };

    window.addEventListener('mousemove', handleMouseMove);

    // Bucle de renderizado
    const render = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];

        // Dibujar el dígito
        ctx.fillStyle = `rgba(16, 185, 129, ${p.opacity})`; // Color cian/verde estilo Matrix (Ajusta la opacidad)
        ctx.font = `${p.size}px monospace`;
        ctx.fillText(p.text, p.x, p.y);

        // Actualizar posición y desvanecer
        p.y += p.speedY;
        p.x += p.speedX;
        p.opacity -= 0.025; // Velocidad de desvanecimiento (Fade Out)

        // Eliminar partículas invisibles
        if (p.opacity <= 0) {
          particles.splice(i, 1);
          i--;
        }
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-50"
    />
  );
}