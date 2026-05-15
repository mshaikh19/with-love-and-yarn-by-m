import React from 'react';

const InstagramPost = ({ image, caption, likes = "124", postUrl = "https://www.instagram.com/withloveandyarn" }) => {
  return (
    <a 
      href={postUrl} 
      target="_blank" 
      rel="noopener noreferrer" 
      className="block max-w-md mx-auto bg-white border border-tertiary/10 rounded-2xl overflow-hidden shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_8px_30px_rgba(0,0,0,0.08)] transition-all duration-500 group"
    >
      {/* Header */}
      <div className="p-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-[#f9ce34] via-[#ee2a7b] to-[#6228d7] p-[2px]">
            <div className="w-full h-full rounded-full bg-white p-[1px]">
              <div className="w-full h-full rounded-full bg-[#F0ECE8] flex items-center justify-center overflow-hidden">
                 <span className="text-[8px] font-serif italic text-tertiary">M</span>
              </div>
            </div>
          </div>
          <div>
            <p className="text-[11px] font-black tracking-tight text-tertiary">withloveandyarn</p>
            <p className="text-[9px] text-[#8A7080] font-medium">The Studio • Artisan Loft</p>
          </div>
        </div>
        <button className="text-tertiary/40 hover:text-tertiary transition-colors">
          <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24"><path d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z" /></svg>
        </button>
      </div>

      {/* Image */}
      <div className="aspect-square bg-[#F9F6F3] overflow-hidden">
        <img 
          src={image} 
          className="w-full h-full object-cover transition-transform duration-700 hover:scale-105" 
          alt="Instagram Post" 
        />
      </div>

      {/* Actions */}
      <div className="p-5">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-4 text-tertiary">
             <button className="hover:scale-110 transition-transform hover:text-red-500">
               <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" /></svg>
             </button>
             <button className="hover:scale-110 transition-transform">
               <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" /></svg>
             </button>
             <button className="hover:scale-110 transition-transform">
               <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z" /></svg>
             </button>
          </div>
          <button className="text-tertiary hover:scale-110 transition-transform">
            <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z" /></svg>
          </button>
        </div>
        
        <p className="text-[11px] font-black text-tertiary mb-1.5">{likes} likes</p>
        <p className="text-[12px] leading-relaxed text-tertiary">
          <span className="font-black mr-2">withloveandyarn</span>
          {caption}
        </p>
        <p className="text-[9px] font-bold text-tertiary/30 uppercase tracking-widest mt-4">2 days ago</p>
      </div>
    </a>
  );
};

export default InstagramPost;
