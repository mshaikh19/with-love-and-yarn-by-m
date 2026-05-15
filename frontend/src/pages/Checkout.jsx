import React, { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function Checkout() {
  const location = useLocation();
  const returnUrl = location.state?.from || "/shop";

  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <div className="min-h-screen bg-white font-sans text-tertiary flex flex-col md:flex-row">
      
      {/* Left Column (Forms) */}
      <div className="w-full md:w-3/5 lg:w-1/2 md:border-r border-tertiary/10 pt-10 pb-24 px-6 md:px-12 lg:px-24 flex flex-col items-center md:items-end">
        <div className="w-full max-w-lg mt-8">
          
          <Link to="/" className="font-[Corinthia] text-[3rem] text-[#6b3a4e] leading-none mb-10 block">With love & yarn</Link>
          
          <div className="flex gap-2 text-[10px] font-black uppercase tracking-widest text-[#8A7080] mb-10">
            <Link to={returnUrl} state={{ openCart: true }} className="hover:text-tertiary">Cart</Link>
            <span>&gt;</span>
            <span className="text-tertiary">Information</span>
            <span>&gt;</span>
            <span>Shipping</span>
            <span>&gt;</span>
            <span>Payment</span>
          </div>

          <form className="flex flex-col gap-8">
            
            <section>
              <div className="flex justify-between items-center mb-4">
                <h2 className="font-serif text-2xl text-tertiary">Contact Information</h2>
                <Link to="/account" className="text-[10px] font-black uppercase tracking-widest text-[#8A7080] hover:text-[#6b3a4e] border-b border-transparent hover:border-[#6b3a4e] pb-0.5 transition-colors">Log in</Link>
              </div>
              <input type="email" placeholder="Email Address" className="w-full bg-[#FDFCFB] border border-tertiary/20 rounded-xl px-4 py-3.5 text-sm focus:outline-none focus:border-[#6b3a4e]/60 focus:bg-white transition-colors" />
            </section>

            <section>
              <h2 className="font-serif text-2xl text-tertiary mb-4">Shipping Address</h2>
              <div className="flex flex-col gap-4">
                <select className="w-full bg-[#FDFCFB] border border-tertiary/20 rounded-xl px-4 py-3.5 text-sm focus:outline-none focus:border-[#6b3a4e]/60 focus:bg-white transition-colors appearance-none text-[#5C4A52]">
                  <option>United States</option>
                  <option>Canada</option>
                  <option>United Kingdom</option>
                </select>
                <div className="grid grid-cols-2 gap-4">
                  <input type="text" placeholder="First name" className="w-full bg-[#FDFCFB] border border-tertiary/20 rounded-xl px-4 py-3.5 text-sm focus:outline-none focus:border-[#6b3a4e]/60 focus:bg-white transition-colors" />
                  <input type="text" placeholder="Last name" className="w-full bg-[#FDFCFB] border border-tertiary/20 rounded-xl px-4 py-3.5 text-sm focus:outline-none focus:border-[#6b3a4e]/60 focus:bg-white transition-colors" />
                </div>
                <input type="text" placeholder="Address" className="w-full bg-[#FDFCFB] border border-tertiary/20 rounded-xl px-4 py-3.5 text-sm focus:outline-none focus:border-[#6b3a4e]/60 focus:bg-white transition-colors" />
                <input type="text" placeholder="Apartment, suite, etc. (optional)" className="w-full bg-[#FDFCFB] border border-tertiary/20 rounded-xl px-4 py-3.5 text-sm focus:outline-none focus:border-[#6b3a4e]/60 focus:bg-white transition-colors" />
                <div className="grid grid-cols-3 gap-4">
                  <input type="text" placeholder="City" className="w-full bg-[#FDFCFB] border border-tertiary/20 rounded-xl px-4 py-3.5 text-sm focus:outline-none focus:border-[#6b3a4e]/60 focus:bg-white transition-colors" />
                  <input type="text" placeholder="State" className="w-full bg-[#FDFCFB] border border-tertiary/20 rounded-xl px-4 py-3.5 text-sm focus:outline-none focus:border-[#6b3a4e]/60 focus:bg-white transition-colors" />
                  <input type="text" placeholder="ZIP code" className="w-full bg-[#FDFCFB] border border-tertiary/20 rounded-xl px-4 py-3.5 text-sm focus:outline-none focus:border-[#6b3a4e]/60 focus:bg-white transition-colors" />
                </div>
              </div>
            </section>

            <div className="flex justify-between items-center mt-6">
              <Link to={returnUrl} state={{ openCart: true }} className="text-[10px] font-black uppercase tracking-widest text-[#8A7080] hover:text-tertiary transition-colors">&lt; Return to cart</Link>
              <button type="button" className="bg-tertiary text-white px-8 py-4 rounded-xl text-[11px] font-black uppercase tracking-[0.2em] shadow-sm hover:bg-tertiary/90 transition-colors">
                Continue to shipping
              </button>
            </div>
          </form>
        </div>
      </div>

      {/* Right Column (Summary Sidebar) */}
      <div className="w-full md:w-2/5 lg:w-1/2 bg-[#FAF8F6] pt-10 pb-24 px-6 md:px-12 flex flex-col items-center md:items-start border-t md:border-t-0 border-tertiary/10">
        <div className="w-full max-w-md mt-8 md:mt-24">
          
          <div className="flex flex-col gap-6 mb-8 border-b border-tertiary/10 pb-8">
            {/* Item 1 */}
            <div className="flex items-center gap-4">
              <div className="relative">
                <div className="w-16 h-16 rounded-xl bg-white overflow-hidden border border-tertiary/10">
                  <img src="https://i.pinimg.com/736x/97/18/f4/9718f44a3a11a16f33b96ba7e49d4d16.jpg" className="w-full h-full object-cover" alt="Yarn" />
                </div>
                <span className="absolute -top-2 -right-2 w-5 h-5 bg-tertiary/80 text-white rounded-full flex items-center justify-center text-[10px] font-bold">2</span>
              </div>
              <div className="flex-grow">
                <h4 className="font-bold text-sm text-tertiary">Artisan Merino Skein</h4>
                <p className="text-[11px] text-[#8A7080] font-medium">Velvet Rose</p>
              </div>
              <span className="font-serif text-tertiary font-bold">$65.00</span>
            </div>

            {/* Item 2 */}
            <div className="flex items-center gap-4">
              <div className="relative">
                <div className="w-16 h-16 rounded-xl bg-white overflow-hidden border border-tertiary/10">
                  <img src="https://i.pinimg.com/736x/97/18/f4/9718f44a3a11a16f33b96ba7e49d4d16.jpg" className="w-full h-full object-cover" alt="Pattern" />
                </div>
                <span className="absolute -top-2 -right-2 w-5 h-5 bg-tertiary/80 text-white rounded-full flex items-center justify-center text-[10px] font-bold">1</span>
              </div>
              <div className="flex-grow">
                <h4 className="font-bold text-sm text-tertiary">The Sage Moss Cardigan Pattern</h4>
                <p className="text-[9px] font-black uppercase tracking-widest text-[#8A7080] mt-1">Digital PDF</p>
              </div>
              <span className="font-serif text-tertiary font-bold">$8.00</span>
            </div>
          </div>

          <div className="flex gap-4 mb-8 border-b border-tertiary/10 pb-8">
            <input type="text" placeholder="Gift card or discount code" className="flex-grow bg-white border border-tertiary/20 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#6b3a4e]/60 transition-colors" />
            <button className="bg-tertiary/10 text-tertiary px-6 rounded-xl text-[10px] font-black uppercase tracking-widest hover:bg-tertiary/20 transition-colors">Apply</button>
          </div>

          <div className="flex flex-col gap-3 text-sm font-medium text-tertiary/80 mb-6 border-b border-tertiary/10 pb-6">
            <div className="flex justify-between">
              <span>Subtotal</span>
              <span className="font-bold text-tertiary">$73.00</span>
            </div>
            <div className="flex justify-between">
              <span>Shipping</span>
              <span className="text-[#8A7080] text-xs">Calculated at next step</span>
            </div>
          </div>

          <div className="flex justify-between items-end">
            <span className="text-base text-tertiary">Total</span>
            <div className="flex items-end gap-2">
              <span className="text-[#8A7080] text-xs mb-1">USD</span>
              <span className="font-serif text-4xl text-tertiary font-bold">$73.00</span>
            </div>
          </div>

        </div>
      </div>

    </div>
  );
}
