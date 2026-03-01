"use client";

import { motion } from "framer-motion";
import { ArrowRight, Database, Globe, Zap } from "lucide-react";

export function Hero() {
  return (
    <section className="relative flex min-h-screen w-full flex-col items-center justify-center overflow-hidden px-4 md:flex-row md:px-12 lg:px-24">
      {/* Text Content */}
      <div className="z-10 flex flex-col items-start justify-center md:w-1/2">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <span className="mb-4 inline-block rounded-full bg-blue-500/10 px-4 py-1.5 text-sm font-semibold text-blue-400 backdrop-blur-md border border-blue-500/20">
            Web Engineering & Automation
          </span>
          <h1 className="mb-6 text-5xl font-bold leading-tight tracking-tight md:text-6xl lg:text-7xl">
            Web<span className="text-blue-500">Logic</span>
          </h1>
          <h2 className="mb-6 text-2xl font-medium text-zinc-200 md:text-3xl">
            Donde el código se encuentra con la eficiencia.
          </h2>
          <p className="mb-8 max-w-lg text-lg text-zinc-400">
            Diseño sitios web de alto rendimiento y construyo ecosistemas automatizados que hacen el trabajo pesado por ti.
          </p>
          
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="group flex items-center gap-2 rounded-full bg-blue-600 px-8 py-4 text-lg font-semibold text-white transition-all hover:bg-blue-700 hover:shadow-[0_0_20px_rgba(37,99,235,0.5)]"
          >
            Sistematiza tu negocio
            <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
          </motion.button>
        </motion.div>
      </div>

      {/* Flow Visualizer */}
      <div className="relative mt-16 flex h-[400px] w-full items-center justify-center md:mt-0 md:h-[600px] md:w-1/2">
        <div className="relative h-full w-full">
          {/* Node 1: Web */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="absolute left-[10%] top-[20%] flex h-24 w-24 flex-col items-center justify-center rounded-2xl border border-zinc-700 bg-zinc-900/80 backdrop-blur-xl md:left-[20%]"
          >
            <Globe className="mb-2 h-8 w-8 text-blue-400" />
            <span className="text-xs font-semibold text-zinc-300">Web</span>
          </motion.div>

          {/* Node 2: API */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="absolute left-[50%] top-[50%] flex h-28 w-28 -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center rounded-full border border-blue-500/30 bg-blue-900/20 backdrop-blur-xl shadow-[0_0_30px_rgba(59,130,246,0.2)]"
          >
            <Zap className="mb-2 h-10 w-10 text-blue-500" />
            <span className="text-sm font-bold text-blue-200">Logic</span>
          </motion.div>

          {/* Node 3: Database */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6, duration: 0.5 }}
            className="absolute bottom-[20%] right-[10%] flex h-24 w-24 flex-col items-center justify-center rounded-2xl border border-zinc-700 bg-zinc-900/80 backdrop-blur-xl md:right-[20%]"
          >
            <Database className="mb-2 h-8 w-8 text-purple-400" />
            <span className="text-xs font-semibold text-zinc-300">Data</span>
          </motion.div>

           {/* Connecting Lines (Simulated with SVGs) */}
           <svg className="absolute inset-0 h-full w-full pointer-events-none">
            <motion.path
              d="M 150 150 Q 300 150 400 300" 
              className="hidden md:block"
              stroke="url(#gradient1)"
              strokeWidth="2"
              fill="none"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={{ delay: 0.8, duration: 1.5, ease: "easeInOut" }}
            />
             <motion.path
              d="M 400 300 Q 500 450 650 450" 
              className="hidden md:block"
              stroke="url(#gradient2)"
              strokeWidth="2"
              fill="none"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={{ delay: 1.2, duration: 1.5, ease: "easeInOut" }}
            />
            <defs>
              <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#60A5FA" stopOpacity="0" />
                <stop offset="50%" stopColor="#60A5FA" />
                <stop offset="100%" stopColor="#60A5FA" stopOpacity="0" />
              </linearGradient>
              <linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#A78BFA" stopOpacity="0" />
                <stop offset="50%" stopColor="#A78BFA" />
                <stop offset="100%" stopColor="#A78BFA" stopOpacity="0" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </div>
      
      {/* Background Grid */}
      <div className="absolute inset-0 -z-10 h-full w-full bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
      <div className="absolute left-0 right-0 top-0 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-blue-500 opacity-20 blur-[100px]"></div>
    </section>
  );
}
