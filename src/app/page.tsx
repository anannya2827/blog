import { BlogPost } from '@/types';
import BlogGrid from '@/components/BlogGrid';

// Global shared mock dataset representing 10 interactive blogs
export const blogDataset: BlogPost[] = [
  {
    id: '1',
    title: 'Designing Interactive Neon Systems for Visionary Web Apps',
    description: 'Step into the dark aesthetic. Explore structural grid architectures, deep glows, and precise lighting vectors using standard utility classes.',
    content: 'Neon interfaces demand exceptional care to avoid high cognitive overhead. When building dark-themed user dashboards, standard backdrops must drop below 5% brightness while employing high saturation fuchsia and cyan accents strictly isolated for focal micro-actions.',
    coverImage: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=800&q=80',
    createdAt: new Date().toISOString(),
    author: 'Alex Vance',
    authorAvatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80',
    category: 'Design',
    readTime: '4 min read'
  },
  {
    id: '2',
    title: 'Deep Dive: State Machine Synchronization in Next.js Server Actions',
    description: 'Ditch bloated client runtimes. Learn how structural state synchronization handles latency elegantly using dynamic routing architectures.',
    content: 'Server-driven architectures yield dramatic reductions in production bundle sizes. By shifting structural state synchronization logic directly onto next-gen edge runtimes, frontend code bases remain highly optimized.',
    coverImage: 'https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?auto=format&fit=crop&w=800&q=80',
    createdAt: new Date().toISOString(),
    author: 'Elena Rostova',
    authorAvatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80',
    category: 'Coding',
    readTime: '7 min read'
  },
 // Find these exact items inside the blogDataset array in src/app/page.tsx:

  {
    id: '3',
    title: 'Engineering Context-Aware Agents with Vector Database Embeddings',
    description: 'Understand how embedding similarity indexes drive precision generation matching patterns inside dynamic client components.',
    content: 'Context mapping is highly dependent on high vector dimensionality calculations. Utilizing modern cosine-similarity workflows, localized database retrieval structures generate micro-targeted prompt foundations.',
    // FIX: Swapped to a highly available, ultra-reliable AI network graphic URL
    coverImage: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&w=800&q=80',
    createdAt: new Date().toISOString(),
    author: 'Marcus Chen',
    authorAvatar: 'https://images.unsplash.com/photo-1628157582853-a796fa650a6a?auto=format&fit=crop&w=150&q=80',
    category: 'AI',
    readTime: '9 min read'
  },
  {
    id: '4',
    title: 'Mastering Custom Tailwind Configurations for Enterprise Design Tokens',
    description: 'Scale up consistency. Build robust, high-performance style dictionaries directly mapping themes through extended CSS variable frameworks.',
    content: 'Design token scaling starts inside tailwind.config.js configurations. By setting semantic custom utility keys matching raw variable roots, updating design specifications becomes an atomic single-file execution workflow.',
    // FIX: Swapped to a highly available, crystal-clear setup code display URL
    coverImage: 'https://images.unsplash.com/photo-1605379399642-870262d3d051?auto=format&fit=crop&w=800&q=80',
    createdAt: new Date().toISOString(),
    author: 'Sarah Jenkins',
    authorAvatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&q=80',
    category: 'Design',
    readTime: '5 min read'
  },
    id: '5',
    title: 'Optimizing Cumulative Layout Shift (CLS) in Multi-Framework Workflows',
    description: 'Keep your page components anchored securely. Code deep structural dynamic aspect ratio layouts that protect browser performance ranks.',
    content: 'Erratic component rendering pipelines can destroy user interaction metrics. Utilizing modern CSS grid templates combined with raw image aspect properties keeps structural zones mapped out during layout calculation cycles.',
    coverImage: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80',
    createdAt: new Date().toISOString(),
    author: 'David Kross',
    authorAvatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&q=80',
    category: 'Coding',
    readTime: '6 min read'
  },
  {
    id: '6',
    title: 'The Blueprint of Next-Gen Transformers: Beyond Attention Architectures',
    description: 'Explore the computational evolution replacing classic attention networks with linear recurrence layers for unlimited pipeline context scales.',
    content: 'Quadratic attention processing constraints become problematic when tracking massive data repositories. Innovative alternative architectures utilize localized state space processing math to process tokens faster.',
    coverImage: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&w=800&q=80',
    createdAt: new Date().toISOString(),
    author: 'Marcus Chen',
    authorAvatar: 'https://images.unsplash.com/photo-1628157582853-a796fa650a6a?auto=format&fit=crop&w=150&q=80',
    category: 'AI',
    readTime: '11 min read'
  },
  {
    id: '7',
    title: 'Fluid Typography Scale Calculations using CSS Clamp and Modern Units',
    description: 'Stop engineering infinite media queries. Build smooth text dimensions that scale dynamically between responsive boundaries seamlessly.',
    content: 'Relying exclusively on fixed viewport media configurations leads to bloated codebases. Embracing math functions allows text layers to shift smoothly depending on window parameters automatically.',
    coverImage: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=800&q=80',
    createdAt: new Date().toISOString(),
    author: 'Alex Vance',
    authorAvatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80',
    category: 'Design',
    readTime: '4 min read'
  },
  {
    id: '8',
    title: 'Building Concurrent Real-Time Data Grids with React 19 Compiler',
    description: 'An exhaustive exploration into automatic memoization optimizations driving low latency view rendering configurations.',
    content: 'Manual optimizations become redundant under new specialized compilation pipelines. Automatic reference detection maps internal component arrays perfectly, ensuring deep nested fields refresh instantly.',
    coverImage: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80',
    createdAt: new Date().toISOString(),
    author: 'Elena Rostova',
    authorAvatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80',
    category: 'Coding',
    readTime: '8 min read'
  },
  {
    id: '9',
    title: 'Predictive Prefetching Engines: Melding Client Routing with Machine Learning',
    description: 'Leverage user movement tracking models to asynchronously fetch page chunks before dynamic interactions even occur.',
    content: 'Why delay page fetching until a link is clicked? By utilizing pattern detection networks directly inside client navigation providers, application routing targets are resolved in advance.',
    coverImage: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=800&q=80',
    createdAt: new Date().toISOString(),
    author: 'Sarah Jenkins',
    authorAvatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&q=80',
    category: 'AI',
    readTime: '10 min read'
  },
  {
    id: '10',
    title: 'Architecting High-Performance Micro-Frontends via Module Federation',
    description: 'Decouple complex team deployments. Construct high-speed runtime code sharing setups that bypass production delivery blockades.',
    content: 'Monolithic application structures create production assembly bottlenecks. Separating critical paths into independently bundled delivery nodes enables teams to publish changes without risking system-wide regressions.',
    coverImage: 'https://images.unsplash.com/photo-1607799279861-4dd421887fb3?auto=format&fit=crop&w=800&q=80',
    createdAt: new Date().toISOString(),
    author: 'David Kross',
    authorAvatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&q=80',
    category: 'Coding',
    readTime: '8 min read'
  }
];

export default async function HomePage() {
  return (
    <div className="space-y-12">
      <section className="text-center max-w-3xl mx-auto space-y-4 py-6">
        <span className="px-4 py-1.5 rounded-full text-xs font-extrabold tracking-widest text-cyan-400 bg-cyan-950/60 border border-cyan-800/60 uppercase">
          Welcome to Next-Gen Technical Content
        </span>
        <h1 className="text-4xl sm:text-6xl font-black tracking-tight leading-tight">
          Refened insights for <span className="bg-gradient-to-r from-fuchsia-500 via-purple-500 to-cyan-400 bg-clip-text text-transparent">creatives & coders.</span>
        </h1>
        <p className="text-slate-400 text-base sm:text-lg">
          Explore our fully synchronized 10-part master series detailing modern architectural engineering and visual UI paradigms.
        </p>
      </section>

      {/* Renders the full grid dashboard */}
      <BlogGrid initialPosts={blogDataset} />
    </div>
  );
}
