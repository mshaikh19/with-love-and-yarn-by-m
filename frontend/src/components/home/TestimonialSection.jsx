import React from 'react';

const testimonials = [
   {
      id: 1,
      name: "Sarah L.",
      location: "Seattle",
      text: "The blanket I got is absolutely gorgeous and so incredibly soft! The colors pop just as beautifully in person as they did online, and you can sense the quality craftsmanship."
   },
   {
      id: 2,
      name: "Maddie P.",
      location: "New York",
      text: "I bought the cutest crocheted toy set for my niece, and she carries them around constantly! Knowing they are handmade and safe for her makes the purchase even better."
   },
   {
      id: 3,
      name: "Elena R.",
      location: "Austin",
      text: "Truly a work of art. I've commissioned several pieces and each time I'm blown away by the attention to detail and the beautiful packaging. Highly recommended!"
   }
];

export default function TestimonialSection() {
   return (
      <section className="relative lg:h-screen flex flex-col justify-center py-6 md:py-14 px-6 overflow-hidden bg-white/40">
         {/* Background Accent */}
         <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blush/10 rounded-full blur-[120px] pointer-events-none" />

         <div className="max-w-7xl mx-auto relative z-10 w-full">
            <div className="text-center mb-12 md:mb-16">
               <span className="inline-block text-tertiary font-bold tracking-[0.4em] uppercase text-[9px] mb-4">The Community View</span>
               <h2 className="text-4xl md:text-5xl font-serif italic text-textMain leading-tight">
                  Kind Words from <span className="text-deepRose">the Studio</span>
               </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-6 md:gap-8">
               {testimonials.map((t) => (
                  <div
                     key={t.id}
                     className="group bg-white/60 backdrop-blur-md rounded-[2.5rem] p-10 md:p-12 border border-white/60 shadow-xl shadow-lavender/10 hover:shadow-2xl hover:shadow-lavender/20 transition-all duration-500 hover:-translate-y-2 flex flex-col items-center text-center"
                  >
                     <div className="flex justify-center gap-1.5 mb-8 text-tertiary/30 group-hover:text-deepRose/60 transition-colors">
                        {[...Array(5)].map((_, i) => (
                           <svg key={i} className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                              <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                           </svg>
                        ))}
                     </div>

                     <blockquote className="relative mb-8">
                        <div className="absolute -top-6 -left-4 text-7xl font-serif text-blush/20 pointer-events-none group-hover:text-blush/30 transition-colors">"</div>
                        <p className="font-serif italic text-xl md:text-2xl text-textMain leading-relaxed">
                           {t.text}
                        </p>
                     </blockquote>

                     <div className="mt-auto">
                        <div className="w-8 h-[1px] bg-tertiary/20 mx-auto mb-4 group-hover:w-12 group-hover:bg-deepRose/40 transition-all" />
                        <h4 className="text-textMain font-bold uppercase tracking-[0.2em] text-[10px] mb-0.5">{t.name}</h4>
                        <p className="text-textLight font-medium text-[9px] uppercase tracking-widest">{t.location}</p>
                     </div>
                  </div>
               ))}
            </div>
         </div>
      </section>
   );
}


