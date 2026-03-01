"use client";

import { motion } from "framer-motion";
import { CheckCircle2, XCircle } from "lucide-react";

const cases = [
  {
    title: "Sincronización de Leads Multi-Canal",
    problem: "Pérdida de leads por gestión manual en Excel y demora en respuestas.",
    solution: "Automatización completa: Webform → CRM → WhatsApp Inmediato.",
    stack: ["Webflow", "Make", "Salesforce", "WhatsApp API"],
    stats: "95% Tasa de Respuesta",
    color: "border-emerald-500/50",
    gradient: "from-emerald-500/10 to-teal-500/10",
  },
  {
    title: "E-commerce Stock Manager",
    problem: "Descuadres de inventario entre tienda física y online.",
    solution: "Sincronización en tiempo real bidireccional mediante Webhooks.",
    stack: ["Shopify", "n8n", "Google Sheets", "Stripe"],
    stats: "100% Precisión de Stock",
    color: "border-blue-500/50",
    gradient: "from-blue-500/10 to-indigo-500/10",
  },
  {
    title: "Onboarding de Clientes Automático",
    problem: "Proceso de alta lento, contratos manuales y falta de seguimiento.",
    solution: "Flujo automático: Pago → Contrato Digital → Acceso al Portal.",
    stack: ["Stripe", "DocuSign", "Airtable", "Next.js"],
    stats: "15h Ahorradas/Semana",
    color: "border-purple-500/50",
    gradient: "from-purple-500/10 to-pink-500/10",
  },
];

export function Gallery() {
  return (
    <section id="gallery" className="py-24 px-4 md:px-12 lg:px-24 bg-zinc-900/30 scroll-mt-20">
      <div className="mb-16 text-center">
        <h2 className="text-3xl font-bold md:text-5xl">Galería de Flujos</h2>
        <p className="mt-4 text-zinc-400">Casos reales de caos convertido en orden.</p>
      </div>

      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto">
        {cases.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.2 }}
            className={`group relative overflow-hidden rounded-3xl border border-zinc-800 bg-zinc-950 p-8 transition-all hover:border-opacity-100 hover:shadow-2xl hover:-translate-y-1 ${item.color}`}
          >
            <div className={`absolute inset-0 bg-gradient-to-br ${item.gradient} opacity-0 transition-opacity duration-500 group-hover:opacity-100`} />
            
            <div className="relative z-10 flex flex-col h-full">
              <h3 className="text-xl font-bold text-zinc-100 mb-6">{item.title}</h3>
              
              <div className="space-y-4 flex-grow">
                <div className="flex items-start gap-3">
                  <XCircle className="h-5 w-5 text-red-500 flex-shrink-0 mt-1" />
                  <p className="text-sm text-zinc-400">{item.problem}</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-green-500 flex-shrink-0 mt-1" />
                  <p className="text-sm text-zinc-300 font-medium">{item.solution}</p>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-zinc-800/50">
                <div className="flex flex-wrap gap-2 mb-4">
                  {item.stack.map((tool) => (
                    <span key={tool} className="text-xs px-2 py-1 rounded bg-zinc-900 border border-zinc-700 text-zinc-400">
                      {tool}
                    </span>
                  ))}
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-lg font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                    {item.stats}
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
