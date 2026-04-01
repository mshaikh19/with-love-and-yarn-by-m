import Button from "../ui/Button";

export default function PromoSection() {
  return (
    <section className="bg-lavender py-16">

      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8 px-4">

        <img
          src="https://images.unsplash.com/photo-1616627451515-cbc80e5ece35"
          className="w-full max-w-xs rounded-xl"
        />

        <div className="text-center">
          <h2 className="font-serif text-3xl text-textMain">
            New Collection
          </h2>

          <p className="text-textLight mt-2">
            Fresh crochet drops every week
          </p>

          <div className="mt-4">
            <Button>Shop Now</Button>
          </div>
        </div>

      </div>
    </section>
  );
}