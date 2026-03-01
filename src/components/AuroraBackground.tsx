"use client";
import { ReactNode } from "react";

interface AuroraBackgroundProps {
  children: ReactNode;
  className?: string;
}

export const AuroraBackground = ({ children, className }: AuroraBackgroundProps) => {
  return (
    <div className={`relative flex flex-col items-center justify-center overflow-hidden bg-[#050505] text-slate-950 transition-bg ${className}`}>
      <div className="absolute inset-0 overflow-hidden">
        <div
          className={`
            [--white-gradient:repeating-linear-gradient(100deg,var(--white)_0%,var(--white)_7%,var(--transparent)_10%,var(--transparent)_12%,var(--white)_16%)]
            [--dark-gradient:repeating-linear-gradient(100deg,var(--black)_0%,var(--black)_7%,var(--transparent)_10%,var(--transparent)_12%,var(--black)_16%)]
            [--aurora:repeating-linear-gradient(100deg,#3b82f6_10%,#a855f7_15%,#06b6d4_20%,#10b981_25%,#3b82f6_30%)]
            [background-image:var(--dark-gradient),var(--aurora)]
            [background-size:300%,_200%]
            [background-position:50%_50%,_50%_50%]
            filter blur-[10px] invert-0
            after:content-[""] after:absolute after:inset-0 after:[background-image:var(--dark-gradient),var(--aurora)] 
            after:[background-size:200%,_100%] 
            after:animate-aurora after:[background-attachment:fixed] after:mix-blend-difference
            pointer-events-none
            absolute -inset-[10px] opacity-40 will-change-transform
            mask-image:radial-gradient(ellipse_at_100%_0%,black_10%,transparent_70%)
          `}
        />
      </div>
      <div className="relative z-10 w-full">{children}</div>
    </div>
  );
};
