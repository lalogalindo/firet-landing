import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faClock, faPhone } from '@fortawesome/free-solid-svg-icons';

const Location = () => {
  return (
    <section id="ubicacion" className="py-24 bg-peace-light">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          <div className="lg:w-1/3">
            <h2 className="text-primary-blue font-bold tracking-widest uppercase text-sm mb-3">Ubicación</h2>
            <h3 className="text-3xl md:text-4xl font-bold text-gray-800 mb-8">Ven a visitarnos</h3>
            
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <FontAwesomeIcon icon={faMapMarkerAlt} className="text-primary-green text-xl mt-1" />
                <p className="text-gray-600">
                  C. 1 206, La Loma Xicohtencatl, Xicohténcatl, 90062 Tlaxcala de Xicohténcatl, Tlax.
                </p>
              </div>

              <div className="flex items-start space-x-4">
                <FontAwesomeIcon icon={faClock} className="text-primary-green text-xl mt-1" />
                <div>
                  <p className="text-gray-800 font-bold">Horarios de Atención</p>
                  <p className="text-gray-600">Lunes a Viernes: 9:00 AM - 8:00 PM</p>
                  <p className="text-gray-600">Sábados: 9:00 AM - 2:00 PM</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <FontAwesomeIcon icon={faPhone} className="text-primary-green text-xl mt-1" />
                <div>
                  <p className="text-gray-800 font-bold">WhatsApp</p>
                  <p className="text-gray-600">+52 246 296 6540</p>
                </div>
              </div>
            </div>

            <div className="mt-10">
              <a
                href="https://maps.app.goo.gl/YourMapLinkHere" 
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary-blue font-bold border-b-2 border-primary-blue hover:text-primary-green hover:border-primary-green transition-all"
              >
                Abrir en Google Maps
              </a>
            </div>
          </div>

          <div className="lg:w-2/3 w-full h-[450px] rounded-3xl overflow-hidden shadow-2xl border-8 border-white">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3490.7064292910527!2d-98.24494832513312!3d19.314678381939707!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85cfd93e3aec53f9%3A0xbb4f086cb9d03720!2sC.%201%20206%2C%20La%20Loma%20Xicohtencatl%2C%20Xicoht%C3%A9ncatl%2C%2090062%20Tlaxcala%20de%20Xicoht%C3%A9ncatl%2C%20Tlax.!5e1!3m2!1sen!2smx!4v1778634453488!5m2!1sen!2smx" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen="" 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Location;
