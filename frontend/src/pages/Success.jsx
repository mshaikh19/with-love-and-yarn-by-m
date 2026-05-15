import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Navbar from '../components/common/Navbar';
import Footer from '../components/common/Footer';

export default function Success() {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <div className="min-h-screen bg-[#FDFCFB] font-sans text-tertiary flex flex-col">
      <Navbar />
      
      <main className="flex-grow flex items-center justify-center pt-32 pb-24 px-6">
        <div className="max-w-2xl w-full text-center">
          
          {/* Celebratory Icon */}
          <motion.div 
            initial={{ scale: 0, rotate: -20 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ type: "spring", stiffness: 260, damping: 20 }}
            className="w-24 h-24 bg-[#E8F5E9] rounded-full flex items-center justify-center mx-auto mb-10 shadow-sm border border-[#E8F5E9]"
          >
            <span className="text-4xl">✨</span>
          </motion.div>

          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <h1 className="font-serif text-5xl md:text-6xl text-tertiary mb-6">Thank You!</h1>
            <p className="text-[#8A7080] text-lg font-light leading-relaxed mb-12 max-w-lg mx-auto">
              Your order <span className="font-bold text-tertiary">#WLY-4429</span> has been successfully placed. We've sent a confirmation email to your inbox.
            </p>
          </motion.div>

          {/* Order Summary Mock */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="bg-white rounded-[2.5rem] border border-tertiary/10 p-8 md:p-10 shadow-[0_8px_30px_rgba(0,0,0,0.03)] mb-12 text-left"
          >
            <h3 className="text-[10px] font-black uppercase tracking-[0.3em] text-[#8A7080] mb-8">Order Summary</h3>
            <div className="space-y-6">
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-[#FAF8F6] rounded-xl overflow-hidden">
                    <img src="https://i.pinimg.com/736x/97/18/f4/9718f44a3a11a16f33b96ba7e49d4d16.jpg" className="w-full h-full object-cover" alt="Product" />
                  </div>
                  <div>
                    <p className="text-[13px] font-bold">Artisan Merino Skein</p>
                    <p className="text-[11px] text-[#8A7080]">Quantity: 2</p>
                  </div>
                </div>
                <p className="text-[13px] font-bold">$65.00</p>
              </div>
              <div className="pt-6 border-t border-tertiary/5 space-y-3">
                <div className="flex justify-between text-[11px] font-medium text-[#8A7080]">
                  <span>Subtotal</span>
                  <span>$65.00</span>
                </div>
                <div className="flex justify-between text-[11px] font-medium text-[#8A7080]">
                  <span>Shipping</span>
                  <span>FREE</span>
                </div>
                <div className="flex justify-between text-[13px] font-black uppercase tracking-widest pt-2">
                  <span>Total</span>
                  <span>$65.00</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Action Buttons */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link to="/profile" className="bg-tertiary text-white px-10 py-4 rounded-full text-[11px] font-black uppercase tracking-[0.2em] shadow-md hover:shadow-lg transition-all no-print">
              View My Digital Library
            </Link>
            <button 
              onClick={() => window.print()}
              className="bg-white text-tertiary border border-tertiary/20 px-10 py-4 rounded-full text-[11px] font-black uppercase tracking-[0.2em] hover:bg-tertiary/5 transition-all no-print"
            >
              Print Receipt
            </button>
            <Link to="/shop" className="bg-white text-tertiary border border-tertiary/20 px-10 py-4 rounded-full text-[11px] font-black uppercase tracking-[0.2em] hover:bg-tertiary/5 transition-all no-print">
              Continue Shopping
            </Link>
          </motion.div>

        </div>
      </main>

      <Footer />
    </div>
  );
}
