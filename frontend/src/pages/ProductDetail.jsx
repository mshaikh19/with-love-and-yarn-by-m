import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import toast from 'react-hot-toast';
import Navbar from '../components/common/Navbar';
import Footer from '../components/common/Footer';
import InstagramPost from '../components/common/InstagramPost';

export default function ProductDetail() {
  const { id } = useParams();
  const [quantity, setQuantity] = useState(1);
  const [activeImage, setActiveImage] = useState(0);

  useEffect(() => { window.scrollTo(0, 0); }, []);

  const images = [
    "https://i.pinimg.com/736x/97/18/f4/9718f44a3a11a16f33b96ba7e49d4d16.jpg",
    "https://i.pinimg.com/736x/97/18/f4/9718f44a3a11a16f33b96ba7e49d4d16.jpg",
    "https://i.pinimg.com/736x/97/18/f4/9718f44a3a11a16f33b96ba7e49d4d16.jpg"
  ];

  return (
    <div className="min-h-screen bg-[#FDFCFB] flex flex-col font-sans text-tertiary">
      <Navbar />

      <main className="flex-grow pt-32 pb-24 max-w-6xl mx-auto px-6 w-full">
        <div className="text-[10px] font-black uppercase tracking-[0.2em] text-[#8A7080] mb-8">
          <Link to="/shop" className="hover:text-tertiary transition-colors">Shop</Link>
          <span className="mx-3">/</span>
          <span className="text-tertiary">Yarn</span>
        </div>

        <div className="flex flex-col md:flex-row gap-12 lg:gap-20">

          {/* Image Gallery (Left) */}
          <div className="w-full md:w-1/2 flex flex-col gap-4">
            <div className="w-full aspect-[4/5] bg-[#F0ECE8] rounded-[2.5rem] overflow-hidden">
              <img src={images[activeImage]} alt="Product" className="w-full h-full object-cover" />
            </div>
            <div className="flex gap-4">
              {images.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveImage(idx)}
                  className={`w-20 h-20 rounded-[1.5rem] overflow-hidden border-2 transition-all ${activeImage === idx ? 'border-tertiary shadow-md' : 'border-transparent opacity-60 hover:opacity-100'}`}
                >
                  <img src={img} className="w-full h-full object-cover" alt={`Thumbnail ${idx}`} />
                </button>
              ))}
            </div>
          </div>

          {/* Product Details (Right) */}
          <div className="w-full md:w-1/2 flex flex-col pt-4">
            <h1 className="font-serif text-4xl md:text-5xl text-tertiary mb-4">Artisan Merino Skein</h1>
            <p className="text-2xl font-serif text-[#8A7080] mb-6">$32.50</p>

            <p className="text-[13px] text-tertiary/80 leading-relaxed font-medium mb-8">
              Hand-dyed in small batches, this ultra-soft 100% ethically sourced merino wool is perfect for your next heirloom project. The 'Velvet Rose' colorway features subtle tonal variations that give incredible depth to your stitches.
            </p>

            <div className="mb-8">
              <div className="flex justify-between items-center mb-3 text-[10px] font-black uppercase tracking-widest text-[#5C4A52]">
                <span>Quantity</span>
                <span className="text-[#C2185B]">Only 4 left in stock</span>
              </div>
              <div className="flex items-center gap-6 bg-[#FAF8F6] border border-tertiary/10 rounded-full w-max p-2 shadow-sm">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="w-10 h-10 rounded-full bg-white shadow-sm flex items-center justify-center hover:text-[#6b3a4e] transition-colors"
                >-</button>
                <span className="text-lg font-serif min-w-[20px] text-center">{quantity}</span>
                <button
                  onClick={() => setQuantity(Math.min(4, quantity + 1))}
                  className="w-10 h-10 rounded-full bg-white shadow-sm flex items-center justify-center hover:text-[#6b3a4e] transition-colors"
                >+</button>
              </div>
            </div>

            <button
              onClick={() => toast.success(`✨ ${quantity}x Artisan Merino Skein added!`)}
              className="w-full bg-tertiary text-white py-4 rounded-full text-[11px] font-black uppercase tracking-[0.2em] shadow-md hover:bg-tertiary/90 hover:shadow-lg transition-all mb-10"
            >
              Add to Cart
            </button>

            {/* Accordions */}
            <div className="flex flex-col gap-4 border-t border-tertiary/10 pt-8">
              <div className="border-b border-tertiary/10 pb-4">
                <h3 className="text-[11px] font-black uppercase tracking-widest text-tertiary mb-2">Fiber & Care</h3>
                <p className="text-xs text-[#8A7080] font-medium leading-relaxed">100% Superwash Merino Wool. 100g / 400yds. Hand wash cold, lay flat to dry.</p>
              </div>
              <div className="border-b border-tertiary/10 pb-4">
                <h3 className="text-[11px] font-black uppercase tracking-widest text-tertiary mb-2">Shipping & Returns</h3>
                <p className="text-xs text-[#8A7080] font-medium leading-relaxed">Ships within 2-3 business days. Returns accepted within 14 days of delivery for unwound yarn.</p>
              </div>
            </div>

          </div>
        </div>

        {/* Instagram Section */}
        <div className="mt-32 pt-20 border-t border-tertiary/10">
          <div className="text-center mb-16">
            <span className="text-[10px] font-black uppercase tracking-[0.3em] text-[#6B3A4E] block mb-3">Community</span>
            <h2 className="font-serif text-4xl italic text-tertiary">As seen on Instagram</h2>
            <p className="text-[#8A7080] text-sm italic font-light mt-2">Tag @withloveandyarn to be featured in our gallery.</p>
          </div>
          
          <InstagramPost 
            image="https://i.pinimg.com/736x/97/18/f4/9718f44a3a11a16f33b96ba7e49d4d16.jpg"
            caption="Morning light in the studio with our new Artisan Merino collection. There's nothing quite like the rhythm of the needles... ✨ #withloveandyarn #knittinglife"
            likes="342"
          />
        </div>
      </main>

      <Footer />
    </div>
  );
}
