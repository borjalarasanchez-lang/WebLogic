"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { Mail } from "lucide-react";
import { ContactForm } from "@/components/ContactForm";

export default function ContactPage() {
  const { scrollY } = useScroll();
  const yBackground = useTransform(scrollY, [0, 1000], [0, 300]);

  return (
    <div className="min-h-screen bg-[#0a0a0a] selection:bg-blue-500/30 font-sans">
      
      {/* HEADER SECTION */}
      <section className="relative pt-32 pb-10 px-6 overflow-hidden">
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
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-zinc-800/50 border border-zinc-700/50 text-zinc-300 text-sm font-medium mb-8 backdrop-blur-sm">
              <Mail className="w-4 h-4" />
              Hablemos de tu Proyecto
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-white mb-6">
              Empieza la <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">
                Transformación
              </span>
            </h1>
            
            <p className="text-lg text-zinc-400 max-w-2xl mx-auto font-light leading-relaxed">
              Cuéntame qué necesitas y diseñaré una estrategia a medida para tu negocio.
            </p>
          </motion.div>
        </div>
      </section>

      {/* FORMULARIO */}
      <section className="py-12 px-6 relative">
        <div className="max-w-4xl mx-auto">
          <ContactForm />
        </div>
      </section>

    </div>
  );
}
