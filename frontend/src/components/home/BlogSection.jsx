import React from 'react';

const blogPosts = [
  {
    id: 1,
    title: "The Art of the Slow Stitch: Why Handmade Matters More Than Ever",
    category: "Inspiration",
    date: "Nov 28",
    excerpt: "In a world of instant gratification, there is a profound peace in taking the time to hand-craft something unique. Discover why the slow movements is gaining momentum.",
    image: "https://i.pinimg.com/736x/97/18/f4/9718f44a3a11a16f33b96ba7e49d4d16.jpg",
    featured: true
  },
  {
    id: 2,
    title: "Choosing the Perfect Palette: A Guide to Yarn Color Theory",
    category: "Guide",
    date: "Nov 15",
    image: "https://i.pinimg.com/736x/97/18/f4/9718f44a3a11a16f33b96ba7e49d4d16.jpg",
    featured: false
  },
  {
    id: 3,
    title: "Spring/Summer Update: New Yarns, New Knits, New Inspiration",
    category: "Update",
    date: "Oct 30",
    image: "https://i.pinimg.com/736x/97/18/f4/9718f44a3a11a16f33b96ba7e49d4d16.jpg",
    featured: false
  }
];

export default function BlogSection() {
  const featuredPost = blogPosts.find(post => post.featured);
  const secondaryPosts = blogPosts.filter(post => !post.featured);

  return (
    <section className="relative lg:h-screen flex flex-col justify-center py-8 md:py-10 px-6 overflow-hidden bg-neutralBg">
      {/* Background Decorative Element */}
      {/* <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/4 w-[500px] h-[500px] bg-lavender/20 rounded-full blur-[100px] pointer-events-none" /> */}
      {/* <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/4 w-[400px] h-[400px] bg-mint/20 rounded-full blur-[80px] pointer-events-none" /> */}

      <div className="max-w-7xl mx-auto relative z-10 w-full">
        <div className="flex flex-col mb-6 md:mb-8">
          <span className="inline-block text-tertiary font-bold tracking-[0.3em] uppercase text-[10px] mb-1.5">Our Creative Journal</span>
          <h2 className="text-3xl md:text-5xl font-serif italic text-textMain leading-tight">
            Stories from the <span className="text-deepRose relative inline-block">
              Studio
              <svg className="absolute -bottom-1 left-0 w-full" height="4" viewBox="0 0 100 6" fill="none">
                <path d="M1 5C20.5 1.5 80.5 1.5 99 5" stroke="#F2C4CE" strokeWidth="2" strokeLinecap="round" />
              </svg>
            </span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-12 gap-6 md:gap-10 items-start">
          {/* Featured Post */}
          <div className="lg:col-span-7 group cursor-pointer">
            <div className="relative aspect-[21/9] rounded-[1.2rem] overflow-hidden mb-3 shadow-lg shadow-lavender/20 ring-1 ring-black/5">
              <img
                src={featuredPost.image}
                className="w-full h-full object-cover transition-transform duration-1000 ease-out group-hover:scale-110"
                alt={featuredPost.title}
              />
              <div className="absolute top-4 left-4">
                <span className="backdrop-blur-xl bg-white/60 border border-white/40 px-3 py-1 rounded-full text-[7px] font-bold text-textMain uppercase tracking-[0.2em] shadow-sm">
                  {featuredPost.category}
                </span>
              </div>
            </div>
            <div className="px-1">
              <div className="flex items-center gap-2 mb-1.5">
                <span className="text-[10px] text-textMain font-bold">Marita S.</span>
                <span className="w-0.5 h-0.5 rounded-full bg-tertiary/30" />
                <span className="text-[10px] text-textLight font-medium">{featuredPost.date}</span>
                <span className="w-0.5 h-0.5 rounded-full bg-tertiary/30" />
                <span className="text-[10px] text-textLight font-medium italic">5 min read</span>
              </div>
              <h3 className="text-2xl md:text-3xl font-serif text-textMain italic mb-2.5 leading-tight group-hover:text-tertiary transition-colors duration-300">
                {featuredPost.title}
              </h3>
              <p className="text-textLight leading-relaxed mb-4 max-w-lg text-[15px] line-clamp-2">
                {featuredPost.excerpt}
              </p>
              <button className="flex items-center gap-2.5 group/btn text-[10px] font-bold text-textMain uppercase tracking-[0.2em] transition-all">
                <span className="pb-0.5 border-b border-transparent group-hover/btn:border-deepRose transition-all">Explore Story</span>
                <div className="w-6 h-6 rounded-full border border-tertiary/20 flex items-center justify-center group-hover/btn:bg-deepRose group-hover/btn:border-deepRose transition-all duration-300">
                  <svg className="w-2.5 h-2.5 text-textMain group-hover/btn:text-white transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </button>
            </div>
          </div>

          {/* Secondary Posts Column */}
          <div className="lg:col-span-5 flex flex-col justify-between self-stretch">
            <div className="flex flex-col gap-5 md:gap-6 divide-y divide-tertiary/5">
              {secondaryPosts.map((post, idx) => (
                <div key={post.id} className={`group cursor-pointer flex gap-5 ${idx !== 0 ? 'pt-5 md:pt-6' : ''}`}>
                  <div className="w-24 md:w-40 aspect-square rounded-xl overflow-hidden flex-shrink-0 shadow-sm shadow-lavender/10 ring-1 ring-black/5">
                    <img
                      src={post.image}
                      className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                      alt={post.title}
                    />
                  </div>
                  <div className="flex flex-col justify-center flex-1">
                    <div className="flex items-center gap-1.5 mb-2">
                      <span className="text-[8px] text-tertiary font-black uppercase tracking-widest">{post.category}</span>
                      <span className="text-[8px] text-textLight/60 font-medium">• {post.date}</span>
                    </div>
                    <h4 className="text-lg md:text-xl font-serif italic text-textMain group-hover:text-deepRose transition-colors duration-300 leading-snug mb-2">
                      {post.title}
                    </h4>

                    <div className="flex items-center justify-between">
                      <div className="overflow-hidden h-4 relative w-20">
                        <div className="transition-transform duration-500 ease-out group-hover:-translate-y-4">
                          <span className="block text-[8px] font-bold text-textMain uppercase tracking-widest py-0.5 border-b border-tertiary/10">Read Article</span>
                          <span className="block text-[8px] font-bold text-deepRose uppercase tracking-widest py-0.5 border-b border-deepRose">View Insights</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-6">
              <button className="w-full group relative px-6 py-4 overflow-hidden rounded-xl bg-white border border-tertiary/10 text-tertiary text-[9px] font-black tracking-[0.2em] uppercase transition-all shadow-sm hover:shadow-md hover:border-tertiary/20">
                <span className="relative z-10 transition-colors group-hover:text-white flex items-center justify-center gap-2">
                  Browse All Stories
                  <span className="w-1 h-1 rounded-full bg-deepRose transition-all group-hover:scale-125 group-hover:bg-white" />
                </span>
                <div className="absolute inset-0 bg-tertiary scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
