import React from 'react';
import { Link } from 'react-router-dom';

const featuredItems = [
  {
    id: 1,
    name: "Lavender Knit Scarf",
    material: "100% Merino Wool",
    price: "$64.00",
    image: "/artifacts/lavender_knit_scarf_product_1775976366355.png",
    tall: false
  },
  {
    id: 2,
    name: "Heritage Patchwork Blanket",
    material: "Tapestry in earth tones",
    price: "$artifacts/patchwork_blanket_product_1775976384634.png",
    image: "/artifacts/patchwork_blanket_product_1775976384634.png",
    tall: true
  },
  {
    id: 3,
    name: "Crocheted Market Bag",
    material: "Sustainable carryall",
    price: "$45.00",
    image: "/artifacts/crochet_market_bag_product_1775976401288.png",
    tall: false
  },
  {
    id: 4,
    name: "Knit Toy Puppy",
    material: "Organic cotton",
    price: "$42.00",
    image: "/artifacts/knit_toy_puppy_product_1775976418335.png",
    tall: false
  },
  {
    id: 5,
    name: "Children's Cardigan",
    material: "French lace collar",
    price: "$58.00",
    image: "/artifacts/children_lace_cardigan_product_1775976435532.png",
    tall: false
  }
];

export default function FeaturedSection() {
  return (
    <section className="bg-white/30 relative lg:h-[95vh] flex flex-col justify-center py-8 md:py-16 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto w-full relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 md:mb-12 gap-6">
          <div className="max-w-xl">
            <span className="inline-block text-tertiary font-bold tracking-[0.3em] uppercase text-[9px] mb-3">Curated Selection</span>
            <h2 className="text-4xl md:text-5xl font-serif italic text-textMain leading-tight">
              Featured <span className="text-deepRose">Highlights</span>
            </h2>
          </div>
          <Link to="/shop" className="flex items-center gap-2 group text-xs font-bold text-textMain uppercase tracking-widest transition-all hover:text-deepRose">
            Browse All Keepsakes
            <span className="w-8 h-[1px] bg-textMain group-hover:w-12 group-hover:bg-deepRose transition-all" />
          </Link>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-8 auto-rows-[180px] md:auto-rows-[200px] lg:auto-rows-[260px]">
          {featuredItems.map((item) => (
            <Link
              to="/shop"
              key={item.id}
              className={`group bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl hover:shadow-lavender/20 transition-all duration-500 border border-tertiary/5 relative flex flex-col ${item.tall ? 'row-span-2' : ''}`}
            >
              <div className="relative flex-grow overflow-hidden">
                <img
                  src={item.image}
                  className={`w-full h-full object-cover transition-transform duration-700 group-hover:scale-110`}
                  alt={item.name}
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-500" />

                {/* Quick Add Button */}
                <button className="absolute bottom-4 right-4 translate-y-12 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500 w-10 h-10 rounded-full bg-white shadow-lg flex items-center justify-center text-textMain hover:bg-deepRose hover:text-white">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4" />
                  </svg>
                </button>
              </div>

              <div className={`p-4 md:p-6 w-full text-left bg-white/80 backdrop-blur-sm border-t border-tertiary/5 transition-colors group-hover:bg-white`}>
                <div className="flex justify-between items-start gap-2">
                  <div>
                    <h4 className="font-serif italic text-base md:text-xl text-textMain leading-snug group-hover:text-deepRose transition-colors">
                      {item.name}
                    </h4>
                    <p className="text-[10px] md:text-[11px] text-textLight font-medium mt-1 tracking-wide">
                      {item.material}
                    </p>
                  </div>
                  <p className="text-sm md:text-base font-bold text-textMain mt-1 font-serif">
                    {item.price}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>

      </div>
    </section>
  );
}
