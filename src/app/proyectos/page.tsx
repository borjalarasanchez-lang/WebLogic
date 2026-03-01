"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { 
  Building2, ShoppingBag, Stethoscope, Briefcase, 
  ArrowUpRight, Clock, CheckCircle2, DollarSign, AlertTriangle
} from "lucide-react";

interface Project {
  id: string;
  title: string;
  subtitle: string;
  desc: string;
  problem: string;
  solution: string;
  result: string;
  stats: { label: string; value: string }[];
  icon: React.ElementType;
  color: string;
}

export default function ProjectsPage() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const projects: Project[] = [
    {
      id: "01",
      title: "Inmobiliaria Moderna",
      subtitle: "Automatización de Gestión de Propiedades",
      desc: "Transformación digital completa para una agencia inmobiliaria con más de 500 propiedades en cartera.",
      problem: "El equipo perdía 4 horas diarias actualizando manualmente los portales inmobiliarios (Idealista, Fotocasa) y respondiendo los mismos correos de '¿sigue disponible?' una y otra vez.",
      solution: "Implementamos un sistema centralizado que sincroniza la web propia con todos los portales en tiempo real. Además, creamos un bot de WhatsApp que cualifica a los interesados y agenda visitas automáticamente solo con los clientes que cumplen los requisitos financieros.",
      result: "El equipo comercial ahora solo se dedica a cerrar ventas.",
      stats: [
        { label: "Tiempo Ahorrado", value: "20h/semana" },
        { label: "Citas Agendadas", value: "+45%" },
        { label: "Error Humano", value: "0%" }
      ],
      icon: Building2,
      color: "from-blue-600 to-blue-400"
    },
    {
      id: "02",
      title: "E-commerce de Moda",
      subtitle: "Tienda Automatizada 24/7",
      desc: "Escalado de una marca de ropa nativa digital que sufría roturas de stock constantes.",
      problem: "Vendían en Instagram, en su web y en una tienda física. El stock nunca cuadraba. Vendían prendas que no tenían y pasaban horas pidiendo disculpas y devolviendo dinero.",
      solution: "Unificamos todo el inventario en una sola base de datos en la nube. Si se vende una camiseta en la tienda física, desaparece de la web en milisegundos. Integramos también la generación automática de etiquetas de envío con Correos.",
      result: "Cero sobreventas y envíos que salen el mismo día sin intervención manual.",
      stats: [
        { label: "Roturas Stock", value: "0" },
        { label: "Ventas/Mes", value: "+120%" },
        { label: "Tiempo Gestión", value: "-80%" }
      ],
      icon: ShoppingBag,
      color: "from-purple-600 to-pink-500"
    },
    {
      id: "03",
      title: "Clínica Dental",
      subtitle: "Sistema de Citas y Recordatorios",
      desc: "Optimización de la agenda para una clínica con 5 doctores y alto volumen de pacientes.",
      problem: "El 20% de los pacientes no se presentaba a su cita (No-Show). La recepcionista pasaba la tarde llamando para confirmar citas del día siguiente, saturando la línea telefónica.",
      solution: "Creamos un sistema de reservas online conectado a su software de gestión. El sistema envía recordatorios automáticos por WhatsApp y Email 24h y 2h antes. Si un paciente cancela, el sistema avisa automáticamente a la lista de espera para llenar el hueco.",
      result: "Agenda llena y recepcionista liberada para atender mejor a los pacientes en sala.",
      stats: [
        { label: "No-Shows", value: "-15%" },
        { label: "Llamadas", value: "-60%" },
        { label: "Facturación", value: "+25%" }
      ],
      icon: Stethoscope,
      color: "from-emerald-600 to-teal-500"
    },
    {
      id: "04",
      title: "Consultoría Legal",
      subtitle: "Generación Documental Automática",
      desc: "Digitalización de un despacho de abogados especializado en reclamaciones aéreas.",
      problem: "Cada reclamación requería redactar documentos legales muy similares pero con datos específicos del cliente. Era un proceso manual, lento y propenso a errores de 'copia y pega'.",
      solution: "Desarrollamos un formulario inteligente que captura los datos del cliente y genera automáticamente los PDFs legales necesarios listos para firmar digitalmente. El cliente recibe su documentación en segundos, no en días.",
      result: "Capacidad para procesar 10 veces más reclamaciones con el mismo personal.",
      stats: [
        { label: "Docs/Día", value: "x10" },
        { label: "Tiempo/Doc", value: "2 min" },
        { label: "Errores", value: "0%" }
      ],
      icon: Briefcase,
      color: "from-orange-600 to-red-500"
    }
  ];

  return (
    <div ref={containerRef} className="min-h-screen bg-[#050505] relative py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <header className="mb-32">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col md:flex-row md:items-end justify-between gap-8"
          >
            <div>
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-blue-900/20 rounded-xl border border-blue-500/20">
                  <CheckCircle2 className="text-blue-500 w-8 h-8" />
                </div>
                <h1 className="text-4xl md:text-6xl font-bold tracking-tighter text-white">
                  Casos de <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500">Éxito Real</span>
                </h1>
              </div>
              <p className="text-xl text-zinc-400 max-w-2xl font-light leading-relaxed border-l-2 border-blue-500 pl-6">
                No vendemos teoría. Aquí tienes ejemplos concretos de cómo la tecnología transformó negocios reales. Problemas aburridos solucionados con código inteligente.
              </p>
            </div>
          </motion.div>
        </header>

        <div className="space-y-40">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </div>
  );
}

