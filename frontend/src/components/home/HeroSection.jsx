export default function HeroSection() {
  return (
    <section className="bg-blush h-screen flex items-center">

      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-20 items-center">
        <div className="flex justify-center items-center">
          <div className="w-[320px] h-[320px] md:w-[420px] md:h-[420px]">
            <svg viewBox="0 0 670 670" className="w-full h-full">
              <defs>
                <clipPath id="smoothBumps">
                
                <rect x="100" y="100" width="500" height="500" fill="#8ECFC4" />

                <circle cx="125" cy="100" r="80" fill="#E8A0AE" />
                <circle cx="280" cy="100" r="80" fill="#E8A0AE" />
                <circle cx="435" cy="100" r="80" fill="#E8A0AE" />
                <circle cx="590" cy="100" r="80" fill="#E8A0AE" />

                
                <circle cx="125" cy="255" r="80" fill="#E8A0AE" />
                <circle cx="125" cy="410" r="80" fill="#E8A0AE" />
                <circle cx="125" cy="565" r="80" fill="#E8A0AE" />
                
                <circle cx="590" cy="255" r="80" fill="#E8A0AE" />
                <circle cx="590" cy="410" r="80" fill="#E8A0AE" />
                <circle cx="590" cy="565" r="80" fill="#E8A0AE" />
                
                <circle cx="280" cy="565" r="80" fill="#E8A0AE" />
                <circle cx="435" cy="565" r="80" fill="#E8A0AE" />
                </clipPath>
              </defs>
              
              <image
                href="https://images.unsplash.com/photo-1600185365483-26d7a4cc7519"
                width="670"
                height="670"
                preserveAspectRatio="xMidYMid slice"
                clipPath="url(#smoothBumps)"
              />

            </svg>
          </div>
        </div>

        <div className="text-center md:text-left max-w-md mx-auto md:mx-0">
          <h1 className="
            font-serif
            text-4xl sm:text-5xl md:text-6xl
            text-textMain
            leading-tight
          ">
            Crafted in yarn, 
            Carried with Love
          </h1>

          <div className="mt-8 space-y-4">
            <p className="
              text-xs md:text-sm
              tracking-[0.2em]
              uppercase
              text-textLight
            ">
              Handcrafted crochet pieces
              made with warmth & care
            </p>

            <p className="
              text-xs md:text-sm
              tracking-[0.2em]
              uppercase
              text-textLight
            ">
              Patterns • Tutorials • Handmade Creations
            </p>
          </div>

          <div className="mt-10">
            <button className="
              text-xs md:text-sm
              tracking-[0.2em]
              uppercase
              text-textMain
              hover:text-rose
              transition
            ">
              Explore now →
            </button>
          </div>

        </div>

        {/* 🎀 RESPONSIVE FULL-WIDTH RIBBON */}
        <div className="absolute bottom-0 left-0 w-full">

          <div className="
            w-full
            bg-butter
            text-textMain
            text-[10px] sm:text-[11px] md:text-xs
            tracking-[0.15em] sm:tracking-[0.2em] md:tracking-[0.25em]
            uppercase
            text-center
            py-5 sm:py-6 md:py-7
            px-5 sm:px-8 md:px-12
            border-t border-white/40
            shadow-[0_-5px_20px_rgba(0,0,0,0.05)]
          ">

            <span className="block leading-relaxed">
              Handmade crochet pieces crafted with love & care
            </span>

          </div>

        </div>
        
      </div>

    </section>
  );
}


