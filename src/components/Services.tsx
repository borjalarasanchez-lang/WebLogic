"use client";

import { motion } from "framer-motion";
import { Code2, Workflow } from "lucide-react";

const services = [
  {
    title: "Web Engineering",
    description:
      "Arquitectura frontend moderna con Next.js y React. Sitios optimizados para SEO técnico, accesibilidad y una performance extrema (Lighthouse 100).",
    icon: Code2,
    gradient: "from-blue-500/20 to-cyan-500/20",
    border: "group-hover:border-blue-500/50",
    text: "text-blue-400",
  },
  {
    title: "Logic & Automation",
    description:
      "Integración de APIs complejas, creación de workflows en Make/n8n y conexión de CRMs. Deja que los robots hagan el trabajo repetitivo.",
    icon: Workflow,
    gradient: "from-purple-500/20 to-pink-500/20",
    border: "group-hover:border-purple-500/50",
    text: "text-purple-400",
  },
];

export function Services() {
  return (
    <section id="services" className="py-24 px-4 md:px-12 lg:px-24 w-full relative scroll-mt-20">
      <div className="mb-16 text-center">
        <h2 className="text-3xl font-bold md:text-5xl">The Logic Stack</h2>
        <p className="mt-4 text-zinc-400">Dos pilares fundamentales para tu éxito digital.</p>
      </div>

      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 max-w-5xl mx-auto">
        {services.map((service, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.2 }}
            className={`group relative overflow-hidden rounded-3xl border border-zinc-800 bg-zinc-900/50 p-8 transition-all hover:bg-zinc-900/80 ${service.border}`}
          >
            <div
              className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 transition-opacity duration-500 group-hover:opacity-100`}
            />
            
            <div className="relative z-10">
              <div className={`mb-6 inline-flex rounded-xl bg-zinc-950/50 p-3 ${service.text}`}>
                <service.icon className="h-8 w-8" />
              </div>
              <h3 className="mb-4 text-2xl font-bold text-zinc-100">{service.title}</h3>
              <p className="text-zinc-400 leading-relaxed">{service.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
