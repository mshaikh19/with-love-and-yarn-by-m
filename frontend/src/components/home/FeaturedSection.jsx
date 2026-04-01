import SectionTitle from "../ui/SectionTitle";

export default function FeaturedSection() {
  const items = [
    { title: "Bags", img: "https://images.unsplash.com/photo-1585386959984-a41552262a6f" },
    { title: "Patterns", img: "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519" },
    { title: "Decor", img: "https://images.unsplash.com/photo-1616627451515-cbc80e5ece35" }
  ];

  return (
    <section className="bg-cream py-16">

      <SectionTitle title="Featured Collection" />

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 px-4">
        {items.map((item, i) => (
          <div key={i} className="text-center">

            <img
              src={item.img}
              className="rounded-xl hover:scale-105 transition"
            />

            <h3 className="mt-3 font-serif text-lg">
              {item.title}
            </h3>

          </div>
        ))}
      </div>
    </section>
  );
}