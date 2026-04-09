export default function FeaturedSection() {
  return (
    <section className="py-20 px-6 max-w-6xl mx-auto">
      <div className="text-center mb-12">
         <p className="text-xs tracking-widest text-[#8A7080] uppercase mb-2">Hand Picked Itmes</p>
         <h2 className="font-serif text-4xl italic text-[#4A3840]">Featured Highlights</h2>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-6 auto-rows-[250px]">
        {/* Card 1 */}
        <div className="bg-white rounded-xl overflow-hidden shadow-sm flex flex-col items-center">
          <img src="https://images.unsplash.com/photo-1584992236310-6edddc08acff?auto=format&fit=crop&q=80&w=400" className="w-full h-40 object-cover" />
          <div className="p-4 w-full text-left">
             <h4 className="font-serif italic text-lg text-[#4A3840]">Lavender Knit Scarf</h4>
             <p className="text-[10px] text-[#8A7080]">100% Merino Wool</p>
             <p className="text-sm font-medium mt-1">$64.00</p>
          </div>
        </div>
        {/* Card 2 - Taller */}
        <div className="bg-white rounded-xl overflow-hidden shadow-sm flex flex-col items-center row-span-2">
          <img src="https://images.unsplash.com/photo-1580828369062-8e7ac742fba4?auto=format&fit=crop&q=80&w=500" className="w-full h-[380px] object-cover" />
          <div className="p-4 w-full text-left">
             <h4 className="font-serif italic text-lg text-[#4A3840]">Heritage Patchwork Blanket</h4>
             <p className="text-[10px] text-[#8A7080]">Tapestry in earth tones</p>
             <p className="text-sm font-medium mt-1">$285.00</p>
          </div>
        </div>
        {/* Card 3 */}
        <div className="bg-white rounded-xl overflow-hidden shadow-sm flex flex-col items-center">
          <img src="https://images.unsplash.com/photo-1590874558552-32a76f2f2da4?auto=format&fit=crop&q=80&w=400" className="w-full h-40 object-cover" />
          <div className="p-4 w-full text-left">
             <h4 className="font-serif italic text-lg text-[#4A3840]">Crocheted Market Bag</h4>
             <p className="text-[10px] text-[#8A7080]">Sustainable carryall</p>
             <p className="text-sm font-medium mt-1">$45.00</p>
          </div>
        </div>
        {/* Card 4 */}
        <div className="bg-white rounded-xl overflow-hidden shadow-sm flex flex-col items-center">
          <div className="w-full h-40 bg-[#1A2530] flex items-center justify-center overflow-hidden">
             <img src="https://images.unsplash.com/photo-1558500295-e2e5e1a383d4?auto=format&fit=crop&q=80&w=400" className="max-w-[70%] max-h-[90%] object-cover rounded" />
          </div>
          <div className="p-4 w-full text-left">
             <h4 className="font-serif italic text-lg text-[#4A3840]">Knit Toy Puppy</h4>
             <p className="text-[10px] text-[#8A7080]">Organic cotton</p>
             <p className="text-sm font-medium mt-1">$42.00</p>
          </div>
        </div>
        {/* Card 5 */}
        <div className="bg-white rounded-xl overflow-hidden shadow-sm flex flex-col items-center">
          <img src="https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?auto=format&fit=crop&q=80&w=400" className="w-full h-40 object-cover" />
          <div className="p-4 w-full text-left">
             <h4 className="font-serif italic text-lg text-[#4A3840]">Children's Lace Cardigan</h4>
             <p className="text-[10px] text-[#8A7080]">French lace collar</p>
             <p className="text-sm font-medium mt-1">$58.00</p>
          </div>
        </div>
      </div>
    </section>
  );
}
