export default function OrderBanner() {
  return (
    <section className="relative py-20 sm:py-28 overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src="/images/song-linh-poke-3.png"
          alt="Poke bowl"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-forest-dark/85 backdrop-blur-sm" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
        <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
          Hungry? Order Online Now
        </h2>
        <p className="text-white/80 text-lg sm:text-xl mb-10 max-w-2xl mx-auto">
          Browse our full menu, customize your bowl, and get fresh food delivered
          to your door — or pick it up on the way.
        </p>
        <a
          href="https://order-ngay.com/order/song-linh-bistro"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-3 bg-leaf hover:bg-leaf-light text-white font-bold px-10 py-5 rounded-full text-lg transition-all hover:shadow-2xl hover:shadow-leaf/30 hover:-translate-y-1"
        >
          <span>Order Now</span>
          <span className="text-2xl">&rarr;</span>
        </a>
      </div>
    </section>
  );
}
