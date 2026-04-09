export default function Footer() {
  return (
    <footer className="mt-12 px-6 max-w-6xl mx-auto">
       <div className="bg-[#60556A] rounded-3xl p-12 text-center flex flex-col items-center">
          <h2 className="font-serif text-3xl italic text-white mb-2">Join our cozy community</h2>
          <p className="text-primary text-xs mb-8">Sign up for our newsletter to get new pattern drops, limited edition releases, and 10% off your first order straight to your inbox.</p>
          
          <form className="flex w-full max-w-md gap-2" onSubmit={(e) => e.preventDefault()}>
             <input 
               type="email" 
               placeholder="Enter your email address" 
               className="flex-1 rounded-full bg-white/20 border border-white/10 px-6 py-3 text-white text-sm placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-primary"
             />
             <button type="submit" className="bg-white text-[#60556A] px-6 py-3 rounded-full text-sm font-medium hover:bg-neutralBg transition">
               Subscribe
             </button>
          </form>
       </div>

       <div className="flex flex-col md:flex-row justify-between items-center mt-12 mb-8">
          <p className="text-[#8A7080] text-xs">&copy; 2026 With Love and Yarn by M. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0 text-xs text-[#8A7080] uppercase tracking-wider">
             <a href="#" className="hover:text-tertiary">Instagram</a>
             <a href="#" className="hover:text-tertiary">Pinterest</a>
             <a href="#" className="hover:text-tertiary">Contact</a>
             <a href="#" className="hover:text-tertiary">Shipping</a>
          </div>
       </div>
    </footer>
  );
}