import { MapPin, Phone, Clock, ExternalLink } from 'lucide-react';
import { useLanguage } from '../i18n/LanguageContext';

export default function Contact() {
  const { t } = useLanguage();

  return (
    <section id="contact" className="py-24 sm:py-32 bg-warm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center max-w-3xl mx-auto mb-16 fade-up">
          <span className="text-leaf font-semibold text-sm tracking-widest uppercase">
            {t('contact.label')}
          </span>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-forest-dark mt-3 mb-6">
            {t('contact.title')}
          </h2>
          <p className="text-stone-light text-lg">
            {t('contact.description')}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Map embed */}
          <div className="fade-up rounded-3xl overflow-hidden shadow-xl aspect-[4/3]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3723.6!2d105.82!3d21.06!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135ab10e4923b1d%3A0x9c1e8e5e2e6c7f0a!2s46A+Ng.+31+%C4%90.+Xu%C3%A2n+Di%E1%BB%87u%2C+Qu%E1%BA%A3ng+An%2C+T%C3%A2y+H%E1%BB%93!5e0!3m2!1sen!2s!4v1700000000000!5m2!1sen!2s"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Song Linh Bistro location"
            />
          </div>

          {/* Contact details */}
          <div className="fade-up space-y-8">
            {/* Address */}
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-12 h-12 rounded-2xl bg-leaf/10 flex items-center justify-center">
                <MapPin className="w-6 h-6 text-forest" />
              </div>
              <div>
                <h3 className="font-semibold text-forest-dark text-lg mb-1">
                  {t('contact.address')}
                </h3>
                <p className="text-stone-light leading-relaxed">
                  46A Ng.31 Đ. Xuân Diệu, Quảng An, Tây Hồ, Hà Nội
                </p>
                <a
                  href="https://maps.app.goo.gl/xU8qZ1vQP1pUdra4A"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-leaf hover:text-forest text-sm font-medium mt-1 transition-colors"
                >
                  {t('contact.openInMaps')}
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            {/* Phone */}
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-12 h-12 rounded-2xl bg-leaf/10 flex items-center justify-center">
                <Phone className="w-6 h-6 text-forest" />
              </div>
              <div>
                <h3 className="font-semibold text-forest-dark text-lg mb-1">
                  {t('contact.phone')}
                </h3>
                <a
                  href="tel:+84968877793"
                  className="text-stone-light hover:text-forest transition-colors"
                >
                  +84 968 877 793
                </a>
              </div>
            </div>

            {/* Hours */}
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-12 h-12 rounded-2xl bg-leaf/10 flex items-center justify-center">
                <Clock className="w-6 h-6 text-forest" />
              </div>
              <div>
                <h3 className="font-semibold text-forest-dark text-lg mb-1">
                  {t('contact.hours')}
                </h3>
                <p className="text-stone-light">{t('contact.openDaily')}</p>
              </div>
            </div>

            {/* Social / Order links */}
            <div className="pt-4 flex flex-col sm:flex-row gap-3">
              <a
                href="https://order-ngay.com/order/song-linh-bistro"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-forest hover:bg-forest-dark text-white font-semibold px-6 py-3.5 rounded-full text-center transition-all hover:shadow-lg"
              >
                {t('contact.orderOnline')}
              </a>
              <a
                href="https://www.facebook.com/songlinhfoodanddrink"
                target="_blank"
                rel="noopener noreferrer"
                className="border-2 border-forest text-forest hover:bg-forest hover:text-white font-semibold px-6 py-3.5 rounded-full text-center transition-all"
              >
                {t('contact.facebookPage')}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
