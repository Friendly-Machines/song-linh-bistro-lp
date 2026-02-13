import { Leaf, Heart, Coffee } from 'lucide-react';
import { useLanguage } from '../i18n/LanguageContext';

const featureIcons = [Leaf, Heart, Coffee];
const featureKeys = [
  { title: 'about.feature1Title', desc: 'about.feature1Desc' },
  { title: 'about.feature2Title', desc: 'about.feature2Desc' },
  { title: 'about.feature3Title', desc: 'about.feature3Desc' },
];

export default function About() {
  const { t } = useLanguage();

  return (
    <section id="about" className="py-24 sm:py-32 bg-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section intro */}
        <div className="text-center max-w-3xl mx-auto mb-20 fade-up">
          <span className="text-leaf font-semibold text-sm tracking-widest uppercase">
            {t('about.label')}
          </span>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-forest-dark mt-3 mb-6">
            {t('about.title')}
          </h2>
          <p className="text-stone-light text-lg leading-relaxed">
            {t('about.description')}
          </p>
        </div>

        {/* Feature cards */}
        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          {featureKeys.map((feature, i) => {
            const Icon = featureIcons[i];
            return (
              <div
                key={feature.title}
                className="fade-up group text-center p-8 rounded-3xl bg-white hover:bg-forest transition-all duration-500 hover:shadow-xl"
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-leaf/10 group-hover:bg-white/20 transition-colors mb-6">
                  <Icon className="w-8 h-8 text-leaf group-hover:text-white transition-colors" />
                </div>
                <h3 className="font-display text-xl font-bold text-forest-dark group-hover:text-white transition-colors mb-3">
                  {t(feature.title)}
                </h3>
                <p className="text-stone-light group-hover:text-white/80 transition-colors leading-relaxed">
                  {t(feature.desc)}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
