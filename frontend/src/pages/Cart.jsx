import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/common/Navbar';
import Footer from '../components/common/Footer';

export default function Cart() {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  const cartItems = [
    { id: 1, type: "physical", name: "Artisan Merino Skein", color: "Velvet Rose", price: 32.50, qty: 2 },
    { id: 2, type: "digital", name: "The Sage Moss Cardigan Pattern", color: null, price: 8.00, qty: 1 }
  ];

  return (
    <div className="min-h-screen bg-[#FDFCFB] flex flex-col font-sans text-tertiary">
      <Navbar />

      <main className="flex-grow pt-32 pb-24 max-w-6xl mx-auto px-6 w-full">
        <h1 className="font-serif text-4xl md:text-5xl text-tertiary mb-10 text-center">Your Cart</h1>

        <div className="flex flex-col lg:flex-row gap-12">
          
          {/* Cart Items */}
          <div className="w-full lg:w-2/3 flex flex-col gap-6">
            <div className="hidden md:grid grid-cols-12 gap-4 pb-4 border-b border-tertiary/10 text-[10px] font-black uppercase tracking-[0.2em] text-[#8A7080]">
              <div className="col-span-6">Product</div>
              <div className="col-span-3 text-center">Quantity</div>
              <div className="col-span-3 text-right">Total</div>
            </div>

            {cartItems.map((item) => (
              <div key={item.id} className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center py-6 border-b border-tertiary/5">
                <div className="col-span-1 md:col-span-6 flex gap-6 items-center">
                  <div className="w-24 h-24 rounded-2xl bg-[#F0ECE8] overflow-hidden flex-shrink-0">
                    <img src="https://i.pinimg.com/736x/97/18/f4/9718f44a3a11a16f33b96ba7e49d4d16.jpg" alt="Item" className="w-full h-full object-cover" />
                  </div>
                  <div>
                    <h3 className="font-bold text-tertiary mb-1">{item.name}</h3>
                    {item.color && <p className="text-xs text-[#8A7080] font-medium mb-2">Color: {item.color}</p>}
                    {item.type === "digital" && <span className="bg-[#FAF8F6] text-[#8A7080] px-2 py-0.5 rounded text-[8px] font-black uppercase tracking-widest border border-tertiary/10">Digital PDF</span>}
                  </div>
                </div>

                <div className="col-span-1 md:col-span-3 flex justify-start md:justify-center">
                  {item.type === "physical" ? (
                    <div className="flex items-center gap-4 bg-[#FAF8F6] border border-tertiary/10 rounded-full px-4 py-2">
                      <button className="text-[#8A7080] hover:text-tertiary">-</button>
                      <span className="text-sm font-bold">{item.qty}</span>
                      <button className="text-[#8A7080] hover:text-tertiary">+</button>
                    </div>
                  ) : (
                    <span className="text-sm font-medium text-[#8A7080] bg-[#FAF8F6] px-4 py-2 rounded-full border border-tertiary/5">Qty: 1</span>
                  )}
                </div>

                <div className="col-span-1 md:col-span-3 flex justify-between md:justify-end items-center">
                  <span className="font-serif text-xl text-tertiary md:hidden">Total:</span>
                  <div className="flex flex-col items-end gap-2">
                    <span className="font-serif text-xl text-tertiary">${(item.price * item.qty).toFixed(2)}</span>
                    <button className="text-[9px] font-black uppercase tracking-widest text-[#8A7080] hover:text-[#C2185B] transition-colors border-b border-transparent hover:border-[#C2185B]">Remove</button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Order Summary */}
          <div className="w-full lg:w-1/3">
            <div className="bg-[#FAF8F6] rounded-[2.5rem] p-8 border border-tertiary/5 sticky top-32">
              <h2 className="font-serif text-2xl text-tertiary mb-6">Order Summary</h2>
              
              <div className="flex flex-col gap-4 text-sm font-medium text-tertiary/80 mb-6 border-b border-tertiary/10 pb-6">
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span>$73.00</span>
                </div>
                <div className="flex justify-between">
                  <span>Shipping</span>
                  <span className="text-[#8A7080] text-xs">Calculated at checkout</span>
                </div>
              </div>

              <div className="flex justify-between items-end mb-8">
                <span className="text-[11px] font-black uppercase tracking-[0.2em] text-[#5C4A52]">Total</span>
                <span className="font-serif text-4xl text-tertiary">$73.00</span>
              </div>

              <Link to="/checkout" className="block text-center w-full bg-tertiary text-white py-4 rounded-full text-[11px] font-black uppercase tracking-[0.2em] shadow-md hover:bg-tertiary/90 hover:shadow-lg transition-all mb-4">
                Checkout securely
              </Link>
              <Link to="/shop" className="block text-center text-[9px] font-black uppercase tracking-widest text-[#8A7080] hover:text-tertiary transition-colors">
                Continue Shopping
              </Link>
            </div>
          </div>

        </div>
      </main>

      <Footer />
    </div>
  );
}
