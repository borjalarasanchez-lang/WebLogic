"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { 
  Bot, MessageSquare, Phone, Zap, BrainCircuit, 
  Cpu, Users, Clock, ShieldCheck, ArrowRight 
} from "lucide-react";
import { ContactForm } from "@/components/ContactForm";
import { SpotlightCard } from "@/components/ui/SpotlightCard";

export default function IAAgentsPage() {
  const { scrollY } = useScroll();
  const yBackground = useTransform(scrollY, [0, 1000], [0, 300]);

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  return (
    <div className="min-h-screen bg-[#050505] selection:bg-cyan-500/30 font-sans overflow-hidden">
      
      {/* HERO SECTION */}
      <section className="relative pt-32 pb-20 px-6">
        {/* Background Effects */}
        <motion.div style={{ y: yBackground }} className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl pointer-events-none">
          <div className="absolute top-[20%] left-[20%] w-[600px] h-[600px] bg-cyan-600/10 rounded-full blur-[120px] mix-blend-screen" />
          <div className="absolute bottom-[20%] right-[10%] w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[100px] mix-blend-screen" />
        </motion.div>

        {/* Neural Network Particles Effect (Simulated with CSS/SVG for performance) */}
        <div className="absolute inset-0 opacity-20 pointer-events-none">
            <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
                <defs>
                    <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                        <path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgba(6, 182, 212, 0.2)" strokeWidth="1"/>
                    </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#grid)" />
            </svg>
        </div>

        <div className="max-w-5xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-900/10 border border-cyan-500/20 text-cyan-400 text-sm font-medium mb-8 backdrop-blur-sm shadow-[0_0_15px_rgba(6,182,212,0.3)]">
              <BrainCircuit className="w-4 h-4" />
              Inteligencia Artificial Autónoma
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-white mb-8 leading-[1.1]">
              Tu Empleado Digital <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 animate-pulse">
                Disponible 24/7
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-zinc-400 max-w-3xl mx-auto font-light leading-relaxed mb-12">
              No son chatbots tontos. Son cerebros digitales que entienden, hablan, ejecutan tareas y cierran ventas mientras tú duermes.
            </p>
          </motion.div>
        </div>
      </section>

      {/* SECCIÓN 1: QUÉ HACEN */}
      <section className="py-24 px-6 bg-zinc-900/20 border-y border-white/5 relative">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <SpotlightCard className="p-8 h-full bg-[#0a0a0a] border-cyan-900/30" spotlightColor="rgba(6, 182, 212, 0.2)">
              <div className="w-14 h-14 bg-cyan-900/20 rounded-full flex items-center justify-center mb-6 text-cyan-400 border border-cyan-500/20 shadow-[0_0_15px_rgba(6,182,212,0.1)]">
                <MessageSquare className="w-7 h-7" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Agentes de WhatsApp</h3>
              <p className="text-zinc-400 leading-relaxed">
                Un cerebro inteligente que contesta a tus clientes al instante, entiende sus dudas (incluso audios), les envía presupuestos personalizados y agenda citas en tu calendario automáticamente.
              </p>
            </SpotlightCard>

            <SpotlightCard className="p-8 h-full bg-[#0a0a0a] border-purple-900/30" spotlightColor="rgba(168, 85, 247, 0.2)">
              <div className="w-14 h-14 bg-purple-900/20 rounded-full flex items-center justify-center mb-6 text-purple-400 border border-purple-500/20 shadow-[0_0_15px_rgba(168,85,247,0.1)]">
                <Phone className="w-7 h-7" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Agentes de Voz</h3>
              <p className="text-zinc-400 leading-relaxed">
                IA que puede realizar o recibir llamadas telefónicas con voz humana natural. Capaz de filtrar clientes, confirmar pedidos, realizar encuestas o gestionar reservas sin intervención humana.
              </p>
            </SpotlightCard>

            <SpotlightCard className="p-8 h-full bg-[#0a0a0a] border-blue-900/30" spotlightColor="rgba(59, 130, 246, 0.2)">
              <div className="w-14 h-14 bg-blue-900/20 rounded-full flex items-center justify-center mb-6 text-blue-400 border border-blue-500/20 shadow-[0_0_15px_rgba(59,130,246,0.1)]">
                <Zap className="w-7 h-7" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Integración Total</h3>
              <p className="text-zinc-400 leading-relaxed">
                Estos agentes no solo hablan; actúan. Pueden consultar tu stock en tiempo real, crear facturas en tu software, o avisarte por Telegram cuando detectan una oportunidad de venta urgente (Hot Lead).
              </p>
            </SpotlightCard>
          </div>
        </div>
      </section>

      {/* SECCIÓN 2: BENEFICIOS */}
      <section className="py-24 px-6 relative">
        <div className="max-w-6xl mx-auto">
          <motion.div 
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
              Por qué tu negocio necesita <span className="text-cyan-500">IA Hoy</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-zinc-900 flex items-center justify-center text-cyan-500 border border-zinc-800">
                  <Clock className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-white mb-2">Cero Esperas</h4>
                  <p className="text-zinc-400 leading-relaxed">
                    El 70% de los clientes se van a la competencia si no reciben respuesta en 5 minutos. Mis agentes responden en <strong className="text-white">2 segundos</strong>, 24/7, 365 días al año.
                  </p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-zinc-900 flex items-center justify-center text-green-500 border border-zinc-800">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-white mb-2">Ahorro de Costes</h4>
                  <p className="text-zinc-400 leading-relaxed">
                    Sustituye tareas repetitivas de atención al cliente por un sistema que no se cansa, no se equivoca, no pide vacaciones y aprende de cada conversación para ser más eficiente.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-zinc-900 flex items-center justify-center text-purple-500 border border-zinc-800">
                  <Users className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-white mb-2">Escalabilidad Infinita</h4>
                  <p className="text-zinc-400 leading-relaxed">
                    Da igual si te escriben 10 personas o 10.000 a la vez por una campaña de marketing. Tu IA los atenderá a todos simultáneamente con la misma calidad y paciencia.
                  </p>
                </div>
              </div>
            </div>

            {/* Visual Representation of Neural Network / AI */}
            <div className="relative h-[400px] bg-zinc-900/30 rounded-2xl border border-zinc-800 overflow-hidden flex items-center justify-center">
               <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-purple-600/10" />
               <motion.div 
                 animate={{ 
                   scale: [1, 1.1, 1],
                   opacity: [0.5, 1, 0.5]
                 }}
                 transition={{ 
                   duration: 4, 
                   repeat: Infinity,
                   ease: "easeInOut" 
                 }}
                 className="w-40 h-40 bg-cyan-500/20 rounded-full blur-3xl absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
               />
               <Bot className="w-32 h-32 text-cyan-400 relative z-10 drop-shadow-[0_0_15px_rgba(6,182,212,0.5)]" />
               
               {/* Floating particles */}
               {[...Array(5)].map((_, i) => (
                 <motion.div
                   key={i}
                   className="absolute w-2 h-2 bg-white rounded-full"
                   initial={{ x: 0, y: 0, opacity: 0 }}
                   animate={{ 
                     x: (Math.random() - 0.5) * 200,
                     y: (Math.random() - 0.5) * 200,
                     opacity: [0, 1, 0]
                   }}
                   transition={{
                     duration: 2 + Math.random() * 2,
                     repeat: Infinity,
                     delay: Math.random() * 2
                   }}
                   style={{ top: '50%', left: '50%' }}
                 />
               ))}
            </div>
          </div>
        </div>
      </section>

      {/* CASOS DE USO */}
      <section className="py-24 px-6 bg-[#080808]">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">Casos de Uso Reales</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 bg-zinc-900/50 border border-zinc-800 rounded-xl hover:border-cyan-500/50 transition-colors group">
              <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">Inmobiliarias</h3>
              <p className="text-zinc-400 text-sm">
                Cualificación de leads interesados en propiedades. La IA pregunta presupuesto, zona y habitaciones. Si encaja, agenda visita automáticamente en el calendario del agente.
              </p>
            </div>
            <div className="p-6 bg-zinc-900/50 border border-zinc-800 rounded-xl hover:border-cyan-500/50 transition-colors group">
              <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">Clínicas y Salud</h3>
              <p className="text-zinc-400 text-sm">
                Gestión de citas médicas y resolución de dudas básicas (precios, tratamientos, preparación). Reducción drástica de llamadas a recepción.
              </p>
            </div>
            <div className="p-6 bg-zinc-900/50 border border-zinc-800 rounded-xl hover:border-cyan-500/50 transition-colors group">
              <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">E-commerce</h3>
              <p className="text-zinc-400 text-sm">
                "¿Dónde está mi pedido?" La IA consulta el número de seguimiento en la base de datos y responde al cliente por WhatsApp en segundos. Recuperación de carritos abandonados.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FORMULARIO */}
      <section className="py-24 px-6 relative">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">¿Listo para contratar a tu primer Agente IA?</h2>
            <p className="text-zinc-400">Cuéntanos qué proceso quieres automatizar.</p>
          </div>
          <ContactForm />
        </div>
      </section>

    </div>
  );
}
