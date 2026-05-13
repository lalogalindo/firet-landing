import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import TrustSection from './components/TrustSection';
import Location from './components/Location';
import Footer from './components/Footer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';

function App() {
  return (
    <div className="min-h-screen bg-peace-light">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <TrustSection />
        <Location />
      </main>
      <Footer />
      
      {/* Floating WhatsApp Button for Mobile */}
      <a
        href="https://wa.me/522462966540"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white w-16 h-16 rounded-full flex items-center justify-center shadow-2xl transition-all hover:scale-110 md:hidden"
        aria-label="Contactar por WhatsApp"
      >
        <FontAwesomeIcon icon={faWhatsapp} className="text-3xl" />
      </a>
    </div>
  );
}

export default App;
