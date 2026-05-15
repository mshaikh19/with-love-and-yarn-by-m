import React, { useState, useEffect } from 'react';
import Navbar from '../components/common/Navbar';
import Footer from '../components/common/Footer';

const tutorials = [
  {
    id: 1,
    title: "Mastering the Waffle Stitch",
    category: "Technique Focus",
    duration: "12:45",
    level: "Intermediate",
    rating: "4.9",
    reviews: 128,
    image: "https://i.pinimg.com/736x/97/18/f4/9718f44a3a11a16f33b96ba7e49d4d16.jpg",
    description: "Learn how to create deep, squishy textures perfect for cozy winter garments. We cover yarn selection, tension, and counting rows accurately."
  },
  {
    id: 2,
    title: "Seamless Panel Joining",
    category: "Finishing",
    duration: "08:20",
    level: "Beginner",
    rating: "4.8",
    reviews: 84,
    image: "https://i.pinimg.com/736x/97/18/f4/9718f44a3a11a16f33b96ba7e49d4d16.jpg",
    description: "A comprehensive guide to the mattress stitch for invisible, professional seams. Perfect for finishing your first sweater or assembling blanket squares."
  },
  {
    id: 3,
    title: "Reading Advanced Charts",
    category: "Theory",
    duration: "15:30",
    level: "Advanced",
    rating: "5.0",
    reviews: 212,
    image: "https://i.pinimg.com/736x/97/18/f4/9718f44a3a11a16f33b96ba7e49d4d16.jpg",
    description: "Demystifying complex crochet charts for heirloom-quality lace patterns. Stop relying on written patterns and unlock global designs with visual guides."
  },
  {
    id: 4,
    title: "The Perfect Magic Ring",
    category: "Basics",
    duration: "05:15",
    level: "Beginner",
    rating: "4.7",
    reviews: 350,
    image: "https://i.pinimg.com/736x/97/18/f4/9718f44a3a11a16f33b96ba7e49d4d16.jpg",
    description: "Start your amigurumi and top-down hats flawlessly with this foolproof method. Say goodbye to the fragile starting chain and hello to a tight center."
  },
  {
    id: 5,
    title: "Blocking Natural Fibers",
    category: "Care",
    duration: "10:10",
    level: "All Levels",
    rating: "4.9",
    reviews: 175,
    image: "https://i.pinimg.com/736x/97/18/f4/9718f44a3a11a16f33b96ba7e49d4d16.jpg",
    description: "Transform your finished pieces with wet blocking techniques for merino and silk. See your stitches relax into their final, beautiful shape."
  },
  {
    id: 6,
    title: "Colorwork Fundamentals",
    category: "Technique Focus",
    duration: "18:00",
    level: "Intermediate",
    rating: "4.8",
    reviews: 95,
    image: "https://i.pinimg.com/736x/97/18/f4/9718f44a3a11a16f33b96ba7e49d4d16.jpg",
    description: "Keep your floats tidy and your tension even when working with multiple colors in tapestry and intarsia crochet techniques."
  }
];



