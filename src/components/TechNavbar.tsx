"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { Terminal, Cpu, Network, FileCode, Command } from "lucide-react";

export function TechNavbar() {
  const pathname = usePathname();

  const navItems = [
    { name: "ROOT", path: "/", icon: Terminal, version: "v1.0.4" },
    { name: "LAB", path: "/lab", icon: Cpu, version: "v0.9.2" },
    { name: "ARCH", path: "/proyectos", icon: Network, version: "v2.1.0" },
    { name: "LOGS", path: "/manifiesto", icon: FileCode, version: "v1.5.0" },
    { name: "STDIN", path: "/contacto", icon: Command, version: "v0.0.1" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 h-16 border-b border-white/5 bg-[#050505]/80 backdrop-blur-md">
      <div className="flex h-full max-w-7xl mx-auto items-center justify-between px-6">
        <Link href="/" className="group flex items-center gap-2">
          <div className="relative flex h-8 w-8 items-center justify-center overflow-hidden bg-white/5 font-mono text-xs font-bold text-cyan-500 ring-1 ring-white/10 transition-all group-hover:bg-cyan-500/10 group-hover:text-cyan-400 group-hover:ring-cyan-500/50">
            WL
            <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-transparent to-white/10 opacity-0 transition-opacity group-hover:opacity-100" />
          </div>
          <span className="hidden font-mono text-sm font-medium tracking-tight text-zinc-400 md:block">
            WebLogic
            <span className="ml-2 text-[10px] text-zinc-600">SYS.ADMIN</span>
          </span>
        </Link>

        <div className="flex items-center gap-1">
          {navItems.map((item) => {
            const isActive = pathname === item.path;
            const Icon = item.icon;

            return (
              <Link
                key={item.path}
                href={item.path}
                className={`group relative flex items-center gap-2 rounded-sm px-4 py-2 text-xs font-medium transition-all duration-300 ${
                  isActive
                    ? "text-cyan-400 bg-cyan-950/20 ring-1 ring-cyan-900/40"
                    : "text-zinc-500 hover:text-zinc-300 hover:bg-white/5"
                }`}
              >
                <Icon className={`h-3 w-3 ${isActive ? "text-cyan-500" : "text-zinc-600"}`} />
                <span className="font-mono tracking-wider">{item.name}</span>
                {isActive && (
                  <motion.span
                    layoutId="navbar-indicator"
                    className="absolute bottom-0 left-0 right-0 h-[1px] bg-cyan-500 shadow-[0_0_8px_rgba(6,182,212,0.8)]"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
                <span className="absolute -top-1 -right-1 text-[8px] text-zinc-700 opacity-0 transition-opacity group-hover:opacity-100">
                  {item.version}
                </span>
              </Link>
            );
          })}
        </div>

        <div className="hidden items-center gap-4 text-[10px] font-mono text-zinc-600 md:flex">
          <span className="flex items-center gap-1.5">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.4)]" />
            SYSTEM ONLINE
          </span>
          <span className="text-zinc-800">|</span>
          <span>LATENCY: 12ms</span>
        </div>
      </div>
    </nav>
  );
}
