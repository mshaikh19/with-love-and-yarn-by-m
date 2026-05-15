import React, { useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';

export default function SearchDropdown({ isOpen, onClose }) {
  const inputRef = useRef(null);
  const dropdownRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 100);
      
      const handleClickOutside = (event) => {
        if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
          onClose();
        }
      };
      document.addEventListener("mousedown", handleClickOutside);
      return () => document.removeEventListener("mousedown", handleClickOutside);
    }
  }, [isOpen, onClose]);

  const trending = [
    { id: 1, title: "Sage Moss Cardigan", category: "Patterns" },
    { id: 2, title: "Artisan Merino Skein", category: "Yarn" },
    { id: 3, title: "Ergonomic Hook Set", category: "Tools" },
  ];

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          ref={dropdownRef}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="absolute top-full left-0 right-0 mt-4 z-[60] mx-auto max-w-4xl bg-white shadow-[0_20px_50px_rgba(0,0,0,0.1)] rounded-[2rem] border border-tertiary/10 overflow-hidden"
        >
          <div className="p-8">
            {/* Search Input Area */}
            <div className="relative group border-b border-tertiary/10 focus-within:border-tertiary/30 transition-colors pb-2">
              <svg className="absolute left-0 top-1/2 -translate-y-1/2 text-tertiary/40 group-focus-within:text-tertiary transition-colors" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
              <input 
                ref={inputRef}
                type="text" 
                placeholder="Search patterns, yarn, or tutorials..." 
                className="w-full bg-transparent pl-8 pr-4 py-2 text-xl font-serif text-tertiary placeholder:text-tertiary/20 outline-none"
              />
            </div>

            {/* Suggestions */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
              <div>
                <h3 className="text-[9px] font-black uppercase tracking-[0.2em] text-[#8A7080] mb-4">Trending Patterns</h3>
                <div className="flex flex-col gap-4">
                  {trending.map((item) => (
                    <Link key={item.id} to="/shop" onClick={onClose} className="group flex items-center justify-between py-1">
                      <p className="text-sm font-serif text-tertiary group-hover:text-[#6b3a4e] transition-colors">{item.title}</p>
                      <svg className="text-tertiary/10 group-hover:text-tertiary group-hover:translate-x-1 transition-all" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2"><path d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                    </Link>
                  ))}
                </div>
              </div>

              <div className="bg-[#FAF8F6] rounded-2xl p-6">
                <h3 className="text-[9px] font-black uppercase tracking-[0.2em] text-[#8A7080] mb-4">Quick Links</h3>
                <div className="flex flex-wrap gap-2">
                  {["Tutorials", "Free Patterns", "New Arrivals", "Gift Cards"].map((link, i) => (
                    <Link key={i} to="/shop" onClick={onClose} className="px-4 py-1.5 bg-white rounded-full text-[10px] font-bold text-tertiary border border-tertiary/5 hover:border-tertiary/20 shadow-sm transition-all">
                      {link}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-[#FAF8F6] px-8 py-3 flex justify-center">
            <button onClick={onClose} className="text-[9px] font-black uppercase tracking-widest text-[#8A7080] hover:text-tertiary transition-colors">Close Search</button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
