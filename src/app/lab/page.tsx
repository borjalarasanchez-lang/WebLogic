"use client";

import { motion } from "framer-motion";
import { useRef } from "react";
import { Network, GitMerge, Bot, ShieldCheck, Database, Workflow } from "lucide-react";

export default function AutomationLab() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const modules = [
    {
      title: "Conectividad Total",
      subtitle: "Interoperabilidad Forzada",
      description: "Diseño puentes entre aplicaciones aisladas. Si tiene una API, puedo controlarlo. Si no tiene API, ingeniería inversa. El objetivo es eliminar los silos de datos y crear un flujo de información continuo y bidireccional.",
      icon: Network,
      color: "text-cyan-500",
      tech: ["REST/GraphQL", "Webhooks", "Custom Middleware", "OAuth 2.0"]
    },
    {
      title: "Lógica Condicional Avanzada",
      subtitle: "Árboles de Decisión Dinámicos",
      description: "Mis flujos no son lineales. Incorporan manejo de errores robusto, reintentos exponenciales y ramificaciones basadas en análisis de datos en tiempo real. Transformación de payloads JSON complejos al vuelo.",
      icon: GitMerge,
      color: "text-emerald-500",
      tech: ["JSONata", "RegEx Engines", "Error Handling", "Data Mapping"]
    },
    {
      title: "Sistemas Autónomos",
      subtitle: "Agentes Auto-Gestionados",
      description: "Bots que vigilan, actúan y reportan. Desde monitores de uptime que reinician servicios automáticamente hasta agentes de IA que clasifican y responden correos basándose en sentimiento y urgencia.",
      icon: Bot,
      color: "text-purple-500",
      tech: ["OpenAI API", "Cron Jobs", "Serverless Functions", "State Machines"]
    }
  ];

  return (
    <div ref={containerRef} className="min-h-screen bg-[#050505] text-zinc-300 relative overflow-hidden">
      {/* Grid Background */}
      <div className="fixed inset-0 bg-[linear-gradient(to_right,#111_1px,transparent_1px),linear-gradient(to_bottom,#111_1px,transparent_1px)] bg-[size:2rem_2rem] opacity-10 pointer-events-none" />

      <header className="relative pt-32 pb-20 px-6 border-b border-zinc-900">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <span className="px-2 py-1 bg-cyan-950/30 border border-cyan-900/50 text-cyan-400 font-mono text-xs rounded">
                MODULE: AUTOMATION
              </span>
              <span className="h-px w-12 bg-zinc-800" />
            </div>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tighter text-zinc-100 mb-6">
              LABORATORIO DE<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-600">
                AUTOMATIZACIÓN
              </span>
            </h1>
            <p className="text-xl text-zinc-400 max-w-2xl font-light">
              Donde la intervención humana se vuelve obsoleta. 
              Arquitectura de flujos de trabajo invisibles que operan 24/7.
            </p>
          </motion.div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-6 py-24 space-y-32">
        {modules.map((module, i) => (
          <motion.section
            key={i}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"
          >
            <div className={`order-2 ${i % 2 === 1 ? "lg:order-1" : "lg:order-2"}`}>
              <div className="relative group">
                <div className={`absolute -inset-4 bg-gradient-to-r ${module.color.replace("text-", "from-")}/20 to-transparent rounded-xl opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500`} />
                <div className="relative p-8 rounded-xl border border-zinc-800 bg-zinc-900/40 backdrop-blur-sm overflow-hidden">
                  {/* Abstract Code Visualization */}
                  <div className="font-mono text-xs space-y-2 opacity-70">
                    <div className="flex gap-2 text-zinc-500">
                      <span>01</span>
                      <span className={module.color}>import</span> {`{ ${module.title.split(" ")[0]} }`} <span className={module.color}>from</span> &quot;core&quot;;
                    </div>
                    <div className="flex gap-2 text-zinc-500">
                      <span>02</span>
                      <span className="text-yellow-500">async function</span> execute() {"{"}
                    </div>
                    <div className="flex gap-2 text-zinc-500 pl-4">
                      <span>03</span>
                      <span className="text-blue-400">await</span> connect(system_A, system_B);
                    </div>
                    <div className="flex gap-2 text-zinc-500 pl-4">
                      <span>04</span>
                      <span className="text-purple-400">if</span> (error) retry(Strategy.EXPONENTIAL);
                    </div>
                    <div className="flex gap-2 text-zinc-500 pl-4">
                      <span>05</span>
                      <span className="text-green-400">return</span> optimize_throughput();
                    </div>
                    <div className="flex gap-2 text-zinc-500">
                      <span>06</span>
                      {"}"}
                    </div>
                  </div>
                  
                  {/* Tech Stack Tags */}
                  <div className="mt-8 flex flex-wrap gap-2">
                    {module.tech.map((tech) => (
                      <span key={tech} className="px-2 py-1 bg-zinc-950 border border-zinc-800 text-zinc-400 text-[10px] font-mono rounded">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className={`order-1 ${i % 2 === 1 ? "lg:order-2" : "lg:order-1"}`}>
              <div className={`inline-flex p-3 rounded-lg bg-zinc-900/50 border border-zinc-800 mb-6 ${module.color}`}>
                <module.icon className="w-6 h-6" />
              </div>
              <h2 className="text-3xl font-bold text-zinc-100 mb-2">{module.title}</h2>
              <h3 className="text-lg font-mono text-zinc-500 mb-6">{module.subtitle}</h3>
              <p className="text-zinc-400 leading-relaxed mb-8">
                {module.description}
              </p>
              <ul className="space-y-3">
                <li className="flex items-center gap-3 text-sm text-zinc-500">
                  <ShieldCheck className="w-4 h-4 text-zinc-700" />
                  <span>Validación de esquemas estricta</span>
                </li>
                <li className="flex items-center gap-3 text-sm text-zinc-500">
                  <Database className="w-4 h-4 text-zinc-700" />
                  <span>Persistencia de logs de auditoría</span>
                </li>
                <li className="flex items-center gap-3 text-sm text-zinc-500">
                  <Workflow className="w-4 h-4 text-zinc-700" />
                  <span>Orquestación distribuida</span>
                </li>
              </ul>
            </div>
          </motion.section>
        ))}
      </div>
    </div>
  );
}
