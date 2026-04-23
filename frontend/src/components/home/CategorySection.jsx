import React from "react";
import { Link } from "react-router-dom";

const categories = [
  {
    label: "Clothing",
    img: "/hero_main_1775737341179.png",
    bg: "bg-[#EFE5F5]",
  },
  {
    label: "Toys",
    img: "/hero_small_1_1775737359124.png",
    bg: "bg-[#F5E6EE]",
  },
  {
    label: "Home Decor",
    img: "/hero_main_1775737341179.png",
    bg: "bg-[#EAF3EF]",
  },
  {
    label: "Accessories",
    img: "/hero_small_2_1775737375511.png",
    bg: "bg-[#F0EBF8]",
  },
  {
    label: "Patterns",
    img: "/hero_small_1_1775737359124.png",
    bg: "bg-[#F7EDE8]",
  },
  {
    label: "Kits",
    img: "/hero_main_1775737341179.png",
    bg: "bg-[#EBF0F8]",
  },
];

export default function CategorySection() {
  return (
    <section className="py-10 px-6 max-w-6xl mx-auto text-center">
      <p className="text-xs tracking-widest text-[#8A7080] uppercase mb-2">Find your style</p>
      <h2 className="font-serif text-4xl italic text-[#4A3840] mb-12">Browse by Category</h2>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-5 md:gap-6">
        {categories.map(({ label, img, bg }) => (
          <Link
            to="/shop"
            key={label}
            className={`relative group rounded-3xl overflow-hidden ${bg} shadow-sm flex flex-col items-center justify-center p-4 aspect-square cursor-pointer transition-all duration-300 hover:shadow-xl hover:-translate-y-1`}
          >
            {/* Image fills the card */}
            <img
              src={img}
              alt={label}
              className="w-full h-full object-cover absolute inset-0 opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
            />

            {/* Soft gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#3b2040]/60 via-transparent to-transparent" />

            {/* Label badge */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2">
              <span className="inline-block bg-white/90 backdrop-blur-sm text-[#6b3a4e] font-semibold text-[11px] tracking-widest uppercase px-5 py-2 rounded-full shadow-sm group-hover:bg-white transition-all duration-300">
                {label}
              </span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
