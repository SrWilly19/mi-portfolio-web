import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import BinaryTrail from '@/components/BinaryTrail';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Wellington | Portfolio",
  description: "Portafolio profesional de Wellington. Desarrollo de páginas web, aplicaciones en React/Next.js, optimización WPO y posicionamiento SEO.",
  keywords: ["Frontend Developer", "Desarrollador Web", "React", "Next.js", "WordPress", "Portafolio"],
  authors: [{ name: "Wellington" }],
  openGraph: {
    title: "Wellington | Frontend & Web Developer",
    description: "Explora mis proyectos web, experiencia laboral y stack tecnológico.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <BinaryTrail />{children}</body>
    </html>
  );
}
