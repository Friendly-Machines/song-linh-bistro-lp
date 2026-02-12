const categories = [
  {
    name: 'Poke Bowls',
    description: 'Build your perfect bowl with fresh, vibrant ingredients and house-made sauces.',
    image: '/images/song-linh-poke-1.png',
    accent: 'from-forest/80',
  },
  {
    name: 'Smoothie Bowls',
    description: 'Thick, fruity blends topped with granola, fresh fruits, and superfoods.',
    image: '/images/song-linh-smoothie-bowl-2.png',
    accent: 'from-purple-900/70',
  },
  {
    name: 'Nut Butters',
    description: 'Handmade peanut & cashew butters — pure, creamy, and nothing artificial.',
    image: '/images/song-linh-cashew-nut-butter.png',
    accent: 'from-amber-900/70',
  },
  {
    name: 'Homemade Granola',
    description: 'Crunchy clusters of oats, nuts, and seeds, baked to golden perfection.',
    image: '/images/song-linh-granola-bags.png',
    accent: 'from-yellow-900/70',
  },
  {
    name: 'Nut Milks',
    description: 'Fresh almond & cashew milk made daily — no additives, just pure nutrition.',
    image: '/images/song-linh-nut-milk.png',
    accent: 'from-emerald-900/70',
  },
  {
    name: 'Cakes & Treats',
    description: 'Wholesome baked goods and nougat treats, perfect with your afternoon coffee.',
    image: '/images/song-linh-noga-on-plates.png',
    accent: 'from-rose-900/70',
  },
];

export default function MenuHighlights() {
  return (
    <section id="menu" className="py-24 sm:py-32 bg-warm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center max-w-3xl mx-auto mb-6 fade-up">
          <span className="text-leaf font-semibold text-sm tracking-widest uppercase">
            What We Serve
          </span>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-forest-dark mt-3 mb-6">
            Crafted with Care
          </h2>
          <p className="text-stone-light text-lg leading-relaxed">
            From colorful poke bowls to creamy nut butters, every item is handmade
            with the freshest ingredients.
          </p>
        </div>

        {/* CTA above grid */}
        <div className="text-center mb-16 fade-up">
          <a
            href="https://order-ngay.com/order/song-linh-bistro"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-forest hover:bg-forest-dark text-white font-semibold px-8 py-3.5 rounded-full transition-all hover:shadow-lg"
          >
            Order Online &rarr;
          </a>
        </div>

        {/* Food grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((cat, i) => (
            <a
              key={cat.name}
              href="https://order-ngay.com/order/song-linh-bistro"
              target="_blank"
              rel="noopener noreferrer"
              className="fade-up group relative rounded-3xl overflow-hidden aspect-[4/3] cursor-pointer"
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <img
                src={cat.image}
                alt={cat.name}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div
                className={`absolute inset-0 bg-gradient-to-t ${cat.accent} to-transparent opacity-80 group-hover:opacity-90 transition-opacity`}
              />
              <div className="absolute inset-0 flex flex-col justify-end p-6 sm:p-8">
                <h3 className="font-display text-xl sm:text-2xl font-bold text-white mb-2 drop-shadow-lg">
                  {cat.name}
                </h3>
                <p className="text-white/85 text-sm sm:text-base leading-relaxed line-clamp-2 drop-shadow">
                  {cat.description}
                </p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
