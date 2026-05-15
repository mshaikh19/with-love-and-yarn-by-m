import { Link } from "react-router-dom";

export default function HeroSection() {
  return (
    <section className="min-h-screen flex items-center pt-28 pb-16 px-6 md:px-10 max-w-7xl mx-auto">
      <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center">

        {/* ✦ LEFT: TEXT CONTENT — always first on all screen sizes */}
        <div className="space-y-5 text-center md:text-left">
          <p className="text-[11px] tracking-[4px] text-[#6B3A4E] font-bold uppercase">
            With Love &amp; Yarn By M
          </p>
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl italic font-bold text-[#4A3840] leading-tight">
            Handcrafted<br />with<br />Love &amp; Yarn
          </h1>
          <p className="text-[#4A3840] text-sm md:text-base max-w-sm md:max-w-md mx-auto md:mx-0 leading-relaxed">
            Discover our hand-crafted, beautifully designed crochet and knit products.
            Each piece is lovingly created from premium materials.
          </p>
          <div className="flex gap-4 pt-2 justify-center md:justify-start flex-wrap">
            <Link to="/shop" className="bg-[#6B3A4E] text-white px-7 py-3 rounded-full text-sm font-medium hover:opacity-90 hover:scale-[1.02] transition-all duration-300 shadow-md">
              Shop Now
            </Link>
            <Link to="/shop" className="bg-white text-[#6B3A4E] px-7 py-3 rounded-full text-sm font-medium hover:opacity-90 hover:scale-[1.02] transition-all duration-300 border border-[#e5d6da] shadow-sm">
              Explore Collection
            </Link>
          </div>
        </div>
        
        {/* ... (rest of the HeroSection images) */}

        {/* ✦ RIGHT / BELOW: IMAGE COLLAGE — same layout as desktop, scaled per breakpoint */}
        <div className="relative
          h-[300px] sm:h-[380px] md:h-[520px] lg:h-[580px]
          w-full
        ">

          {/* Main Large Image — top right anchor */}
          <img
            src="https://i.pinimg.com/736x/97/18/f4/9718f44a3a11a16f33b96ba7e49d4d16.jpg"
            alt="Crochet Toys"
            className="
              absolute top-10 right-0
              w-[92%] sm:w-[74%] md:w-[76%] lg:w-[82%]
              h-[80%] sm:h-[80%] md:h-[80%] lg:h-[82%]
              object-cover rounded-2xl
              shadow-[0_20px_50px_rgba(0,0,0,0.1)] z-10
              transition-all duration-500 hover:scale-[1.03] hover:shadow-2xl cursor-pointer
            "
          />

          {/* Top Left Small Image — overlaps top-left of main */}
          <img
            src="https://i.pinimg.com/736x/97/18/f4/9718f44a3a11a16f33b96ba7e49d4d16.jpg"
            alt="Purple Yarn"
            className="
              absolute top-2 left-2
              w-20 h-20 sm:w-28 sm:h-28 md:w-36 md:h-36 lg:w-40 lg:h-40
              object-cover rounded-2xl
              shadow-[0_15px_40px_rgba(0,0,0,0.08)] z-20
              transition-all duration-500 hover:scale-105 hover:shadow-xl cursor-pointer
            "
          />

          {/* Bottom Left Small Image — overlaps bottom-left of main */}
          <img
            src="https://i.pinimg.com/736x/97/18/f4/9718f44a3a11a16f33b96ba7e49d4d16.jpg"
            alt="Knitting Hands"
            className="
              absolute -bottom-6 left-2 
              w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 lg:w-44 lg:h-44
              object-cover rounded-2xl
              shadow-[0_15px_40px_rgba(0,0,0,0.08)] z-20
              transition-all duration-500 hover:scale-105 hover:shadow-xl cursor-pointer
            "
          />

        </div>
      </div>
    </section>
  );
}
