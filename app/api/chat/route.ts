import OpenAI from 'openai';
import { NextResponse } from 'next/server';

// Importamos los datos detallados de tu portafolio
import { EXPERIENCES } from '@/data/experienceData';
import { PROJECTS_DATA } from '@/data/projectsData';
import { SKILL_CATEGORIES } from '@/data/skillsData';

// 1. Evita que Next.js intente generar esta API estáticamente durante el build
export const dynamic = 'force-dynamic';

export async function POST(req: Request) {
  try {
    const { message } = await req.json();

    if (!message || typeof message !== 'string') {
      return NextResponse.json({ error: 'Mensaje no válido' }, { status: 400 });
    }

    // 2. Inicializamos el cliente DENTRO de la función POST para que solo actúe al recibir peticiones
    const openai = new OpenAI({
      apiKey: process.env.GROQ_API_KEY || 'dummy_key_build', // Clave alternativa por seguridad en compilación
      baseURL: 'https://api.groq.com/openai/v1',
    });

    const systemInstruction = `
      Eres "Willy", el asistente virtual interactivo con IA del portafolio de Wellington A. Hidalgo.
      Tu objetivo principal es convencer a reclutadores, Tech Leads y clientes de que contraten o colaboren con Wellington.

      --- PERFIL GENERAL DE WELLINGTON ---
      - Rol: Software Engineer / Front-End Developer / Full Stack Developer.
      - Experiencia general: +4 años de experiencia real en desarrollo de software de alto rendimiento.
      - Ubicación/Modalidad: Valencia, España. Disponible para trabajo 100% Remoto, Híbrido o Presencial.
      - Contacto Directo: Correo (wahc1998@gmail.com), LinkedIn (linkedin.com/in/wahc), GitHub (github.com/SrWilly19).

      --- TRAYECTORIA Y EXPERIENCIA LABORAL DETALLADA ---
      ${JSON.stringify(EXPERIENCES, null, 2)}

      --- PROYECTOS DESTACADOS ---
      ${JSON.stringify(PROJECTS_DATA, null, 2)}

      --- STACK TÉCNICO Y CATEGORÍAS ---
      ${JSON.stringify(SKILL_CATEGORIES, null, 2)}

      --- TONO Y PERSONALIDAD DE WILLY ---
      - Eres simpático, ingenioso, carismático, seguro y muy profesional.
      - REGLA DE ORO: NUNCA te refieras a Wellington como "Welly". Su nombre es siempre Wellington.
      - Responde de forma concisa, al grano y fácil de leer (máximo 2 a 4 frases o viñetas cortas si es una lista).
      - Si te preguntan por su etapa en HP Inc., destaca el desarrollo de interfaces en tiempo real para impresión 3D industrial con React, Python, C# y Linux.
      - Si te preguntan por SEO/WPO, destaca la optimización de métricas que hizo pasando de 49 a 92 puntos en lighthouse/Core Web Vitals.
      - Invita de forma natural a agendar una llamada o enviar un correo directo a wahc1998@gmail.com.
    `;

    const completion = await openai.chat.completions.create({
      model: 'llama-3.3-70b-versatile',
      messages: [
        { role: 'system', content: systemInstruction },
        { role: 'user', content: message },
      ],
      temperature: 0.6,
      max_tokens: 350,
    });

    const reply = completion.choices[0]?.message?.content || "¡Vaya! Mis circuitos han tenido un pequeño parpadeo. ¿Puedes volver a preguntarme?";

    return NextResponse.json({ response: reply });
  } catch (error) {
    console.error('Error llamando a la API de IA:', error);
    return NextResponse.json(
      { error: 'Error al conectar con la IA' },
      { status: 500 }
    );
  }
}