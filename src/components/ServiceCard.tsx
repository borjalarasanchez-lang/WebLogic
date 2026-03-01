"use client";

import { useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { LucideIcon } from "lucide-react";

interface ServiceCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  gradient: string;
}

export function ServiceCard({ title, description, icon: Icon, gradient }: ServiceCardProps) {
  const ref = useRef<HTMLDivElement>(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseX = useSpring(x, { stiffness: 500, damping: 100 });
  const mouseY = useSpring(y, { stiffness: 500, damping: 100 });

  function onMouseMove({ currentTarget, clientX, clientY }: React.MouseEvent<HTMLDivElement>) {
    const { left, top } = currentTarget.getBoundingClientRect();
    x.set(clientX - left);
    y.set(clientY - top);
  }

  const rotateX = useTransform(mouseY, [0, 400], [10, -10]);
  const rotateY = useTransform(mouseX, [0, 400], [-10, 10]);

  return (
    <motion.div
      ref={ref}
      onMouseMove={onMouseMove}
      onMouseLeave={() => {
        x.set(200);
        y.set(200);
      }}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
      className="relative h-[400px] w-full rounded-xl bg-zinc-900/40 border border-zinc-800 p-8 group hover:shadow-2xl hover:shadow-cyan-500/20 transition-shadow duration-500 cursor-pointer overflow-hidden"
    >
      <div 
        style={{ transform: "translateZ(75px)" }} 
        className={`absolute top-0 right-0 p-32 bg-gradient-to-br ${gradient} opacity-20 blur-[80px] rounded-full pointer-events-none group-hover:opacity-40 transition-opacity duration-500`} 
      />

      <div style={{ transform: "translateZ(50px)" }} className="relative z-10 h-full flex flex-col justify-between">
        <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${gradient} p-0.5 mb-6`}>
          <div className="w-full h-full bg-black rounded-[6px] flex items-center justify-center">
            <Icon className="w-6 h-6 text-zinc-100" />
          </div>
        </div>

        <div>
          <h3 className="text-2xl font-bold text-zinc-100 mb-4 group-hover:text-cyan-400 transition-colors">
            {title}
          </h3>
          <p className="text-zinc-400 leading-relaxed group-hover:text-zinc-300 transition-colors">
            {description}
          </p>
        </div>

        <div className="pt-8 border-t border-zinc-800/50 mt-8 flex items-center justify-between">
          <span className="text-xs font-bold text-zinc-500 group-hover:text-cyan-500 transition-colors tracking-widest">
            VER MAGIA ✨
          </span>
          <div className="w-8 h-8 rounded-full border border-zinc-700 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all">
            →
          </div>
        </div>
      </div>
    </motion.div>
  );
}
