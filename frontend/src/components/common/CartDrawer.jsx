import React from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

export default function CartDrawer({ isOpen, onClose }) {
  
  const cartItems = [
    { id: 1, type: "physical", name: "Artisan Merino Skein", color: "Velvet Rose", price: 32.50, qty: 2, image: "https://i.pinimg.com/736x/97/18/f4/9718f44a3a11a16f33b96ba7e49d4d16.jpg" },
    { id: 2, type: "digital", name: "The Sage Moss Cardigan Pattern", color: null, price: 8.00, qty: 1, image: "https://i.pinimg.com/736x/97/18/f4/9718f44a3a11a16f33b96ba7e49d4d16.jpg" }
  ];

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-tertiary/20 backdrop-blur-sm z-[100]"
          />

          {/* Drawer Container */}
          <motion.div 
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 30, stiffness: 300 }}
            className="fixed top-0 right-0 h-full w-full max-w-md bg-white z-[110] shadow-2xl overflow-y-auto custom-scrollbar"
          >
            {/* Header - Sticky Top */}
            <div className="sticky top-0 z-40 px-8 py-6 border-b border-tertiary/5 bg-white/95 backdrop-blur-md flex justify-between items-center">
              <div className="flex items-center gap-3">
                <h2 className="font-serif text-2xl text-tertiary">Your Cart</h2>
                <span className="text-[10px] font-black uppercase tracking-widest text-textLight bg-offWhite px-2 py-1 rounded-full">3 Items</span>
              </div>
              <button onClick={onClose} className="w-10 h-10 rounded-full flex items-center justify-center text-tertiary hover:bg-offWhite transition-colors">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" /></svg>
              </button>
            </div>

            {/* Content Area */}
            <div className="p-8 space-y-10 min-h-[calc(100vh-320px)]">
              {cartItems.map(item => (
                <div key={item.id} className="flex gap-6 group pb-10 border-b border-tertiary/5 last:border-0 last:pb-0">
                  <div className="w-24 h-32 rounded-2xl bg-offWhite overflow-hidden flex-shrink-0 relative shadow-sm">
                    <img src={item.image} alt={item.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                    {item.type === "digital" && (
                       <div className="absolute top-2 left-2 bg-white/95 backdrop-blur-md px-2 py-0.5 rounded-lg text-[7px] font-black uppercase tracking-[0.2em] text-tertiary shadow-sm">Digital</div>
                    )}
                  </div>
                  <div className="flex-1 flex flex-col justify-between py-1">
                    <div>
                      <div className="flex justify-between items-start gap-4 mb-2">
                        <h3 className="font-serif text-lg text-tertiary leading-tight group-hover:text-tertiary transition-colors">{item.name}</h3>
                        <button className="text-textLight hover:text-[#C2185B] transition-colors">
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><path d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" /></svg>
                        </button>
                      </div>
                      {item.color && <p className="text-[11px] font-black uppercase tracking-widest text-textLight/60">{item.color}</p>}
                    </div>
                    <div className="flex justify-between items-end mt-6">
                      {item.type === "physical" ? (
                        <div className="flex items-center gap-4 bg-offWhite rounded-xl px-3 py-1.5 border border-tertiary/5">
                          <button className="text-textLight hover:text-tertiary">-</button>
                          <span className="text-[13px] font-black text-tertiary w-4 text-center tabular-nums">{item.qty}</span>
                          <button className="text-textLight hover:text-tertiary">+</button>
                        </div>
                      ) : (
                        <div className="bg-offWhite px-3 py-1.5 rounded-xl border border-tertiary/5">
                           <span className="text-[9px] font-black uppercase tracking-widest text-textLight">Single copy</span>
                        </div>
                      )}
                      <span className="font-serif text-xl text-tertiary">${(item.price * item.qty).toFixed(2)}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Footer - Sticky Bottom */}
            <div className="sticky bottom-0 z-40 p-8 border-t border-tertiary/5 bg-white/95 backdrop-blur-md shadow-[0_-10px_40px_rgba(0,0,0,0.03)]">
              <div className="flex justify-between items-end mb-8 text-tertiary">
                <div>
                  <p className="text-[10px] font-black uppercase tracking-[0.2em] text-textLight mb-1">Subtotal</p>
                  <span className="text-[11px] font-bold text-textLight/40 uppercase tracking-widest">Inc. VAT & Shipping</span>
                </div>
                <span className="font-serif text-4xl text-tertiary font-bold tracking-tighter">$73.00</span>
              </div>
              
              <Link 
                to="/checkout" 
                onClick={onClose}
                className="w-full block text-center bg-tertiary text-white py-5 rounded-3xl text-[11px] font-black uppercase tracking-[0.3em] shadow-[0_12px_30px_rgba(107,58,78,0.2)] hover:bg-tertiary transition-all duration-300"
              >
                Proceed to Checkout
              </Link>
            </div>

          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
