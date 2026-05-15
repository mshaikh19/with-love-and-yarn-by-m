import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import toast from 'react-hot-toast';

export default function QuickShopModal({ product, isOpen, onClose }) {
  const [quantity, setQuantity] = useState(1);

  // Prevent scrolling when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
      setTimeout(() => setQuantity(1), 300); // reset after animation
    }
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 z-[200] flex items-center justify-center p-4 sm:p-6 opacity-0 animate-fade-in"
      style={{ animation: 'fadeIn 0.3s forwards ease-out' }}
      onClick={(e) => { e.preventDefault(); e.stopPropagation(); onClose(); }}
    >
      <style>{`
        @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
        @keyframes scaleUp { from { transform: scale(0.95) translateY(10px); opacity: 0; } to { transform: scale(1) translateY(0); opacity: 1; } }
      `}</style>

      {/* Backdrop */}
      <div className="absolute inset-0 bg-tertiary/40 backdrop-blur-sm" />
      
      {/* Modal Card */}
      <div 
        className="relative bg-[#FDFCFB] rounded-[2.5rem] shadow-2xl w-full max-w-4xl overflow-hidden flex flex-col md:flex-row"
        style={{ animation: 'scaleUp 0.4s forwards cubic-bezier(0.19, 1, 0.22, 1)' }}
        onClick={(e) => { e.preventDefault(); e.stopPropagation(); }}
      >
        <button 
          onClick={(e) => { e.preventDefault(); e.stopPropagation(); onClose(); }}
          className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-white/90 backdrop-blur-md flex items-center justify-center text-tertiary hover:bg-white hover:scale-105 transition-all shadow-sm"
        >
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
        </button>

        {/* Left: Image */}
        <div className="w-full md:w-1/2 bg-[#F0ECE8] relative aspect-square md:aspect-auto">
          <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
          {product.status && (
            <span className="absolute top-6 left-6 bg-white/95 backdrop-blur-sm px-3 py-1 rounded-full text-[8px] font-black uppercase tracking-[0.2em] text-tertiary shadow-sm">
              {product.status}
            </span>
          )}
        </div>

        {/* Right: Content */}
        <div className="w-full md:w-1/2 p-8 md:p-12 flex flex-col justify-center">
          <p className="text-[10px] font-black uppercase tracking-[0.2em] text-[#8A7080] mb-3">Hand-finished Studio Edit</p>
          <h2 className="font-serif text-3xl md:text-4xl text-tertiary mb-3 leading-tight">{product.name}</h2>
          <p className="font-serif text-2xl text-[#8A7080] mb-6">{product.price}</p>
          
          <p className="text-[13px] text-tertiary/80 leading-relaxed font-medium mb-8">
            {product.description} This artisan piece is crafted with the utmost attention to detail, making it a perfect addition to your curated collection.
          </p>

          <div className="mb-8">
            <div className="flex justify-between items-center mb-3 text-[10px] font-black uppercase tracking-widest text-[#5C4A52]">
              <span>Quantity</span>
            </div>
            <div className="flex items-center gap-6 bg-[#FAF8F6] border border-tertiary/10 rounded-full w-max p-2 shadow-sm">
              <button 
                onClick={(e) => { e.preventDefault(); setQuantity(Math.max(1, quantity - 1)); }}
                className="w-10 h-10 rounded-full bg-white shadow-sm flex items-center justify-center hover:text-[#6b3a4e] hover:scale-105 transition-all"
              >-</button>
              <span className="text-lg font-serif min-w-[20px] text-center">{quantity}</span>
              <button 
                onClick={(e) => { e.preventDefault(); setQuantity(quantity + 1); }}
                className="w-10 h-10 rounded-full bg-white shadow-sm flex items-center justify-center hover:text-[#6b3a4e] hover:scale-105 transition-all"
              >+</button>
            </div>
          </div>

          <div className="flex gap-4">
            <button 
              onClick={(e) => { 
                e.preventDefault(); 
                toast.success(`✨ ${quantity}x ${product.name} added!`);
                onClose(); 
              }}
              className="flex-1 bg-tertiary text-white py-4 rounded-full text-[11px] font-black uppercase tracking-[0.2em] shadow-md hover:bg-[#6b3a4e] hover:-translate-y-0.5 hover:shadow-lg transition-all"
            >
              Add to Cart
            </button>
            <Link 
              to={`/shop/${product.id}`}
              className="px-6 py-4 rounded-full border border-tertiary/20 text-tertiary text-[11px] font-black uppercase tracking-[0.2em] hover:bg-[#FAF8F6] transition-colors flex items-center justify-center"
            >
              View Full
            </Link>
          </div>

        </div>
      </div>
    </div>
  );
}
