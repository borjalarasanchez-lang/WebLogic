"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Clock, BrainCircuit, Terminal, ArrowRight } from "lucide-react";
import { CodeBlock } from "@/components/CodeBlock";
import Link from "next/link";

export default function Manifesto() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });

  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.9]);

  return (
    <div className="min-h-screen bg-[#050505] text-zinc-300 font-sans selection:bg-blue-500/30">
      <header ref={ref} className="relative h-[80vh] flex items-center justify-center overflow-hidden border-b border-zinc-900">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.1),transparent_70%)] pointer-events-none" />
        <motion.div style={{ opacity, scale }} className="relative z-10 text-center px-6 max-w-5xl mx-auto">
          <div className="flex justify-center gap-6 mb-8 text-xs font-mono text-blue-500 tracking-widest uppercase">
            <span className="flex items-center gap-2"><Clock className="w-3 h-3" /> READ_TIME: 8m 42s</span>
            <span className="flex items-center gap-2"><BrainCircuit className="w-3 h-3" /> CAT: PHILOSOPHY</span>
            <span className="flex items-center gap-2"><Terminal className="w-3 h-3" /> AUTHOR: ROOT</span>
          </div>
          
          <h1 className="text-5xl md:text-8xl font-bold tracking-tighter text-zinc-100 mb-8 leading-tight">
            LA MUERTE DE LAS<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-b from-zinc-100 to-zinc-700">
              TAREAS MANUALES
            </span>
          </h1>
          
          <p className="text-xl md:text-3xl text-zinc-400 font-light italic max-w-3xl mx-auto border-l-2 border-blue-500 pl-6">
            &quot;Por qué todo lo que se repite dos veces debe ser código.&quot;
          </p>
        </motion.div>
      </header>

      <article className="max-w-3xl mx-auto px-6 py-24 prose prose-invert prose-lg prose-headings:font-bold prose-headings:tracking-tight prose-a:text-blue-400 prose-code:text-blue-300 prose-pre:bg-zinc-900 prose-pre:border prose-pre:border-zinc-800">
        <p className="lead text-2xl text-zinc-200 font-light leading-relaxed mb-16">
          El tiempo humano es el recurso más escaso y valioso del universo conocido. 
          Desperdiciarlo en tareas repetitivas no es solo ineficiente; es una ofensa 
          a nuestra capacidad cognitiva. En la era de la IA y la hiper-automatización, 
          hacer click manualmente es un bug en el sistema operativo de la realidad.
        </p>

        <h2 className="text-3xl text-zinc-100 flex items-center gap-3">
          <span className="text-blue-500">01.</span> La Falacia del &quot;Solo toma 5 minutos&quot;
        </h2>
        <p>
          &quot;Solo me toma 5 minutos exportar el CSV y subirlo al CRM&quot;. Falso. 
          No te toma 5 minutos. Te toma:
        </p>
        <ul className="list-none space-y-2 pl-6 border-l border-zinc-800 my-8 font-mono text-sm text-zinc-400">
          <li>[10:00] Context switching (pérdida de foco profundo)</li>
          <li>[00:05] Ejecución de la tarea</li>
          <li>[00:15] Recuperación del estado de flujo anterior</li>
          <li>[ERROR] Posibilidad de error humano (fatiga, distracción)</li>
        </ul>
        <p>
          Multiplica esto por 200 días laborables. No estás perdiendo minutos; 
          estás perdiendo semanas de innovación potencial.
        </p>

        <h2 className="text-3xl text-zinc-100 mt-16 flex items-center gap-3">
          <span className="text-blue-500">02.</span> El Código es Ley (Code is Law)
        </h2>
        <p>
          Cuando automatizas un proceso, no solo ahorras tiempo. 
          <strong className="text-zinc-100">Codificas la excelencia.</strong>
        </p>
        <p>
          Un script no tiene días malos. Un script no olvida adjuntar el archivo. 
          Un script no se cansa a las 5 PM. Al convertir operaciones en código, 
          estás creando un activo tangible que ejecuta la mejor versión posible 
          de ese proceso, infinitamente, a costo marginal cero.
        </p>

        <div className="my-12">
          <CodeBlock
            filename="THE_RULE_OF_TWO.js"
            code={`function shouldAutomate(task) {
  if (task.frequency > 1 && task.complexity === "low") {
    return true; // Immediate automation
  }
  if (task.isCritical && task.isProneToHumanError) {
    return true; // Mandatory safety automation
  }
  return false; // Monitor for future patterns
}`}
          />
        </div>

        <h2 className="text-3xl text-zinc-100 mt-16 flex items-center gap-3">
          <span className="text-blue-500">03.</span> Arquitectura del Sistema Nervioso
        </h2>
        <p>
          Mi enfoque no es &quot;instalar herramientas&quot;. Es diseñar un sistema nervioso digital. 
          Cada evento en tu negocio (una venta, un lead, un error, un deploy) debe disparar 
          una señal nerviosa (webhook) que active una respuesta muscular (acción) o cognitiva 
          (análisis de IA).
        </p>
        <p>
          Sin intervención consciente. Sin fricción. Pura lógica ejecutándose en el silicio.
        </p>

        <div className="mt-24 pt-12 border-t border-zinc-900">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8 bg-zinc-900/30 p-8 rounded-2xl border border-zinc-800">
            <div>
              <h3 className="text-2xl font-bold text-zinc-100 mb-2">¿Listo para la transición?</h3>
              <p className="text-zinc-400 text-sm max-w-md">
                Deja de operar la máquina. Empieza a diseñarla.
              </p>
            </div>
            <Link 
              href="/contacto"
              className="group flex items-center gap-3 px-6 py-3 bg-zinc-100 text-zinc-950 font-mono font-bold rounded hover:bg-cyan-400 transition-colors"
            >
              INICIAR PROTOCOLO
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </article>
    </div>
  );
}
