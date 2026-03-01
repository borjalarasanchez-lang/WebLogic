import Link from "next/link";
import { AlertTriangle, Home } from "lucide-react";

export default function NotFound() {
  return (
    <div className="flex h-screen w-full flex-col items-center justify-center bg-[#050505] text-zinc-100 p-4 font-mono">
      <div className="relative flex flex-col items-center text-center">
        <div className="absolute -z-10 h-64 w-64 rounded-full bg-red-500/10 blur-[100px]" />
        
        <AlertTriangle className="h-16 w-16 text-red-500 mb-6 animate-pulse" />
        
        <h1 className="text-8xl font-bold tracking-tighter mb-2 text-zinc-100">
          404
        </h1>
        
        <h2 className="text-xl font-bold mb-4 text-zinc-500 tracking-widest uppercase">System Error: Route Not Found</h2>
        
        <p className="text-zinc-600 max-w-md mb-8 text-sm">
          {"// The requested resource could not be located in the current memory segment."}
          <br />
          {"// Please verify the URL or return to root."}
        </p>

        <Link
          href="/"
          className="flex items-center gap-2 px-6 py-3 border border-zinc-800 text-zinc-400 hover:text-zinc-100 hover:border-zinc-600 transition-colors text-sm"
        >
          <Home className="h-4 w-4" />
          RETURN_TO_ROOT
        </Link>
      </div>
    </div>
  );
}
