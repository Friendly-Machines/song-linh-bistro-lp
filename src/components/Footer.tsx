import { Heart } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-forest-dark text-white/80 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Tagline */}
          <span className="text-white/50 text-sm">
            Song Linh Bistro &mdash; Fresh &amp; healthy in Tay Ho
          </span>

          {/* Links */}
          <div className="flex items-center gap-6 text-sm">
            <a
              href="https://order-ngay.com/order/song-linh-bistro"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
            >
              Order
            </a>
            <a
              href="https://www.facebook.com/songlinhfoodanddrink"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
            >
              Facebook
            </a>
            <a
              href="https://maps.app.goo.gl/xU8qZ1vQP1pUdra4A"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
            >
              Directions
            </a>
            <a
              href="tel:+84968877793"
              className="hover:text-white transition-colors"
            >
              Call Us
            </a>
          </div>

          {/* Copyright */}
          <div className="flex items-center gap-1 text-sm text-white/40">
            <span>&copy; {new Date().getFullYear()} Song Linh Bistro</span>
            <Heart className="w-3.5 h-3.5 text-leaf inline" />
          </div>
        </div>
      </div>
    </footer>
  );
}
