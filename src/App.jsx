import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import TrustSection from './components/TrustSection';
import Location from './components/Location';
import Footer from './components/Footer';

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
        <svg 
          viewBox="0 0 24 24" 
          width="32" 
          height="32" 
          stroke="currentColor" 
          strokeWidth="2" 
          fill="none" 
          strokeLinecap="round" 
          strokeLinejoin="round" 
          className="feather feather-whatsapp"
        >
          <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 1 1-7.6-4.7 8.38 8.38 0 0 1 3.8.9L21 11.5z"></path>
        </svg>
      </a>
    </div>
  );
}

export default App;
