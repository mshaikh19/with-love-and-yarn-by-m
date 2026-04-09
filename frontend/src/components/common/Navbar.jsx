import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full z-50 flex justify-center px-4 pt-4">

      {/* SOLID WHITE PILL */}
      <div className="w-full max-w-6xl bg-white shadow-[0_4px_24px_rgba(0,0,0,0.07)] rounded-2xl md:rounded-full">

        {/* MAIN NAV ROW */}
        <div className="relative flex items-center justify-between px-6 md:px-10 py-4 md:py-6">

          {/* LEFT LINKS — desktop only */}
          <div className="hidden md:flex gap-6 lg:gap-8 text-[12px] lg:text-[13px] tracking-wider font-medium text-textLight uppercase">
            <NavLink label="Home" />
            <NavLink label="Shop" />
            <NavLink label="Patterns" />
          </div>

          {/* CENTER LOGO — on mobile takes full width, on desktop is absolute center */}
          <div className="flex-1 md:flex-none md:absolute md:left-1/2 md:-translate-x-1/2 flex flex-col items-center leading-tight select-none cursor-pointer group">
            <span
              className="font-[Corinthia] text-[2rem] sm:text-[2.4rem] md:text-[2.6rem] text-[#6b3a4e] group-hover:opacity-80 transition-opacity duration-300"
              style={{ letterSpacing: "0.02em" }}
            >
              With love &amp; yarn
            </span>
            <span className="font-['Josefin_Sans'] font-bold text-[10px] md:text-[12px] tracking-[5px] md:tracking-[6px] text-[#6b3a4e] uppercase">
              by M
            </span>
          </div>

          {/* RIGHT LINKS — desktop only */}
          <div className="hidden md:flex gap-6 lg:gap-8 text-[12px] lg:text-[13px] tracking-wider font-medium text-textLight uppercase items-center">
            <NavLink label="Tutorials" />
            <NavLink label="Account" />
            <span className="cursor-pointer text-base" title="Cart">🛒</span>
          </div>

          {/* MOBILE: Hamburger */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden text-2xl text-[#6b3a4e] ml-2 leading-none"
            aria-label="Toggle menu"
          >
            {open ? "✕" : "☰"}
          </button>

        </div>

        {/* MOBILE DROPDOWN */}
        {open && (
          <div className="md:hidden flex flex-col gap-4 px-6 pb-6 pt-2 border-t border-[#f0e8ec] text-sm tracking-wider uppercase text-textMain">
            <NavLink label="Home" />
            <NavLink label="Shop" />
            <NavLink label="Patterns" />
            <NavLink label="Tutorials" />
            <NavLink label="Account" />
            <div className="h-px bg-[#e5d6da]" />
            <button className="w-full py-2.5 rounded-full bg-[#60556A] text-white text-xs font-medium tracking-widest">
              View Cart
            </button>
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
      className="relative hover:text-[#6b3a4e] transition duration-300 after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-[1px] after:bg-[#6b3a4e] after:transition-all after:duration-300 hover:after:w-full"
    >
      {label}
    </a>
  );
}