"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { Globe, Zap, Database, ArrowRight, CheckCircle2, Code2, Layers, Smartphone, BrainCircuit, MessageSquare, Bot } from "lucide-react";
import { SpotlightCard } from "@/components/ui/SpotlightCard";
import { ContactForm } from "@/components/ContactForm";

export default function ServicesPage() {
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
    <div className="min-h-screen bg-[#0a0a0a] selection:bg-blue-500/30 font-sans">
      
      {/* HERO SECTION */}
      <section className="relative pt-32 pb-20 px-6 overflow-hidden">
        {/* Background Effects */}
        <motion.div style={{ y: yBackground }} className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl pointer-events-none">
          <div className="absolute top-[20%] left-[10%] w-[500px] h-[500px] bg-blue-600/20 rounded-full blur-[120px] mix-blend-screen" />
          <div className="absolute bottom-[20%] right-[10%] w-[400px] h-[400px] bg-indigo-600/20 rounded-full blur-[100px] mix-blend-screen" />
        </motion.div>

        <div className="max-w-5xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-900/10 border border-blue-500/20 text-blue-400 text-sm font-medium mb-8 backdrop-blur-sm">
              <Zap className="w-4 h-4" />
              Ingeniería de Software
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-white mb-8 leading-[1.1]">
              Desarrollo Web y <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-600">
                Automatización Inteligente
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-zinc-400 max-w-3xl mx-auto font-light leading-relaxed mb-12">
              No hacemos "páginas web". Construimos activos digitales que funcionan como una extensión de tu equipo, trabajando 24/7 sin descanso.
            </p>
          </motion.div>
        </div>
      </section>

      {/* DETALLE SERVICIOS */}
      <section className="py-24 px-6 relative bg-zinc-900/10 border-t border-white/5">
        <div className="max-w-6xl mx-auto">
          
          {/* BLOQUE 1: DESARROLLO WEB */}
          <div className="mb-32">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <motion.div 
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                variants={fadeInUp}
              >
                <div className="w-16 h-16 bg-blue-900/20 rounded-2xl flex items-center justify-center mb-8 border border-blue-500/20">
                  <Globe className="w-8 h-8 text-blue-400" />
                </div>
                <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
                  Desarrollo Web <br/><span className="text-blue-500">Ultra-Optimizado</span>
                </h2>
                <div className="space-y-6 text-lg text-zinc-400 leading-relaxed">
                  <p>
                    La mayoría de agencias usan plantillas pesadas (WordPress, Divi, Elementor) que hacen que tu web sea lenta, insegura y difícil de posicionar en Google.
                  </p>
                  <p>
                    En WebLogic, programamos a medida usando <strong>Next.js y React</strong>, la misma tecnología que usan Facebook, Netflix y Airbnb. Esto garantiza una velocidad instantánea, seguridad de grado bancario y una experiencia de usuario perfecta.
                  </p>
                </div>
                <ul className="mt-8 space-y-4">
                  {[
                    "Carga instantánea (< 1 segundo)",
                    "SEO Técnico Avanzado integrado",
                    "Diseño responsivo perfecto en móvil",
                    "Sin mantenimiento constante de plugins"
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-zinc-300">
                      <CheckCircle2 className="w-5 h-5 text-blue-500 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
              
              <div className="grid gap-6">
                <SpotlightCard className="p-6 bg-zinc-900/30 border-zinc-800" spotlightColor="rgba(59, 130, 246, 0.2)">
                  <Code2 className="w-8 h-8 text-blue-400 mb-4" />
                  <h3 className="text-xl font-bold text-white mb-2">Código Limpio</h3>
                  <p className="text-zinc-400 text-sm">Sin basura. Solo el código necesario para que tu web vuele. Google ama las webs ligeras.</p>
                </SpotlightCard>
                <SpotlightCard className="p-6 bg-zinc-900/30 border-zinc-800" spotlightColor="rgba(59, 130, 246, 0.2)">
                  <Smartphone className="w-8 h-8 text-blue-400 mb-4" />
                  <h3 className="text-xl font-bold text-white mb-2">Mobile First</h3>
                  <p className="text-zinc-400 text-sm">El 80% de tus visitas vienen del móvil. Diseñamos pensando en pantallas pequeñas primero.</p>
                </SpotlightCard>
              </div>
            </div>
          </div>

          {/* BLOQUE 2: AUTOMATIZACIÓN */}
          <div className="mb-32">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div className="order-2 lg:order-1 grid gap-6">
                <SpotlightCard className="p-6 bg-zinc-900/30 border-zinc-800" spotlightColor="rgba(99, 102, 241, 0.2)">
                  <Layers className="w-8 h-8 text-indigo-400 mb-4" />
                  <h3 className="text-xl font-bold text-white mb-2">Conexión Total</h3>
                  <p className="text-zinc-400 text-sm">Hacemos que tu CRM hable con tu Email, y tu Email con tu Facturación.</p>
                </SpotlightCard>
                <SpotlightCard className="p-6 bg-zinc-900/30 border-zinc-800" spotlightColor="rgba(99, 102, 241, 0.2)">
                  <Database className="w-8 h-8 text-indigo-400 mb-4" />
                  <h3 className="text-xl font-bold text-white mb-2">Datos en Tiempo Real</h3>
                  <p className="text-zinc-400 text-sm">Toma decisiones basadas en datos actualizados al segundo, no en excels de la semana pasada.</p>
                </SpotlightCard>
              </div>

              <motion.div 
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                variants={fadeInUp}
                className="order-1 lg:order-2"
              >
                <div className="w-16 h-16 bg-indigo-900/20 rounded-2xl flex items-center justify-center mb-8 border border-indigo-500/20">
                  <Zap className="w-8 h-8 text-indigo-400" />
                </div>
                <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
                  Automatización <br/><span className="text-indigo-500">de Procesos</span>
                </h2>
                <div className="space-y-6 text-lg text-zinc-400 leading-relaxed">
                  <p>
                    ¿Cuántas horas pierdes copiando datos de un sitio a otro? ¿Enviando facturas? ¿Respondiendo preguntas frecuentes?
                  </p>
                  <p>
                    Implementamos sistemas de automatización (usando código, n8n, Make o APIs directas) que se encargan de las tareas repetitivas.
                  </p>
                  <p className="text-white font-medium">
                    El objetivo es simple: que tú y tu equipo os dediquéis a tareas de alto valor, no a ser robots.
                  </p>
                </div>
                <ul className="mt-8 space-y-4">
                  {[
                    "Gestión automática de leads entrantes",
                    "Facturación y contabilidad sincronizada",
                    "Notificaciones automáticas a clientes (WhatsApp/Email)",
                    "Sincronización de stocks e inventarios"
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-zinc-300">
                      <CheckCircle2 className="w-5 h-5 text-indigo-500 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>
          </div>

          {/* BLOQUE 3: AGENTES IA */}
          <div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <motion.div 
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                variants={fadeInUp}
              >
                <div className="w-16 h-16 bg-cyan-900/20 rounded-2xl flex items-center justify-center mb-8 border border-cyan-500/20">
                  <BrainCircuit className="w-8 h-8 text-cyan-400" />
                </div>
                <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
                  Agentes IA <br/><span className="text-cyan-500">Autónomos</span>
                </h2>
                <div className="space-y-6 text-lg text-zinc-400 leading-relaxed">
                  <p>
                    Deja de perder clientes por no responder al instante. El cliente moderno quiere respuestas inmediatas, sea la hora que sea.
                  </p>
                  <p>
                    Implementamos Agentes de IA que actúan como empleados digitales: atienden WhatsApps, contestan llamadas y gestionan tu agenda.
                  </p>
                  <p className="text-white font-medium">
                    No son chatbots básicos con respuestas predefinidas. Son cerebros que entienden el contexto y persiguen el objetivo de venta.
                  </p>
                </div>
                <ul className="mt-8 space-y-4">
                  {[
                    "Atención 24/7 en WhatsApp y Web",
                    "Cualificación de leads automática",
                    "Agendamiento directo en tu calendario",
                    "Voz humana indistinguible y natural"
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-zinc-300">
                      <CheckCircle2 className="w-5 h-5 text-cyan-500 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
              
              <div className="grid gap-6">
                <SpotlightCard className="p-6 bg-zinc-900/30 border-zinc-800" spotlightColor="rgba(6, 182, 212, 0.2)">
                  <MessageSquare className="w-8 h-8 text-cyan-400 mb-4" />
                  <h3 className="text-xl font-bold text-white mb-2">WhatsApp IA</h3>
                  <p className="text-zinc-400 text-sm">Responde audios, envía fotos y cierra ventas directamente por chat.</p>
                </SpotlightCard>
                <SpotlightCard className="p-6 bg-zinc-900/30 border-zinc-800" spotlightColor="rgba(6, 182, 212, 0.2)">
                  <Bot className="w-8 h-8 text-cyan-400 mb-4" />
                  <h3 className="text-xl font-bold text-white mb-2">Voz Natural</h3>
                  <p className="text-zinc-400 text-sm">Realiza y recibe llamadas telefónicas que parecen humanas.</p>
                </SpotlightCard>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* FORMULARIO */}
      <section className="py-24 px-6 relative">
        <div className="max-w-4xl mx-auto">
          <ContactForm />
        </div>
      </section>

    </div>
  );
}
