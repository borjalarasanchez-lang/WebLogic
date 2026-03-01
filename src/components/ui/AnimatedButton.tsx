"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import React from "react";

interface AnimatedButtonProps {
  href?: string;
  onClick?: () => void;
  children: React.ReactNode;
  variant?: "primary" | "secondary";
  className?: string;
  icon?: boolean;
}

export function AnimatedButton({ 
  href, 
  onClick, 
  children, 
  variant = "primary",
  className = "",
  icon = true
}: AnimatedButtonProps) {
  
  const baseStyles = "relative px-8 py-4 font-semibold rounded-lg overflow-hidden group flex items-center justify-center gap-2 transition-all";
  
  const variants = {
    primary: "bg-blue-600 text-white shadow-lg shadow-blue-900/20",
    secondary: "bg-zinc-900 text-zinc-300 border border-zinc-800 hover:border-zinc-700"
  };

  const buttonVariants = {
    initial: { scale: 1 },
    hover: { scale: 1.05 }
  };

  const textContainerVariants = {
    initial: { y: 0 },
    hover: { y: -30 }
  };

  const hiddenTextVariants = {
    initial: { y: 30 },
    hover: { y: 0 }
  };

  const glowVariants = {
    initial: { opacity: 0 },
    hover: { opacity: 1 }
  };

  const content = (
    <>
      <span className="relative z-10 flex flex-col items-center justify-center overflow-hidden h-6">
        <motion.span
          variants={textContainerVariants}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className="flex items-center gap-2"
        >
          {children}
          {icon && <ArrowRight className="w-4 h-4" />}
        </motion.span>
        
        <motion.span
          variants={hiddenTextVariants}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className="absolute flex items-center gap-2 text-white"
        >
          {children}
          {icon && <ArrowRight className="w-4 h-4" />}
        </motion.span>
      </span>

      {/* Glow Effect for Primary */}
      {variant === "primary" && (
        <>
          <motion.div
            variants={glowVariants}
            transition={{ duration: 0.5 }}
            className="absolute inset-0 bg-gradient-to-r from-blue-400 to-indigo-500 blur-xl opacity-0"
          />
          <motion.div 
            variants={glowVariants}
            transition={{ duration: 0.3 }}
            className="absolute inset-0 border-2 border-blue-400/50 rounded-lg opacity-0" 
          />
        </>
      )}
    </>
  );

  const commonProps = {
    initial: "initial",
    whileHover: "hover",
    whileTap: { scale: 0.95 },
    className: `${baseStyles} ${variants[variant]} ${className}`
  };

  if (href) {
    return (
      <Link href={href}>
        <motion.div variants={buttonVariants} {...commonProps}>
          {content}
        </motion.div>
      </Link>
    );
  }

  return (
    <motion.button onClick={onClick} variants={buttonVariants} {...commonProps}>
      {content}
    </motion.button>
  );
}
