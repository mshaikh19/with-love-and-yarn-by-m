export default function BlogSection() {
  return (
    <section className="py-20 px-6 max-w-6xl mx-auto">
      <div className="text-center mb-12">
         <p className="text-xs tracking-widest text-[#8A7080] uppercase mb-2">Our culture</p>
         <h2 className="font-serif text-4xl italic text-[#4A3840]">From the Blog</h2>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        <div className="space-y-4">
          <div className="rounded-xl overflow-hidden h-[300px]">
            <img src="https://images.unsplash.com/photo-1616423641463-547ab09c488b?auto=format&fit=crop&q=80&w=800" className="w-full h-full object-cover" />
          </div>
          <p className="text-xs tracking-widest text-[#8A7080] uppercase">Nov 28 • Inspiration</p>
          <h3 className="font-serif text-3xl italic text-[#4A3840] leading-tight">The Art of the Slow Stitch: Why Handmade Matters More Than Ever</h3>
          <p className="text-sm text-[#8A7080] leading-relaxed">
            In a world of instant gratification, there is a profound peace in taking the time to hand-craft...
          </p>
          <a href="#" className="inline-block border-b border-[#4A3840] text-sm text-[#4A3840] pb-1 hover:text-tertiary transition">Read the Story</a>
        </div>

        <div className="flex flex-col gap-8 justify-center">
          {/* Small Blog 1 */}
          <div className="flex flex-col sm:flex-row gap-4 items-center sm:items-start group cursor-pointer">
            <div className="w-full sm:w-48 h-32 rounded-xl overflow-hidden flex-shrink-0">
              <img src="https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?auto=format&fit=crop&q=80&w=400" className="w-full h-full object-cover group-hover:scale-105 transition" />
            </div>
            <div className="space-y-2">
              <p className="text-[10px] tracking-widest text-[#8A7080] uppercase">Nov 15 • Guide</p>
              <h4 className="font-serif text-xl italic text-[#4A3840]">Choosing the Perfect Palette: A Guide to Yarn Color Theory</h4>
              <a href="#" className="text-xs text-[#8A7080] hover:text-tertiary underline">Continue Reading</a>
            </div>
          </div>
          {/* Small Blog 2 */}
          <div className="flex flex-col sm:flex-row gap-4 items-center sm:items-start group cursor-pointer">
            <div className="w-full sm:w-48 h-32 rounded-xl overflow-hidden flex-shrink-0">
              <img src="https://images.unsplash.com/photo-1584100936595-c0654b35a107?auto=format&fit=crop&q=80&w=400" className="w-full h-full object-cover group-hover:scale-105 transition" />
            </div>
            <div className="space-y-2">
              <p className="text-[10px] tracking-widest text-[#8A7080] uppercase">Oct 30 • Round Up</p>
              <h4 className="font-serif text-xl italic text-[#4A3840]">Spring/Summer Update: New Yarns, New Knits, New Inspiration</h4>
              <a href="#" className="text-xs text-[#8A7080] hover:text-tertiary underline">Continue Reading</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
