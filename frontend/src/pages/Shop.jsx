import React from 'react';
import Sidebar from '../components/shop/Sidebar';
import ProductCard from '../components/shop/ProductCard';
import Navbar from '../components/common/Navbar';
import Footer from '../components/common/Footer';

const Shop = () => {
  const products = [
    {
      id: 1,
      name: 'The Heirloom Cardigan',
      price: '$340.00',
      description: '100% Organic Merino Wool • Hand-Dyed Lavender',
      image: '/products/cardigan.png',
      status: 'Limited Edition'
    },
    {
      id: 2,
      name: 'Canvas Market Tote',
      price: '$115.00',
      description: 'Hand-Knotted Cotton Blend • Sandstone',
      image: '/products/tote.png'
    },
    {
      id: 3,
      name: 'Morning Mist Throw',
      price: '$285.00',
      description: 'Recycled Wool & Silk Blend • Fog Grey',
      image: '/products/blanket.png',
      status: 'Restocked'
    },
    {
      id: 4,
      name: 'Petal Soft Vest',
      price: '$195.00',
      description: 'Brushed Mohair & Silk • Deep Plum',
      image: '/products/vest.png'
    },
    {
      id: 5,
      name: 'Artisan Yarn Kit',
      price: '$85.00',
      description: 'Hand-Dyed Merino Trio • Pastel Palette',
      image: '/products/yarn_kit.png',
      status: 'The Studio Edit'
    },
    {
      id: 6,
      name: 'Heritage Knit Beanie',
      price: '$65.00',
      description: 'Chunky Merino Wool • Slate Haze',
      image: '/products/beanie.png'
    },
    {
      id: 7,
      name: 'Mist Scarf',
      price: '$115.00',
      description: 'Alpaca & Silk Blend • Lavender Haze',
      image: '/products/scarf.png'
    },
    {
      id: 8,
      name: 'Artisan Pup Heirloom',
      price: '$75.00',
      description: 'Hand-Knit Organic Scrap Yarn • Mixed Earth',
      image: '/products/puppy.png'
    },
    {
      id: 9,
      name: 'Organic Tea Towels',
      price: '$45.00',
      description: 'Waffle Texture Cotton • Ivory & Sand',
      image: '/products/tea_towel.png'
    },
    {
      id: 10,
      name: 'Bamboo Crochet hooks',
      price: '$55.00',
      description: 'Set of 5 Ergonomic Hooks • Sustainable Case',
      image: '/products/hooks.png'
    }
  ];

  return (
    <div className="min-h-screen bg-[#FDFCFB] flex flex-col">
      <Navbar />

      <main className="flex-1 mt-10">
        {/* Shop Hero Section */}
        <section className="max-w-7xl mx-auto px-6 py-12 md:py-20 flex flex-col items-center text-center">
          <span className="text-[10px] font-black uppercase tracking-[0.4em] text-tertiary mb-6 opacity-60">
            Artisan Collections
          </span>
          <h1 className="font-serif text-5xl md:text-7xl italic text-tertiary leading-[1.1] mb-8 tracking-tight max-w-3xl">
            The Modern Weaver
          </h1>
          <p className="text-textLight text-sm md:text-base font-light leading-relaxed max-w-xl mx-auto opacity-70">
            A curated selection of hand-knitted heirlooms, where traditional craftsmanship meets minimalist contemporary silhouettes.
          </p>
        </section>

        {/* Collection Grid & Sidebar */}
        <section className="max-w-7xl mx-auto px-6 pb-24">
          <div className="flex flex-col lg:flex-row gap-12">

            {/* Sidebar (Responsive Overlay or Inline) */}
            <aside className="lg:w-1/4">
              <Sidebar />
            </aside>

            {/* Product Grid */}
            <div className="lg:w-3/4">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-12">
                {products.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>

              {/* Pagination */}
              <div className="mt-20 flex justify-center items-center gap-4">
                <button className="w-10 h-10 flex items-center justify-center rounded-full border border-tertiary/10 text-tertiary hover:bg-tertiary hover:text-white transition-all">
                  <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </button>
                <div className="flex items-center gap-2">
                  <span className="w-10 h-10 flex items-center justify-center rounded-full bg-tertiary text-white text-xs font-bold leading-none">1</span>
                  <span className="w-10 h-10 flex items-center justify-center rounded-full text-tertiary/30 text-xs font-bold leading-none cursor-pointer hover:text-tertiary transition-colors">2</span>
                  <span className="w-10 h-10 flex items-center justify-center rounded-full text-tertiary/30 text-xs font-bold leading-none cursor-pointer hover:text-tertiary transition-colors">3</span>
                </div>
                <button className="w-10 h-10 flex items-center justify-center rounded-full border border-tertiary/10 text-tertiary hover:bg-tertiary hover:text-white transition-all">
                  <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </div>

          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Shop;
