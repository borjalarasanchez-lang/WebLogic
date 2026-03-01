import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "WebLogic | Infraestructura Digital y Automatización",
  description: "Diseño sitios web que venden y construyo sistemas que trabajan por ti. Menos tareas manuales, más crecimiento real.",
  keywords: ["Desarrollo Web", "Automatización", "Consultoría Tecnológica", "Next.js", "Eficiencia Operativa"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="dark scroll-smooth">
      <head>
        <script 
          async 
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5905230385471973" 
          crossOrigin="anonymous"
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[#0a0a0a] text-zinc-300 selection:bg-blue-500/20 selection:text-blue-400 flex flex-col min-h-screen font-sans`}
      >
        <Navbar />
        <main className="flex-grow pt-20 min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
