// import Button from "../ui/Button";

// export default function HeroSection() {
//   return (
//     <section className="pt-24 bg-blush">

//       <div className="max-w-6xl mx-auto bg-cream rounded-3xl p-10 flex flex-col md:flex-row items-center justify-between gap-8 shadow-lg">

//         <img
//           src="https://images.unsplash.com/photo-1600185365483-26d7a4cc7519"
//           className="w-full max-w-xs rounded-xl"
//         />

//         <div className="text-center">
//           <h1 className="font-serif text-4xl md:text-5xl text-textMain">
//             Crafted with love & yarn
//           </h1>

//           <p className="text-textLight mt-2">
//             Discover cozy crochet creations & tutorials
//           </p>

//           <div className="mt-6">
//             <Button>Explore</Button>
//           </div>
//         </div>

//         <img
//           src="https://images.unsplash.com/photo-1585386959984-a41552262a6f"
//           className="w-full max-w-xs rounded-xl"
//         />

//       </div>
//     </section>
//   );
// }

// export default function HeroSection() {
//   return (
//     <section className="bg-blush min-h-screen flex items-center">

//       <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">

//         {/* 🌿 LEFT SHAPE + IMAGE */}
//         <div className="relative flex justify-center">

//           {/* ORGANIC SHAPE */}
//           <div className="
//             w-[260px] h-[260px] md:w-[320px] md:h-[320px]
//             bg-sage
//             rounded-[40%_60%_60%_40%/60%_40%_60%_40%]
//             flex items-center justify-center
//           ">

//             {/* IMAGE */}
//             <img
//               src="https://images.unsplash.com/photo-1600185365483-26d7a4cc7519"
//               className="w-[80%] rounded-lg object-cover"
//             />

//           </div>

//         </div>

//         {/* ✨ RIGHT TEXT */}
//         <div className="text-center md:text-left">

//           <h1 className="
//             font-serif text-4xl md:text-5xl
//             text-textMain leading-tight
//           ">
//             Cozy up your space
//           </h1>

//           <p className="mt-4 text-textLight text-sm md:text-base max-w-md">
//             Handmade crochet creations crafted with love,
//             designed to bring warmth, comfort, and softness
//             into your everyday life.
//           </p>

//           <p className="mt-3 text-textLight text-sm">
//             Discover patterns, tutorials & handmade pieces.
//           </p>

//           {/* CTA */}
//           <button className="
//             mt-6 text-sm
//             text-textMain
//             underline underline-offset-4
//             hover:text-rose transition
//           ">
//             Explore collection →
//           </button>

//         </div>

//       </div>

//     </section>
//   );
// }

export default function HeroSection() {
  return (
    <section className="bg-blush h-screen flex items-center">

      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-20 items-center">

        {/* 🌿 LEFT BIG SHAPE */}
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

            {/* IMAGE */}
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
        {/* ✨ RIGHT CONTENT */}
        <div className="text-center md:text-left">

          <h1 className="
            font-serif text-4xl md:text-6xl
            text-textMain leading-tight
          ">
            Wrapped in yarn,<br />
            made with love
          </h1>

          <p className="mt-5 text-textLight text-sm md:text-base max-w-md">
            Thoughtfully handcrafted crochet pieces that bring warmth,
            softness, and a personal touch to your everyday life.
          </p>

          <p className="mt-2 text-textLight text-sm">
            Patterns • Tutorials • Handmade Creations
          </p>

          {/* CTA */}
          <button className="
            mt-6 text-sm
            text-textMain
            underline underline-offset-4
            hover:text-rose transition
          ">
            Explore collection →
          </button>

        </div>

      </div>

    </section>
  );
}