export default function Tutorials() {
  const [searchQuery, setSearchQuery] = useState('');
  const [isSearching, setIsSearching] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim().length > 0) {
      setIsSearching(true);
    } else {
      setIsSearching(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#FDFCFB] flex flex-col font-sans">
      <Navbar />

      <main className="flex-grow pt-32 pb-24 max-w-7xl mx-auto px-6 w-full">
        {/* ── Search & Header ──────────────────────────────────────── */}
        <section className="mb-12 border-b border-tertiary/10 pb-10">
          <h1 className="font-serif text-4xl md:text-5xl text-tertiary mb-6">
            Explore <span className="italic font-light">Tutorials</span>
          </h1>
          <form onSubmit={handleSearch} className="relative max-w-2xl">
            <input 
              type="text" 
              value={searchQuery}
              onChange={(e) => {
                setSearchQuery(e.target.value);
                if (e.target.value === '') setIsSearching(false);
              }}
              placeholder="Search for stitches, techniques, or finishing skills..." 
              className="w-full bg-white border border-tertiary/20 rounded-full py-4 pl-6 pr-12 text-sm text-tertiary focus:outline-none focus:border-tertiary shadow-sm transition-all"
            />
            <button type="submit" className="absolute right-4 top-1/2 -translate-y-1/2 w-8 h-8 flex items-center justify-center bg-tertiary text-white rounded-full hover:bg-tertiary/90 transition-colors shadow-sm">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </button>
          </form>
        </section>

        {/* ── Dynamic Content Area ───────────────────────────────── */}
        {!isSearching ? (
          /* INITIAL VIEW: GRID LAYOUT */
          <div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
              {tutorials.map(tutorial => (
                <div key={tutorial.id} className="group cursor-pointer">
                  {/* Thumbnail Container */}
                  <div className="relative rounded-3xl overflow-hidden aspect-[4/3] bg-[#F0ECE8] mb-6 shadow-sm group-hover:shadow-[0_12px_40px_rgba(0,0,0,0.06)] transition-all duration-500">
                    <img 
                      src={tutorial.image} 
                      alt={tutorial.title} 
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <div className="w-14 h-14 bg-white/90 rounded-full flex items-center justify-center text-tertiary shadow-lg transform scale-90 group-hover:scale-100 transition-all duration-300">
                        <svg className="w-5 h-5 ml-1" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                        </svg>
                      </div>
                    </div>
                    <div className="absolute bottom-4 right-4 bg-black/60 backdrop-blur-md text-white text-[10px] font-medium px-3 py-1 rounded-full tracking-wider">
                      {tutorial.duration}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="px-2">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="text-[9px] font-black uppercase tracking-[0.2em] text-[#0A6C74]">
                        {tutorial.category}
                      </span>
                      <span className="w-1 h-1 rounded-full bg-tertiary/20"></span>
                      <span className="text-[10px] uppercase tracking-widest text-[#8A7080]">
                        {tutorial.level}
                      </span>
                    </div>
                    <h4 className="font-serif text-2xl text-tertiary mb-2 group-hover:text-[#0A6C74] transition-colors duration-300">
                      {tutorial.title}
                    </h4>
                    <p className="text-[#4A3840] text-sm font-light leading-relaxed opacity-80 line-clamp-2">
                      {tutorial.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-16 flex justify-center pb-8">
              <button className="px-10 py-4 bg-white border border-tertiary/20 text-tertiary text-[10px] font-black uppercase tracking-[0.2em] rounded-full hover:bg-tertiary hover:text-white transition-colors duration-300 shadow-sm hover:shadow-md">
                Load More Tutorials
              </button>
            </div>
          </div>
        ) : (
          /* SEARCH VIEW: SIDEBAR + HORIZONTAL CARDS */
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
            {/* ── Sidebar Filters ────────────────────────────────────── */}
            <aside className="w-full lg:w-1/4 flex flex-col gap-8 flex-shrink-0">
              <div>
                <h3 className="text-[11px] font-black uppercase tracking-[0.2em] text-tertiary mb-4 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#0A6C74]/50" />
                  Category
                </h3>
                <div className="flex flex-col gap-3.5">
                  {['Basics', 'Technique Focus', 'Finishing', 'Theory', 'Care'].map(cat => (
                    <label key={cat} className="flex items-center gap-3 cursor-pointer group">
                      <input type="checkbox" className="w-4 h-4 rounded border-tertiary/30 text-[#0A6C74] focus:ring-[#0A6C74] focus:ring-offset-0 cursor-pointer" />
                      <span className="text-[13px] text-[#4A3840] font-medium group-hover:text-tertiary transition-colors">{cat}</span>
                    </label>
                  ))}
                </div>
              </div>
              
              <div className="w-full h-px bg-tertiary/10"></div>

              <div>
                <h3 className="text-[11px] font-black uppercase tracking-[0.2em] text-tertiary mb-4 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#0A6C74]/50" />
                  Skill Level
                </h3>
                <div className="flex flex-col gap-3.5">
                  {['Beginner', 'Intermediate', 'Advanced', 'All Levels'].map(lvl => (
                    <label key={lvl} className="flex items-center gap-3 cursor-pointer group">
                      <input type="checkbox" className="w-4 h-4 rounded border-tertiary/30 text-[#0A6C74] focus:ring-[#0A6C74] focus:ring-offset-0 cursor-pointer" />
                      <span className="text-[13px] text-[#4A3840] font-medium group-hover:text-tertiary transition-colors">{lvl}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div className="w-full h-px bg-tertiary/10"></div>

              <div>
                <h3 className="text-[11px] font-black uppercase tracking-[0.2em] text-tertiary mb-4 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#0A6C74]/50" />
                  Duration
                </h3>
                <div className="flex flex-col gap-3.5">
                  {['Under 10 mins', '10 - 20 mins', '20+ mins'].map(dur => (
                    <label key={dur} className="flex items-center gap-3 cursor-pointer group">
                      <input type="checkbox" className="w-4 h-4 rounded border-tertiary/30 text-[#0A6C74] focus:ring-[#0A6C74] focus:ring-offset-0 cursor-pointer" />
                      <span className="text-[13px] text-[#4A3840] font-medium group-hover:text-tertiary transition-colors">{dur}</span>
                    </label>
                  ))}
                </div>
              </div>
            </aside>

            {/* ── Main Content ───────────────────────────────────────── */}
            <section className="w-full lg:w-3/4 flex flex-col gap-4">
              <div className="flex justify-between items-center mb-4">
                <span className="text-sm font-semibold text-tertiary">
                  {tutorials.filter(t => t.title.toLowerCase().includes(searchQuery.toLowerCase())).length} Tutorials Found
                </span>
                <select className="bg-transparent border border-tertiary/20 text-tertiary text-[11px] font-black uppercase tracking-widest py-2 px-4 rounded-full focus:outline-none focus:border-tertiary cursor-pointer hover:bg-white transition-colors shadow-sm">
                  <option>Sort by: Most Popular</option>
                  <option>Sort by: Newest</option>
                  <option>Sort by: Longest</option>
                </select>
              </div>

              {/* Detailed Horizontal Cards */}
              <div className="flex flex-col gap-4">
                {tutorials.filter(t => t.title.toLowerCase().includes(searchQuery.toLowerCase())).map(tutorial => (
                  <div key={tutorial.id} className="group flex flex-col sm:flex-row gap-6 p-4 sm:p-5 rounded-3xl bg-white hover:bg-[#FAF8F6] border border-tertiary/5 hover:border-tertiary/15 hover:shadow-[0_12px_40px_rgba(0,0,0,0.05)] transition-all duration-300 cursor-pointer">
                    
                    {/* Thumbnail */}
                    <div className="w-full sm:w-[280px] aspect-video sm:aspect-auto sm:h-[160px] relative rounded-2xl overflow-hidden bg-[#F0ECE8] flex-shrink-0">
                      <img src={tutorial.image} alt={tutorial.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                      <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                        <div className="w-12 h-12 bg-white/95 rounded-full flex items-center justify-center text-tertiary shadow-lg transform scale-90 group-hover:scale-100 transition-all duration-300">
                          <svg className="w-5 h-5 ml-1" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                          </svg>
                        </div>
                      </div>
                      <div className="absolute bottom-3 right-3 bg-black/70 backdrop-blur-md text-white text-[10px] font-black px-2.5 py-1 rounded-md tracking-widest">
                        {tutorial.duration}
                      </div>
                    </div>

                    {/* Details */}
                    <div className="flex flex-col flex-grow py-1">
                      <div className="flex justify-between items-start mb-1">
                        <h4 className="font-serif text-2xl text-tertiary group-hover:text-[#0A6C74] transition-colors duration-300">
                          {tutorial.title}
                        </h4>
                      </div>
                      
                      <p className="text-[11px] font-bold uppercase tracking-widest text-[#8A7080] mb-3">By Marya Shaikh</p>
                      
                      <p className="text-[#4A3840] text-[13px] font-medium leading-relaxed opacity-80 mb-4 line-clamp-2 max-w-xl">
                        {tutorial.description}
                      </p>

                      <div className="mt-auto flex flex-wrap items-center gap-4 md:gap-6 text-[10px] font-black uppercase tracking-[0.15em] text-[#5C4A52]">
                        <span className="flex items-center gap-1 text-[#b58b1a] bg-[#fdfaf1] border border-[#b58b1a]/20 px-2.5 py-1.5 rounded-md">
                          <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                          {tutorial.rating} <span className="text-tertiary/50 ml-1">({tutorial.reviews})</span>
                        </span>
                        <span className="flex items-center gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-tertiary/20"></span>
                          {tutorial.level}
                        </span>
                        <span className="flex items-center gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-tertiary/20"></span>
                          {tutorial.category}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-12 flex justify-center pb-12">
                <button className="px-10 py-4 bg-white border border-tertiary/20 text-tertiary text-[10px] font-black uppercase tracking-[0.2em] rounded-full hover:bg-tertiary hover:text-white transition-colors duration-300 shadow-sm hover:shadow-md">
                  Load More Tutorials
                </button>
              </div>
            </section>
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
}
