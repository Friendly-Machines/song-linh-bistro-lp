import { Leaf, Heart, Coffee } from 'lucide-react';

const features = [
  {
    icon: Leaf,
    title: 'Fresh & Natural',
    description:
      'Every ingredient is carefully selected for freshness. No preservatives, no artificial flavors — just pure, wholesome goodness.',
  },
  {
    icon: Heart,
    title: 'Made with Love',
    description:
      'From our homemade granola to our nut butters, everything is crafted in small batches with genuine care and passion.',
  },
  {
    icon: Coffee,
    title: 'Cozy Atmosphere',
    description:
      'Settle into our charming upstairs seating in a peaceful alley off Xuan Dieu, and maybe meet our adorable resident cat.',
  },
];

export default function About() {
  return (
    <section id="about" className="py-24 sm:py-32 bg-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section intro */}
        <div className="text-center max-w-3xl mx-auto mb-20 fade-up">
          <span className="text-leaf font-semibold text-sm tracking-widest uppercase">
            Our Story
          </span>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-forest-dark mt-3 mb-6">
            A Little Corner of Wellness
          </h2>
          <p className="text-stone-light text-lg leading-relaxed">
            Tucked away on a quiet lane off Xuan Dieu, Song Linh Bistro is where
            healthy eating meets Vietnamese hospitality. We believe that good food
            should be simple, fresh, and made from the heart.
          </p>
        </div>

        {/* Feature cards */}
        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          {features.map((feature, i) => (
            <div
              key={feature.title}
              className="fade-up group text-center p-8 rounded-3xl bg-white hover:bg-forest transition-all duration-500 hover:shadow-xl"
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-leaf/10 group-hover:bg-white/20 transition-colors mb-6">
                <feature.icon className="w-8 h-8 text-leaf group-hover:text-white transition-colors" />
              </div>
              <h3 className="font-display text-xl font-bold text-forest-dark group-hover:text-white transition-colors mb-3">
                {feature.title}
              </h3>
              <p className="text-stone-light group-hover:text-white/80 transition-colors leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
