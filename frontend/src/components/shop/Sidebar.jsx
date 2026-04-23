import React, { useState } from 'react';

const Sidebar = () => {
  const [activeCategory, setActiveCategory] = useState('All Collections');
  const [activeMaterials, setActiveMaterials] = useState(['Organic Cotton']);
  const [activeColor, setActiveColor] = useState('');
  const [isSortOpen, setIsSortOpen] = useState(false);
  const [activeSort, setActiveSort] = useState('Newest Arrivals');
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(750);
  const MAX = 750;

  const categories = [
    { name: 'All Collections', count: 24 },
    { name: 'Knitwear', count: 8 },
    { name: 'Accessories', count: 12 },
    { name: 'The Studio', count: 4 }
  ];

  const materials = [
    { name: 'Merino Wool' },
    { name: 'Organic Cotton' },
    { name: 'Alpaca Blend' },
    { name: 'Pure Silk' }
  ];

  const palette = [
    { name: 'Blush', hex: '#F2C4CE' },
    { name: 'Lavender', hex: '#E6E6FA' },
    { name: 'Deep Rose', hex: '#6B3A4E' },
    { name: 'Slate', hex: '#4A4A4A' },
    { name: 'Sage', hex: '#A8BCB4' }
  ];

  const sortOptions = ['Newest Arrivals', 'Price: Low to High', 'Price: High to Low'];

  const toggleMaterial = (matName) => {
    setActiveMaterials(prev =>
      prev.includes(matName) ? prev.filter(m => m !== matName) : [...prev, matName]
    );
  };

  const clearFilters = () => {
    setActiveCategory('All Collections');
    setActiveMaterials([]);
    setActiveColor('');
    setActiveSort('Newest Arrivals');
    setMinPrice(0);
    setMaxPrice(750);
  };

  const handleMinChange = (e) => {
    if (e.target.value === '') {
      setMinPrice('');
      return;
    }
    const val = Number(e.target.value);
    const limit = maxPrice === '' ? MAX : maxPrice;
    setMinPrice(Math.max(0, Math.min(val, limit - 10)));
  };

  const handleMaxChange = (e) => {
    if (e.target.value === '') {
      setMaxPrice('');
      return;
    }
    const val = Number(e.target.value);
    const limit = minPrice === '' ? 0 : minPrice;
    setMaxPrice(Math.min(MAX, Math.max(val, limit + 10)));
  };

  return (
    <div className="flex flex-col space-y-10 lg:pr-6 sticky top-32 max-h-[calc(100vh-8rem)] overflow-y-auto pb-8 pr-2"
      style={{ scrollbarWidth: 'thin', scrollbarColor: 'rgba(0,0,0,0.1) transparent' }}>
      {/* Header */}
      <div>
        <h4 className="font-serif text-3xl italic text-tertiary mb-8">Refine</h4>

        {/* Sort By (Minimalist Style) */}
        <div className="space-y-4 mb-10 relative">
          <h5 className="text-xs font-black uppercase tracking-[0.25em] text-tertiary opacity-40">
            Sort By
          </h5>
          <div
            className="group cursor-pointer border-b border-tertiary/10 pb-2 flex justify-between items-center transition-all hover:border-tertiary"
            onClick={() => setIsSortOpen(!isSortOpen)}
          >
            <span className="text-sm font-medium text-tertiary">{activeSort}</span>
            <svg className={`w-4 h-4 text-tertiary/40 transition-transform duration-300 ${isSortOpen ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M19 9l-7 7-7-7" />
            </svg>
          </div>
          {/* Dropdown for Sort */}
          {isSortOpen && (
            <div className="absolute z-10 w-full bg-[#FDFCFB] border border-tertiary/10 shadow-lg rounded mt-1 py-2">
              {sortOptions.map(option => (
                <div
                  key={option}
                  className="px-4 py-2 text-sm text-tertiary hover:bg-tertiary/5 cursor-pointer transition-colors"
                  onClick={() => {
                    setActiveSort(option);
                    setIsSortOpen(false);
                  }}
                >
                  {option}
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Categories */}
        <div className="space-y-6">
          <h5 className="text-xs font-black uppercase tracking-[0.25em] text-tertiary opacity-40">
            Categories
          </h5>
          <ul className="space-y-4">
            {categories.map((cat) => (
              <li
                key={cat.name}
                className="flex justify-between items-center group cursor-pointer"
                onClick={() => setActiveCategory(cat.name)}
              >
                <span className={`text-sm font-medium transition-colors ${activeCategory === cat.name ? 'text-deepRose underline underline-offset-8 decoration-deepRose/30' : 'text-textLight hover:text-tertiary'}`}>
                  {cat.name}
                </span>
                <span className={`text-xs font-black transition-colors ${activeCategory === cat.name ? 'text-deepRose opacity-60' : 'text-textLight opacity-20'}`}>
                  {cat.count}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Materials (Custom Circle Checkboxes) */}
      <div className="space-y-6">
        <h5 className="text-xs font-black uppercase tracking-[0.25em] text-tertiary opacity-40">
          Material
        </h5>
        <div className="space-y-4">
          {materials.map((mat) => {
            const isActive = activeMaterials.includes(mat.name);
            return (
              <label
                key={mat.name}
                className="flex items-center space-x-3 group cursor-pointer"
                onClick={(e) => {
                  e.preventDefault();
                  toggleMaterial(mat.name);
                }}
              >
                <div className={`w-5 h-5 rounded-full border transition-all duration-300 flex items-center justify-center ${isActive ? 'border-deepRose bg-deepRose' : 'border-tertiary/20 group-hover:border-tertiary'}`}>
                  {isActive && <div className="w-1.5 h-1.5 rounded-full bg-white animate-scale" />}
                </div>
                <span className={`text-sm font-medium transition-colors ${isActive ? 'text-tertiary' : 'text-textLight group-hover:text-tertiary'}`}>
                  {mat.name}
                </span>
              </label>
            );
          })}
        </div>
      </div>

      {/* Price Range */}
      <div className="space-y-6">
        <h5 className="text-xs font-black uppercase tracking-[0.25em] text-tertiary opacity-40">
          Price Range
        </h5>
        <div className="px-1 mt-2">
          <div className="relative h-1 bg-tertiary/10 rounded-lg mb-6">
            <div 
              className="absolute h-full bg-deepRose/40 rounded-full pointer-events-none"
              style={{ left: `${((minPrice || 0) / MAX) * 100}%`, right: `${100 - ((maxPrice || 0) / MAX) * 100}%` }}
            ></div>
            <input
              type="range"
              min="0"
              max={MAX}
              value={minPrice === '' ? 0 : minPrice}
              onChange={handleMinChange}
              className="absolute w-full h-1 appearance-none bg-transparent pointer-events-none accent-deepRose"
              style={{ zIndex: (minPrice || 0) > MAX - 100 ? 5 : 3 }}
            />
            <input
              type="range"
              min="0"
              max={MAX}
              value={maxPrice === '' ? MAX : maxPrice}
              onChange={handleMaxChange}
              className="absolute w-full h-1 appearance-none bg-transparent pointer-events-none accent-deepRose"
              style={{ zIndex: 4 }}
            />
            <style>{`
              input[type=range]::-webkit-slider-thumb {
                pointer-events: auto;
              }
              input[type=range]::-moz-range-thumb {
                pointer-events: auto;
              }
              /* Hide number input spinners */
              input[type="number"]::-webkit-inner-spin-button,
              input[type="number"]::-webkit-outer-spin-button {
                -webkit-appearance: none;
                margin: 0;
              }
              input[type="number"] {
                -moz-appearance: textfield;
              }
            `}</style>
          </div>
          <div className="flex justify-between items-center text-sm font-bold text-tertiary/60 mt-4">
            <div className="flex items-center gap-1">
              <span>$</span>
              <input
                type="number"
                min="0"
                max={MAX}
                value={minPrice}
                onChange={handleMinChange}
                className="w-12 bg-transparent border-b border-tertiary/20 focus:outline-none focus:border-tertiary text-center transition-colors"
              />
            </div>
            <div className="flex items-center gap-1">
              <span>$</span>
              <input
                type="number"
                min="0"
                max={MAX}
                value={maxPrice}
                onChange={handleMaxChange}
                className="w-12 bg-transparent border-b border-tertiary/20 focus:outline-none focus:border-tertiary text-center transition-colors"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Palette */}
      <div className="space-y-6">
        <h5 className="text-xs font-black uppercase tracking-[0.25em] text-tertiary opacity-40">
          Palette
        </h5>
        <div className="flex flex-wrap gap-4 pl-4">
          {palette.map((color) => (
            <button
              key={color.name}
              className={`group relative w-7 h-7 rounded-full transition-all duration-500 hover:scale-110 focus:outline-none ${activeColor === color.name ? 'ring-2 ring-offset-2 ring-deepRose scale-110 shadow-md' : 'shadow-sm'}`}
              style={{ backgroundColor: color.hex }}
              title={color.name}
              onClick={() => setActiveColor(activeColor === color.name ? '' : color.name)}
            >
              <span className="absolute -top-8 left-1/2 -translate-x-1/2 bg-tertiary text-white text-[10px] font-black px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
                {color.name}
              </span>
            </button>
          ))}
        </div>
      </div>

      <button
        onClick={clearFilters}
        className="pt-6 border-t border-tertiary/5 w-full flex items-center justify-between group transition-all mt-4"
      >
        <span className="text-xs font-black uppercase tracking-[0.25em] text-tertiary group-hover:text-deepRose transition-colors">Clear Filters</span>
        <div className="w-8 h-8 rounded-full bg-[#f8f6f4] flex items-center justify-center text-tertiary group-hover:bg-deepRose group-hover:text-white transition-all transform group-hover:rotate-180 shadow-sm">
          <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </div>
      </button>
    </div>
  );
};

export default Sidebar;
