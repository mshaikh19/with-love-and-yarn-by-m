import React, { useState } from 'react';

const ProductCard = ({ product }) => {
  const [isWishlisted, setIsWishlisted] = useState(false);

  return (
    <div className="group cursor-pointer flex flex-col">
      {/* Image Container */}
      <div className="relative aspect-[3/4] overflow-hidden bg-[#F9F6F3] rounded-sm transition-all duration-700 ease-in-out">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover object-center transition-transform duration-1000 ease-out group-hover:scale-110"
        />
        
        {/* Wishlist Icon */}
        <button 
          onClick={(e) => { e.stopPropagation(); setIsWishlisted(!isWishlisted); }}
          className="absolute top-5 left-5 z-20 transition-all duration-300 transform hover:scale-110"
        >
          <svg 
            width="20" height="20" 
            viewBox="0 0 24 24" 
            fill={isWishlisted ? "#6B3A4E" : "none"} 
            stroke={isWishlisted ? "#6B3A4E" : "white"} 
            strokeWidth="1.5"
            className="drop-shadow-sm"
          >
            <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
          </svg>
        </button>

        {/* Dynamic Status Tag */}
        {product.status && (
          <div className="absolute top-4 right-4 z-20">
            <span className="bg-white/95 backdrop-blur-sm px-3 py-1 rounded-full text-[7px] font-black uppercase tracking-[0.2em] text-tertiary shadow-sm">
              {product.status}
            </span>
          </div>
        )}

        {/* Quick Shop Button (Always visible bottom overlay or hover appearing) */}
        <div className="absolute inset-x-0 bottom-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out z-20">
          <button className="w-full bg-tertiary text-white py-3.5 text-[9px] font-black uppercase tracking-[0.25em] hover:bg-deepRose transition-all duration-300 rounded-sm shadow-xl">
            Quick Shop +
          </button>
        </div>

        {/* Soft Shadow Overlays */}
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-500 pointer-events-none" />
      </div>

      {/* Product Information */}
      <div className="mt-4 flex flex-col space-y-1.5">
        <div className="flex justify-between items-start">
          <div className="flex flex-col">
            <h3 className="font-serif text-xl italic text-tertiary leading-tight group-hover:text-deepRose transition-colors duration-300">
              {product.name}
            </h3>
            <p className="text-[9px] font-bold text-[#8A7080] uppercase tracking-[0.15em] mt-0.5">
              Hand-finished • Studio Edit
            </p>
          </div>
          <span className="font-['Josefin_Sans'] font-semibold text-base text-tertiary tracking-tight">
            {product.price}
          </span>
        </div>
        
        <p className="text-[11px] leading-relaxed text-[#5C4A52] font-light max-w-[95%]">
          {product.description}
        </p>

        {/* Add to Cart Button */}
        <button
          onClick={(e) => e.stopPropagation()}
          className="mt-3 w-full flex items-center justify-center gap-2 py-2.5 border border-tertiary/40 rounded-sm text-[9px] font-black uppercase tracking-[0.2em] text-tertiary hover:bg-tertiary hover:text-white transition-all duration-300 group/btn"
        >
          <svg
            width="13" height="13"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="transition-transform duration-300 group-hover/btn:-translate-y-0.5"
          >
            <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" />
            <line x1="3" y1="6" x2="21" y2="6" />
            <path d="M16 10a4 4 0 0 1-8 0" />
          </svg>
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
