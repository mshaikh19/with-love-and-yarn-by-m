import React from 'react';
import { Link } from "react-router-dom";

export default function PromoSection() {
   return (
      <section className="relative px-6 py-8 md:py-16 overflow-hidden bg-neutralBg">
         <div className="max-w-7xl mx-auto relative lg:h-[70vh] flex items-center">
            {/* Main Composition Container */}
            <div className="w-full relative flex flex-col md:flex-row items-stretch rounded-[2.5rem] overflow-hidden shadow-2xl shadow-lavender/30 border border-white/40">

               {/* Content Column (Floating Feel) */}
               <div className="md:w-5/12 bg-cream/90 backdrop-blur-md p-8 md:p-16 flex flex-col justify-center relative z-10">
                  <div className="absolute top-8 left-8">
                     <span className="flex items-center gap-2 px-3 py-1 rounded-full bg-blush/30 border border-blush/40 text-[9px] font-black text-tertiary uppercase tracking-widest">
                        <span className="w-1.5 h-1.5 rounded-full bg-deepRose animate-pulse" />
                        Newly Released
                     </span>
                  </div>

                  <span className="inline-block text-tertiary font-bold tracking-[0.3em] uppercase text-[9px] mb-4 mt-8">The Learning Studio</span>
                  <h2 className="text-3xl md:text-5xl font-serif italic text-textMain leading-[1.1] mb-6">
                     Master the Craft with <span className="text-deepRose">Guided Patterns</span>
                  </h2>
                  <p className="text-textLight mb-10 leading-relaxed text-sm md:text-base font-light border-l-2 border-blush/30 pl-6 text-sm">
                     Whether you're picking up a needle for the first time or perfecting advanced techniques, our guided patterns are intentional, educational, and designed to inspire your next masterpiece.
                  </p>

                  <div className="flex flex-col sm:flex-row gap-4">
                     <Link to="/shop" className="group relative px-8 py-4 overflow-hidden rounded-full bg-textMain text-white text-[10px] font-black tracking-[0.2em] uppercase transition-all shadow-lg hover:shadow-textMain/20">
                        <span className="relative z-10 flex items-center gap-2">
                           View All Patterns
                           <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                           </svg>
                        </span>
                        <div className="absolute inset-0 bg-deepRose scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
                     </Link>

                     <Link to="/shop" className="px-8 py-4 text-textMain text-[10px] font-black tracking-[0.2em] uppercase hover:text-deepRose transition-colors">
                        Free Tutorial →
                     </Link>
                  </div>
               </div>

               {/* Image Column */}
               <div className="md:w-7/12 relative min-h-[400px] md:min-h-full">
                  <img
                     src="/artifacts/guided_patterns_promo_featured_1775977156589.png"
                     className="absolute inset-0 w-full h-full object-cover"
                     alt="Guided knitting pattern and yarn"
                  />
                  {/* Design Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-r from-cream/60 via-transparent to-transparent hidden md:block" />

                  {/* Interactive Floating Badge (Straight by default, Lift on hover) */}
                  <div className="absolute bottom-10 right-10 w-32 h-32 rounded-full border-2 border-white/30 backdrop-blur-md bg-white/10 flex items-center justify-center p-4 transition-all duration-500 ease-out cursor-pointer group/badge">
                     <div className="text-center">
                        <p className="text-[8px] font-black text-white uppercase tracking-tighter leading-none mb-1">Step-by-Step</p>
                        <p className="text-[14px] font-serif italic text-white leading-tight">Guided Experience</p>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </section>
   );
}