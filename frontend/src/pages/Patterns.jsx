import React, { useEffect } from 'react';
import Navbar from '../components/common/Navbar';
import Footer from '../components/common/Footer';
import PatternHero from '../components/patterns/PatternHero';
import PatternGrid from '../components/patterns/PatternGrid';
import SeasonalPatterns from '../components/patterns/SeasonalPatterns';

export default function Patterns() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-[#FDFCFB] flex flex-col">
      <Navbar />

      <main className="flex-1 mt-10">
        <PatternHero />
        <PatternGrid />
        <SeasonalPatterns />
      </main>

      <Footer />
    </div>
  );
}