function ProjectCard({ project }: { project: Project }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [50, -50]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.9, 1], [0, 1, 1, 0]);

  return (
    <motion.article 
      ref={ref}
      style={{ opacity, y }}
      className="relative grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 border-t border-zinc-900 pt-16"
    >
      <div className="lg:col-span-5 flex flex-col justify-between h-full">
        <div>
          <span className="text-9xl font-bold text-zinc-900 absolute -top-16 -left-8 -z-10 select-none opacity-50">
            {project.id}
          </span>
          <div className="flex items-center gap-3 mb-4">
            <div className={`p-2 rounded bg-zinc-900/50 border border-zinc-800`}>
              <project.icon className="w-6 h-6 text-zinc-400" />
            </div>
            <h3 className="text-sm font-bold text-blue-500 uppercase tracking-widest">
              {project.subtitle}
            </h3>
          </div>
          <h2 className="text-4xl font-bold text-white mb-6">
            {project.title}
          </h2>
          <p className="text-lg text-zinc-300 leading-relaxed mb-8 font-light">
            {project.desc}
          </p>

          <div className="grid grid-cols-3 gap-4 mb-8">
            {project.stats.map((stat, i) => (
              <div key={i} className="bg-zinc-900/30 border border-zinc-800 p-4 rounded-lg text-center">
                <div className="text-2xl font-bold text-white mb-1">{stat.value}</div>
                <div className="text-xs text-zinc-500 uppercase tracking-wider">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="lg:col-span-7 relative">
        <div className="absolute inset-0 bg-gradient-to-br from-zinc-900/50 to-zinc-950/50 rounded-2xl border border-zinc-800/50 backdrop-blur-sm -z-10" />
        
        {/* Detailed Breakdown */}
        <div className="p-8 rounded-2xl bg-[#080808] border border-zinc-900 shadow-2xl h-full flex flex-col justify-center">
          <div className="space-y-8">
            <div className="relative pl-6 border-l-2 border-red-500/50">
              <h4 className="text-red-400 font-bold mb-2 flex items-center gap-2">
                <AlertTriangle className="w-4 h-4" /> El Problema
              </h4>
              <p className="text-zinc-400 text-sm leading-relaxed">
                {project.problem}
              </p>
            </div>

            <div className="relative pl-6 border-l-2 border-blue-500/50">
              <h4 className="text-blue-400 font-bold mb-2 flex items-center gap-2">
                <Clock className="w-4 h-4" /> La Solución WebLogic
              </h4>
              <p className="text-zinc-400 text-sm leading-relaxed">
                {project.solution}
              </p>
            </div>

            <div className="relative pl-6 border-l-2 border-green-500/50">
              <h4 className="text-green-400 font-bold mb-2 flex items-center gap-2">
                <DollarSign className="w-4 h-4" /> El Resultado
              </h4>
              <p className="text-white text-base font-medium leading-relaxed">
                {project.result}
              </p>
            </div>
          </div>
        </div>
      </div>
    </motion.article>
  );
}

function AlertTriangleIcon({ className }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z"/><path d="M12 9v4"/><path d="M12 17h.01"/></svg>
  );
}
