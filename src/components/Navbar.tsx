'use client';

import Link from 'next/link';
import { Zap } from 'lucide-react';

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-slate-950/70 border-b border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        
        {/* Next.js client router Link ensures rapid home navigation without reloading state */}
        <Link 
          href="/" 
          className="flex items-center gap-2 font-black text-2xl tracking-tighter bg-gradient-to-r from-fuchsia-500 via-purple-500 to-cyan-400 bg-clip-text text-transparent hover:scale-105 transition-transform duration-200"
        >
          <Zap className="text-fuchsia-500 fill-fuchsia-500 w-6 h-6 animate-pulse" />
          NEON<span className="text-cyan-400">PULSE</span>
        </Link>
        
        <nav className="flex items-center gap-6 text-sm font-medium text-slate-400">
          <Link href="/" className="hover:text-fuchsia-400 transition-colors">Home</Link>
          <button className="px-4 py-2 rounded-full text-xs font-bold bg-gradient-to-r from-fuchsia-500 to-cyan-500 text-white hover:opacity-90 shadow-[0_0_20px_rgba(217,70,239,0.3)] transition-all">
            Subscribe
          </button>
        </nav>
      </div>
    </header>
  );
}