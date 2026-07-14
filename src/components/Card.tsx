import Link from 'next/link';
import Image from 'next/image';
import { BlogPost } from '@/types';
import { Clock, User } from 'lucide-react';

export default function Card({ post }: { post: BlogPost }) {
  // Color configuration mapping based on category for rich visual distinction
  const catColors: Record<string, string> = {
    Design: 'bg-fuchsia-500/10 text-fuchsia-400 border-fuchsia-500/30',
    Coding: 'bg-cyan-500/10 text-cyan-400 border-cyan-500/30',
    AI: 'bg-violet-500/10 text-violet-400 border-violet-500/30',
  };

  const defaultColor = 'bg-slate-500/10 text-slate-400 border-slate-500/30';

  return (
    <article className="group relative flex flex-col overflow-hidden rounded-2xl border border-slate-800/60 bg-slate-900/40 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-slate-700 hover:shadow-[0_10px_30px_-10px_rgba(0,0,0,0.7)]">
      {/* Decorative hover gradient border effect */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-fuchsia-500/20 to-cyan-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      
      <div className="relative aspect-[16/10] w-full overflow-hidden bg-slate-800">
        <img
          src={post.coverImage}
          alt={post.title}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />
        <span className={`absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-bold border ${catColors[post.category] || defaultColor}`}>
          {post.category}
        </span>
      </div>

      <div className="flex flex-1 flex-col p-6">
        <div className="flex items-center gap-4 text-xs text-slate-400 mb-3">
          <span className="flex items-center gap-1"><Clock size={12} /> {post.readTime}</span>
          <span>{new Date(post.createdAt).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</span>
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
          <span className="text-xs font-medium text-slate-300 flex items-center gap-1">
            by {post.author}
          </span>
        </div>
      </div>
    </article>
  );
}