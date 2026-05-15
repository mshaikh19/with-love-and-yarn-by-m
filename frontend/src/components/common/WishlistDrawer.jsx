import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';

export default function WishlistDrawer({ isOpen, onClose }) {
  const wishlistItems = [
    { id: 1, title: "The Windswept Shawl", price: "$8.00", category: "Patterns", image: "https://i.pinimg.com/736x/97/18/f4/9718f44a3a11a16f33b96ba7e49d4d16.jpg" },
    { id: 2, title: "Artisan Merino Skein", price: "$32.00", category: "Yarn", image: "https://i.pinimg.com/736x/97/18/f4/9718f44a3a11a16f33b96ba7e49d4d16.jpg" },
  ];

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-tertiary/20 backdrop-blur-sm z-[100]"
          />

          {/* Drawer Panel */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 30, stiffness: 300 }}
            className="fixed right-0 top-0 h-full w-full max-w-md bg-white z-[110] shadow-2xl overflow-y-auto custom-scrollbar"
          >
            {/* Header - Sticky Top */}
            <div className="sticky top-0 z-40 p-8 border-b border-tertiary/5 bg-white/95 backdrop-blur-md flex justify-between items-center">
              <div>
                <h2 className="font-serif text-2xl text-tertiary">My Wishlist</h2>
                <p className="text-[10px] font-black uppercase tracking-widest text-[#8A7080] mt-1">{wishlistItems.length} Saved Items</p>
              </div>
              <button onClick={onClose} className="w-10 h-10 rounded-full border border-tertiary/10 flex items-center justify-center text-tertiary hover:bg-[#FAF8F6] transition-colors">
                <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><path d="M18 6L6 18M6 6l12 12" /></svg>
              </button>
            </div>

            {/* Scrollable Content */}
            <div className="p-8 space-y-10 min-h-[calc(100vh-280px)]">
              {wishlistItems.map((item) => (
                <div key={item.id} className="flex gap-6 group items-start pb-10 border-b border-tertiary/5 last:border-0 last:pb-0">
                  <div className="w-20 h-24 rounded-xl overflow-hidden bg-[#FAF8F6] flex-shrink-0 shadow-sm transition-transform duration-500 group-hover:scale-105">
                    <img src={item.image} className="w-full h-full object-cover" alt={item.title} />
                  </div>
                  <div className="flex-1 flex flex-col min-w-0">
                    <div className="mb-4">
                      <div className="flex justify-between items-start gap-4 mb-2">
                        <h4 className="font-serif text-lg text-tertiary group-hover:text-[#6b3a4e] transition-colors leading-tight">{item.title}</h4>
                        <span className="text-[12px] font-bold text-tertiary tabular-nums">{item.price}</span>
                      </div>
                      <p className="text-[9px] font-black uppercase tracking-[0.2em] text-[#8A7080]/60">{item.category}</p>
                    </div>
                    <div className="flex gap-4 items-center">
                       <button className="text-[9px] font-black uppercase tracking-[0.2em] text-[#8A7080] hover:text-[#C2185B] transition-colors flex items-center gap-1.5 group/btn">
                         <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" className="group-hover/btn:rotate-12 transition-transform"><path d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" /></svg>
                         Remove
                       </button>
                       <button className="flex-1 text-[9px] font-black uppercase tracking-[0.2em] text-[#6b3a4e] bg-[#FAF8F6] px-4 py-2.5 rounded-xl border border-tertiary/5 hover:border-tertiary/20 hover:bg-white transition-all text-center">
                         Add to Cart
                       </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Footer - Sticky Bottom */}
            <div className="sticky bottom-0 z-40 p-10 border-t border-tertiary/5 bg-white/95 backdrop-blur-md shadow-[0_-10px_40px_rgba(0,0,0,0.03)]">
              <Link 
                to="/wishlist" 
                onClick={onClose}
                className="w-full bg-tertiary text-white flex items-center justify-center py-5 rounded-[2rem] text-[11px] font-black uppercase tracking-[0.3em] shadow-[0_12px_30px_rgba(107,58,78,0.2)] hover:bg-[#6b3a4e] transition-all duration-300 mb-6"
              >
                View Full Wishlist
              </Link>
              <button 
                onClick={onClose}
                className="w-full text-center text-[10px] font-black uppercase tracking-widest text-[#8A7080] hover:text-tertiary transition-colors"
              >
                Continue Browsing
              </button>
            </div>

          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
