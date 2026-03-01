"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { 
  Instagram, ShoppingBag, Table, MessageCircle, Code2
} from "lucide-react";

export function IntegrationMap() {
  const nodes = [
    { icon: Instagram, label: "Instagram", color: "text-pink-500", pos: "top-left" },
    { icon: ShoppingBag, label: "Shopify", color: "text-green-500", pos: "top-right" },
    { icon: Table, label: "Sheets", color: "text-emerald-500", pos: "bottom-left" },
    { icon: MessageCircle, label: "WhatsApp", color: "text-green-400", pos: "bottom-right" },
  ];

  const [particles, setParticles] = useState<{ x: number; y: number; duration: number }[]>([]);

  useEffect(() => {
    const newParticles = Array.from({ length: 20 }).map(() => ({
      x: Math.random() * 1000,
      y: Math.random() * 600,
      duration: Math.random() * 5 + 5
    }));
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setParticles(newParticles);
  }, []);

  return (
    <div className="relative w-full h-[600px] flex items-center justify-center overflow-hidden">
      {/* Central Hub */}
      <motion.div 
        animate={{ scale: [1, 1.05, 1] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="relative z-20 w-32 h-32 rounded-full bg-black border border-cyan-500/50 flex items-center justify-center shadow-[0_0_50px_rgba(6,182,212,0.3)]"
      >
        <div className="text-center">
          <Code2 className="w-10 h-10 text-cyan-400 mx-auto mb-2" />
          <span className="font-mono text-[10px] font-bold tracking-widest text-zinc-300">WEBLOGIC</span>
        </div>
        
        {/* Pulse Effect */}
        <div className="absolute inset-0 rounded-full border border-cyan-500/30 animate-ping opacity-20" />
        <div className="absolute -inset-4 rounded-full border border-cyan-500/10 animate-pulse opacity-20" />
      </motion.div>

      {/* Connecting Lines */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none z-10">
        <defs>
          <linearGradient id="line-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="rgba(6,182,212,0)" />
            <stop offset="50%" stopColor="rgba(6,182,212,0.5)" />
            <stop offset="100%" stopColor="rgba(6,182,212,0)" />
          </linearGradient>
        </defs>
        
        {/* Lines will be absolutely positioned via CSS in a real scenario, but here simplified */}
        <motion.path 
          d="M 200,150 L 400,300" 
          stroke="url(#line-gradient)" 
          strokeWidth="2" 
          fill="none"
          initial={{ pathLength: 0, opacity: 0 }}
          whileInView={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 1.5, delay: 0.5 }}
          className="md:block hidden"
        />
        <motion.path 
          d="M 600,150 L 400,300" 
          stroke="url(#line-gradient)" 
          strokeWidth="2" 
          fill="none"
          initial={{ pathLength: 0, opacity: 0 }}
          whileInView={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 1.5, delay: 0.7 }}
          className="md:block hidden"
        />
        <motion.path 
          d="M 200,450 L 400,300" 
          stroke="url(#line-gradient)" 
          strokeWidth="2" 
          fill="none"
          initial={{ pathLength: 0, opacity: 0 }}
          whileInView={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 1.5, delay: 0.9 }}
          className="md:block hidden"
        />
        <motion.path 
          d="M 600,450 L 400,300" 
          stroke="url(#line-gradient)" 
          strokeWidth="2" 
          fill="none"
          initial={{ pathLength: 0, opacity: 0 }}
          whileInView={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 1.5, delay: 1.1 }}
          className="md:block hidden"
        />
      </svg>

      {/* Satellite Nodes */}
      <div className="absolute inset-0 max-w-4xl mx-auto">
        {nodes.map((node, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: i * 0.2 }}
            className={`absolute p-6 rounded-2xl bg-zinc-900/80 backdrop-blur-md border border-zinc-800 shadow-xl flex flex-col items-center gap-3 w-32 md:w-40
              ${node.pos === 'top-left' ? 'top-10 left-10 md:top-20 md:left-20' : ''}
              ${node.pos === 'top-right' ? 'top-10 right-10 md:top-20 md:right-20' : ''}
              ${node.pos === 'bottom-left' ? 'bottom-10 left-10 md:bottom-20 md:left-20' : ''}
              ${node.pos === 'bottom-right' ? 'bottom-10 right-10 md:bottom-20 md:right-20' : ''}
            `}
          >
            <node.icon className={`w-8 h-8 ${node.color}`} />
            <span className="font-bold text-sm text-zinc-300">{node.label}</span>
            <div className={`absolute w-2 h-2 rounded-full ${node.color.replace('text-', 'bg-')} animate-pulse top-3 right-3`} />
          </motion.div>
        ))}
      </div>
      
      {/* Background Particles */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        {particles.map((p, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-cyan-500 rounded-full"
            initial={{ 
              x: p.x, 
              y: p.y, 
              opacity: 0 
            }}
            animate={{ 
              y: [null, -100], 
              opacity: [0, 1, 0] 
            }}
            transition={{ 
              duration: p.duration, 
              repeat: Infinity,
              ease: "linear" 
            }}
          />
        ))}
      </div>
    </div>
  );
}
