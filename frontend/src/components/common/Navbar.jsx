// import { useState } from "react";

// export default function Navbar() {
//   const [open, setOpen] = useState(false);

//   return (
//     <header className="fixed top-4 left-0 w-full z-50 flex justify-center px-3 md:my-3 sm:my-6">

//       <div className="w-full max-w-6xl relative z-50 drop-shadow-[0_8px_25px_rgba(0,0,0,0.06)]">

//         <div className="absolute inset-0 bg-white rounded-2xl md:rounded-full -z-10"></div>
//         <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-white w-[200px] h-[75px] md:w-[250px] md:h-[90px] rounded-[3rem] overflow-hidden flex items-center justify-center z-10 shadow-sm cursor-pointer transition-transform hover:scale-[1.02] duration-300">
//           <img
//             src="/logo.png?v=5"
//             alt="With Love & Yarn by M Logo"
//             className="w-[95%] sm:w-[100%] md:w-[80%] h-auto max-w-none object-contain mix-blend-multiply transition-transform hover:scale-[1.05] duration-300"
//             style={{ filter: "contrast(1.2) saturate(1.1)" }}
//           />
//         </div>

//         <div className="relative px-5 md:px-6 py-4 flex items-center justify-between z-20 pointer-events-none">

//           <div className="hidden md:flex gap-8 text-[13px] tracking-wider font-medium text-textLight uppercase pointer-events-auto">
//             <NavLink label="Home" />
//             <NavLink label="Shop" />
//             <NavLink label="Patterns" />
//           </div>

//           <div className="w-[120px] md:w-[150px]"></div>

//           <div className="hidden md:flex gap-8 text-[13px] tracking-wider font-medium text-textLight uppercase items-center pointer-events-auto">
//             <NavLink label="Tutorials" />
//             <NavLink label="Account" />
//             <span className="cursor-pointer">🛒</span>
//           </div>

//           <button
//             onClick={() => setOpen(!open)}
//             className="md:hidden text-xl text-textMain pointer-events-auto"
//           >
//             ☰
//           </button>

//         </div>

//         {open && (
//           <div className="md:hidden mt-3 px-2">

//             <div className="mb-4
//               rounded-2xl

//               p-6
//               flex flex-col gap-5
//               text-sm tracking-wide uppercase
//               text-textMain
//             ">

//               <NavLink label="Home" />
//               <NavLink label="Shop" />
//               <NavLink label="Patterns" />
//               <NavLink label="Tutorials" />
//               <NavLink label="Account" />

//               {/* Divider */}
//               <div className="h-px bg-[#e5d6da] my-2"></div>

//               <button className="
//                 w-full py-2 rounded-full
//                 bg-rose text-white text-xs
//               ">
//                 View Cart
//               </button>

//             </div>

//           </div>
//         )}


//       </div>

//     </header>
//   );
// }

// function NavLink({ label }) {
//   return (
//     <a
//       href="#"
//       className="
//         relative hover:text-rose transition duration-300
//       "
//     >
//       {label}

//       <span className="
//         absolute left-0 -bottom-1 w-0 h-[1px]
//         bg-rose
//         transition-all duration-300
//         group-hover:w-full
//       "></span>
//     </a>
//   );
// }

import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-4 left-0 w-full z-50 flex justify-center px-3 md:my-3 sm:my-6">

      <div className="w-full max-w-6xl relative z-50">

        {/* ✨ TEXT LOGO (NO BACKGROUND / NO BUMP) */}
        <div className="text-center leading-tight">
          <h1 className="font-[WindSong] text-3xl text-[#6b3a4e]">
            With Love & Yarn
          </h1>
          <p className="text-[10px] tracking-[3px] text-gray-500 uppercase">
            by M
          </p>
        </div>

        {/* NAV LINKS */}
        <div className="relative px-5 md:px-6 py-4 flex items-center justify-between z-20 pointer-events-none">

          <div className="hidden md:flex gap-8 text-[13px] tracking-wider font-medium text-textLight uppercase pointer-events-auto">
            <NavLink label="Home" />
            <NavLink label="Shop" />
            <NavLink label="Patterns" />
          </div>

          <div className="w-[120px] md:w-[150px]"></div>

          <div className="hidden md:flex gap-8 text-[13px] tracking-wider font-medium text-textLight uppercase items-center pointer-events-auto">
            <NavLink label="Tutorials" />
            <NavLink label="Account" />
            <span className="cursor-pointer">🛒</span>
          </div>

          <button
            onClick={() => setOpen(!open)}
            className="md:hidden text-xl text-textMain pointer-events-auto"
          >
            ☰
          </button>

        </div>

        {/* MOBILE MENU */}
        {open && (
          <div className="md:hidden mt-3 px-2">
            <div className="mb-4 rounded-2xl p-6 flex flex-col gap-5 text-sm tracking-wide uppercase text-textMain">

              <NavLink label="Home" />
              <NavLink label="Shop" />
              <NavLink label="Patterns" />
              <NavLink label="Tutorials" />
              <NavLink label="Account" />

              <div className="h-px bg-[#e5d6da] my-2"></div>

              <button className="w-full py-2 rounded-full bg-rose text-white text-xs">
                View Cart
              </button>

            </div>
          </div>
        )}

      </div>
    </header>
  );
}

function NavLink({ label }) {
  return (
    <a
      href="#"
      className="relative hover:text-rose transition duration-300"
    >
      {label}
    </a>
  );
}