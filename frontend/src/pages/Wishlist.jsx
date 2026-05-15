import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Navbar from '../components/common/Navbar';
import Footer from '../components/common/Footer';

export default function Wishlist() {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  const wishlistItems = [
    { id: 1, title: "The Windswept Shawl", price: "$8.00", category: "Patterns", image: "https://i.pinimg.com/736x/97/18/f4/9718f44a3a11a16f33b96ba7e49d4d16.jpg" },
    { id: 2, title: "Artisan Merino Skein - Rose", price: "$32.00", category: "Yarn", image: "https://i.pinimg.com/736x/97/18/f4/9718f44a3a11a16f33b96ba7e49d4d16.jpg" },
  ];

  return (
    <div className="min-h-screen bg-[#FDFCFB] flex flex-col font-sans text-tertiary">
      <Navbar />
      
      <main className="flex-grow pt-32 pb-24 max-w-6xl mx-auto px-6 w-full">
        
        <header className="mb-16">
          <h1 className="font-serif text-5xl md:text-6xl text-tertiary mb-4">My Wishlist</h1>
          <p className="text-[#8A7080] text-sm font-medium tracking-wide">Saved for your next intentional project.</p>
        </header>

        {wishlistItems.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {wishlistItems.map((item) => (
              <motion.div 
                key={item.id}
                whileHover={{ y: -10 }}
                className="bg-white rounded-[2.5rem] p-4 shadow-[0_8px_30px_rgba(0,0,0,0.03)] border border-tertiary/10 group relative"
              >
                <div className="w-full aspect-[4/5] rounded-[2rem] overflow-hidden mb-6 relative">
                  <img src={item.image} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" alt={item.title} />
                  <button className="absolute top-4 right-4 w-10 h-10 bg-white/90 backdrop-blur-md rounded-full flex items-center justify-center text-tertiary shadow-sm hover:bg-[#C2185B] hover:text-white transition-all">
                    <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" /></svg>
                  </button>
                </div>
                
                <div className="px-3 pb-4">
                  <span className="text-[9px] font-black uppercase tracking-[0.2em] text-[#8A7080] mb-2 block">{item.category}</span>
                  <h3 className="font-serif text-xl text-tertiary mb-4 group-hover:text-[#6b3a4e] transition-colors">{item.title}</h3>
                  
                  <div className="flex justify-between items-center mt-6 pt-6 border-t border-tertiary/5">
                    <p className="font-black text-sm">{item.price}</p>
                    <button className="text-[10px] font-black uppercase tracking-widest text-[#6b3a4e] border-b border-[#6b3a4e]/20 hover:border-[#6b3a4e] transition-all">
                      Add to Cart
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        ) : (
          <div className="text-center py-32 bg-white rounded-[3rem] border-2 border-dashed border-tertiary/10">
            <span className="text-5xl mb-6 block">🕯️</span>
            <h2 className="font-serif text-3xl text-tertiary mb-4">Your wishlist is quiet</h2>
            <p className="text-[#8A7080] text-sm mb-10">Start curating patterns and yarns for your future creations.</p>
            <Link to="/shop" className="bg-tertiary text-white px-10 py-4 rounded-full text-[11px] font-black uppercase tracking-[0.2em] shadow-md">
              Go Shopping
            </Link>
          </div>
        )}

      </main>

      <Footer />
    </div>
  );
}
