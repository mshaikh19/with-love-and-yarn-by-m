import React, { useState } from 'react';

export default function SeasonalPatterns() {
  const [filter, setFilter] = useState('All');
  const patterns = [
    {
      id: 1,
      title: "Mist over Moss Scarf",
      type: "Pattern & Video Guide",
      price: "$12.00",
      tag: "INTERMEDIATE",
      color: "bg-[#0A6C74]",
      image: "/products/scarf.png"
    },
    {
      id: 2,
      title: "Heirloom Lace Socks",
      type: "Comprehensive Masterclass",
      price: "$14.00",
      tag: "ADVANCED",
      color: "bg-[#5B5D5C]",
      image: "/products/socks.png"
    },
    {
      id: 3,
      title: "The Quiet Morning Throw",
      type: "Pattern Guide",
      price: "$10.00",
      tag: "BEGINNER",
      color: "bg-[#0B132B]",
      image: "/products/blanket.png"
    }
  ];

  const filteredPatterns = patterns.filter(p => {
    if (filter === 'Beginner') return p.tag === 'BEGINNER';
    if (filter === 'Advanced') return p.tag === 'ADVANCED' || p.tag === 'INTERMEDIATE';
    return true;
  });

  return (
    <section className="max-w-7xl mx-auto px-6 py-12">
      <div className="flex flex-col lg:flex-row justify-between items-center lg:items-end mb-12 border-b border-tertiary/10 pb-8 gap-6">
        <div className="text-center lg:text-left">
          <span className="text-[10px] font-black uppercase tracking-[0.3em] text-[#6B3A4E] block mb-3">
            The Library
          </span>
          <h2 className="font-serif text-4xl italic text-tertiary mb-2">Seasonal Patterns</h2>
          <p className="text-[#5C4A52] text-sm italic font-light">Curated designs for the shifting light of the Atelier.</p>
        </div>
        
        <div className="inline-flex items-center gap-2 bg-tertiary/5 p-1.5 rounded-full border border-tertiary/10 shadow-inner">
          {['All', 'Beginner', 'Advanced'].map(f => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`px-6 py-2.5 rounded-full text-[10px] font-black uppercase tracking-[0.2em] transition-all duration-300 ${
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

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {filteredPatterns.map((p) => (
          <div key={p.id} className="group cursor-pointer">
            <div className={`${p.color} aspect-square rounded-3xl mb-6 relative overflow-hidden`}>
              <div className="absolute top-4 left-4 z-10 flex gap-2">
                <span className="bg-white/70 backdrop-blur-md border border-white/40 text-[9px] font-black tracking-[0.2em] px-4 py-2 rounded-full uppercase text-tertiary shadow-[0_4px_12px_rgba(0,0,0,0.05)] transition-all duration-300 group-hover:bg-white group-hover:scale-105 group-hover:shadow-md">
                  {p.tag}
                </span>
              </div>
              <img src={p.image} alt={p.title} className="w-full h-full object-cover mix-blend-overlay opacity-80" />
            </div>
            <h3 className="font-serif text-2xl italic text-tertiary mb-2 group-hover:text-deepRose transition-colors">{p.title}</h3>
            <div className="flex justify-between items-center text-sm">
              <span className="text-[#5C4A52] font-light italic">{p.type}</span>
              <span className="font-bold text-tertiary text-xs tracking-wider">{p.price}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
