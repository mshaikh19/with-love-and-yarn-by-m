export default function HeroSection() {
  return (
    <section className="pt-32 pb-16 px-6 max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
      <div className="space-y-6">
        <p className="text-xs tracking-widest text-[#8A7080] uppercase">With Love & Yarn By M</p>
        <h1 className="font-serif text-5xl md:text-7xl italic font-bold text-[#4A3840] leading-tight">
          Handcrafted <br /> with <br /> Love & Yarn
        </h1>
        <p className="text-[#8A7080] text-sm md:text-base max-w-md leading-relaxed mt-4">
          Discover our hand-crafted, beautifully designed crochet and knit products.
          Each piece is lovingly created from premium materials.
        </p>
        <div className="flex gap-4 pt-4">
          <button className="bg-[#60556A] text-white px-8 py-3 rounded-full text-sm hover:opacity-90 transition">
            Shop Now
          </button>
          <button className="bg-primary text-[#60556A] px-8 py-3 rounded-full text-sm font-medium hover:opacity-90 transition">
            Explore Collection
          </button>
        </div>
      </div>

      <div className="relative h-[500px] w-full mt-10 md:mt-0 flex justify-center items-center">
        {/* Clean transparent background */}

        {/* Main Image (Octopus) - enlarged size */}
        <img
          src="/hero_main_1775737341179.png"
          alt="Crochet Toys"
          className="absolute top-12 right-12 w-[65%] h-[75%] object-cover rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.1)] z-10 transition-all duration-500 hover:scale-[1.03] hover:shadow-2xl cursor-pointer"
        />

        {/* Top Left Floating Image - active floating animation */}
        <img
          src="/hero_small_2_1775737375511.png"
          alt="Purple Yarn"
          className="animate-float absolute top-8 left-10 w-36 h-36 object-cover rounded-2xl shadow-[0_15px_40px_rgba(0,0,0,0.08)] z-20 transition-all duration-500 hover:scale-105 hover:shadow-xl cursor-pointer"
        />

        {/* Bottom Floating Image - delayed active floating animation */}
        <img
          src="/hero_small_1_1775737359124.png"
          alt="Knitting Hands"
          className="animate-float-del absolute bottom-8 left-16 w-40 h-40 object-cover rounded-2xl shadow-[0_15px_40px_rgba(0,0,0,0.08)] z-20 transition-all duration-500 hover:scale-105 hover:shadow-xl cursor-pointer"
        />
      </div>
    </section>
  );
}
