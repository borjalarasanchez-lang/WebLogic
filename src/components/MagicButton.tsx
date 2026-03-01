"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";
import { Sparkles } from "lucide-react";

interface MagicButtonProps {
  children: ReactNode;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  className?: string;
  disabled?: boolean;
}

export function MagicButton({ children, onClick, type = "button", className = "", disabled }: MagicButtonProps) {
  return (
    <motion.button
      type={type}
      onClick={onClick}
      disabled={disabled}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={`relative group overflow-hidden rounded-full bg-gradient-to-r from-cyan-500 to-purple-600 p-[2px] focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2 focus:ring-offset-black ${className} ${disabled ? 'opacity-50 cursor-not-allowed' : ''}`}
    >
      <div className="relative flex items-center justify-center gap-2 rounded-full bg-black px-8 py-3 transition-colors group-hover:bg-transparent">
        <span className="relative z-10 font-bold text-white group-hover:text-white flex items-center gap-2">
          <Sparkles className="w-4 h-4 text-yellow-300 animate-pulse" />
          {children}
          <Sparkles className="w-4 h-4 text-yellow-300 animate-pulse delay-75" />
        </span>
      </div>
      
      {/* Sparkles Effect on Hover */}
      <motion.div
        className="absolute inset-0 -z-10 bg-gradient-to-r from-cyan-400 via-purple-500 to-emerald-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-md"
      />
      
      {/* Particle Explosions (Simplified visual trick) */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-full w-2 h-2 bg-yellow-400 rounded-full group-hover:animate-ping opacity-0 group-hover:opacity-100 transition-opacity delay-100" />
      <div className="absolute bottom-0 left-1/4 translate-y-full w-1 h-1 bg-cyan-400 rounded-full group-hover:animate-ping opacity-0 group-hover:opacity-100 transition-opacity delay-200" />
      <div className="absolute top-1/2 right-0 translate-x-full w-1.5 h-1.5 bg-purple-400 rounded-full group-hover:animate-ping opacity-0 group-hover:opacity-100 transition-opacity delay-300" />
    </motion.button>
  );
}
