import { Star, Quote } from 'lucide-react';

const reviews = [
  {
    name: 'Ray Raasch',
    badge: 'Local Guide',
    time: '2 months ago',
    rating: 5,
    text: "This place has everything I need in a restaurant. Cozy atmosphere, friendly staff, healthy fresh food, and WiFi. The staff spoke good English and were incredibly helpful and patient when I miscalculated the amount of cash I had on hand.",
  },
  {
    name: 'Nikolas Ramoin',
    badge: 'Local Guide',
    time: '1 year ago',
    rating: 5,
    text: 'What a nice spot... the banh mi was nice and crispy with a decent portion size for a cheap price. The smoothie bowls were very well balanced, refreshing, and healthy. Not to mention the nice staff as well as a warm and cozy atmosphere on the second floor.',
  },
  {
    name: 'Tin Nick',
    badge: 'Local Guide',
    time: '1 month ago',
    rating: 5,
    text: 'Best place ever I stayed so far... cosy chairs, no noise as usual, tasty food, great vegan cappuccino and the cherry on top of the cake: an adorable cat!',
  },
];

function Stars({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: count }).map((_, i) => (
        <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
      ))}
    </div>
  );
}

export default function Reviews() {
  return (
    <section id="reviews" className="py-24 sm:py-32 bg-cream relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-leaf/30 to-transparent" />
      <div className="absolute -top-40 -right-40 w-80 h-80 bg-leaf/5 rounded-full blur-3xl" />
      <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-forest/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section header */}
        <div className="text-center max-w-3xl mx-auto mb-16 fade-up">
          <span className="text-leaf font-semibold text-sm tracking-widest uppercase">
            What People Say
          </span>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-forest-dark mt-3 mb-6">
            Loved by Our Guests
          </h2>
          <div className="flex items-center justify-center gap-2 text-stone-light">
            <Stars count={5} />
            <span className="text-sm font-medium ml-1">4.6 out of 5 (132 reviews) on Google</span>
          </div>
        </div>

        {/* Review cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {reviews.map((review, i) => (
            <div
              key={review.name}
              className="fade-up relative bg-white rounded-3xl p-8 shadow-sm hover:shadow-xl transition-all duration-500"
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              {/* Quote icon */}
              <Quote className="w-10 h-10 text-leaf/20 absolute top-6 right-6" />

              {/* Stars */}
              <Stars count={review.rating} />

              {/* Review text */}
              <p className="mt-5 text-stone-light leading-relaxed text-[15px]">
                "{review.text}"
              </p>

              {/* Author */}
              <div className="mt-6 pt-5 border-t border-cream-dark">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-leaf to-forest flex items-center justify-center text-white font-bold text-sm">
                    {review.name.charAt(0)}
                  </div>
                  <div>
                    <p className="font-semibold text-stone text-sm">
                      {review.name}
                    </p>
                    <p className="text-stone-light text-xs">
                      {review.badge} &middot; {review.time}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
