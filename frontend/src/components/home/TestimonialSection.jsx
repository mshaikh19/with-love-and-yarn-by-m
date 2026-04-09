export default function TestimonialSection() {
  return (
    <section className="py-20 px-6 max-w-4xl mx-auto text-center">
       <h2 className="font-serif text-3xl italic text-[#4A3840] mb-12">Kind Words from the Community</h2>
       <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white p-8 rounded-xl shadow-[0_4px_20px_rgba(0,0,0,0.03)] text-left">
             <div className="flex text-tertiary mb-4">
                {"★★★★★".split("").map((star,i) => <span key={i}>{star}</span>)}
             </div>
             <p className="italic text-sm text-[#4A3840] mb-4">
               "The blanket I got is absolutely gorgeous and so incredibly soft! The colors pop just as beautifully in person as they did online, and you can sense the quality craftsmanship that went into making it."
             </p>
             <p className="text-xs text-[#8A7080] uppercase">— Sarah L., Seattle</p>
          </div>
          <div className="bg-white p-8 rounded-xl shadow-[0_4px_20px_rgba(0,0,0,0.03)] text-left">
             <div className="flex text-tertiary mb-4">
                {"★★★★★".split("").map((star,i) => <span key={i}>{star}</span>)}
             </div>
             <p className="italic text-sm text-[#4A3840] mb-4">
               "I bought the cutest crocheted toy set for my niece, and she carries them around constantly! Knowing they are handmade and safe for her makes the purchase even better. Definitely coming back for more."
             </p>
             <p className="text-xs text-[#8A7080] uppercase">— Maddie P., New York</p>
          </div>
       </div>
    </section>
  );
}
