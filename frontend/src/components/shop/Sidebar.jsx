import React from 'react';

const Sidebar = () => {
  const categories = [
    { name: 'All Collections', count: 24, active: true },
    { name: 'Knitwear', count: 8 },
    { name: 'Accessories', count: 12 },
    { name: 'The Studio', count: 4 }
  ];

  const materials = [
    { name: 'Merino Wool', active: false },
    { name: 'Organic Cotton', active: true },
    { name: 'Alpaca Blend', active: false },
    { name: 'Pure Silk', active: false }
  ];

  const palette = [
    { name: 'Blush', hex: '#F2C4CE' },
    { name: 'Lavender', hex: '#E6E6FA' },
    { name: 'Deep Rose', hex: '#6B3A4E' },
    { name: 'Slate', hex: '#4A4A4A' },
    { name: 'Sage', hex: '#A8BCB4' }
  ];

  return (
    <div className="flex flex-col space-y-12 lg:pr-10 sticky top-32">
      {/* Header */}
      <div>
        <h4 className="font-serif text-3xl italic text-tertiary mb-8">Refine</h4>
        
        {/* Sort By (Minimalist Style) */}
        <div className="space-y-4 mb-10">
          <h5 className="text-[10px] font-black uppercase tracking-[0.25em] text-tertiary opacity-40">
            Sort By
          </h5>
          <div className="relative group cursor-pointer border-b border-tertiary/10 pb-2 flex justify-between items-center transition-all hover:border-tertiary">
            <span className="text-[13px] font-medium text-tertiary">Newest Arrivals</span>
            <svg className="w-4 h-4 text-tertiary/40 group-hover:rotate-180 transition-transform duration-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M19 9l-7 7-7-7" />
            </svg>
          </div>
        </div>

        {/* Categories */}
        <div className="space-y-6">
          <h5 className="text-[10px] font-black uppercase tracking-[0.25em] text-tertiary opacity-40">
            Categories
          </h5>
          <ul className="space-y-4">
            {categories.map((cat) => (
              <li key={cat.name} className="flex justify-between items-center group cursor-pointer">
                <span className={`text-[13px] font-medium transition-colors ${cat.active ? 'text-deepRose underline underline-offset-8 decoration-deepRose/30' : 'text-textLight hover:text-tertiary'}`}>
                  {cat.name}
                </span>
                <span className="text-[9px] font-black text-textLight opacity-20">
                  {cat.count}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Materials (Custom Circle Checkboxes) */}
      <div className="space-y-6">
        <h5 className="text-[10px] font-black uppercase tracking-[0.25em] text-tertiary opacity-40">
          Material
        </h5>
        <div className="space-y-4">
          {materials.map((mat) => (
            <label key={mat.name} className="flex items-center space-x-3 group cursor-pointer">
              <div className={`w-5 h-5 rounded-full border transition-all duration-300 flex items-center justify-center ${mat.active ? 'border-deepRose bg-deepRose' : 'border-tertiary/20 group-hover:border-tertiary'}`}>
                {mat.active && <div className="w-1.5 h-1.5 rounded-full bg-white animate-scale" />}
              </div>
              <span className={`text-[13px] font-medium transition-colors ${mat.active ? 'text-tertiary' : 'text-textLight group-hover:text-tertiary'}`}>
                {mat.name}
              </span>
            </label>
          ))}
        </div>
      </div>

      {/* Price Range */}
      <div className="space-y-6">
        <h5 className="text-[10px] font-black uppercase tracking-[0.25em] text-tertiary opacity-40">
          Price Range
        </h5>
        <div className="px-1">
          <div className="h-1 bg-tertiary/5 rounded-full relative mb-6">
            <div className="absolute left-0 right-1/4 h-full bg-deepRose/20 rounded-full" />
            <div className="absolute left-0 w-4 h-4 -top-1.5 bg-white border-2 border-deepRose rounded-full shadow-md cursor-grab active:cursor-grabbing" />
            <div className="absolute right-1/4 w-4 h-4 -top-1.5 bg-white border-2 border-deepRose rounded-full shadow-md cursor-grab active:cursor-grabbing" />
          </div>
          <div className="flex justify-between items-center text-[11px] font-bold text-tertiary/60">
            <span>$0</span>
            <span>$750</span>
          </div>
        </div>
      </div>

      {/* Palette */}
      <div className="space-y-6">
        <h5 className="text-[10px] font-black uppercase tracking-[0.25em] text-tertiary opacity-40">
          Palette
        </h5>
        <div className="flex flex-wrap gap-4">
          {palette.map((color) => (
            <button
              key={color.name}
              className="group relative w-7 h-7 rounded-full transition-all duration-500 hover:scale-125 focus:ring-2 focus:ring-deepRose focus:ring-offset-2"
              style={{ backgroundColor: color.hex }}
              title={color.name}
            >
              <span className="absolute -top-8 left-1/2 -translate-x-1/2 bg-tertiary text-white text-[8px] font-black px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                {color.name}
              </span>
            </button>
          ))}
        </div>
      </div>

      <button className="pt-8 border-t border-tertiary/5 w-full flex items-center justify-between group transition-all">
        <span className="text-[10px] font-black uppercase tracking-[0.25em] text-tertiary">Clear Filters</span>
        <div className="w-8 h-8 rounded-full bg-[#f8f6f4] flex items-center justify-center text-tertiary group-hover:bg-deepRose group-hover:text-white transition-all transform group-hover:rotate-180">
          <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </div>
      </button>
    </div>
  );
};

export default Sidebar;
