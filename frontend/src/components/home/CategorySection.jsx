export default function CategorySection() {
  return (
    <section className="py-20 px-6 max-w-6xl mx-auto text-center">
      <p className="text-xs tracking-widest text-[#8A7080] uppercase mb-2">Find your style</p>
      <h2 className="font-serif text-4xl italic text-[#4A3840] mb-12">Browse by Category</h2>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
        {/* Item 1 */}
        <div className="relative group rounded-2xl overflow-hidden bg-white shadow-sm flex flex-col items-center justify-center p-6 aspect-square cursor-pointer">
           <img src="https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?auto=format&fit=crop&q=80&w=400" className="w-[70%] h-[70%] object-contain mix-blend-multiply group-hover:scale-105 transition" />
           <div className="absolute bottom-4 bg-[#60556A] text-white text-xs py-2 px-6 rounded-md">Clothing</div>
        </div>
        {/* Item 2 */}
        <div className="relative group rounded-2xl overflow-hidden bg-[#D4A373]/20 shadow-sm flex flex-col items-center justify-center p-6 aspect-square cursor-pointer">
           <img src="https://images.unsplash.com/photo-1558500295-e2e5e1a383d4?auto=format&fit=crop&q=80&w=400" className="w-[80%] h-[80%] object-cover rounded-lg group-hover:scale-105 transition" />
           <div className="absolute bottom-4 bg-primary text-[#60556A] font-semibold text-xs py-2 px-6 rounded-md shadow-sm">Toys</div>
        </div>
        {/* Item 3 */}
        <div className="relative group rounded-2xl overflow-hidden bg-white shadow-sm flex flex-col items-center justify-center p-6 aspect-square cursor-pointer">
           <img src="https://images.unsplash.com/photo-1584100936595-c0654b35a107?auto=format&fit=crop&q=80&w=400" className="w-[80%] h-[80%] object-cover rounded-lg group-hover:scale-105 transition" />
           <div className="absolute bottom-4 bg-[#60556A] text-white text-xs py-2 px-6 rounded-md">Home Decor</div>
        </div>
        {/* Item 4 */}
        <div className="relative group rounded-2xl overflow-hidden bg-white shadow-sm flex flex-col items-center justify-center p-6 aspect-square cursor-pointer">
           <img src="https://images.unsplash.com/photo-1590874558552-32a76f2f2da4?auto=format&fit=crop&q=80&w=400" className="w-[60%] h-[70%] object-contain group-hover:scale-105 transition" />
           <div className="absolute bottom-4 bg-primary text-[#60556A] font-semibold text-xs py-2 px-6 rounded-md shadow-sm">Accessories</div>
        </div>
        {/* Item 5 */}
        <div className="relative group rounded-2xl overflow-hidden bg-[#7AC1D9] shadow-sm flex flex-col items-center justify-center p-6 aspect-square cursor-pointer">
           <img src="https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?auto=format&fit=crop&q=80&w=400" className="w-[80%] h-[80%] object-cover rounded-lg group-hover:scale-105 transition" />
           <div className="absolute bottom-4 bg-[#60556A] text-white text-xs py-2 px-6 rounded-md">Patterns</div>
        </div>
        {/* Item 6 */}
        <div className="relative group rounded-2xl overflow-hidden bg-white shadow-sm flex flex-col items-center justify-center p-6 aspect-square cursor-pointer">
           <img src="https://images.unsplash.com/photo-1580828369062-8e7ac742fba4?auto=format&fit=crop&q=80&w=400" className="w-[80%] h-[80%] object-cover rounded-lg group-hover:scale-105 transition scale-150 rotate-12" />
           <div className="absolute bottom-4 bg-tertiary text-white text-xs py-2 px-6 rounded-md">Kits</div>
        </div>
      </div>
    </section>
  );
}
