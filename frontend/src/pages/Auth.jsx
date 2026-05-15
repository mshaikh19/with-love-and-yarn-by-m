import React, { useState, useEffect } from 'react';
import Navbar from '../components/common/Navbar';

export default function Auth() {
  const [isLogin, setIsLogin] = useState(true);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [isLogin]);

  return (
    <div className="h-screen bg-[#FDFCFB] flex flex-col font-sans overflow-hidden">
      <Navbar />

      <main className="flex-grow pt-24 pb-6 max-w-7xl mx-auto px-6 w-full flex items-center justify-center h-full">
        <div className="w-full max-w-5xl h-[calc(100vh-8rem)] max-h-[700px] min-h-[500px] bg-white rounded-[2.5rem] shadow-[0_20px_60px_rgba(0,0,0,0.05)] border border-tertiary/10 overflow-hidden flex flex-col md:flex-row">
          
          {/* Image Panel */}
          <div className="w-full h-48 md:h-full md:w-1/2 relative bg-[#F0ECE8]">
            <img 
              src="https://i.pinimg.com/736x/97/18/f4/9718f44a3a11a16f33b96ba7e49d4d16.jpg" 
              alt="Crafting Lifestyle" 
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-tertiary/90 via-tertiary/40 to-transparent flex flex-col justify-end p-10 md:p-14">
              <span className="text-white/90 font-[Corinthia] text-5xl md:text-6xl mb-2">Welcome</span>
              <p className="text-white/90 text-[13px] font-light leading-relaxed max-w-sm">
                Join our community of intentional makers. Curate your pattern library, track your progress, and master your craft.
              </p>
            </div>
          </div>

          {/* Form Panel */}
          <div className="w-full md:w-1/2 p-6 md:p-10 lg:p-14 flex flex-col justify-center h-full overflow-y-auto">
            
            {/* Toggle */}
            <div className="flex items-center gap-8 mb-10 border-b border-tertiary/10 pb-4">
              <button 
                onClick={() => setIsLogin(true)}
                className={`text-[11px] font-black uppercase tracking-[0.2em] transition-colors relative pb-4 -mb-[17px] ${isLogin ? 'text-tertiary' : 'text-tertiary/40 hover:text-tertiary/70'}`}
              >
                Sign In
                {isLogin && <span className="absolute bottom-0 left-0 w-full h-0.5 bg-tertiary rounded-t-full"></span>}
              </button>
              <button 
                onClick={() => setIsLogin(false)}
                className={`text-[11px] font-black uppercase tracking-[0.2em] transition-colors relative pb-4 -mb-[17px] ${!isLogin ? 'text-tertiary' : 'text-tertiary/40 hover:text-tertiary/70'}`}
              >
                Create Account
                {!isLogin && <span className="absolute bottom-0 left-0 w-full h-0.5 bg-tertiary rounded-t-full"></span>}
              </button>
            </div>

            <h2 className="font-serif text-3xl md:text-4xl text-tertiary mb-2">
              {isLogin ? "Welcome Back" : "Join the Studio"}
            </h2>
            <p className="text-[#8A7080] text-[13px] font-medium mb-8">
              {isLogin ? "Enter your details to access your pattern library." : "Create an account to save your favorite patterns and tutorials."}
            </p>

            <form className="flex flex-col gap-5" onSubmit={(e) => e.preventDefault()}>
              
              {!isLogin && (
                <div>
                  <label className="text-[10px] font-black uppercase tracking-[0.2em] text-[#5C4A52] mb-2 block">Full Name</label>
                  <input 
                    type="text" 
                    placeholder="Jane Doe" 
                    className="w-full bg-[#FAF8F6] border border-tertiary/10 rounded-xl px-5 py-3.5 text-sm text-tertiary focus:outline-none focus:border-tertiary/40 focus:bg-white transition-colors"
                  />
                </div>
              )}

              <div>
                <label className="text-[10px] font-black uppercase tracking-[0.2em] text-[#5C4A52] mb-2 block">Email Address</label>
                <input 
                  type="email" 
                  placeholder="hello@example.com" 
                  className="w-full bg-[#FAF8F6] border border-tertiary/10 rounded-xl px-5 py-3.5 text-sm text-tertiary focus:outline-none focus:border-tertiary/40 focus:bg-white transition-colors"
                />
              </div>

              <div>
                <div className="flex justify-between items-center mb-2">
                  <label className="text-[10px] font-black uppercase tracking-[0.2em] text-[#5C4A52] block">Password</label>
                  {isLogin && <a href="#" className="text-[10px] font-bold text-[#8A7080] hover:text-tertiary transition-colors">Forgot?</a>}
                </div>
                <input 
                  type="password" 
                  placeholder="••••••••" 
                  className="w-full bg-[#FAF8F6] border border-tertiary/10 rounded-xl px-5 py-3.5 text-sm text-tertiary focus:outline-none focus:border-tertiary/40 focus:bg-white transition-colors"
                />
              </div>

              <button type="submit" className="w-full bg-tertiary text-white font-black uppercase tracking-[0.2em] text-[11px] py-4 rounded-xl hover:bg-tertiary/90 transition-colors mt-4 shadow-sm hover:shadow-md">
                {isLogin ? "Sign In" : "Create Account"}
              </button>
            </form>

            <div className="mt-8 pt-8 border-t border-tertiary/10">
              <p className="text-center text-[11px] text-[#8A7080] font-medium leading-relaxed">
                By continuing, you agree to our <a href="#" className="font-bold hover:text-tertiary border-b border-[#8A7080]/30 hover:border-tertiary pb-0.5">Terms of Service</a> and <a href="#" className="font-bold hover:text-tertiary border-b border-[#8A7080]/30 hover:border-tertiary pb-0.5">Privacy Policy</a>.
              </p>
            </div>

          </div>
        </div>
      </main>
    </div>
  );
}
