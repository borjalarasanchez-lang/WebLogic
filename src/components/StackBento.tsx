"use client";

import { motion } from "framer-motion";
import { 
  Server, Code2, Cloud, Workflow
} from "lucide-react";

export function StackBento() {
  const stack = [
    {
      title: "Frontend Core",
      items: ["Next.js 15 (App Router)", "React 19 (Server Components)", "TypeScript (Strict Mode)", "Tailwind CSS"],
      icon: Code2,
      color: "from-cyan-500/20 to-blue-600/20",
      border: "border-cyan-500/20"
    },
    {
      title: "Backend Logic",
      items: ["Node.js Runtime", "Python Scripts", "PostgreSQL (Prisma ORM)", "Redis (Caching Layer)"],
      icon: Server,
      color: "from-emerald-500/20 to-teal-600/20",
      border: "border-emerald-500/20"
    },
    {
      title: "Infrastructure",
      items: ["Docker Containers", "AWS (Lambda, S3)", "Vercel Edge Network", "GitHub Actions CI/CD"],
      icon: Cloud,
      color: "from-purple-500/20 to-indigo-600/20",
      border: "border-purple-500/20"
    },
    {
      title: "Automation Engine",
      items: ["n8n Workflows", "Make Scenarios", "Webhooks Integration", "OpenAI API Agents"],
      icon: Workflow,
      color: "from-orange-500/20 to-red-600/20",
      border: "border-orange-500/20"
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 w-full max-w-7xl mx-auto px-4">
      {stack.map((group, i) => (
        <motion.div
          key={group.title}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: i * 0.1 }}
          viewport={{ once: true }}
          className={`relative overflow-hidden rounded-xl border ${group.border} bg-zinc-900/40 p-6 backdrop-blur-sm group hover:bg-zinc-900/60 transition-colors`}
        >
          <div className={`absolute inset-0 bg-gradient-to-br ${group.color} opacity-0 group-hover:opacity-10 transition-opacity`} />
          
          <div className="flex items-center gap-3 mb-4">
            <div className={`p-2 rounded-lg bg-zinc-950 border border-zinc-800 shadow-inner`}>
              <group.icon className="w-5 h-5 text-zinc-300" />
            </div>
            <h3 className="font-mono text-sm font-bold tracking-wider text-zinc-300 uppercase">
              {group.title}
            </h3>
          </div>

          <ul className="space-y-2">
            {group.items.map((item) => (
              <li key={item} className="flex items-center gap-2 text-xs font-mono text-zinc-500 group-hover:text-zinc-400 transition-colors">
                <span className="w-1 h-1 rounded-full bg-zinc-700 group-hover:bg-cyan-500 transition-colors" />
                {item}
              </li>
            ))}
          </ul>

          <div className="absolute bottom-2 right-2 opacity-10 font-mono text-[8px] text-white">
            SYS.MODULE_0{i + 1}
          </div>
        </motion.div>
      ))}
    </div>
  );
}
