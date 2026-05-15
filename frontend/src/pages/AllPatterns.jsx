import React, { useEffect } from 'react';
import Navbar from '../components/common/Navbar';
import Footer from '../components/common/Footer';
import PatternGrid from '../components/patterns/PatternGrid';

export default function AllPatterns() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-[#FDFCFB] flex flex-col">
      <Navbar />

      <main className="flex-1 mt-32">
        <section className="pt-16 pb-8 px-6 max-w-7xl mx-auto flex flex-col items-center text-center">
          <span className="text-[10px] font-black uppercase tracking-[0.4em] text-tertiary mb-6 opacity-60">
            Complete Archive
          </span>
          <h1 className="font-serif text-4xl md:text-5xl font-normal text-tertiary leading-[1.1] mb-8 tracking-tight max-w-3xl">
            All Patterns
          </h1>
          <div className="w-12 h-[1px] bg-tertiary/20 mb-8"></div>
        </section>
        
        {/* Render PatternGrid without the header and without the View All button */}
        <PatternGrid hideHeader={true} hideViewAllButton={true} />
      </main>

      <Footer />
    </div>
  );
}
