import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const navLinks: { label: string; href: string; external?: boolean }[] = [
  { label: 'About', href: '#about' },
  { label: 'Menu', href: 'https://order-ngay.com/order/song-linh-bistro', external: true },
  { label: 'Reviews', href: '#reviews' },
  { label: 'Visit Us', href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-white/90 backdrop-blur-md shadow-sm py-2'
          : 'bg-transparent py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2">
          <img
            src="/images/song-linh-logo.webp"
            alt="Song Linh Bistro"
            className="h-10 sm:h-12 w-auto"
          />
        </a>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              {...(link.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
              className={`text-sm font-medium tracking-wide transition-colors hover:text-forest ${
                scrolled ? 'text-stone' : 'text-white'
              }`}
            >
              {link.label}
            </a>
          ))}
          <a
            href="https://order-ngay.com/order/song-linh-bistro"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-forest hover:bg-forest-dark text-white text-sm font-semibold px-5 py-2.5 rounded-full transition-all hover:shadow-lg"
          >
            Order Now
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className={`md:hidden p-2 rounded-lg transition-colors ${
            scrolled ? 'text-stone' : 'text-white'
          }`}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile drawer */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          mobileOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="bg-white/95 backdrop-blur-md px-4 py-6 flex flex-col gap-4 border-t border-cream-dark">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              {...(link.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
              onClick={() => setMobileOpen(false)}
              className="text-stone font-medium py-2 hover:text-forest transition-colors"
            >
              {link.label}
            </a>
          ))}
          <a
            href="https://order-ngay.com/order/song-linh-bistro"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-forest hover:bg-forest-dark text-white font-semibold px-5 py-3 rounded-full text-center transition-all"
          >
            Order Now
          </a>
        </div>
      </div>
    </nav>
  );
}
