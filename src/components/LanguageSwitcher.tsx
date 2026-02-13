import { useLanguage } from '../i18n/LanguageContext';

export default function LanguageSwitcher({ scrolled }: { scrolled?: boolean }) {
  const { lang, setLang } = useLanguage();

  return (
    <div className="flex items-center rounded-full border border-white/25 overflow-hidden backdrop-blur-sm">
      <button
        onClick={() => setLang('en')}
        className={`px-3 py-1 text-xs font-semibold transition-all duration-300 ${
          lang === 'en'
            ? scrolled
              ? 'bg-white/25 text-white'
              : 'bg-white/20 text-white'
            : scrolled
              ? 'text-white/60 hover:text-white/90'
              : 'text-white/50 hover:text-white/80'
        }`}
      >
        EN
      </button>
      <button
        onClick={() => setLang('vi')}
        className={`px-3 py-1 text-xs font-semibold transition-all duration-300 ${
          lang === 'vi'
            ? scrolled
              ? 'bg-white/25 text-white'
              : 'bg-white/20 text-white'
            : scrolled
              ? 'text-white/60 hover:text-white/90'
              : 'text-white/50 hover:text-white/80'
        }`}
      >
        VI
      </button>
    </div>
  );
}
