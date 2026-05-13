import React from 'react';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';

const Hero = () => {
  return (
    <section id="inicio" className="relative h-screen flex items-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center"
        style={{ 
          backgroundImage: `url('https://picsum.photos/id/191/1920/1080')`,
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl text-white"
        >
          <h4 className="text-primary-green font-bold tracking-widest uppercase mb-4 text-sm md:text-base">
            Bienvenido a Firet Fisioterapia
          </h4>
          <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
            Recupera tu <span className="text-primary-blue">movilidad</span> y vive sin dolor
          </h1>
          <p className="text-lg md:text-xl text-gray-200 mb-8 max-w-lg">
            Expertos en rehabilitación física enfocados en brindarte seguridad, limpieza y la confianza que tu cuerpo necesita para sanar.
          </p>
          
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
            <a
              href="https://wa.me/522462966540"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-primary-green hover:bg-opacity-90 text-white px-8 py-4 rounded-full font-bold text-lg flex items-center justify-center space-x-3 transition-all transform hover:scale-105 shadow-2xl"
            >
              <FontAwesomeIcon icon={faWhatsapp} size="lg" />
              <span>Solicitar Consulta</span>
            </a>
            <a
              href="#servicios"
              className="bg-white/10 hover:bg-white/20 backdrop-blur-md text-white border border-white/30 px-8 py-4 rounded-full font-bold text-lg flex items-center justify-center space-x-3 transition-all"
            >
              <span>Ver Servicios</span>
              <FontAwesomeIcon icon={faChevronRight} />
            </a>
          </div>

          <div className="mt-12 flex items-center space-x-6">
            <div className="flex -space-x-2">
              {[1, 2, 3, 4].map((i) => (
                <img 
                  key={i}
                  src={`https://picsum.photos/id/${i + 60}/100/100`} 
                  alt="Patient" 
                  className="w-10 h-10 rounded-full border-2 border-white object-cover"
                />
              ))}
            </div>
            <p className="text-sm text-gray-300">
              <span className="text-white font-bold">+500 pacientes</span> han recuperado su bienestar con nosotros.
            </p>
          </div>
        </motion.div>
      </div>

      {/* Decorative element */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-1 h-12 bg-gradient-to-b from-white/50 to-transparent rounded-full"></div>
      </div>
    </section>
  );
};

export default Hero;
