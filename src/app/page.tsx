"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { 
  CheckCircle2, Zap, ArrowRight, ChevronDown, Clock, Code2, 
  BrainCircuit, Bot, Globe, ShoppingBag, Database, ShieldCheck, Quote
} from "lucide-react";
import { AnimatedButton } from "@/components/ui/AnimatedButton";
import { SpotlightCard } from "@/components/ui/SpotlightCard";

export default function Home() {
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
    <div className="min-h-screen bg-[#0a0a0a] selection:bg-blue-500/30 overflow-x-hidden">
      
      {/* 1. HERO SECTION EXPANDIDA */}
      <section className="relative min-h-screen flex items-center justify-center px-6 pt-20 pb-32 overflow-hidden">
        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 pointer-events-none mix-blend-soft-light"></div>
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />

        {/* Background Effects */}
        <motion.div style={{ y: yBackground }} className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl pointer-events-none">
          <div className="absolute top-[20%] left-[10%] w-[500px] h-[500px] bg-blue-600/30 rounded-full blur-[120px] mix-blend-screen" />
          <div className="absolute bottom-[20%] right-[10%] w-[400px] h-[400px] bg-purple-600/30 rounded-full blur-[100px] mix-blend-screen" />
        </motion.div>

        <div className="max-w-5xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-900/10 border border-blue-500/20 text-blue-400 text-sm font-medium mb-8 backdrop-blur-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
              </span>
              Ingeniería de Software para Negocios
            </div>
            
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-white mb-8 leading-[1.1]">
              Transformamos Empresas Lentas en <br className="hidden md:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-500 to-blue-600">
                Máquinas Automáticas
              </span>
            </h1>
            
            <p className="max-w-2xl mx-auto mb-10 text-xl md:text-2xl text-zinc-400 font-light leading-relaxed">
              Ingeniería de software, diseño de alto impacto y automatización con IA para negocios que quieren escalar sin límites.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <AnimatedButton 
                href="/diagnostico"
                variant="primary"
                className="w-full sm:w-auto shadow-lg shadow-blue-900/20 px-8 py-4 text-lg"
              >
                Solicitar Auditoría Técnica
              </AnimatedButton>
              <AnimatedButton 
                href="/proyectos"
                variant="secondary"
                icon={true}
                className="w-full sm:w-auto px-8 py-4 text-lg"
              >
                Ver Casos de Éxito
              </AnimatedButton>
            </div>
          </motion.div>
        </div>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 text-zinc-600 animate-bounce"
        >
          <ChevronDown className="w-8 h-8" />
        </motion.div>
      </section>

      {/* 1.5. MANIFIESTO */}
      <section className="py-24 px-6 bg-zinc-900/10 border-t border-white/5 relative overflow-hidden">
        {/* Background Gradients */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-5xl pointer-events-none">
          <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 bg-blue-900/10 rounded-full blur-3xl mix-blend-screen" />
          <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-96 h-96 bg-purple-900/10 rounded-full blur-3xl mix-blend-screen" />
        </div>

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="bg-zinc-900/40 backdrop-blur-sm border border-white/10 rounded-3xl p-8 md:p-16 shadow-2xl"
          >
            <Quote className="w-12 h-12 text-blue-500/30 mx-auto mb-8 rotate-180" />
            
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-10 leading-tight">
              No hacemos <span className="text-zinc-600 line-through decoration-blue-500/50 decoration-2">páginas bonitas</span>. <br/>
              Construimos <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">ecosistemas digitales</span>.
            </h2>
            
            <div className="space-y-8 text-lg md:text-xl text-zinc-300 leading-relaxed font-light">
              <p>
                La estética sin función es solo decoración. En <strong className="text-white font-medium">WebLogic</strong>, fusionamos ingeniería de software y Agentes de IA para eliminar la ineficiencia operativa de raíz.
              </p>
              <p>
                Convertimos tareas manuales en <strong className="text-blue-400 font-medium">código</strong>, excels caóticos en <strong className="text-purple-400 font-medium">bases de datos vivas</strong> y webs estáticas en herramientas de venta que trabajan <strong className="text-emerald-400 font-medium">24/7</strong> mientras tú recuperas tu vida.
              </p>
            </div>

            <div className="mt-12 pt-8 border-t border-white/5 flex justify-center items-center gap-2">
              <div className="h-px w-12 bg-zinc-800" />
              <span className="text-xs font-bold tracking-[0.2em] text-zinc-500 uppercase">The WebLogic Philosophy</span>
              <div className="h-px w-12 bg-zinc-800" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* 2. RESUMEN DE SERVICIOS (WEB + TIENDAS + IA) */}
      <section className="py-32 px-6 bg-[#0a0a0a] relative border-t border-white/5">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center mb-20"
          >
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
              Nuestra Tríada de <span className="text-blue-500">Valor</span>
            </h2>
            <p className="text-xl text-zinc-400 max-w-3xl mx-auto">
              No somos una agencia 360º que hace de todo. Somos especialistas en tres pilares fundamentales que, combinados, disparan la rentabilidad de cualquier negocio.
            </p>
          </motion.div>

          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {/* Servicio 1: Desarrollo Web */}
            <SpotlightCard className="p-8 h-full bg-zinc-900/30 border-zinc-800" spotlightColor="rgba(59, 130, 246, 0.2)">
              <div className="w-16 h-16 bg-blue-900/20 rounded-2xl flex items-center justify-center mb-8 border border-blue-500/20 text-blue-400">
                <Globe className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Desarrollo Web Ultra-Rápido</h3>
              <p className="text-zinc-400 leading-relaxed mb-6">
                Olvídate de WordPress lentos y plantillas genéricas. Programamos a medida con <strong>Next.js</strong> para lograr tiempos de carga instantáneos (Core Web Vitals perfectos) y un posicionamiento SEO superior. Tu web no solo se verá bien; volará.
              </p>
              <ul className="space-y-3 text-sm text-zinc-300">
                <li className="flex gap-2 items-center"><CheckCircle2 className="w-4 h-4 text-blue-500"/> Carga en &lt; 1 segundo</li>
                <li className="flex gap-2 items-center"><CheckCircle2 className="w-4 h-4 text-blue-500"/> SEO Técnico Avanzado</li>
                <li className="flex gap-2 items-center"><CheckCircle2 className="w-4 h-4 text-blue-500"/> Seguridad de grado bancario</li>
              </ul>
            </SpotlightCard>

            {/* Servicio 2: E-commerce */}
            <SpotlightCard className="p-8 h-full bg-zinc-900/30 border-zinc-800" spotlightColor="rgba(168, 85, 247, 0.2)">
              <div className="w-16 h-16 bg-purple-900/20 rounded-2xl flex items-center justify-center mb-8 border border-purple-500/20 text-purple-400">
                <ShoppingBag className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">E-commerce Inteligente</h3>
              <p className="text-zinc-400 leading-relaxed mb-6">
                Creamos tiendas online que no solo venden, sino que se gestionan solas. Sincronizamos tu stock en tiempo real, automatizamos la facturación y conectamos con tu logística. Diseñamos embudos de venta optimizados para maximizar el ticket medio.
              </p>
              <ul className="space-y-3 text-sm text-zinc-300">
                <li className="flex gap-2 items-center"><CheckCircle2 className="w-4 h-4 text-purple-500"/> Pasarelas de pago optimizadas</li>
                <li className="flex gap-2 items-center"><CheckCircle2 className="w-4 h-4 text-purple-500"/> Gestión de stock automatizada</li>
                <li className="flex gap-2 items-center"><CheckCircle2 className="w-4 h-4 text-purple-500"/> Recuperación de carritos</li>
              </ul>
            </SpotlightCard>

            {/* Servicio 3: Agentes IA */}
            <SpotlightCard className="p-8 h-full bg-zinc-900/30 border-zinc-800" spotlightColor="rgba(6, 182, 212, 0.2)">
              <div className="w-16 h-16 bg-cyan-900/20 rounded-2xl flex items-center justify-center mb-8 border border-cyan-500/20 text-cyan-400">
                <BrainCircuit className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Agentes IA Autónomos</h3>
              <p className="text-zinc-400 leading-relaxed mb-6">
                El futuro de la atención al cliente. Implementamos "empleados digitales" que atienden WhatsApp, responden llamadas y agendan citas las 24 horas del día. Entienden el contexto, tienen voz humana y nunca se cansan ni piden vacaciones.
              </p>
              <ul className="space-y-3 text-sm text-zinc-300">
                <li className="flex gap-2 items-center"><CheckCircle2 className="w-4 h-4 text-cyan-500"/> Atención 24/7 inmediata</li>
                <li className="flex gap-2 items-center"><CheckCircle2 className="w-4 h-4 text-cyan-500"/> Cualificación de leads</li>
                <li className="flex gap-2 items-center"><CheckCircle2 className="w-4 h-4 text-cyan-500"/> Agendamiento automático</li>
              </ul>
            </SpotlightCard>
          </motion.div>
          
          <div className="mt-16 text-center">
             <AnimatedButton href="/servicios" variant="primary">Explorar Todos los Servicios</AnimatedButton>
          </div>
        </div>
      </section>

      {/* 3. ¿POR QUÉ WEBLOGIC? (DIFERENCIACIÓN) */}
      <section className="py-32 px-6 relative bg-zinc-900/20">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
               initial="hidden"
               whileInView="show"
               viewport={{ once: true }}
               variants={fadeInUp}
            >
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-8 leading-tight">
                Lógica Pura. <br/>
                <span className="text-emerald-500">Resultados Tangibles.</span>
              </h2>
              <div className="space-y-8">
                <div className="flex gap-6">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-zinc-800 flex items-center justify-center border border-zinc-700">
                    <Code2 className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-white mb-2">Ingeniería vs. Decoración</h4>
                    <p className="text-zinc-400 leading-relaxed">
                      No somos diseñadores gráficos que "hacen webs". Somos ingenieros de software obsesionados con la eficiencia. Cada línea de código tiene un propósito comercial.
                    </p>
                  </div>
                </div>
                
                <div className="flex gap-6">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-zinc-800 flex items-center justify-center border border-zinc-700">
                    <Zap className="w-6 h-6 text-yellow-400" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-white mb-2">Velocidad Obsesiva</h4>
                    <p className="text-zinc-400 leading-relaxed">
                      Sabemos que cada 100ms de retraso te cuesta un 1% de ventas. Optimizamos hasta el último byte para que tu infraestructura vuele.
                    </p>
                  </div>
                </div>

                <div className="flex gap-6">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-zinc-800 flex items-center justify-center border border-zinc-700">
                    <Database className="w-6 h-6 text-blue-400" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-white mb-2">Conectividad Total (API First)</h4>
                    <p className="text-zinc-400 leading-relaxed">
                      Usamos Make (Integromat), Zapier y APIs personalizadas para conectar tu web con tu CRM, tu ERP y tus herramientas diarias. Todo fluye.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-emerald-500/20 to-blue-600/20 rounded-2xl blur-xl" />
              <div className="relative bg-[#050505] border border-zinc-800 rounded-2xl p-8 aspect-square flex items-center justify-center overflow-hidden">
                {/* Abstract visualization of Logic/Connection */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(16,185,129,0.1),transparent_70%)]" />
                <div className="grid grid-cols-2 gap-4 w-full h-full p-4">
                   <motion.div 
                     className="bg-zinc-900/50 rounded-xl border border-zinc-800 flex items-center justify-center"
                     whileHover={{ scale: 1.05, borderColor: "rgba(59,130,246,0.5)" }}
                   >
                     <Globe className="w-10 h-10 text-blue-500" />
                   </motion.div>
                   <motion.div 
                     className="bg-zinc-900/50 rounded-xl border border-zinc-800 flex items-center justify-center"
                     whileHover={{ scale: 1.05, borderColor: "rgba(16,185,129,0.5)" }}
                   >
                     <Database className="w-10 h-10 text-emerald-500" />
                   </motion.div>
                   <motion.div 
                     className="bg-zinc-900/50 rounded-xl border border-zinc-800 flex items-center justify-center"
                     whileHover={{ scale: 1.05, borderColor: "rgba(168,85,247,0.5)" }}
                   >
                     <Bot className="w-10 h-10 text-purple-500" />
                   </motion.div>
                   <motion.div 
                     className="bg-zinc-900/50 rounded-xl border border-zinc-800 flex items-center justify-center"
                     whileHover={{ scale: 1.05, borderColor: "rgba(250,204,21,0.5)" }}
                   >
                     <Zap className="w-10 h-10 text-yellow-500" />
                   </motion.div>
                </div>
                {/* Connecting lines animation could be added here */}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. CASOS DE ÉXITO (SNEAK PEEK) */}
      <section className="py-32 px-6 bg-zinc-900/10 border-t border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
            <div>
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
                Casos de Éxito
              </h2>
              <p className="text-xl text-zinc-400 max-w-2xl">
                Resultados reales. Problemas complejos resueltos con tecnología simple.
              </p>
            </div>
            <AnimatedButton href="/proyectos" variant="secondary">Ver Todos los Proyectos</AnimatedButton>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Case 1 */}
            <div className="group relative bg-[#0a0a0a] border border-zinc-800 rounded-2xl overflow-hidden hover:border-blue-500/50 transition-colors duration-300">
              <div className="h-48 bg-gradient-to-br from-blue-900/20 to-zinc-900 p-8 flex flex-col justify-end relative">
                <div className="absolute top-4 right-4 p-2 bg-black/50 rounded-lg backdrop-blur-sm border border-white/10">
                   <ArrowRight className="w-5 h-5 text-white group-hover:translate-x-1 transition-transform" />
                </div>
                <h3 className="text-2xl font-bold text-white relative z-10">Inmobiliaria Moderna</h3>
                <p className="text-blue-400 text-sm font-medium relative z-10">Automatización de Propiedades</p>
              </div>
              <div className="p-8">
                <p className="text-zinc-400 text-sm mb-6 leading-relaxed">
                  Sincronización automática de 500+ propiedades entre la web y portales inmobiliarios (Idealista, Fotocasa). Ahorro de 20h/semana.
                </p>
                <div className="flex gap-2">
                  <span className="text-xs px-2 py-1 rounded bg-zinc-900 border border-zinc-700 text-zinc-300">Next.js</span>
                  <span className="text-xs px-2 py-1 rounded bg-zinc-900 border border-zinc-700 text-zinc-300">Python</span>
                  <span className="text-xs px-2 py-1 rounded bg-zinc-900 border border-zinc-700 text-zinc-300">APIs</span>
                </div>
              </div>
            </div>

            {/* Case 2 */}
            <div className="group relative bg-[#0a0a0a] border border-zinc-800 rounded-2xl overflow-hidden hover:border-purple-500/50 transition-colors duration-300">
              <div className="h-48 bg-gradient-to-br from-purple-900/20 to-zinc-900 p-8 flex flex-col justify-end relative">
                <div className="absolute top-4 right-4 p-2 bg-black/50 rounded-lg backdrop-blur-sm border border-white/10">
                   <ArrowRight className="w-5 h-5 text-white group-hover:translate-x-1 transition-transform" />
                </div>
                <h3 className="text-2xl font-bold text-white relative z-10">E-commerce Moda</h3>
                <p className="text-purple-400 text-sm font-medium relative z-10">Tienda 24/7 sin Roturas</p>
              </div>
              <div className="p-8">
                <p className="text-zinc-400 text-sm mb-6 leading-relaxed">
                  Unificación de stock físico y online. Si se vende en tienda, desaparece de la web. Aumento del 120% en ventas mensuales.
                </p>
                <div className="flex gap-2">
                  <span className="text-xs px-2 py-1 rounded bg-zinc-900 border border-zinc-700 text-zinc-300">Shopify</span>
                  <span className="text-xs px-2 py-1 rounded bg-zinc-900 border border-zinc-700 text-zinc-300">Make</span>
                </div>
              </div>
            </div>

            {/* Case 3 */}
            <div className="group relative bg-[#0a0a0a] border border-zinc-800 rounded-2xl overflow-hidden hover:border-emerald-500/50 transition-colors duration-300">
              <div className="h-48 bg-gradient-to-br from-emerald-900/20 to-zinc-900 p-8 flex flex-col justify-end relative">
                <div className="absolute top-4 right-4 p-2 bg-black/50 rounded-lg backdrop-blur-sm border border-white/10">
                   <ArrowRight className="w-5 h-5 text-white group-hover:translate-x-1 transition-transform" />
                </div>
                <h3 className="text-2xl font-bold text-white relative z-10">Clínica Dental</h3>
                <p className="text-emerald-400 text-sm font-medium relative z-10">Sistema de Citas IA</p>
              </div>
              <div className="p-8">
                <p className="text-zinc-400 text-sm mb-6 leading-relaxed">
                  Reducción del 60% en llamadas. Sistema automático de recordatorios por WhatsApp y relleno de huecos en agenda.
                </p>
                <div className="flex gap-2">
                  <span className="text-xs px-2 py-1 rounded bg-zinc-900 border border-zinc-700 text-zinc-300">WhatsApp API</span>
                  <span className="text-xs px-2 py-1 rounded bg-zinc-900 border border-zinc-700 text-zinc-300">Calendar</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. CTA FINAL */}
      <section className="py-32 px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-blue-900/5" />
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
            ¿Tu web te da dinero o te da trabajo?
          </h2>
          <p className="text-xl text-zinc-400 mb-12 max-w-2xl mx-auto">
            Hagamos una auditoría rápida de tu situación actual. Sin coste, sin compromiso. Solo un análisis honesto de dónde estás perdiendo oportunidades.
          </p>
          <AnimatedButton 
            href="/diagnostico"
            variant="primary"
            className="!px-8 !py-4 text-lg shadow-xl shadow-blue-600/20"
          >
            Empezar Auditoría Gratuita
          </AnimatedButton>
        </div>
      </section>

    </div>
  );
}
