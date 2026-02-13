import { useLanguage } from '../i18n/LanguageContext';

const categoryData = [
  { nameKey: 'menu.pokeName', descKey: 'menu.pokeDesc', image: '/images/song-linh-poke-1.png', accent: 'from-forest/80' },
  { nameKey: 'menu.smoothieName', descKey: 'menu.smoothieDesc', image: '/images/song-linh-smoothie-bowl-2.png', accent: 'from-purple-900/70' },
  { nameKey: 'menu.nutButterName', descKey: 'menu.nutButterDesc', image: '/images/song-linh-cashew-nut-butter.png', accent: 'from-amber-900/70' },
  { nameKey: 'menu.granolaName', descKey: 'menu.granolaDesc', image: '/images/song-linh-granola-bags.png', accent: 'from-yellow-900/70' },
  { nameKey: 'menu.nutMilkName', descKey: 'menu.nutMilkDesc', image: '/images/song-linh-nut-milk.png', accent: 'from-emerald-900/70' },
  { nameKey: 'menu.cakesName', descKey: 'menu.cakesDesc', image: '/images/song-linh-noga-on-plates.png', accent: 'from-rose-900/70' },
];

export default function MenuHighlights() {
  const { t } = useLanguage();

  return (
    <section id="menu" className="py-24 sm:py-32 bg-warm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center max-w-3xl mx-auto mb-6 fade-up">
          <span className="text-leaf font-semibold text-sm tracking-widest uppercase">
            {t('menu.label')}
          </span>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-forest-dark mt-3 mb-6">
            {t('menu.title')}
          </h2>
          <p className="text-stone-light text-lg leading-relaxed">
            {t('menu.description')}
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
            {t('menu.orderOnline')} &rarr;
          </a>
        </div>

        {/* Food grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {categoryData.map((cat, i) => (
            <a
              key={cat.nameKey}
              href="https://order-ngay.com/order/song-linh-bistro"
              target="_blank"
              rel="noopener noreferrer"
              className="fade-up group relative rounded-3xl overflow-hidden aspect-[4/3] cursor-pointer"
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <img
                src={cat.image}
                alt={t(cat.nameKey)}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div
                className={`absolute inset-0 bg-gradient-to-t ${cat.accent} to-transparent opacity-80 group-hover:opacity-90 transition-opacity`}
              />
              <div className="absolute inset-0 flex flex-col justify-end p-6 sm:p-8">
                <h3 className="font-display text-xl sm:text-2xl font-bold text-white mb-2 drop-shadow-lg">
                  {t(cat.nameKey)}
                </h3>
                <p className="text-white/85 text-sm sm:text-base leading-relaxed line-clamp-2 drop-shadow">
                  {t(cat.descKey)}
                </p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
