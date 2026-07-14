'use client';

import { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { BlogPost } from '@/types';
import Card from './Card';
import { Search, SlidersHorizontal } from 'lucide-react';

interface BlogGridProps {
  initialPosts: BlogPost[];
}

export default function BlogGrid({ initialPosts }: BlogGridProps) {
  const [searchQuery, setSearchQuery] = useState('');

  // Use React Query hydration combined with initial static props for rapid interactions
  const { data: posts } = useQuery({
    queryKey: ['posts'],
    queryFn: async () => initialPosts, // Defaults immediately to pre-rendered engine data
    initialData: initialPosts,
  });

  const filteredPosts = posts.filter(post => 
    post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    post.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
    post.category.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="space-y-10">
      {/* Dynamic Search & Controls Interface */}
      <div className="flex flex-col sm:flex-row gap-4 justify-between items-center bg-slate-900/60 border border-slate-800/80 p-4 rounded-2xl backdrop-blur-sm">
        <div className="relative w-full sm:max-w-md">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500 w-4 h-4" />
          <input
            type="text"
            placeholder="Search articles by title, content or category..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-11 pr-4 py-2.5 bg-slate-950/80 border border-slate-800 rounded-xl text-sm text-slate-200 placeholder-slate-500 focus:outline-none focus:border-fuchsia-500 focus:ring-1 focus:ring-fuchsia-500 transition-all"
          />
        </div>
        <div className="flex items-center gap-2 self-stretch sm:self-auto justify-end text-xs font-bold text-slate-400 uppercase tracking-wider">
          <SlidersHorizontal size={14} className="text-cyan-400" />
          Showing {filteredPosts.length} Results
        </div>
      </div>

      {/* Grid Display */}
      {filteredPosts.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPosts.map((post) => (
            <Card key={post.id} post={post} />
          ))}
        </div>
      ) : (
        <div className="text-center py-20 border border-dashed border-slate-800 rounded-3xl">
          <p className="text-slate-400 text-lg">No posts matched your criteria.</p>
          <button 
            onClick={() => setSearchQuery('')}
            className="mt-4 text-xs font-bold tracking-wide text-fuchsia-400 underline decoration-2 underline-offset-4 hover:text-fuchsia-300"
          >
            Clear Filters
          </button>
        </div>
      )}
    </div>
  );
}