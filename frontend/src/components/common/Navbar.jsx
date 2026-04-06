// export default function Navbar() {
//   return (
//     <header className="fixed top-4 left-0 w-full z-50 flex justify-center px-3">

//       {/* FLOATING CONTAINER */}
//       <div className="
//         w-full max-w-6xl
//         bg-[#f5eff1]/95 backdrop-blur-sm
//         rounded-full
//         shadow-[0_10px_30px_rgba(0,0,0,0.08)]
//         border border-white/40
//         overflow-hidden
//       ">

//         {/* 🌸 TOP STRIP */}
//         {/* <div className="text-[11px] text-textLight px-4 py-1 flex justify-between">
//           <span>Shop</span>
//           <span>Families & Care</span>
//           <span>About</span>
//         </div> */}

//         {/* 🌿 MAIN NAV */}
//         <div className="relative px-6 py-4 flex items-center justify-between">

//           {/* LEFT LINKS */}
//           <div className="hidden md:flex gap-8 text-[13px] tracking-wider font-medium text-textLight uppercase">
//             <NavLink label="Home" />
//             <NavLink label="Menu" />
//             <NavLink label="Cakes" />
//           </div>

//           {/* CENTER LOGO */}
//           <div className="
//             absolute left-1/2 -translate-x-1/2
//             font-serif text-2xl text-textMain tracking-wide
//           ">
//             With Love & Yarn
//             <span className="italic"> by </span>
//             <span>M</span>
//           </div>

//           {/* RIGHT LINKS */}
//           <div className="hidden md:flex gap-8 text-[13px] tracking-wider font-medium text-textLight uppercase">
//             <NavLink label="What's New" />
//             <NavLink label="Account" />
//             <span className="cursor-pointer">🛒</span>
//           </div>

//         </div>

//       </div>

//     </header>
//   );
// }


// /* 🔹 NavLink */
// function NavLink({ label }) {
//   return (
//     <a
//       href="#"
//       className="
//         relative hover:text-rose transition duration-300
//       "
//     >
//       {label}

//       {/* underline */}
//       <span className="
//         absolute left-0 -bottom-1 w-0 h-[1px]
//         bg-rose
//         transition-all duration-300
//         hover:w-full
//       "></span>
//     </a>
//   );
// }

import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-4 left-0 w-full z-50 flex justify-center px-3">

      {/* FLOATING CONTAINER */}
      <div className="
        w-full max-w-6xl
        bg-[#f5eff1]/95 backdrop-blur-sm
        rounded-2xl md:rounded-full
        shadow-[0_10px_30px_rgba(0,0,0,0.08)]
        border border-white/40
        overflow-visible
      ">

        {/* 🌿 MAIN NAV */}
        <div className="relative px-5 md:px-6 py-4 flex items-center justify-between">

          {/* LEFT LINKS */}
          <div className="hidden md:flex gap-8 text-[13px] tracking-wider font-medium text-textLight uppercase">
            <NavLink label="Home" />
            <NavLink label="Shop" />
            <NavLink label="Patterns" />
          </div>

          {/* 🌸 LOGO CENTER */}
          <div className="
            absolute left-1/2 -translate-x-1/2
            font-serif text-lg sm:text-xl md:text-2xl
            text-textMain tracking-wide
          ">
            With Love & Yarn
            <span className="italic"> by </span>
            <span>M</span>
          </div>

          {/* RIGHT LINKS (DESKTOP) */}
          <div className="hidden md:flex gap-8 text-[13px] tracking-wider font-medium text-textLight uppercase items-center">
            <NavLink label="Tutorials" />
            <NavLink label="Account" />
            <span className="cursor-pointer">🛒</span>
          </div>

          {/* 🍔 MOBILE MENU BUTTON */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden text-xl text-textMain"
          >
            ☰
          </button>

        </div>

        {/* 📱 MOBILE DROPDOWN */}
        
        {open && (
          <div className="md:hidden mt-3 px-2">

            <div className="mb-4
              rounded-2xl

              p-6
              flex flex-col gap-5
              text-sm tracking-wide uppercase
              text-textMain
            ">

              <NavLink label="Home" />
              <NavLink label="Shop" />
              <NavLink label="Patterns" />
              <NavLink label="Tutorials" />
              <NavLink label="Account" />

              {/* Divider */}
              <div className="h-px bg-[#e5d6da] my-2"></div>

              <button className="
                w-full py-2 rounded-full
                bg-rose text-white text-xs
              ">
                View Cart
              </button>

            </div>

          </div>
        )}


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

      <span className="
        absolute left-0 -bottom-1 w-0 h-[1px]
        bg-rose
        transition-all duration-300
        group-hover:w-full
      "></span>
    </a>
  );
}