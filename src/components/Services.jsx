import React from 'react';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWalking, faUserMd, faBiking, faHeartbeat } from '@fortawesome/free-solid-svg-icons';

const services = [
  {
    title: 'Fisioterapia Deportiva',
    description: 'Tratamiento especializado para atletas. Recuperación de lesiones y optimización del rendimiento físico.',
    icon: faBiking,
    color: 'bg-blue-100 text-blue-600',
  },
  {
    title: 'Rehabilitación Física',
    description: 'Recupera tu movilidad después de cirugías o accidentes con planes personalizados y seguros.',
    icon: faWalking,
    color: 'bg-green-100 text-green-600',
  },
  {
    title: 'Terapia Manual',
    description: 'Técnicas especializadas para aliviar el dolor muscular y mejorar la función articular.',
    icon: faUserMd,
    color: 'bg-purple-100 text-purple-600',
  },
  {
    title: 'Salud Integral',
    description: 'Enfoque holístico para mejorar tu calidad de vida y prevenir futuras lesiones.',
    icon: faHeartbeat,
    color: 'bg-red-100 text-red-600',
  },
];

const Services = () => {
  return (
    <section id="servicios" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-primary-blue font-bold tracking-widest uppercase text-sm mb-3">Nuestros Servicios</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-gray-800">Especialidades a tu alcance</h3>
          <div className="w-20 h-1 bg-primary-green mx-auto mt-4 rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              whileHover={{ y: -10 }}
              className="bg-peace-light p-8 rounded-3xl border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300"
            >
              <div className={`w-16 h-16 ${service.color} rounded-2xl flex items-center justify-center mb-6 text-2xl`}>
                <FontAwesomeIcon icon={service.icon} />
              </div>
              <h4 className="text-xl font-bold text-gray-800 mb-4">{service.title}</h4>
              <p className="text-gray-600 leading-relaxed mb-6">
                {service.description}
              </p>
              <a 
                href="https://wa.me/522462966540" 
                className="text-primary-blue font-bold flex items-center space-x-2 hover:text-primary-green transition-colors"
              >
                <span>Saber más</span>
                <span className="text-xl">→</span>
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
