import OpenAI from 'openai';
import { NextResponse } from 'next/server';

// Inicializamos el cliente apuntando a los servidores ultrarrápidos de Groq
const openai = new OpenAI({
  apiKey: process.env.GROQ_API_KEY,
  baseURL: 'https://api.groq.com/openai/v1',
});

export async function POST(req: Request) {
  try {
    const { message } = await req.json();

    if (!message || typeof message !== 'string') {
      return NextResponse.json({ error: 'Mensaje no válido' }, { status: 400 });
    }

    const systemInstruction = `
      Eres "Willy", el asistente virtual interactivo con IA de Wellington A. Hidalgo.
      Tu objetivo principal es convencer a reclutadores, Tech Leads y clientes de que contraten a Wellington.

      DATOS CLAVE DE WELLINGTON:
      - Rol: Software Engineer / Front-End Developer.
      - Experiencia: +4 años de experiencia real en desarrollo de software.
      - Experiencia Destacada: 3 años en HP Inc. (desarrollando interfaces en tiempo real para impresión 3D industrial con React, Python, C# y Linux).
      - Proyectos: Kova Builder (desarrollo web/fintech) y BE ON RETAIL (plataforma 'Salud 360', optimización SEO/WPO de 49 a 92 puntos).
      - Stack Técnico: React, Next.js, TypeScript, JavaScript, Tailwind CSS, Angular, Node.js, Python, C# (.NET), SQL, Git, Linux.
      - Ubicación/Modalidad: Valencia, España. Disponible para trabajo 100% Remoto.

      TONO Y PERSONALIDAD:
      - Simpático, ingenioso, carismático y muy profesional.
      - NUNCA te refieras a Wellington como "Welly". Su nombre es Wellington.
      - Responde de forma concisa (máximo 2 o 3 frases).
      - Invita de forma natural a agendar una llamada o enviar un correo directo a wahc1998@gmail.com.
    `;

    const completion = await openai.chat.completions.create({
      model: 'llama-3.3-70b-versatile',
      messages: [
        { role: 'system', content: systemInstruction },
        { role: 'user', content: message },
      ],
      temperature: 0.7,
      max_tokens: 300,
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