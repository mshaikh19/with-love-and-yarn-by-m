import React from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function AdminNavbar() {
  const { pathname } = useLocation();

  const isActive = (path) => pathname === path || pathname.startsWith(path + '/');

  return (
    <header className="fixed top-0 left-0 w-full z-50 flex justify-center px-4 pt-6 pointer-events-none">
      <div className="w-full max-w-6xl bg-white/90 backdrop-blur-md shadow-[0_4px_24px_rgba(0,0,0,0.06)] rounded-full px-8 py-3.5 flex items-center justify-between border border-tertiary/10 pointer-events-auto transition-all duration-300 hover:bg-white hover:shadow-[0_8px_32px_rgba(0,0,0,0.08)]">
        <div className="flex items-center gap-4">
          <span className="font-[Corinthia] text-[2rem] text-[#6b3a4e] leading-none mt-1 hidden sm:block">With love & yarn</span>
          <span className="bg-[#6b3a4e] text-white text-[9px] font-black uppercase tracking-[0.2em] px-2.5 py-1 rounded-full shadow-sm">Studio Admin</span>
        </div>
        
        <div className="hidden md:flex gap-8 text-[11px] font-bold tracking-[0.15em] uppercase text-[#5C4A52]">
          <Link to="/admin" className={`transition-all duration-300 pb-0.5 ${pathname === '/admin' ? 'text-[#6b3a4e] border-b border-[#6b3a4e]' : 'hover:text-[#6b3a4e]'}`}>Dashboard</Link>
          <Link to="/admin/inventory" className={`transition-all duration-300 pb-0.5 ${isActive('/admin/inventory') ? 'text-[#6b3a4e] border-b border-[#6b3a4e]' : 'hover:text-[#6b3a4e]'}`}>Inventory</Link>
          <Link to="/admin/patterns" className={`transition-all duration-300 pb-0.5 ${isActive('/admin/patterns') ? 'text-[#6b3a4e] border-b border-[#6b3a4e]' : 'hover:text-[#6b3a4e]'}`}>Patterns</Link>
          <Link to="/admin/tutorials" className={`transition-all duration-300 pb-0.5 ${isActive('/admin/tutorials') ? 'text-[#6b3a4e] border-b border-[#6b3a4e]' : 'hover:text-[#6b3a4e]'}`}>Tutorials</Link>
          <Link to="/admin/analytics" className={`transition-all duration-300 pb-0.5 ${isActive('/admin/analytics') ? 'text-[#6b3a4e] border-b border-[#6b3a4e]' : 'hover:text-[#6b3a4e]'}`}>Analytics</Link>
        </div>

        <div className="flex items-center gap-5">
          <Link to="/" target="_blank" rel="noopener noreferrer" className="text-[9px] font-black uppercase tracking-widest text-[#8A7080] hover:text-tertiary hidden lg:block mr-2 transition-colors">View Storefront</Link>
          <button className="text-tertiary hover:text-tertiary/70 transition-colors relative">
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" /></svg>
            <span className="absolute top-0 right-0 w-2 h-2 bg-[#C2185B] rounded-full border border-white"></span>
          </button>
          <div className="w-9 h-9 rounded-full bg-[#E5D6DA] overflow-hidden border border-tertiary/10 shadow-sm">
             <img src="https://i.pinimg.com/736x/97/18/f4/9718f44a3a11a16f33b96ba7e49d4d16.jpg" className="w-full h-full object-cover" alt="Profile" />
          </div>
        </div>
      </div>
    </header>
  );
}
