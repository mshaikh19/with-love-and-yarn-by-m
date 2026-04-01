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

export default function HeroSection() {
  return (
    <section className="bg-blush min-h-screen flex items-center">

      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">

        {/* 🌿 LEFT SHAPE + IMAGE */}
        <div className="relative flex justify-center">

          {/* ORGANIC SHAPE */}
          <div className="
            w-[260px] h-[260px] md:w-[320px] md:h-[320px]
            bg-sage
            rounded-[40%_60%_60%_40%/60%_40%_60%_40%]
            flex items-center justify-center
          ">

            {/* IMAGE */}
            <img
              src="https://images.unsplash.com/photo-1600185365483-26d7a4cc7519"
              className="w-[80%] rounded-lg object-cover"
            />

          </div>

        </div>

        {/* ✨ RIGHT TEXT */}
        <div className="text-center md:text-left">

          <h1 className="
            font-serif text-4xl md:text-5xl
            text-textMain leading-tight
          ">
            Cozy up your space
          </h1>

          <p className="mt-4 text-textLight text-sm md:text-base max-w-md">
            Handmade crochet creations crafted with love,
            designed to bring warmth, comfort, and softness
            into your everyday life.
          </p>

          <p className="mt-3 text-textLight text-sm">
            Discover patterns, tutorials & handmade pieces.
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