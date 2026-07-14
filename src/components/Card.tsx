'use client';

import Link from 'next/link';
import { BlogPost } from '@/types';
import { Clock } from 'lucide-react';

// Extending type safety inline to handle the custom gradient property smoothly
interface EnhancedCardProps {
  post: BlogPost & { useGradient?: boolean };
}

export default function Card({ post }: EnhancedCardProps) {
  const catColors: Record<string, string> = {
    Design: 'bg-fuchsia-500/10 text-fuchsia-400 border-fuchsia-500/30',
    Coding: 'bg-cyan-500/10 text-cyan-400 border-cyan-500/30',
    AI: 'bg-violet-500/10 text-violet-400 border-violet-500/30',
  };

  // High-saturation technical background colors designed for dark-mode screens
  const geometricGradients: Record<string, string> = {
    Design: 'from-purple-900 via-indigo-950 to-fuchsia-900 border-b border-fuchsia-500/20',
    AI: 'from-slate-900 via-purple-950 to-violet-900 border-b border-violet-500/20',
    Coding: 'from-slate-900 via-slate-950 to-cyan-950 border-b border-cyan-500/20',
  };

  const defaultColor = 'bg-slate-500/10 text-slate-400 border-slate-500/30';
  const defaultGradient = 'from-slate-900 to-slate-950';

  return (
    <article className="group relative flex flex-col overflow-hidden rounded-2xl border border-slate-800/60 bg-slate-900/40 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-slate-700 hover:shadow-[0_10px_30px_-10px_rgba(0,0,0,0.7)]">
      {/* Dynamic ambient hover glow backdrop */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-fuchsia-500/10 to-cyan-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      
      <div className="relative aspect-[16/10] w-full overflow-hidden bg-slate-950 flex items-center justify-center">
        {post.useGradient ? (
          /* Rendered Color Presentation Block for Blogs 3 and 4 */
          <div className={`w-full h-full bg-gradient-to-br ${geometricGradients[post.category] || defaultGradient} flex flex-col items-center justify-center p-6 text-center select-none relative group-hover:scale-[1.02] transition-transform duration-500`}>
            <div className="absolute inset-0 opacity-15 bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] [background-size:16px_16px]" />
            <span className="text-base font-black tracking-tight text-slate-200 uppercase drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)] border border-slate-700/50 bg-slate-900/80 px-4 py-2 rounded-xl">
              {post.category} Technical Track
            </span>
          </div>
        ) : (
          /* Standard Unsplash Cover display engine for remaining nodes */
          <img
            src={post.coverImage}
            alt={post.title}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
            loading="lazy"
          />
        )}
        <span className={`absolute top-4 left-4 z-10 px-3 py-1 rounded-full text-xs font-bold border ${catColors[post.category] || defaultColor}`}>
          {post.category}
        </span>
      </div>

      <div className="flex flex-1 flex-col p-6">
        <div className="flex items-center gap-4 text-xs text-slate-400 mb-3">
          <span className="flex items-center gap-1"><Clock size={12} /> {post.readTime}</span>
          <span>Jul 2026</span>
        </div>
        
        <h3 className="text-xl font-bold text-slate-100 line-clamp-2 tracking-tight group-hover:text-fuchsia-400 transition-colors mb-2">
          <Link href={`/posts/${post.id}`}>
            <span className="absolute inset-0" />
            {post.title}
          </Link>
        </h3>
        
        <p className="text-sm text-slate-400 line-clamp-3 mb-6 flex-1">
          {post.description}
        </p>

        <div className="mt-auto pt-4 border-t border-slate-800/60 flex items-center gap-3">
          <img 
            src={post.authorAvatar} 
            alt={post.author}
            className="w-7 h-7 rounded-full object-cover ring-1 ring-slate-700"
          />
          <span className="text-xs font-medium text-slate-300">
            by {post.author}
          </span>
        </div>
      </div>
    </article>
  );
}
