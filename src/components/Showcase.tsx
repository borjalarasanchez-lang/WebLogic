"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    title: "E-commerce Autogestionado",
    tech: "Next.js + Stripe + Stock Sync",
    description: "Plataforma de venta con actualización de inventario en tiempo real y panel administrativo.",
    color: "from-blue-500 to-indigo-500",
  },
  {
    title: "Sincronizador de Leads",
    tech: "Webflow + n8n + Salesforce",
    description: "Sistema automatizado que captura leads y los distribuye al CRM con scoring inteligente.",
    color: "from-emerald-500 to-teal-500",
  },
  {
    title: "SaaS Dashboard",
    tech: "React + Tremor + PostgreSQL",
    description: "Panel de control para métricas empresariales con visualización de datos en tiempo real.",
    color: "from-orange-500 to-red-500",
  },
];

export function Showcase() {
  return (
    <section className="py-24 px-4 md:px-12 lg:px-24 bg-zinc-950/50">
      <div className="mb-16 text-center">
        <h2 className="text-3xl font-bold md:text-5xl">Showcase</h2>
        <p className="mt-4 text-zinc-400">Proyectos que demuestran la fusión de diseño y lógica.</p>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="group relative h-[400px] w-full overflow-hidden rounded-2xl bg-zinc-900 border border-zinc-800 hover:border-zinc-700 transition-all"
          >
            {/* Mockup Visual Placeholder */}
            <div className={`absolute inset-0 h-1/2 w-full bg-gradient-to-br ${project.color} opacity-20 group-hover:opacity-30 transition-opacity`} />
            <div className="absolute top-8 left-8 right-8 h-48 rounded-t-xl bg-zinc-950/50 backdrop-blur-sm border border-white/10 shadow-2xl translate-y-4 transition-transform duration-500 group-hover:translate-y-2">
               {/* Abstract content inside mockup */}
               <div className="p-4 space-y-2">
                  <div className="h-2 w-1/3 rounded-full bg-white/20"></div>
                  <div className="h-2 w-1/2 rounded-full bg-white/10"></div>
                  <div className="mt-4 grid grid-cols-2 gap-2">
                    <div className="h-12 rounded bg-white/5"></div>
                    <div className="h-12 rounded bg-white/5"></div>
                  </div>
               </div>
            </div>

            <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-zinc-950 via-zinc-950/90 to-transparent">
              <p className="text-xs font-mono text-blue-400 mb-2">{project.tech}</p>
              <h3 className="text-xl font-bold text-zinc-100 flex items-center gap-2">
                {project.title}
                <ArrowUpRight className="h-4 w-4 opacity-0 -translate-x-2 translate-y-2 transition-all group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0" />
              </h3>
              <p className="mt-2 text-sm text-zinc-400 line-clamp-2">{project.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
