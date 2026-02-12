import React from 'react';
import { motion } from 'framer-motion';
import { Radio, Globe, Instagram, Video } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: <Video size={32} />,
      title: "La Última Cena",
      subtitle: "Programa Streaming Mensual Premium",
      description: "Nuestro programa estrella con Aqua, Claudio y Andy. Contenido exclusivo que genera conversación y engagement genuino con tu audiencia.",
      features: [
        "Sponsor con agradecimientos: Mención verbal + presencia en descripción del video",
        "PNT integrado: Mención comercial natural dentro de la charla, sin cortes publicitarios",
        "Presencia física: Tu producto visible en mesa durante todo el programa",
        "Publicidad ficcionada premium: Actuación profesional de las figuras del programa ($160.000)",
        "Contenido mensual: 4 reels + 8 stories + 1 video YouTube incluidos"
      ]
    },
    {
      icon: <Radio size={32} />,
      title: "Radio FM + Streaming",
      subtitle: "Alcance Masivo 24/7 en Vivo",
      description: "Llegá a miles de oyentes en tiempo real. Radio tradicional FM combinada con streaming digital para máximo alcance y engagement.",
      features: [
        "PNT en vivo: 2 menciones diarias (L-V) leídas por conductores en directo",
        "Spots grabados profesionales: 6 salidas diarias con locución y música de calidad",
        "Auspicio musical: 'El bloque musical presentado por tu marca' - 2 bloques/día",
        "Programas específicos: Presencia en 'La Primera Mañana' y 'Pienso Positivo'",
        "Segmento Andy: Mención personalizada con frase exclusiva y CTA directo"
      ]
    },
    {
      icon: <Globe size={32} />,
      title: "Portal Web",
      subtitle: "radiodelvolga.com.ar - Presencia Digital",
      description: "Posicioná tu marca en nuestro portal web con alto tráfico orgánico. Contenido optimizado para Google y audiencia segmentada.",
      features: [
        "Banners estratégicos: Ubicación premium en header, lateral o dentro de notas",
        "Publinotas SEO: Contenido de marca optimizado para buscadores con link y contacto",
        "Campaña mensual: 30 días de exposición continua garantizada",
        "Métricas incluidas: Reportes de clicks, impresiones y engagement"
      ]
    },
    {
      icon: <Instagram size={32} />,
      title: "Redes Sociales",
      subtitle: "Instagram + TikTok + YouTube Shorts",
      description: "Aprovechá el poder viral de las redes sociales. Contenido creativo que genera interacción real y amplifica el alcance de tu marca.",
      features: [
        "Publinotas con reel: Contenido web + video vertical para IG y TikTok + 4 stories",
        "Auspicio de reels: Tu marca integrada en contenido orgánico (4 reels/mes)",
        "UGC con figuras: Videos 'cara a cámara' con Aqua, Claudio o Andy (2 reels/mes)",
        "Templates personalizados: Stories con diseño exclusivo para tu negocio (12/mes)"
      ]
    }
  ];

  return (
    <section id="services" className="section services">
      <div className="container">
        <motion.div 
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2>Nuestros Servicios</h2>
          <p>Soluciones publicitarias integrales para maximizar el alcance de tu marca</p>
        </motion.div>
        
        <div className="services-grid">
          {services.map((service, index) => (
            <motion.div 
              key={index}
              className="service-card glass-card"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.8 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
            >
              <div className="service-icon">
                {service.icon}
              </div>
              <h3>{service.title}</h3>
              <p className="service-subtitle">{service.subtitle}</p>
              <p className="service-description">{service.description}</p>
              <ul className="service-features">
                {service.features.map((feature, idx) => (
                  <li key={idx}>{feature}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;