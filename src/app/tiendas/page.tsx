"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { 
  ShoppingCart, RefreshCw, Lock, MousePointer2, 
  Mail, ShoppingBag, Gift, Zap, Search, BarChart3, 
  ArrowRight, CheckCircle2, TrendingUp, Truck, CreditCard
} from "lucide-react";
import Link from "next/link";
import { ContactForm } from "@/components/ContactForm";
import { SpotlightCard } from "@/components/ui/SpotlightCard";

export default function EcommercePage() {
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
    <div className="min-h-screen bg-[#050505] selection:bg-blue-500/30 font-sans">
      
      {/* HERO SECTION */}
      <section className="relative pt-32 pb-20 px-6 overflow-hidden">
        <motion.div style={{ y: yBackground }} className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl pointer-events-none">
          <div className="absolute top-[20%] right-[10%] w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[120px]" />
          <div className="absolute bottom-[20%] left-[10%] w-[400px] h-[400px] bg-purple-600/10 rounded-full blur-[100px]" />
        </motion.div>

        <div className="max-w-5xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-900/10 border border-blue-500/20 text-blue-400 text-sm font-medium mb-8">
              <ShoppingCart className="w-4 h-4" />
              E-commerce de Alto Rendimiento
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-white mb-8 leading-[1.1]">
              Tu Negocio Vendiendo <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500">
                24/7 en Automático
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-zinc-400 max-w-3xl mx-auto font-light leading-relaxed mb-12">
              Una tienda online no es un catálogo bonito. Es una máquina de ventas que debe funcionar sola: desde el cobro hasta el aviso al transportista.
            </p>
          </motion.div>
        </div>
      </section>

      {/* CÓMO FUNCIONA */}
      <section className="py-24 px-6 bg-zinc-900/20 border-y border-white/5">
        <div className="max-w-6xl mx-auto">
          <motion.div 
            initial="hidden" 
            whileInView="show" 
            viewport={{ once: true }} 
            variants={fadeInUp} 
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
              El Ciclo de Venta <span className="text-blue-500">Perfecto</span>
            </h2>
            <p className="text-zinc-400 text-lg max-w-2xl mx-auto">
              Así es como estructuramos tu tienda para que tú solo tengas que preocuparte de preparar los paquetes (o ni eso, si hacemos dropshipping).
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
            {/* Línea conectora (visible en desktop) */}
            <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-gradient-to-r from-blue-900/0 via-blue-500/30 to-blue-900/0 -translate-y-1/2 z-0" />

            <SpotlightCard className="p-8 h-full bg-[#0a0a0a] relative z-10" spotlightColor="rgba(59, 130, 246, 0.2)">
              <div className="w-14 h-14 bg-blue-900/20 rounded-full flex items-center justify-center mb-6 text-blue-500 border border-blue-500/20">
                <MousePointer2 className="w-7 h-7" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">1. La Compra</h3>
              <p className="text-zinc-400 leading-relaxed">
                El cliente entra en una web ultrarrápida. Las fotos cargan al instante. El botón de "Comprar" es irresistible. Paga con Apple Pay, Google Pay o Tarjeta en 1 clic. Sin fricción.
              </p>
            </SpotlightCard>

            <SpotlightCard className="p-8 h-full bg-[#0a0a0a] relative z-10" spotlightColor="rgba(168, 85, 247, 0.2)">
              <div className="w-14 h-14 bg-purple-900/20 rounded-full flex items-center justify-center mb-6 text-purple-500 border border-purple-500/20">
                <CreditCard className="w-7 h-7" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">2. El Cobro y Factura</h3>
              <p className="text-zinc-400 leading-relaxed">
                El dinero llega a tu cuenta de Stripe/Banco. Automáticamente, el sistema genera la factura en PDF y se la envía al cliente por email. Tú no haces nada.
              </p>
            </SpotlightCard>

            <SpotlightCard className="p-8 h-full bg-[#0a0a0a] relative z-10" spotlightColor="rgba(16, 185, 129, 0.2)">
              <div className="w-14 h-14 bg-emerald-900/20 rounded-full flex items-center justify-center mb-6 text-emerald-500 border border-emerald-500/20">
                <Truck className="w-7 h-7" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">3. La Logística</h3>
              <p className="text-zinc-400 leading-relaxed">
                El sistema avisa a tu almacén o transportista. Se genera la etiqueta de envío. El cliente recibe un WhatsApp: "Tu pedido ha salido". Todo automático.
              </p>
            </SpotlightCard>
          </div>
        </div>
      </section>

      {/* CARACTERÍSTICAS TÉCNICAS */}
      <section className="py-24 px-6 bg-[#050505]">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div 
              initial="hidden" 
              whileInView="show" 
              viewport={{ once: true }} 
              variants={fadeInUp}
            >
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-8">
                Tecnología que <br />
                <span className="text-blue-500">Vende Sola</span>
              </h2>
              <p className="text-xl text-zinc-400 mb-8 leading-relaxed">
                Olvídate de tiendas lentas que se caen en Black Friday. Usamos arquitectura moderna (Headless Ecommerce) para que tu tienda sea una roca.
              </p>
              
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-zinc-900 flex items-center justify-center text-blue-500 border border-zinc-800">
                    <TrendingUp className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-white mb-2">SEO Nativo</h4>
                    <p className="text-zinc-400">Estructura optimizada para que Google entienda tus productos y los muestre primero.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-zinc-900 flex items-center justify-center text-purple-500 border border-zinc-800">
                    <RefreshCw className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-white mb-2">Sincronización Total</h4>
                    <p className="text-zinc-400">¿Tienes tienda física? El stock se descuenta en tiempo real de la web. Cero errores.</p>
                  </div>
                </div>
              </div>
            </motion.div>
            
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/20 to-transparent rounded-2xl blur-2xl" />
              <div className="relative bg-zinc-900/40 border border-zinc-800 rounded-2xl p-8 backdrop-blur-md shadow-xl">
                 <h3 className="text-white font-bold mb-6 flex items-center gap-2">
                   <Zap className="w-5 h-5 text-yellow-500" /> Integraciones Nativas
                 </h3>
                 <div className="grid grid-cols-2 gap-4">
                    {["Stripe", "PayPal", "Correos", "DHL", "Mailchimp", "WhatsApp API", "FacturaDirecta", "Google Analytics 4"].map((tech) => (
                      <div key={tech} className="p-3 bg-zinc-950 border border-zinc-800 rounded-lg text-zinc-400 text-sm flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-green-500" />
                        {tech}
                      </div>
                    ))}
                 </div>
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
