import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function PatternGrid({ hideHeader = false, hideViewAllButton = false }) {
  const [filter, setFilter] = useState('All');

  const patterns = [
    {
      id: 1,
      slug: "solstice-cable-sweater",
      title: "The Solstice Cable Sweater",
      description: "An exploration of depth and rhythm through complex interlocking cables and soft merino wool.",
      image: "https://i.pinimg.com/736x/97/18/f4/9718f44a3a11a16f33b96ba7e49d4d16.jpg",
      tag: "Advanced",
      price: "$15.00",
      isFree: false
    },
    {
      id: 2,
      slug: "minimalist-ribbed-beanie",
      title: "Minimalist Ribbed Beanie",
      description: "The perfect entry-level project for the modern maker. Quick to knit and effortlessly chic.",
      image: "https://i.pinimg.com/736x/97/18/f4/9718f44a3a11a16f33b96ba7e49d4d16.jpg",
      tag: "Beginner",
      price: "$0.00",
      isFree: true
    },
    {
      id: 3,
      slug: "heirloom-lace-shawl",
      title: "The Heirloom Lace Shawl",
      description: "A delicate, weightless piece inspired by summer mornings in the garden.",
      image: "https://i.pinimg.com/736x/97/18/f4/9718f44a3a11a16f33b96ba7e49d4d16.jpg",
      tag: "Intermediate",
      price: "$12.00",
      isFree: false
    },
    {
      id: 4,
      slug: "morning-mist-throw",
      title: "Morning Mist Throw",
      description: "A cozy, oversized throw blanket featuring a simple yet elegant textured stitch.",
      image: "https://i.pinimg.com/736x/97/18/f4/9718f44a3a11a16f33b96ba7e49d4d16.jpg",
      tag: "Beginner",
      price: "$0.00",
      isFree: true
    },
    {
      id: 5,
      slug: "petal-soft-vest",
      title: "Petal Soft Vest",
      description: "A versatile layering piece crafted from brushed mohair and silk.",
      image: "https://i.pinimg.com/736x/97/18/f4/9718f44a3a11a16f33b96ba7e49d4d16.jpg",
      tag: "Intermediate",
      price: "$18.00",
      isFree: false
    },
    {
      id: 6,
      slug: "canvas-market-tote",
      title: "Canvas Market Tote",
      description: "A sturdy, hand-knotted cotton blend tote perfect for trips to the local market.",
      image: "https://i.pinimg.com/736x/97/18/f4/9718f44a3a11a16f33b96ba7e49d4d16.jpg",
      tag: "Advanced",
      price: "$0.00",
      isFree: true
    }
  ];

  const filteredPatterns = patterns.filter(p => {
    if (filter === 'Free') return p.isFree;
    if (filter === 'Paid') return !p.isFree;
    return true;
  });

  return (
    <section className="max-w-7xl mx-auto px-6 pb-20">
      
      {/* Header & Filters */}
      {!hideHeader && (
        <div className="flex flex-col lg:flex-row justify-between items-center lg:items-end mb-12 border-b border-tertiary/10 pb-8 gap-6">
          <div className="text-center lg:text-left">
            <span className="text-[10px] font-black uppercase tracking-[0.3em] text-[#6B3A4E] block mb-3">
              Explore
            </span>
            <h2 className="font-serif text-4xl italic text-tertiary mb-2">The Pattern Library</h2>
            <p className="text-[#5C4A52] text-sm italic font-light">A comprehensive archive of our premium and free designs.</p>
          </div>
          
          <div className="inline-flex items-center gap-2 bg-tertiary/5 p-1.5 rounded-full border border-tertiary/10 shadow-inner">
            {['All', 'Free', 'Paid'].map(f => (
              <button
                key={f}
                onClick={() => setFilter(f)}
                className={`px-8 py-3 rounded-full text-[11px] font-black uppercase tracking-[0.2em] transition-all duration-300 ${
                  filter === f 
                    ? 'bg-white text-tertiary shadow-md border border-tertiary/10 scale-105' 
                    : 'text-tertiary/50 hover:text-tertiary hover:bg-white/50'
                }`}
              >
                {f}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredPatterns.map(pattern => (
          <Link key={pattern.id} to={`/patterns/${pattern.slug}`} className="group bg-white rounded-2xl overflow-hidden shadow-[0_4px_20px_rgba(0,0,0,0.03)] border border-tertiary/5 hover:border-tertiary/20 hover:shadow-[0_8px_30px_rgba(0,0,0,0.08)] transition-all duration-500 flex flex-col cursor-pointer">
            <div className="relative h-72 bg-[#F8F6F4] overflow-hidden">
              <div className="absolute top-4 left-4 z-10 flex gap-2">
                <span className="bg-white/70 backdrop-blur-md border border-white/40 text-[9px] font-black tracking-[0.2em] px-4 py-2 rounded-full uppercase text-tertiary shadow-[0_4px_12px_rgba(0,0,0,0.05)] transition-all duration-300 group-hover:bg-white group-hover:scale-105 group-hover:shadow-md">
                  {pattern.tag}
                </span>
              </div>
              <img 
                src={pattern.image} 
                alt={pattern.title} 
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110" 
              />
              <div className="absolute inset-0 bg-tertiary/0 group-hover:bg-tertiary/5 transition-colors duration-500"></div>
            </div>
            <div className="p-8 flex flex-col flex-1 bg-white relative">
              <h3 className="font-serif text-2xl italic text-tertiary mb-4 group-hover:text-deepRose transition-colors duration-300">{pattern.title}</h3>
              <p className="text-[#5C4A52] text-sm font-light leading-relaxed mb-8 flex-1">
                {pattern.description}
              </p>
              <div className="flex justify-between items-center text-[10px] uppercase tracking-[0.2em] font-bold text-tertiary/40 pt-6 border-t border-tertiary/5 mt-auto">
                <span className={`${pattern.isFree ? 'text-[#0A6C74]' : 'text-tertiary'}`}>{pattern.price}</span>
                <span className="text-tertiary group-hover:text-deepRose transition-colors flex items-center gap-2">
                  Read Pattern <span className="text-lg leading-none transform group-hover:translate-x-1 transition-transform">→</span>
                </span>
              </div>
            </div>
          </Link>
        ))}
      </div>

      {/* Pagination */}
      <div className="mt-20 flex justify-center items-center gap-4">
        <button className="w-10 h-10 flex items-center justify-center rounded-full border border-tertiary/10 text-tertiary hover:bg-tertiary hover:text-white transition-all shadow-sm">
          <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <div className="flex items-center gap-2">
          <span className="w-10 h-10 flex items-center justify-center rounded-full bg-tertiary text-white text-xs font-bold leading-none shadow-sm">1</span>
          <span className="w-10 h-10 flex items-center justify-center rounded-full text-tertiary/40 text-xs font-bold leading-none cursor-pointer hover:text-tertiary transition-colors">2</span>
          <span className="w-10 h-10 flex items-center justify-center rounded-full text-tertiary/40 text-xs font-bold leading-none cursor-pointer hover:text-tertiary transition-colors">3</span>
        </div>
        <button className="w-10 h-10 flex items-center justify-center rounded-full border border-tertiary/10 text-tertiary hover:bg-tertiary hover:text-white transition-all shadow-sm">
          <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>

      {/* View All Button */}
      {!hideViewAllButton && (
        <div className="mt-16 flex justify-center">
          <Link to="/all-patterns" className="px-10 py-4 bg-white border border-tertiary/20 text-tertiary text-xs font-black uppercase tracking-[0.2em] rounded-full hover:bg-tertiary hover:text-white transition-colors duration-300 shadow-sm hover:shadow-lg">
            View All Patterns
          </Link>
        </div>
      )}
    </section>
  );
}
