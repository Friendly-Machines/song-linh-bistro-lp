import { useScrollAnimation } from './hooks/useScrollAnimation';
import { LanguageProvider } from './i18n/LanguageContext';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import MenuHighlights from './components/MenuHighlights';
import Reviews from './components/Reviews';
import TDEECalculator from './components/TDEECalculator';
import OrderBanner from './components/OrderBanner';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  useScrollAnimation();

  return (
    <LanguageProvider>
      <Navbar />
      <Hero />
      <About />
      <TDEECalculator />
      <MenuHighlights />
      <Reviews />
      <OrderBanner />
      <Contact />
      <Footer />
    </LanguageProvider>
  );
}

export default App;
