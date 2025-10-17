// src/App.tsx

import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import ServicesSection from './components/ServicesSection';
import PortfolioSection from './components/PortfolioSection';
import TeamSection from './components/TeamSection';
import NewsSection from './components/NewsSection';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';

function App() {
  return (
    <div className="font-sans text-gray-800 bg-gray-100">
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <PortfolioSection />
        <TeamSection />
        <NewsSection />
        <ContactForm />
      </main>
      <Footer />
    </div>
  )
}

export default App;