import { useScrollAnimation } from './hooks/useScrollAnimation';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import MenuHighlights from './components/MenuHighlights';
import Reviews from './components/Reviews';
import OrderBanner from './components/OrderBanner';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  useScrollAnimation();

  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <MenuHighlights />
      <Reviews />
      <OrderBanner />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
