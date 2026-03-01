"use client";

import { motion } from "framer-motion";
import { 
  Bot, 
  Code, 
  Database, 
  Layout, 
  Server, 
  Settings, 
  Workflow 
} from "lucide-react";

export function BentoGrid() {
  return (
    <section className="py-24 px-4 md:px-12 lg:px-24">
      <div className="mb-16 text-center">
        <h2 className="text-3xl font-bold md:text-5xl">Tech Stack</h2>
        <p className="mt-4 text-zinc-400">Herramientas de vanguardia para soluciones robustas.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 max-w-6xl mx-auto h-auto lg:h-[600px]">
        {/* Frontend - Large Block */}
        <motion.div 
          whileHover={{ scale: 0.98 }}
          className="col-span-1 md:col-span-2 lg:col-span-2 row-span-2 bg-zinc-900/50 border border-zinc-800 rounded-3xl p-8 flex flex-col justify-between"
        >
          <div>
            <div className="bg-blue-500/10 p-3 rounded-xl w-fit mb-4">
              <Layout className="text-blue-500 h-6 w-6" />
            </div>
            <h3 className="text-2xl font-bold text-zinc-100">Frontend Mastery</h3>
            <p className="mt-2 text-zinc-400">Creación de interfaces fluidas y reactivas con las últimas tecnologías del ecosistema React.</p>
          </div>
          <div className="flex flex-wrap gap-2 mt-8">
            {["Next.js 14", "React", "Tailwind CSS", "Framer Motion", "TypeScript"].map((tag) => (
              <span key={tag} className="px-3 py-1 bg-zinc-800 rounded-full text-xs text-zinc-300 border border-zinc-700">
                {tag}
              </span>
            ))}
          </div>
        </motion.div>

        {/* Backend - Tall Block */}
        <motion.div 
          whileHover={{ scale: 0.98 }}
          className="col-span-1 lg:col-span-1 row-span-2 bg-zinc-900/50 border border-zinc-800 rounded-3xl p-8 flex flex-col justify-between"
        >
           <div>
            <div className="bg-purple-500/10 p-3 rounded-xl w-fit mb-4">
              <Server className="text-purple-500 h-6 w-6" />
            </div>
            <h3 className="text-xl font-bold text-zinc-100">Backend & Tools</h3>
            <p className="mt-2 text-zinc-400 text-sm">Infraestructura sólida y escalable.</p>
          </div>
          <div className="space-y-3 mt-4">
            <div className="flex items-center gap-3 text-zinc-400">
              <Database className="h-4 w-4" /> PostgreSQL
            </div>
             <div className="flex items-center gap-3 text-zinc-400">
              <Code className="h-4 w-4" /> Node.js
            </div>
             <div className="flex items-center gap-3 text-zinc-400">
              <Settings className="h-4 w-4" /> Python
            </div>
          </div>
        </motion.div>

        {/* Automation - Wide Block */}
        <motion.div 
           whileHover={{ scale: 0.98 }}
           className="col-span-1 md:col-span-3 lg:col-span-1 row-span-1 bg-zinc-900/50 border border-zinc-800 rounded-3xl p-6"
        >
          <div className="flex items-center gap-3 mb-2">
            <Workflow className="text-green-500 h-5 w-5" />
            <h3 className="font-bold text-zinc-100">Automation</h3>
          </div>
          <div className="flex flex-wrap gap-2 mt-2">
             <span className="text-xs text-zinc-400 bg-zinc-950 px-2 py-1 rounded">Make.com</span>
             <span className="text-xs text-zinc-400 bg-zinc-950 px-2 py-1 rounded">n8n</span>
             <span className="text-xs text-zinc-400 bg-zinc-950 px-2 py-1 rounded">Zapier</span>
          </div>
        </motion.div>

        {/* AI Integration - Wide Block */}
         <motion.div 
           whileHover={{ scale: 0.98 }}
           className="col-span-1 md:col-span-3 lg:col-span-1 row-span-1 bg-gradient-to-br from-indigo-900/20 to-purple-900/20 border border-indigo-500/20 rounded-3xl p-6"
        >
          <div className="flex items-center gap-3 mb-2">
            <Bot className="text-indigo-400 h-5 w-5" />
            <h3 className="font-bold text-indigo-100">AI Powered</h3>
          </div>
          <p className="text-xs text-indigo-200/70">Integración nativa con OpenAI y modelos LLM.</p>
        </motion.div>
      </div>
    </section>
  );
}
