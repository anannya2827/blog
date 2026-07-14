import { notFound } from 'next/navigation';
import Link from 'next/link';
import { ArrowLeft, Clock, Calendar, BookOpen, Layers, Sparkles } from 'lucide-react';
import { Metadata } from 'next';
import { blogDataset } from '../../page'; 

interface PostPageProps {
  params: Promise<{ id: string }>;
}

// 1. Safe implementation for Metadata generation
export async function generateMetadata({ params }: PostPageProps): Promise<Metadata> {
  const resolvedParams = await params; // Unwrapping the promise first
  const post = blogDataset.find(p => p.id === resolvedParams.id);
  if (!post) return { title: 'Post Not Found' };
  return { title: `${post.title} // NeonPulse`, description: post.description };
}

// 2. Safe implementation for the Main Page view component
export default async function PostPage({ params }: PostPageProps) {
  
  // FIX: Unwrapping the params promise before looking for the post ID
  const resolvedParams = await params;
  const post = blogDataset.find(p => p.id === resolvedParams.id);

  if (!post) {
    notFound();
  }

  return (
    <article className="max-w-4xl mx-auto space-y-10 py-4 animate-fade-in">
      {/* Navigation Layer */}
      <Link 
        href="/" 
        className="inline-flex items-center gap-2 text-xs font-bold text-slate-400 hover:text-fuchsia-400 tracking-wider uppercase transition-colors group"
      >
        <ArrowLeft size={14} className="group-hover:-translate-x-1 transition-transform" /> 
        Back to Dashboard
      </Link>

      {/* Header Info */}
      <div className="space-y-6">
        <span className="px-3 py-1 rounded-full text-xs font-bold bg-cyan-500/10 border border-cyan-500/30 text-cyan-400">
          {post.category} Analysis
        </span>
        
        <h1 className="text-4xl sm:text-6xl font-black tracking-tight leading-tight text-slate-100 bg-gradient-to-r from-white via-slate-100 to-slate-400 bg-clip-text">
          {post.title}
        </h1>
        
        <div className="flex flex-wrap items-center gap-6 text-xs text-slate-400 pt-2 border-b border-slate-900 pb-6">
          <div className="flex items-center gap-2">
            <img src={post.authorAvatar} alt={post.author} className="w-8 h-8 rounded-full object-cover ring-2 ring-fuchsia-500" />
            <span className="text-slate-200 font-semibold">{post.author}</span>
          </div>
          <span className="flex items-center gap-1.5"><Calendar size={13} /> Published 2026</span>
          <span className="flex items-center gap-1.5"><Clock size={13} /> {post.readTime}</span>
        </div>
      </div>

      {/* Grid Design Presentation Layer */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* Main Article Text */}
        <div className="lg:col-span-2 space-y-8 text-slate-300 leading-relaxed text-base sm:text-lg">
          <p className="text-xl font-medium text-slate-200 border-l-4 border-fuchsia-500 pl-4 italic bg-slate-900/40 py-4 pr-3 rounded-r-2xl">
            Summary: {post.description}
          </p>
          
          <div className="space-y-6 bg-slate-900/20 border border-slate-800/40 p-6 rounded-2xl">
            <h2 className="text-2xl font-bold text-slate-100 flex items-center gap-2">
              <BookOpen size={20} className="text-cyan-400" /> Deep Breakdown
            </h2>
            <p>{post.content}</p>
            <p>To run this configuration effectively inside enterprise environments, decoupling interactive sub-states is highly recommended. Isolating render overhead preserves standard paint cycles seamlessly.</p>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-slate-100 flex items-center gap-2">
              <Layers size={20} className="text-fuchsia-400" /> Architectural Framework
            </h2>
            <p>When executing component deliveries through global server infrastructure layers, remember to verify component validation hooks to suppress unnecessary hydration layout shifts.</p>
          </div>
        </div>

        {/* Sidebar Info Panel */}
        <div className="space-y-6">
          <div className="p-6 bg-gradient-to-br from-slate-900 to-slate-950 border border-slate-800 rounded-2xl shadow-xl space-y-4">
            <h3 className="text-sm font-extrabold uppercase tracking-widest text-fuchsia-400 flex items-center gap-2">
              <Sparkles size={14} /> Metrics Matrix
            </h3>
            <div className="space-y-3 text-xs">
              <div className="flex justify-between border-b border-slate-800 pb-2">
                <span className="text-slate-500">Framework</span>
                <span className="text-slate-300 font-mono">Next.js 16 (Turbopack)</span>
              </div>
              <div className="flex justify-between border-b border-slate-800 pb-2">
                <span className="text-slate-500">Render Pipeline</span>
                <span className="text-slate-300">Server Component (SSR)</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500">Core Web Vitals</span>
                <span className="text-emerald-400 font-bold">Optimal</span>
              </div>
            </div>
          </div>

          <div className="rounded-2xl overflow-hidden border border-slate-800 relative aspect-video shadow-md">
            <img src={post.coverImage} alt={post.title} className="w-full h-full object-cover absolute inset-0" />
            <div className="absolute inset-0 bg-slate-950/40 backdrop-blur-[1px]" />
          </div>
        </div>

      </div>
    </article>
  );
}