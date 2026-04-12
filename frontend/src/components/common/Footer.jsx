import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
   return (
      <footer className="mt-4 bg-neutralBg border-t border-tertiary/5 relative overflow-hidden">
         {/* Decorative Background Elements */}
         {/* <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blush via-lavender to-mint opacity-30" />
         <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-lavender/10 rounded-full blur-3xl pointer-events-none" /> */}

         {/* Newsletter Section (Aesthetic Minimalist) */}
         <div className="max-w-7xl mx-auto px-6 py-4 md:py-6 border-b border-tertiary/5">
            <div className="relative group overflow-hidden rounded-[2.5rem] bg-tertiary p-4 md:p-6 text-center">
               <div className="absolute inset-0 opacity-15 group-hover:opacity-25 transition-opacity duration-1000">
                  <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white/20 via-transparent to-transparent" />
               </div>

               <div className="relative z-10 max-w-2xl mx-auto">
                  <div className="flex justify-center mb-2">
                     <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blush/10 border border-blush/20 text-[10px] font-black text-blush uppercase tracking-[0.3em] backdrop-blur-md shadow-sm">
                        <span className="w-1.5 h-1.5 rounded-full bg-blush animate-pulse shadow-[0_0_10px_#F2C4CE]" />
                        Join The Inner Circle
                     </span>
                  </div>

                  <h2 className="font-serif text-2xl md:text-3xl italic text-white leading-tight mb-2 tracking-tight">
                     Pattern drops <span className="text-blush">&</span> cozy updates
                  </h2>
                  <p className="text-white/60 text-xs md:text-sm font-light mb-4 leading-relaxed max-w-md mx-auto">
                     Stay connected with the studio. Get 10% off your first order and early access to limited releases.
                  </p>

                  <form className="flex flex-col sm:flex-row w-full gap-2 max-w-lg mx-auto" onSubmit={(e) => e.preventDefault()}>
                     <input
                        type="email"
                        placeholder="your@email.com"
                        className="flex-1 rounded-full bg-white/5 border border-white/10 px-6 py-2 text-white text-xs placeholder-white/30 focus:outline-none focus:bg-white/10 focus:border-blush transition-all duration-300"
                     />
                     <button type="submit" className="group relative bg-white text-tertiary px-8 py-2 rounded-full text-[9px] font-black tracking-[0.2em] uppercase overflow-hidden transition-all hover:shadow-[0_10px_30px_rgba(0,0,0,0.1)] active:scale-95">
                        <span className="relative z-10">Subscribe</span>
                        <div className="absolute inset-0 bg-blush scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
                     </button>
                  </form>
               </div>
            </div>
         </div>

         {/* Main Navigation Area */}
         <div className="max-w-7xl mx-auto px-6 py-10 md:py-12">
            <div className="grid grid-cols-2 lg:grid-cols-6 gap-x-8 gap-y-8">

               {/* Brand Column */}
               <div className="col-span-2 lg:col-span-2 pr-0 lg:pr-12 flex flex-col items-center lg:items-start overflow-visible">
                  <Link to="/" className="flex flex-col items-center lg:items-start leading-tight select-none mb-4 group transition-opacity hover:opacity-90">
                     <span className="font-[Corinthia] text-[2.5rem] text-[#6b3a4e] leading-[0.7]">
                        With love &amp; yarn
                     </span>
                     <span className="font-['Josefin_Sans'] font-bold text-[10px] tracking-[6px] text-[#6b3a4e] uppercase mt-1 opacity-80">
                        by M
                     </span>
                  </Link>
                  <p className="text-textLight text-[13px] leading-relaxed mb-4 font-medium opacity-80 max-w-sm text-center lg:text-left">
                     A boutique studio dedicated to the rhythmic beauty of slow-crafted arts, weaving heritage techniques into every intentional stitch.
                  </p>
                  <div className="flex gap-6 items-center justify-center lg:justify-start overflow-visible py-1 w-full lg:w-auto">
                     {[
                        {
                           name: 'Instagram',
                           href: 'https://instagram.com/withloveandyarn.by.m',
                           viewBox: '0 0 20 20',
                           transform: 'translate(2, 2)',
                           path: 'M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.9 3.9 0 0 0-1.417.923A3.9 3.9 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.9 3.9 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.9 3.9 0 0 0-.923-1.417A3.9 3.9 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599s.453.546.598.92c.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.5 2.5 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.5 2.5 0 0 1-.92-.598 2.5 2.5 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233s.008-2.388.046-3.231c.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92s.546-.453.92-.598c.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92m-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217m0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334'
                        },
                        {
                           name: 'Pinterest',
                           href: 'https://pinterest.com/withloveandyarn_by_m',
                           viewBox: '0 0 32 32',
                           transform: 'translate(4, 4)',
                           path: 'M12 0C5.373 0 0 5.373 0 12c0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.887 1.518 1.954 0 1.19-.654 2.568-.992 3.992-.285 1.193.601 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.401.165-1.495-.69-2.433-2.879-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.354-.629-2.758-1.379l-.749 2.848c-.269 1.045-1.004 2.352-1.498 3.146 1.123.345 2.306.535 3.55.535 6.607 0 11.985-5.365 11.985-11.987C24 5.373 18.627 0 12 0z'
                        },
                        {
                           name: 'YouTube',
                           href: 'https://youtube.com/@withloveandyarn.by.m',
                           viewBox: '0 0 32 32',
                           transform: 'translate(4, 4)',
                           path: 'M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z'
                        }
                     ].map(social => (
                        <a key={social.name} href={social.href} target="_blank" rel="noopener noreferrer" className="group text-tertiary transition-all duration-300">
                           <span className="sr-only">{social.name}</span>
                           <svg className="w-14 h-14 fill-current transform transition-transform group-hover:scale-110 group-hover:text-deepRose" viewBox={social.viewBox}>
                              <g transform={social.transform}>
                                 <path d={social.path} />
                              </g>
                           </svg>
                        </a>
                     ))}
                  </div>

               </div>

               {/* Links Columns */}
               {[
                  { title: 'Collections', links: ['Knitwear', 'Accessories', 'Patterns', 'Gift Sets'] },
                  { title: 'Experience', links: ['Our Story', 'The Journal', 'Workshops', 'Artist Studio'] },
                  { title: 'Support', links: ['Shipping', 'Returns', 'Size Guide', 'Contact Us'] },
                  { title: 'Studio', links: ['Wholesale', 'Media Kit', 'Privacy', 'Careers'] }
               ].map((col, idx) => (
                  <div key={idx} className="col-span-1">
                     <h4 className="text-[10px] font-black uppercase tracking-[0.25em] text-tertiary mb-3 md:mb-4 flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-deepRose/20" />
                        {col.title}
                     </h4>
                     <ul className="space-y-3">
                        {col.links.map(link => (
                           <li key={link}>
                              <a href="#" className="text-textLight hover:text-deepRose transition-colors duration-300 text-[12px] font-medium">
                                 {link}
                              </a>
                           </li>
                        ))}
                     </ul>
                  </div>
               ))}

            </div>
         </div>

         {/* Bottom Bar */}
         <div className="max-w-7xl mx-auto px-6 py-1 border-t border-tertiary/5">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
               <p className="text-textLight/60 text-[10px] uppercase tracking-widest leading-relaxed text-center md:text-left">
                  &copy; 2026 With Love and Yarn by M. <br className="md:hidden" />
                  Designed with intentionality for the slow-crafted life.
               </p>
               <div className="flex items-center gap-8 text-[10px] font-bold text-textLight/60 uppercase tracking-widest">
                  <a href="#" className="hover:text-deepRose transition-colors">Privacy Policy</a>
                  <a href="#" className="hover:text-deepRose transition-colors">Terms of Service</a>
               </div>
            </div>
         </div>
      </footer >
   );
}