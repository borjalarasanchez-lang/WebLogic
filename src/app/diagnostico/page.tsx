"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { Search, BarChart3, AlertTriangle, ArrowRight, CheckCircle2, Clock } from "lucide-react";
import { ContactForm } from "@/components/ContactForm";

export default function DiagnosticoPage() {
  const { scrollY } = useScroll();
  const yBackground = useTransform(scrollY, [0, 1000], [0, 300]);

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <div className="min-h-screen bg-[#0a0a0a] selection:bg-blue-500/30 font-sans">
      
      {/* HERO SECTION */}
      <section className="relative pt-32 pb-20 px-6 overflow-hidden">
        {/* Background Effects */}
        <motion.div style={{ y: yBackground }} className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl pointer-events-none">
          <div className="absolute top-[20%] left-[50%] -translate-x-1/2 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[120px] mix-blend-screen" />
        </motion.div>

        <div className="max-w-5xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-900/10 border border-blue-500/20 text-blue-400 text-sm font-medium mb-8 backdrop-blur-sm">
              <Search className="w-4 h-4" />
              Auditoría Digital Completa
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-white mb-6">
              Descubre dónde pierde <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">
                dinero tu negocio
              </span>
            </h1>
            
            <p className="text-lg md:text-xl text-zinc-400 max-w-3xl mx-auto font-light leading-relaxed mb-12">
              Analizamos gratuitamente tu infraestructura digital para detectar cuellos de botella, fugas de conversión y procesos manuales que podrías automatizar hoy mismo.
            </p>
          </motion.div>
        </div>
      </section>

      {/* QUÉ ANALIZAMOS */}
      <section className="py-16 px-6 bg-zinc-900/20 border-y border-white/5">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div 
              variants={fadeInUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="p-8 bg-[#0a0a0a] border border-zinc-800 rounded-2xl hover:border-blue-500/30 transition-colors"
            >
              <div className="w-12 h-12 bg-blue-900/20 rounded-lg flex items-center justify-center mb-6 text-blue-500">
                <Clock className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Auditoría de Velocidad Web</h3>
              <p className="text-zinc-400 leading-relaxed">
                ¿Tu web tarda más de 3 segundos? Analizamos tus Core Web Vitals, peso de imágenes y tiempos de respuesta. Si es lenta, no vendes.
              </p>
            </motion.div>

            <motion.div 
              variants={fadeInUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="p-8 bg-[#0a0a0a] border border-zinc-800 rounded-2xl hover:border-purple-500/30 transition-colors"
            >
              <div className="w-12 h-12 bg-purple-900/20 rounded-lg flex items-center justify-center mb-6 text-purple-500">
                <AlertTriangle className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Detección de Errores Manuales</h3>
              <p className="text-zinc-400 leading-relaxed">
                Identificamos dónde pierdes tiempo copiando datos. Encontramos los "puntos de fricción" humana y te decimos cómo automatizarlos al 100%.
              </p>
            </motion.div>

            <motion.div 
              variants={fadeInUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="p-8 bg-[#0a0a0a] border border-zinc-800 rounded-2xl hover:border-emerald-500/30 transition-colors"
            >
              <div className="w-12 h-12 bg-emerald-900/20 rounded-lg flex items-center justify-center mb-6 text-emerald-500">
                <BarChart3 className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Plan de Agentes IA</h3>
              <p className="text-zinc-400 leading-relaxed">
                Diseñamos tu fuerza laboral digital. Te explicamos qué Agentes IA (Voz, WhatsApp, RAG) necesita tu negocio para operar en piloto automático.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FORMULARIO */}
      <section className="py-24 px-6 relative">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Solicita tu Informe Gratuito</h2>
            <p className="text-zinc-400">Sin compromiso. Recibirás un video-análisis de 5 minutos en tu correo.</p>
          </div>
          <ContactForm />
        </div>
      </section>

    </div>
  );
}
