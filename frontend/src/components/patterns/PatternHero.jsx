import React from 'react';

export default function PatternHero() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-16 md:py-24 flex flex-col items-center text-center">
      <span className="text-[10px] font-black uppercase tracking-[0.4em] text-tertiary mb-6 opacity-60">
        The Digital Atelier
      </span>
      <h1 className="font-serif text-4xl md:text-5xl font-normal text-tertiary leading-[1.1] mb-8 tracking-tight max-w-3xl">
        Pattern Journal &<br/>Tutorials
      </h1>
      <div className="w-12 h-[1px] bg-tertiary/20 mb-8"></div>
      <p className="text-textLight text-sm md:text-base font-light italic leading-relaxed max-w-2xl mx-auto opacity-80">
        A curated collection of handcrafted intentions, technical musings, and the tactile poetry of yarn.
      </p>
    </section>
  );
}
