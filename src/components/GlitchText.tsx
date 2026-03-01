"use client";

import { useState, useEffect } from "react";

export function GlitchText({ children }: { children: string }) {
  const [glitch, setGlitch] = useState(false);
  const [glitchedText, setGlitchedText] = useState(children);
  
  useEffect(() => {
    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()";
    const randomChar = () => chars[Math.floor(Math.random() * chars.length)];

    const interval = setInterval(() => {
      if (Math.random() > 0.95) {
        setGlitch(true);
        setGlitchedText(children.split("").map((c) => (Math.random() > 0.8 ? randomChar() : c)).join(""));
        
        setTimeout(() => {
          setGlitch(false);
          setGlitchedText(children);
        }, 200);
      }
    }, 3000);

    return () => clearInterval(interval);
  }, [children]);

  return (
    <span className={`relative inline-block font-mono ${glitch ? "text-cyan-400" : ""}`}>
      {glitch ? (
        <>
          <span className="absolute -left-[2px] -top-[2px] text-red-500 opacity-50 clip-rect-random animate-glitch-1">
            {glitchedText}
          </span>
          <span className="absolute -left-[2px] -top-[2px] text-blue-500 opacity-50 clip-rect-random animate-glitch-2">
            {children}
          </span>
          <span className="relative z-10">{children}</span>
        </>
      ) : (
        children
      )}
    </span>
  );
}
