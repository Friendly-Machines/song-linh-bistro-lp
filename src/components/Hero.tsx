import { useLanguage } from '../i18n/LanguageContext';

export default function Hero() {
  const { t } = useLanguage();

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background image with overlay */}
      <div className="absolute inset-0">
        <img
          src="/images/song-linh-poke-3.png"
          alt="Song Linh Bistro food"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />
      </div>

      {/* Decorative blurred circles */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-leaf/20 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-forest/15 rounded-full blur-3xl" />

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <div className="animate-float mb-8 pt-20 sm:pt-24">
          <img
            src="/images/song-linh-logo.webp"
            alt="Song Linh Bistro"
            className="h-28 sm:h-36 md:h-44 w-auto mx-auto drop-shadow-2xl rounded-2xl"
          />
        </div>

        <p className="text-white/90 text-lg sm:text-xl md:text-2xl font-light tracking-widest uppercase mb-3">
          {t('hero.tagline')}
        </p>

        <h1 className="font-display text-white text-4xl sm:text-5xl md:text-7xl font-bold leading-tight mb-6">
          {t('hero.title1')}
          <br />
          <span className="text-leaf-light italic">{t('hero.title2')}</span>
        </h1>

        <p className="text-white/80 text-base sm:text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
          {t('hero.description')}
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="https://order-ngay.com/order/song-linh-bistro"
            target="_blank"
            rel="noopener noreferrer"
            className="group bg-leaf hover:bg-leaf-light text-white font-semibold px-8 py-4 rounded-full text-lg transition-all hover:shadow-xl hover:shadow-leaf/30 hover:-translate-y-0.5"
          >
            {t('hero.cta')}
            <span className="inline-block ml-2 transition-transform group-hover:translate-x-1">
              &rarr;
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}
