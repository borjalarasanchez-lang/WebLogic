"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Calculator, Gamepad2 } from "lucide-react";

export function TimeCalculator() {
  const [tasks, setTasks] = useState({
    emails: 30,
    invoices: 5,
    leads: 10
  });

  const calculateSavedTime = () => {
    // Assumptions:
    // Email: 3 mins manual -> 0 auto
    // Invoice: 10 mins manual -> 0 auto
    // Lead: 5 mins manual -> 0 auto
    
    const minutesPerDay = (tasks.emails * 3) + (tasks.invoices * 10) + (tasks.leads * 5);
    const hoursPerYear = (minutesPerDay * 250) / 60; // 250 working days
    const daysPerYear = hoursPerYear / 8; // 8 hour work day

    return {
      hours: Math.round(hoursPerYear),
      days: Math.round(daysPerYear)
    };
  };

  const saved = calculateSavedTime();

  return (
    <div className="p-8 bg-zinc-900/50 backdrop-blur-md border border-zinc-800 rounded-3xl max-w-2xl mx-auto shadow-2xl relative overflow-hidden group hover:border-purple-500/50 transition-colors duration-500">
      <div className="flex items-center gap-3 mb-8">
        <div className="p-3 bg-cyan-500/20 rounded-xl text-cyan-400">
          <Calculator className="w-8 h-8" />
        </div>
        <h3 className="text-3xl font-bold text-white">Calculadora de Tiempo Libre</h3>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
        <div className="space-y-2">
          <label className="text-sm font-bold text-cyan-400 uppercase">Mensajes al día</label>
          <input
            type="number"
            value={tasks.emails}
            onChange={(e) => setTasks({...tasks, emails: Number(e.target.value)})}
            className="w-full bg-zinc-950 border-2 border-zinc-800 rounded-xl p-4 text-white text-xl focus:outline-none focus:border-cyan-500 focus:shadow-[0_0_15px_rgba(6,182,212,0.3)] transition-all"
          />
        </div>
        <div className="space-y-2">
          <label className="text-sm font-bold text-purple-400 uppercase">Facturas cada día</label>
          <input
            type="number"
            value={tasks.invoices}
            onChange={(e) => setTasks({...tasks, invoices: Number(e.target.value)})}
            className="w-full bg-zinc-950 border-2 border-zinc-800 rounded-xl p-4 text-white text-xl focus:outline-none focus:border-purple-500 focus:shadow-[0_0_15px_rgba(168,85,247,0.3)] transition-all"
          />
        </div>
        <div className="space-y-2">
          <label className="text-sm font-bold text-emerald-400 uppercase">Clientes cada día</label>
          <input
            type="number"
            value={tasks.leads}
            onChange={(e) => setTasks({...tasks, leads: Number(e.target.value)})}
            className="w-full bg-zinc-950 border-2 border-zinc-800 rounded-xl p-4 text-white text-xl focus:outline-none focus:border-emerald-500 focus:shadow-[0_0_15px_rgba(16,185,129,0.3)] transition-all"
          />
        </div>
      </div>

      <div className="bg-gradient-to-r from-cyan-900/40 to-purple-900/40 rounded-2xl p-8 border border-white/10 text-center relative overflow-hidden group-hover:scale-105 transition-transform duration-500">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity" />
        
        <p className="text-zinc-300 mb-2 font-bold text-lg uppercase tracking-wider">¡Podrías estar jugando!</p>
        <div className="flex items-baseline justify-center gap-4">
          <motion.span 
            key={saved.days}
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="text-7xl md:text-8xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400 drop-shadow-2xl"
          >
            {saved.days}
          </motion.span>
          <span className="text-2xl text-white font-bold">Días enteros</span>
        </div>
        <div className="mt-6 flex items-center justify-center gap-2 text-zinc-300">
          <Gamepad2 className="w-5 h-5 text-purple-400" />
          <p className="text-lg">
            Son <span className="text-white font-bold text-xl">{saved.hours} horas</span> libres para ir al parque, jugar o dormir.
          </p>
        </div>
      </div>
    </div>
  );
}
