import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Providers from './providers';
import Navbar from '@/components/Navbar';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'NeonPulse // The Future of Tech Blogging',
  description: 'A cutting-edge, ultra-responsive blog application built with Next.js App Router, SSR, and Tailwind CSS.',
  openGraph: {
    title: 'NeonPulse Blog',
    description: 'Explore highly curated, stunning articles about design and frontend development.',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body className={`${inter.className} bg-slate-950 text-slate-100 antialiased min-h-screen selection:bg-fuchsia-500 selection:text-white`}>
        {/* Colorful ambient glowing backdrops */}
        <div className="absolute top-0 left-1/4 -z-10 h-[500px] w-[500px] rounded-full bg-fuchsia-600/10 blur-[150px]" />
        <div className="absolute top-40 right-1/4 -z-10 h-[600px] w-[600px] rounded-full bg-cyan-600/10 blur-[180px]" />
        
        <Providers>
          <Navbar />
          <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
            {children}
          </main>
        </Providers>
      </body>
    </html>
  );
}