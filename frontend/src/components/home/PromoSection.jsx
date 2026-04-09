export default function PromoSection() {
  return (
    <section className="py-20 px-6 max-w-6xl mx-auto">
      <div className="rounded-3xl overflow-hidden flex flex-col md:flex-row shadow-sm min-h-[400px]">
         <div className="md:w-1/2 bg-[#F3EFE9] p-12 flex flex-col justify-center">
            <p className="text-[10px] tracking-widest text-[#8A7080] uppercase mb-4">Learn at your pace</p>
            <h2 className="font-serif text-4xl italic text-[#4A3840] leading-tight mb-4">Master the Craft<br/>with Guided Patterns</h2>
            <p className="text-sm text-[#8A7080] mb-8 leading-relaxed max-w-sm">
               Whether you're picking up a needle for the first time or looking for more advanced techniques, our guided patterns are designed to educate. Using our signature twists and knits, you'll soon create pieces entirely past expectations.
            </p>
            <div>
               <button className="bg-[#60556A] text-white px-6 py-3 rounded-full text-xs tracking-wider">View All Patterns</button>
            </div>
         </div>
         <div className="md:w-1/2 bg-[#5EBCD2] relative min-h-[300px]">
            <img src="https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?auto=format&fit=crop&q=80&w=600" className="absolute inset-0 w-full h-full object-cover mix-blend-overlay opacity-60" />
         </div>
      </div>
    </section>
  );
}