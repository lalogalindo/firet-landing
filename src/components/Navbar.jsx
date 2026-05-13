import React, { useState, useEffect, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp, faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import logo from '../assets/firet-logo-h.png';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    const handleClickOutside = (event) => {
      if (navRef.current && !navRef.current.contains(event.target)) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    document.addEventListener('mousedown', handleClickOutside);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const navLinks = [
    { name: 'Inicio', href: '#inicio' },
    { name: 'Servicios', href: '#servicios' },
    { name: 'Nosotros', href: '#nosotros' },
    { name: 'Ubicación', href: '#ubicacion' },
  ];

  return (
    <nav 
      ref={navRef}
      className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'glass py-2' : 'bg-transparent py-4'}`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        <div className="flex items-center">
          <img 
            src={logo} 
            alt="Firet Fisioterapia" 
            className={`h-12 md:h-16 w-auto transition-all ${isScrolled ? 'brightness-100' : 'brightness-0 invert'}`} 
          />
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={`font-medium transition-colors hover:text-primary-green ${isScrolled ? 'text-gray-700' : 'text-white'}`}
            >
              {link.name}
            </a>
          ))}
          <a
            href="https://www.facebook.com/firetfisioterapiayrehabilitacionmichelleaguirre"
            target="_blank"
            rel="noopener noreferrer"
            className={`text-xl transition-colors hover:text-primary-blue ${isScrolled ? 'text-gray-700' : 'text-white'}`}
            title="Facebook"
          >
            <FontAwesomeIcon icon={faFacebook} />
          </a>
          <a
            href="https://wa.me/522462966540"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-primary-green hover:bg-opacity-90 text-white px-6 py-2 rounded-full font-bold flex items-center space-x-2 transition-all transform hover:scale-105 shadow-lg"
          >
            <FontAwesomeIcon icon={faWhatsapp} />
            <span>Agendar Cita</span>
          </a>
        </div>

        {/* Mobile Menu CTA and Toggle */}
        <div className="flex items-center space-x-4 md:hidden">
          <a
            href="https://wa.me/522462966540"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-primary-green text-white px-4 py-2 rounded-full font-bold text-sm shadow-md"
          >
            Agendar
          </a>
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className={`${isScrolled ? 'text-gray-700' : 'text-white'}`}
          >
            <FontAwesomeIcon icon={isMenuOpen ? faTimes : faBars} size="lg" />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-xl py-6 px-6 flex flex-col space-y-4 animate-fade-in-down">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsMenuOpen(false)}
              className="text-gray-700 font-medium hover:text-primary-green"
            >
              {link.name}
            </a>
          ))}
          <div className="flex space-x-6 py-2">
            <a
              href="https://www.facebook.com/firetfisioterapiayrehabilitacionmichelleaguirre"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-700 text-2xl hover:text-primary-blue"
            >
              <FontAwesomeIcon icon={faFacebook} />
            </a>
            <a
              href="#"
              className="text-gray-700 text-2xl hover:text-primary-blue"
            >
              <FontAwesomeIcon icon={faInstagram} />
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
