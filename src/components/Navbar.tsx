import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { useLanguage } from '../i18n/LanguageContext';
import LanguageSwitcher from './LanguageSwitcher';

export default function Navbar() {
  const { t } = useLanguage();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const navLinks: { label: string; href: string; external?: boolean }[] = [
    { label: t('nav.about'), href: '#about' },
    { label: t('nav.menu'), href: 'https://order-ngay.com/order/song-linh-bistro', external: true },
    { label: t('nav.reviews'), href: '#reviews' },
    { label: t('nav.tdee'), href: '#tdee' },
    { label: t('nav.contact'), href: '#contact' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-forest-dark/80 backdrop-blur-md shadow-sm py-2'
          : 'bg-transparent py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2">
          <img
            src="/images/song-linh-icon.png"
            alt="Song Linh Bistro"
            className="h-10 sm:h-12 w-auto brightness-125 drop-shadow-[0_0_8px_rgba(107,171,62,0.5)]"
          />
        </a>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-6 lg:gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              {...(link.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
              className="text-sm font-medium tracking-wide transition-colors text-white/90 hover:text-white drop-shadow-sm"
            >
              {link.label}
            </a>
          ))}
          <LanguageSwitcher scrolled={scrolled} />
          <a
            href="https://order-ngay.com/order/song-linh-bistro"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-leaf hover:bg-leaf-light text-white text-sm font-semibold px-5 py-2.5 rounded-full transition-all hover:shadow-lg"
          >
            {t('nav.order')}
          </a>
        </div>

        {/* Mobile: language switcher + hamburger */}
        <div className="md:hidden flex items-center gap-3">
          <LanguageSwitcher scrolled={scrolled} />
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="p-2 rounded-lg transition-colors text-white"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          mobileOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="bg-forest-dark/95 backdrop-blur-md px-4 py-6 flex flex-col gap-4 border-t border-white/10">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              {...(link.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
              onClick={() => setMobileOpen(false)}
              className="text-white/90 font-medium py-2 hover:text-white transition-colors"
            >
              {link.label}
            </a>
          ))}
          <a
            href="https://order-ngay.com/order/song-linh-bistro"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-leaf hover:bg-leaf-light text-white font-semibold px-5 py-3 rounded-full text-center transition-all"
          >
            {t('nav.order')}
          </a>
        </div>
      </div>
    </nav>
  );
}
