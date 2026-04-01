export default function InfoSection() {
  const items = [
    "Handmade",
    "Soft Yarn",
    "Custom Orders",
    "Premium Quality"
  ];

  return (
    <section className="bg-sage py-16 text-center">

      <h2 className="font-serif text-2xl mb-6 text-textMain">
        Why Choose Us
      </h2>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
        {items.map((item, i) => (
          <div key={i} className="bg-white rounded-xl p-4 shadow">
            {item}
          </div>
        ))}
      </div>

    </section>
  );
}