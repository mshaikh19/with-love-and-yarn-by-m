import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import CartDrawer from "./CartDrawer";
import SearchDropdown from "./SearchOverlay";
import WishlistDrawer from "./WishlistDrawer";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isWishlistOpen, setIsWishlistOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(true); // MOCK AUTH STATE
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // GLOBAL BODY SCROLL LOCK
  useEffect(() => {
    const anyDrawerOpen = isCartOpen || isSearchOpen || isWishlistOpen || open;
    const scrollBarWidth = window.innerWidth - document.documentElement.clientWidth;
    
    if (anyDrawerOpen) {
      document.documentElement.style.overflow = 'hidden';
      document.body.style.overflow = 'hidden';
      document.body.style.paddingRight = `${scrollBarWidth}px`;
    } else {
      document.documentElement.style.overflow = '';
      document.body.style.overflow = '';
      document.body.style.paddingRight = '0px';
    }
    return () => {
      document.documentElement.style.overflow = '';
      document.body.style.overflow = '';
      document.body.style.paddingRight = '0px';
    };
  }, [isCartOpen, isSearchOpen, isWishlistOpen, open]);

  useEffect(() => {
    if (location.state?.openCart) {
      setIsCartOpen(true);
      setIsWishlistOpen(false);
      setIsSearchOpen(false);
      window.history.replaceState({}, document.title);
    }
  }, [location]);

  const toggleCart = () => {
    setIsCartOpen(!isCartOpen);
    setIsWishlistOpen(false);
    setIsSearchOpen(false);
  };

  const toggleWishlist = () => {
    setIsWishlistOpen(!isWishlistOpen);
    setIsCartOpen(false);
    setIsSearchOpen(false);
  };

  const toggleSearch = () => {
    setIsSearchOpen(!isSearchOpen);
    setIsCartOpen(false);
    setIsWishlistOpen(false);
  };

  return (
    <header className={`fixed left-0 right-0 z-50 flex justify-center px-4 transition-all duration-500 ${isScrolled ? 'top-2' : 'top-6'}`}>
      <div className="w-full max-w-6xl">
        {/* SOLID WHITE PILL */}
        <div className={`w-full transition-all duration-500 ${isScrolled ? 'bg-white/80 backdrop-blur-md shadow-[0_8px_32px_rgba(0,0,0,0.08)] rounded-full py-1' : 'bg-white shadow-[0_4px_24px_rgba(0,0,0,0.07)] rounded-2xl md:rounded-full py-0'}`}>

          {/* MAIN NAV ROW */}
          <div className="relative flex items-center justify-between px-6 md:px-10 py-4 md:py-6 text-tertiary">

            {/* LEFT LINKS — desktop only */}
            <div className="hidden lg:flex gap-6 xl:gap-8 text-[12px] xl:text-[13px] tracking-wider font-medium text-textLight uppercase">
              <NavLink to="/" label="Home" />
              <NavLink to="/shop" label="Shop" />
              <NavLink to="/patterns" label="Patterns" />
              {isLoggedIn && <NavLink to="/my-projects" label="My Projects" />}
            </div>

            {/* CENTER LOGO */}
            <Link to="/" className="flex-1 lg:flex-none lg:absolute lg:left-1/2 lg:-translate-x-1/2 flex flex-col items-center leading-tight select-none cursor-pointer group transition-opacity hover:opacity-90">
              <span className="font-[Corinthia] text-[1.8rem] sm:text-[2.2rem] md:text-[2.4rem] lg:text-[2.6rem] text-tertiary" style={{ letterSpacing: "0.02em" }}>
                With love &amp; yarn
              </span>
              <span className="font-['Josefin_Sans'] font-bold text-[9px] md:text-[10px] lg:text-[12px] tracking-[4px] md:tracking-[5px] lg:tracking-[6px] text-tertiary uppercase">
                by M
              </span>
            </Link>

            {/* RIGHT LINKS — desktop only */}
            <div className="hidden lg:flex gap-6 xl:gap-8 text-[12px] xl:text-[13px] tracking-wider font-medium text-textLight uppercase items-center">
              <NavLink to="/tutorials" label="Tutorials" />
              <NavLink to="/account" label="Account" />
              <div className={`flex items-center gap-6 ml-2 border-l border-tertiary/10 pl-8 transition-all duration-500 ${isScrolled ? 'scale-90' : 'scale-100'}`}>
                {isLoggedIn && (
                  <button onClick={toggleWishlist} className="text-tertiary hover:opacity-70 transition-opacity mr-2 cursor-pointer" title="Wishlist">
                    <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z" /></svg>
                  </button>
                )}
                <button onClick={toggleSearch} className="cursor-pointer text-tertiary hover:opacity-70 transition-opacity" aria-label="Search">
                  <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                </button>
                <button onClick={toggleCart} className="cursor-pointer text-lg hover:opacity-70 transition-opacity" aria-label="Open Cart" title="Cart">🛒</button>
              </div>
            </div>

            {/* MOBILE: Hamburger */}
            <button onClick={() => setOpen(!open)} className="lg:hidden text-2xl text-tertiary ml-2 leading-none" aria-label="Toggle menu">
              {open ? "✕" : "☰"}
            </button>

          </div>

          {/* MOBILE DROPDOWN */}
          {open && (
            <div className="lg:hidden flex flex-col gap-4 px-6 pb-6 pt-2 border-t border-[#f0e8ec] text-sm tracking-wider uppercase text-textMain">
              <NavLink to="/" label="Home" onClick={() => setOpen(false)} />
              <NavLink to="/shop" label="Shop" onClick={() => setOpen(false)} />
              <NavLink to="/patterns" label="Patterns" onClick={() => setOpen(false)} />
              {isLoggedIn && <NavLink to="/my-projects" label="My Projects" onClick={() => setOpen(false)} />}
              {isLoggedIn && <NavLink to="/wishlist" label="Wishlist" onClick={() => setOpen(false)} />}
              <NavLink to="/tutorials" label="Tutorials" onClick={() => setOpen(false)} />
              <NavLink to="/account" label="Account" onClick={() => setOpen(false)} />
              <div className="h-px bg-[#e5d6da]" />
              <button onClick={() => { setOpen(false); setIsCartOpen(true); }} className="w-full text-center block py-2.5 rounded-full bg-tertiary text-white text-xs font-medium tracking-widest hover:bg-tertiary/90 transition-colors">
                View Cart
              </button>
            </div>
          )}
        </div>
      </div>

      <CartDrawer isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
      <SearchDropdown isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />
      <WishlistDrawer isOpen={isWishlistOpen} onClose={() => setIsWishlistOpen(false)} />
    </header>
  );
}

function NavLink({ to, label, onClick, disableActive = false }) {
  const { pathname } = useLocation();
  const isActive = !disableActive && (to === "/" ? pathname === "/" : pathname === to || pathname.startsWith(to + "/"));

  return (
    <Link to={to} onClick={onClick} className={`relative transition duration-300 after:absolute after:left-0 after:-bottom-1 after:h-[1.5px] after:bg-tertiary after:transition-all after:duration-300 ${isActive ? "text-tertiary font-semibold after:w-full" : "hover:text-tertiary after:w-0 hover:after:w-full"}`}>
      {label}
    </Link>
  );
}