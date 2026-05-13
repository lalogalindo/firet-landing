import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShieldAlt, faSprayCan, faAward, faCheckCircle } from '@fortawesome/free-solid-svg-icons';

const TrustSection = () => {
  return (
    <section id="nosotros" className="py-24 bg-primary-blue text-white overflow-hidden relative">
      {/* Decorative background circle */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full -mr-48 -mt-48 blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary-green/20 rounded-full -ml-48 -mb-48 blur-3xl"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="lg:w-1/2">
            <h2 className="text-primary-green font-bold tracking-widest uppercase text-sm mb-3">¿Por qué Firet?</h2>
            <h3 className="text-3xl md:text-5xl font-bold mb-8 leading-tight">
              Un espacio diseñado para tu tranquilidad y recuperación
            </h3>
            
            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <div className="bg-white/10 p-3 rounded-xl mt-1">
                  <FontAwesomeIcon icon={faSprayCan} className="text-primary-green text-xl" />
                </div>
                <div>
                  <h4 className="text-xl font-bold mb-2">Higiene y Limpieza</h4>
                  <p className="text-blue-100">Protocolos estrictos de sanitización en cada sesión y área del consultorio.</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-white/10 p-3 rounded-xl mt-1">
                  <FontAwesomeIcon icon={faShieldAlt} className="text-primary-green text-xl" />
                </div>
                <div>
                  <h4 className="text-xl font-bold mb-2">Seguridad Garantizada</h4>
                  <p className="text-blue-100">Equipamiento moderno y personal certificado para tu total seguridad física.</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-white/10 p-3 rounded-xl mt-1">
                  <FontAwesomeIcon icon={faAward} className="text-primary-green text-xl" />
                </div>
                <div>
                  <h4 className="text-xl font-bold mb-2">Confianza Profesional</h4>
                  <p className="text-blue-100">Más de 10 años de experiencia transformando la vida de nuestros pacientes.</p>
                </div>
              </div>
            </div>

            <div className="mt-12">
              <a
                href="https://wa.me/522462966540"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-primary-blue hover:bg-primary-green hover:text-white px-10 py-4 rounded-full font-bold text-lg transition-all inline-block shadow-xl"
              >
                Conoce nuestras instalaciones
              </a>
            </div>
          </div>

          <div className="lg:w-1/2 relative">
            <div className="grid grid-cols-2 gap-4">
              <img 
                src="https://picsum.photos/id/352/400/600" 
                alt="Clinic Interior" 
                className="rounded-3xl shadow-2xl transform translate-y-8"
              />
              <img 
                src="https://picsum.photos/id/366/400/600" 
                alt="Therapy Session" 
                className="rounded-3xl shadow-2xl"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-white p-8 rounded-3xl shadow-2xl hidden md:block">
              <div className="flex items-center space-x-4">
                <FontAwesomeIcon icon={faCheckCircle} className="text-primary-green text-4xl" />
                <div>
                  <p className="text-gray-800 font-bold text-2xl">100%</p>
                  <p className="text-gray-500 text-sm">Compromiso</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustSection;
