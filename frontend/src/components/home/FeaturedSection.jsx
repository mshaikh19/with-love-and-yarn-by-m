// export default function FeaturedSection() {
//   return (
//     <section className="relative bg-cream py-24 md:py-28 text-center overflow-hidden">

//       {/* 🌸 SOFT BACKGROUND GLOW */}
//       <div className="absolute inset-0 bg-gradient-to-b from-blush/30 via-transparent to-transparent"></div>

//       <div className="relative max-w-6xl mx-auto px-4 md:px-6">

//         {/* HEADER */}
//         <h2 className="font-serif text-3xl md:text-4xl text-textMain">
//           Explore With Love & Yarn
//         </h2>

//         <p className="text-textLight text-sm mt-3 italic">
//           discover, learn & create
//         </p>

//         {/* CARDS */}
//         <div className="
//           mt-14
//           grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3
//           gap-8 md:gap-10
//         ">

//           <Card
//             title="Products"
//             desc="Handmade crochet pieces crafted with care"
//             btn="Shop Now"
//             img="https://images.unsplash.com/photo-1585386959984-a41552262a6f"
//           />

//           <Card
//             title="Tutorials"
//             desc="Step-by-step guides to learn crochet"
//             btn="Start Learning"
//             img="https://images.unsplash.com/photo-1519710164239-da123dc03ef4"
//           />

//           <Card
//             title="Patterns"
//             desc="Download beautiful crochet patterns"
//             btn="View Patterns"
//             img="https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9"
//           />

//         </div>

//       </div>
//     </section>
//   );
// }

export default function FeaturedSection() {
  return (
    <section className="bg-cream py-24 md:py-28 text-center">

      <div className="max-w-6xl mx-auto px-4 md:px-6">

        {/* HEADER */}
        <h2 className="font-serif text-3xl md:text-4xl text-text">
          Explore With Love & Yarn
        </h2>

        <p className="text-textLight text-sm mt-3 italic">
          discover, learn & create
        </p>

        {/* CARDS */}
        <div className="
          mt-14
          grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3
          gap-8 md:gap-10
        ">

          <Card
            title="Products"
            desc="Handmade crochet pieces crafted with care"
            btn="Shop Now"
            img="https://images.unsplash.com/photo-1585386959984-a41552262a6f"
          />

          <Card
            title="Tutorials"
            desc="Step-by-step guides to learn crochet"
            btn="Start Learning"
            img="https://images.unsplash.com/photo-1519710164239-da123dc03ef4"
          />

          <Card
            title="Patterns"
            desc="Download beautiful crochet patterns"
            btn="View Patterns"
            img="https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9"
          />

        </div>

      </div>
    </section>
  );
}
function Card({ title, desc, btn, img }) {
  return (
    <div className="
      bg-white
      border border-rose/20
      rounded-3xl
      p-5 md:p-6
      text-center
      transition duration-300
      hover:-translate-y-1
      hover:shadow-[0_10px_25px_rgba(0,0,0,0.05)]
      group
    ">

      {/* IMAGE */}
      <div className="mb-5 overflow-hidden rounded-2xl">

        <img
          src={img}
          alt={title}
          className="
            w-full h-44 md:h-48
            object-cover
            transition duration-500
            group-hover:scale-105
          "
        />

      </div>

      {/* LABEL */}
      <p className="
        text-[10px]
        tracking-[0.3em]
        uppercase
        text-textLight
        mb-2
      ">
        Collection
      </p>

      {/* TITLE */}
      <h3 className="font-serif text-lg md:text-xl text-text">
        {title}
      </h3>

      {/* DESCRIPTION */}
      <p className="text-textLight text-sm mt-3 leading-relaxed">
        {desc}
      </p>

      {/* CTA */}
      <button className="
        mt-6
        text-xs
        tracking-[0.25em]
        uppercase
        text-text
        border-b border-text
        hover:text-rose hover:border-rose
        transition
      ">
        {btn}
      </button>

    </div>
  );
}

// function Card({ title, desc, btn, img }) {
//   return (
//     <div className="
//       bg-blush/40
//       backdrop-blur-sm
//       rounded-3xl
//       p-5 md:p-6
//       text-center
//       transition duration-300
//       hover:-translate-y-2 hover:shadow-[0_20px_50px_rgba(0,0,0,0.08)]
//       group
//     ">

//       {/* IMAGE */}
//       <div className="relative mb-5 overflow-hidden rounded-2xl">

//         <img
//           src={img}
//           alt={title}
//           className="
//             w-full h-44 md:h-48
//             object-cover
//             transition duration-500
//             group-hover:scale-105
//           "
//         />

//         {/* SOFT OVERLAY */}
//         <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent"></div>

//       </div>

//       {/* LABEL */}
//       <p className="
//         text-[10px]
//         tracking-[0.3em]
//         uppercase
//         text-textLight
//         mb-2
//       ">
//         Collection
//       </p>

//       {/* TITLE */}
//       <h3 className="
//         font-serif
//         text-lg md:text-xl
//         text-textMain
//       ">
//         {title}
//       </h3>

//       {/* DESCRIPTION */}
//       <p className="
//         text-textLight
//         text-sm
//         mt-3
//         leading-relaxed
//       ">
//         {desc}
//       </p>

//       {/* CTA */}
//       <button className="
//         mt-6
//         text-xs
//         tracking-[0.25em]
//         uppercase
//         text-textMain
//         border-b border-textMain
//         hover:text-rose hover:border-rose
//         transition
//       ">
//         {btn}
//       </button>

//     </div>
//   );
// }