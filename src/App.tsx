import { lazy, Suspense, useCallback, useState } from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import ServicesSection from './components/ServicesSection';
import type { ServiceCategory } from './data/studioData';

const PortfolioSection = lazy(() => import('./components/PortfolioSection'));
const TeamSection = lazy(() => import('./components/TeamSection'));
const NewsSection = lazy(() => import('./components/NewsSection'));
const ContactForm = lazy(() => import('./components/ContactForm'));
const Footer = lazy(() => import('./components/Footer'));

function App() {
  const [selectedService, setSelectedService] = useState<ServiceCategory | null>(null);

  const handleSelectService = useCallback((service: ServiceCategory) => {
    setSelectedService(service);
    const contactEl = document.getElementById('contact');
    if (contactEl) {
      contactEl.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.location.hash = 'contact';
    }
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-canvas text-ink font-sans">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[60] focus:bg-cobalt focus:text-white focus:px-4 focus:py-2.5 focus:rounded-full focus:font-semibold"
      >
        Lewati ke konten utama
      </a>

      <Navbar />

      <main id="main-content" className="flex-1">
        <HeroSection onSelectService={handleSelectService} />
        <AboutSection />
        <ServicesSection onSelectService={handleSelectService} />

        <Suspense
          fallback={
            <div className="py-20 text-center font-mono text-sm text-pewter">
              Memuat bagian berikutnya...
            </div>
          }
        >
          <PortfolioSection onSelectService={handleSelectService} />
          <TeamSection />
          <NewsSection />
          <ContactForm selectedService={selectedService} />
        </Suspense>
      </main>

      <Suspense fallback={null}>
        <Footer onSelectService={handleSelectService} />
      </Suspense>
    </div>
  );
}

export default App;
