import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import logo from '../assets/firet-logo-h.png';
import mercsoftLogo from '../assets/mercsoft.png';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white pt-20 pb-10">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
          <div className="col-span-1 lg:col-span-1">
            <div className="flex items-center mb-6">
              <img src={logo} alt="Firet" className="h-12 w-auto brightness-0 invert" />
            </div>
            <p className="text-gray-400 leading-relaxed mb-6">
              Cuidamos de ti con profesionalismo, higiene y calidez humana. Tu recuperación es nuestra misión.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://www.facebook.com/firetfisioterapiayrehabilitacionmichelleaguirre"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-primary-blue transition-all"
              >
                <FontAwesomeIcon icon={faFacebook} />
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-primary-blue transition-all">
                <FontAwesomeIcon icon={faInstagram} />
              </a>
              <a href="https://wa.me/522462966540" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-primary-green transition-all">
                <FontAwesomeIcon icon={faWhatsapp} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-xl font-bold mb-6">Enlaces Rápidos</h4>
            <ul className="space-y-4 text-gray-400">
              <li><a href="#inicio" className="hover:text-primary-green transition-colors">Inicio</a></li>
              <li><a href="#servicios" className="hover:text-primary-green transition-colors">Servicios</a></li>
              <li><a href="#nosotros" className="hover:text-primary-green transition-colors">Nosotros</a></li>
              <li><a href="#ubicacion" className="hover:text-primary-green transition-colors">Ubicación</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xl font-bold mb-6">Servicios</h4>
            <ul className="space-y-4 text-gray-400">
              <li>Fisioterapia Deportiva</li>
              <li>Rehabilitación Post-Cirugía</li>
              <li>Terapia de Lenguaje</li>
              <li>Masaje Terapéutico</li>
            </ul>
          </div>


        </div>

        <div className="border-t border-white/10 pt-10 flex flex-col md:flex-row justify-between items-center text-gray-500 text-sm">
          <p className="mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} Firet Fisioterapia. Todos los derechos reservados.
          </p>
          <div className="flex items-center space-x-2">
            <span>Powered by</span>
            <a href="https://mercsoft.mx" target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition-opacity">
              <img
                src={mercsoftLogo}
                alt="Mercsoft"
                className="h-6 w-auto"
              />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
