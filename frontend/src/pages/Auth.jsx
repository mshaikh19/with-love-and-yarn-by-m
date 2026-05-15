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

      <main className="flex-grow pt-32 pb-6 max-w-7xl mx-auto px-4 w-full flex items-center justify-center h-full">
        <div className="w-full max-w-4xl h-[calc(100vh-8rem)] min-h-[500px] max-h-[650px] bg-white rounded-[2.5rem] shadow-[0_20px_60px_rgba(0,0,0,0.05)] border border-tertiary/10 overflow-hidden relative">
          
          {/* ── Mobile Layout (Stacked) ── */}
          <div className="md:hidden flex flex-col h-full overflow-y-auto">
            <div className="h-48 relative flex-shrink-0 bg-[#F0ECE8]">
              <img src="https://i.pinimg.com/736x/97/18/f4/9718f44a3a11a16f33b96ba7e49d4d16.jpg" alt="Crafting Lifestyle" className="absolute inset-0 w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-tertiary/90 to-transparent flex items-end justify-center pb-6">
                <span className="text-white font-[Corinthia] text-4xl">Welcome</span>
              </div>
            </div>
            <div className="p-8 flex flex-col justify-center flex-grow">
              <h2 className="font-serif text-3xl text-tertiary mb-2 text-center">
                {isLogin ? "Welcome Back" : "Join the Studio"}
              </h2>
              <form className="flex flex-col gap-4 mt-6" onSubmit={(e) => e.preventDefault()}>
                {!isLogin && (
                  <div>
                    <label className="text-[10px] font-black uppercase tracking-[0.2em] text-[#5C4A52] mb-1.5 block">Full Name</label>
                    <input type="text" placeholder="Jane Doe" className="w-full bg-[#FAF8F6] border border-tertiary/10 rounded-xl px-4 py-3 text-xs focus:outline-none focus:border-tertiary/40" />
                  </div>
                )}
                <div>
                  <label className="text-[10px] font-black uppercase tracking-[0.2em] text-[#5C4A52] mb-1.5 block">Email Address</label>
                  <input type="email" placeholder="hello@example.com" className="w-full bg-[#FAF8F6] border border-tertiary/10 rounded-xl px-4 py-3 text-xs focus:outline-none focus:border-tertiary/40" />
                </div>
                <div>
                  <div className="flex justify-between items-center mb-1.5">
                    <label className="text-[10px] font-black uppercase tracking-[0.2em] text-[#5C4A52] block">Password</label>
                    {isLogin && <a href="#" className="text-[9px] font-bold text-[#8A7080] hover:text-tertiary">Forgot?</a>}
                  </div>
                  <input type="password" placeholder="••••••••" className="w-full bg-[#FAF8F6] border border-tertiary/10 rounded-xl px-4 py-3 text-xs focus:outline-none focus:border-tertiary/40" />
                </div>
                <button className="w-full bg-tertiary text-white font-black uppercase tracking-[0.2em] text-[10px] py-3.5 rounded-xl hover:bg-tertiary/90 transition-colors mt-2">
                  {isLogin ? "Sign In" : "Create Account"}
                </button>
              </form>
              <div className="mt-6 text-center">
                <button onClick={() => setIsLogin(!isLogin)} className="text-tertiary text-[10px] font-black uppercase tracking-widest hover:text-tertiary/70 transition-colors border-b border-tertiary/30 pb-0.5">
                  {isLogin ? "Create an account instead" : "Sign in instead"}
                </button>
              </div>
            </div>
          </div>

          {/* ── Desktop Layout (Sliding Animation) ── */}
          <div className="hidden md:block w-full h-full relative bg-white">
            
            {/* Sign Up Form (Left Side) */}
            <div className={`absolute top-0 left-0 w-1/2 h-full p-12 lg:p-16 flex flex-col justify-center bg-white transition-all duration-700 ease-[cubic-bezier(0.4,0,0.2,1)] ${!isLogin ? 'opacity-100 translate-x-0 z-10' : 'opacity-0 -translate-x-[20%] -z-10'}`}>
              <h2 className="font-serif text-3xl lg:text-4xl text-tertiary mb-2">Join the Studio</h2>
              <p className="text-[#8A7080] text-xs font-medium mb-8">Create an account to save your favorite patterns.</p>
              <form className="flex flex-col gap-4" onSubmit={(e) => e.preventDefault()}>
                <div>
                  <label className="text-[9px] font-black uppercase tracking-[0.2em] text-[#5C4A52] mb-1.5 block">Full Name</label>
                  <input type="text" placeholder="Jane Doe" className="w-full bg-[#FAF8F6] border border-tertiary/10 rounded-xl px-4 py-3 text-xs focus:outline-none focus:border-tertiary/40" />
                </div>
                <div>
                  <label className="text-[9px] font-black uppercase tracking-[0.2em] text-[#5C4A52] mb-1.5 block">Email Address</label>
                  <input type="email" placeholder="hello@example.com" className="w-full bg-[#FAF8F6] border border-tertiary/10 rounded-xl px-4 py-3 text-xs focus:outline-none focus:border-tertiary/40" />
                </div>
                <div>
                  <label className="text-[9px] font-black uppercase tracking-[0.2em] text-[#5C4A52] mb-1.5 block">Password</label>
                  <input type="password" placeholder="••••••••" className="w-full bg-[#FAF8F6] border border-tertiary/10 rounded-xl px-4 py-3 text-xs focus:outline-none focus:border-tertiary/40" />
                </div>
                <button className="w-full bg-tertiary text-white font-black uppercase tracking-[0.2em] text-[10px] py-3.5 rounded-xl hover:bg-tertiary/90 transition-colors mt-2 shadow-sm hover:shadow-md">
                  Create Account
                </button>
              </form>
            </div>

            {/* Sign In Form (Right Side) */}
            <div className={`absolute top-0 right-0 w-1/2 h-full p-12 lg:p-16 flex flex-col justify-center bg-white transition-all duration-700 ease-[cubic-bezier(0.4,0,0.2,1)] ${isLogin ? 'opacity-100 translate-x-0 z-10' : 'opacity-0 translate-x-[20%] -z-10'}`}>
              <h2 className="font-serif text-3xl lg:text-4xl text-tertiary mb-2">Welcome Back</h2>
              <p className="text-[#8A7080] text-xs font-medium mb-8">Enter your details to access your library.</p>
              <form className="flex flex-col gap-4" onSubmit={(e) => e.preventDefault()}>
                <div>
                  <label className="text-[9px] font-black uppercase tracking-[0.2em] text-[#5C4A52] mb-1.5 block">Email Address</label>
                  <input type="email" placeholder="hello@example.com" className="w-full bg-[#FAF8F6] border border-tertiary/10 rounded-xl px-4 py-3 text-xs focus:outline-none focus:border-tertiary/40" />
                </div>
                <div>
                  <div className="flex justify-between items-center mb-1.5">
                    <label className="text-[9px] font-black uppercase tracking-[0.2em] text-[#5C4A52] block">Password</label>
                    <a href="#" className="text-[9px] font-bold text-[#8A7080] hover:text-tertiary">Forgot?</a>
                  </div>
                  <input type="password" placeholder="••••••••" className="w-full bg-[#FAF8F6] border border-tertiary/10 rounded-xl px-4 py-3 text-xs focus:outline-none focus:border-tertiary/40" />
                </div>
                <button className="w-full bg-tertiary text-white font-black uppercase tracking-[0.2em] text-[10px] py-3.5 rounded-xl hover:bg-tertiary/90 transition-colors mt-2 shadow-sm hover:shadow-md">
                  Sign In
                </button>
              </form>
            </div>

            {/* Sliding Overlay Panel */}
            <div className={`absolute top-0 left-0 w-1/2 h-full z-20 overflow-hidden transition-transform duration-700 ease-[cubic-bezier(0.4,0,0.2,1)] shadow-[0_0_40px_rgba(0,0,0,0.15)] ${isLogin ? 'translate-x-0' : 'translate-x-full'}`}>
              
              {/* Inner wrapper moves inversely to keep the background stationary */}
              <div className={`absolute top-0 left-0 w-[200%] h-full flex transition-transform duration-700 ease-[cubic-bezier(0.4,0,0.2,1)] ${isLogin ? 'translate-x-0' : '-translate-x-1/2'}`}>
                
                {/* Background Image */}
                <img 
                  src="https://i.pinimg.com/736x/97/18/f4/9718f44a3a11a16f33b96ba7e49d4d16.jpg" 
                  alt="Crafting" 
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-tertiary/95 via-tertiary/50 to-tertiary/20"></div>

                {/* Left Side Content (Shown when overlay is on the Left: isLogin = true) */}
                <div className={`w-1/2 h-full flex flex-col justify-center items-center text-center p-10 lg:p-14 relative z-10 transition-transform duration-700 ease-[cubic-bezier(0.4,0,0.2,1)] ${isLogin ? 'translate-x-0 opacity-100' : '-translate-x-[20%] opacity-0'}`}>
                  <span className="text-white font-[Corinthia] text-5xl lg:text-6xl mb-4">
                    New Here?
                  </span>
                  <p className="text-white/90 text-xs font-light leading-relaxed max-w-[250px] mb-8">
                    Join our community of intentional makers and curate your own pattern library.
                  </p>
                  <button 
                    onClick={() => setIsLogin(false)}
                    className="border border-white/50 text-white rounded-full px-10 py-3.5 text-[9px] font-black uppercase tracking-[0.2em] hover:bg-white hover:text-tertiary transition-colors duration-300"
                  >
                    Sign Up
                  </button>
                </div>

                {/* Right Side Content (Shown when overlay is on the Right: isLogin = false) */}
                <div className={`w-1/2 h-full flex flex-col justify-center items-center text-center p-10 lg:p-14 relative z-10 transition-transform duration-700 ease-[cubic-bezier(0.4,0,0.2,1)] ${!isLogin ? 'translate-x-0 opacity-100' : 'translate-x-[20%] opacity-0'}`}>
                  <span className="text-white font-[Corinthia] text-5xl lg:text-6xl mb-4">
                    Welcome Back!
                  </span>
                  <p className="text-white/90 text-xs font-light leading-relaxed max-w-[250px] mb-8">
                    If you already have an account, sign in to pick up where you left off.
                  </p>
                  <button 
                    onClick={() => setIsLogin(true)}
                    className="border border-white/50 text-white rounded-full px-10 py-3.5 text-[9px] font-black uppercase tracking-[0.2em] hover:bg-white hover:text-tertiary transition-colors duration-300"
                  >
                    Sign In
                  </button>
                </div>

              </div>
            </div>

          </div>
        </div>
      </main>
    </div>
  );
}
