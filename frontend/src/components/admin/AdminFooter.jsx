import React from 'react';
import { Link } from 'react-router-dom';

export default function AdminFooter() {
  return (
    <footer className="w-full bg-[#FDFCFB] border-t border-tertiary/5 py-10 mt-12">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="flex flex-col md:flex-row items-center gap-3 md:gap-5 text-center md:text-left">
          <span className="font-[Corinthia] text-[2rem] text-[#6b3a4e] leading-none mt-1">With love & yarn</span>
          <span className="hidden md:block w-1 h-1 rounded-full bg-tertiary/20"></span>
          <p className="text-[10px] font-black uppercase tracking-[0.2em] text-[#8A7080]">Studio Admin Portal &copy; {new Date().getFullYear()}</p>
        </div>
        <div className="flex gap-8 text-[10px] font-black uppercase tracking-[0.2em] text-[#5C4A52]">
          <Link to="/" className="hover:text-tertiary transition-colors">Storefront</Link>
          <a href="#" className="hover:text-tertiary transition-colors">Settings</a>
          <a href="#" className="hover:text-tertiary transition-colors">Support</a>
        </div>
      </div>
    </footer>
  );
}
