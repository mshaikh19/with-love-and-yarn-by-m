// import { useState } from "react";

// export default function Navbar() {
//   const [open, setOpen] = useState(false);

//   return (
//     <div className="fixed top-5 left-0 w-full flex justify-center z-50 px-3">

//       <div className="w-full max-w-6xl">

//         {/* 🌸 TOP STRIP */}
//         <div className="
//           bg-gradient-to-r from-blush via-rose to-lilac
//           text-white text-[11px] md:text-xs
//           px-5 py-[6px]
//           rounded-t-2xl
//           flex justify-between items-center
//           tracking-wide
//           shadow-sm
//         ">
//           <span className="hidden md:block opacity-90">
//             ✨ Handmade with love
//           </span>

//           <span className="mx-auto md:mx-0 font-medium">
//             🧶 New crochet drops every week
//           </span>

//           <span className="hidden md:block opacity-90">
//             📦 Free shipping ₹999+
//           </span>
//         </div>

//         {/* 🌿 MAIN NAV */}
//         <div className="
//           bg-cream/95 backdrop-blur-xl
//           rounded-b-3xl
//           shadow-[0_12px_40px_rgba(180,140,160,0.18)]
//           px-5 md:px-10 py-4
//           flex items-center justify-between
//           border border-white/40
//         ">

//           {/* LEFT */}
//           <div className="hidden md:flex gap-10 text-sm font-medium text-textLight">
//             <NavLink label="Home" />
//             <NavLink label="Shop" />
//             <NavLink label="Tutorials" />
//           </div>

//           {/* LOGO */}
//           <h1 className="
//             font-serif text-xl md:text-2xl
//             text-textMain tracking-[1px]
//             text-center
//           ">
//             With Love & Yarn
//           </h1>

//           {/* RIGHT */}
//           <div className="hidden md:flex items-center gap-6">

//             <Icon>🔍</Icon>
//             <Icon>🛒</Icon>

//             <button className="
//               bg-deepRose text-white
//               px-4 py-1.5 rounded-full text-xs
//               shadow-md
//               hover:scale-105 hover:shadow-lg
//               transition duration-300
//             ">
//               Order
//             </button>

//           </div>

//           {/* MOBILE ICON */}
//           <button
//             onClick={() => setOpen(!open)}
//             className="md:hidden text-xl text-textMain"
//           >
//             ☰
//           </button>
//         </div>

//         {/* 🌊 SOFT CURVE */}
//         <div className="relative h-7 bg-[#eadad4] rounded-b-2xl">
//           <div className="
//             absolute left-1/2 -translate-x-1/2 -top-4
//             w-32 h-10
//             bg-cream
//             rounded-b-full
//             shadow-sm
//           "></div>
//         </div>

//         {/* 📱 MOBILE MENU */}
//         {open && (
//           <div className="
//             md:hidden mt-3
//             bg-cream/95 backdrop-blur-xl
//             rounded-2xl shadow-xl
//             p-5 flex flex-col gap-4
//             text-textMain
//             border border-white/40
//           ">
//             <NavLink label="Home" />
//             <NavLink label="Shop" />
//             <NavLink label="Tutorials" />
//             <NavLink label="Patterns" />

//             <button className="
//               bg-deepRose text-white
//               py-2 rounded-full mt-3
//               shadow-md
//             ">
//               Order
//             </button>
//           </div>
//         )}

//       </div>
//     </div>
//   );
// }


// /* 🔹 NavLink */
// function NavLink({ label }) {
//   return (
//     <a
//       href="#"
//       className="
//         relative group text-textLight
//         hover:text-rose transition duration-300
//       "
//     >
//       {label}

//       {/* underline */}
//       <span className="
//         absolute left-0 -bottom-1 w-0 h-[2px]
//         bg-rose
//         transition-all duration-300
//         group-hover:w-full
//       "></span>
//     </a>
//   );
// }


// /* 🔹 Icon */
// function Icon({ children }) {
//   return (
//     <span className="
//       text-textLight text-lg
//       hover:text-rose hover:scale-110
//       cursor-pointer transition duration-300
//     ">
//       {children}
//     </span>
//   );
// }

// export default function Navbar() {
//   return (
//     <header className="fixed top-0 left-0 w-full z-50 bg-[#f5eff1] border-b border-[#eee]">

//       <div className="w-full flex justify-center">

//         <div className="w-full max-w-6xl px-6 py-5 flex items-center justify-between">

//           {/* LEFT LOGO */}
//           <div className="font-serif text-2xl text-textMain tracking-wide">
//             <span>With Love & Yarn </span>
//             <span className="italic"> by </span>
//             <span> M </span>
//           </div>

//           {/* RIGHT LINKS */}
//           <div className="hidden md:flex gap-8 text-[13px] tracking-wider font-medium text-textLight uppercase">

//             <NavLink label="Home" />
//             <NavLink label="About" />
//             <NavLink label="Products" />
//             <NavLink label="Shop Now" />
//             <NavLink label="Contact" />
//             <NavLink label="FAQs" />

//           </div>

//         </div>

//       </div>

//     </header>
//   );
// }


// /* 🔹 Minimal NavLink */
// function NavLink({ label }) {
//   return (
//     <a
//       href="#"
//       className="hover:text-rose transition duration-300"
//     >
//       {label}
//     </a>
//   );
// }

export default function Navbar() {
  return (
    <header className="fixed top-4 left-0 w-full z-50 flex justify-center px-3">

      {/* FLOATING CONTAINER */}
      <div className="
        w-full max-w-6xl
        bg-[#f5eff1]/95 backdrop-blur-sm
        rounded-full
        shadow-[0_10px_30px_rgba(0,0,0,0.08)]
        border border-white/40
        overflow-hidden
      ">

        {/* 🌸 TOP STRIP */}
        {/* <div className="text-[11px] text-textLight px-4 py-1 flex justify-between">
          <span>Shop</span>
          <span>Families & Care</span>
          <span>About</span>
        </div> */}

        {/* 🌿 MAIN NAV */}
        <div className="relative px-6 py-4 flex items-center justify-between">

          {/* LEFT LINKS */}
          <div className="hidden md:flex gap-8 text-[13px] tracking-wider font-medium text-textLight uppercase">
            <NavLink label="Home" />
            <NavLink label="Menu" />
            <NavLink label="Cakes" />
          </div>

          {/* CENTER LOGO */}
          <div className="
            absolute left-1/2 -translate-x-1/2
            font-serif text-2xl text-textMain tracking-wide
          ">
            With Love & Yarn
            <span className="italic"> by </span>
            <span>M</span>
          </div>

          {/* RIGHT LINKS */}
          <div className="hidden md:flex gap-8 text-[13px] tracking-wider font-medium text-textLight uppercase">
            <NavLink label="What's New" />
            <NavLink label="Account" />
            <span className="cursor-pointer">🛒</span>
          </div>

        </div>

      </div>

    </header>
  );
}


/* 🔹 NavLink */
function NavLink({ label }) {
  return (
    <a
      href="#"
      className="
        relative hover:text-rose transition duration-300
      "
    >
      {label}

      {/* underline */}
      <span className="
        absolute left-0 -bottom-1 w-0 h-[1px]
        bg-rose
        transition-all duration-300
        hover:w-full
      "></span>
    </a>
  );
}