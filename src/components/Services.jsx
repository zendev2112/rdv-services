import React from 'react'
import { motion } from 'framer-motion'
import {
  Radio,
  Globe,
  Instagram,
  Video,
  UtensilsCrossed,
  MapPin,
} from 'lucide-react'

const Services = () => {
  const services = [
    {
      icon: <Video size={32} />,
      title: 'La Última Cena',
      subtitle: 'Programa Streaming Mensual Premium',
      description:
        'Nuestro programa estrella con Aqua, Claudio y Andy. Contenido exclusivo que genera conversación y engagement genuino con tu audiencia.',
      href: 'https://rdv-ultima-cena.vercel.app',
      features: [
        'Sponsor con agradecimientos: Mención verbal + presencia en descripción del video',
        'PNT integrado: Mención comercial natural dentro de la charla, sin cortes publicitarios',
        'Presencia física: Tu producto visible en mesa durante todo el programa',
        'Publicidad ficcionada premium: Actuación profesional de las figuras del programa ($160.000)',
        'Contenido mensual: 4 reels + 8 stories + 1 video YouTube incluidos',
      ],
    },
    {
      icon: <UtensilsCrossed size={32} />,
      title: 'Recetas del Volga',
      subtitle: 'Cocina tradicional de los alemanes del Volga',
      description:
        'Un ciclo gastronómico dedicado a recuperar y volver a poner en circulación las recetas tradicionales de los alemanes del Volga en el sudoeste bonaerense. Strudel, kreppel, knödel, panes caseros y platos de campo que durante décadas se transmitieron de generación en generación.',
      href: 'https://rdv-recetas-volga.vercel.app',
      features: [
        'Ciclo completo: Preservación de recetas tradicionales con origen e historia cultural',
        'Sponsor con agradecimientos: Mención del sponsor + presencia en descripción del video',
        'PNT integrado: Uso natural del producto durante la preparación de la receta',
        'Presencia en escena: Producto visible en la cocina durante todo el episodio',
        'Contenido promocional adicional: Integración de marca en recetas especiales',
        'Por publicación: Reel principal + stories del proceso + publicación en redes',
      ],
    },
    {
      icon: <Radio size={32} />,
      title: 'Primera Mañana & Pienso Positivo',
      subtitle: 'La mañana informativa de Radio del Volga',
      description:
        'Dos programas que acompañan la mañana con información, entrevistas y música, conducidos por Claudio Quiñones. Primera Mañana (7:30-10) ofrece noticias del día con agenda local y regional. Pienso Positivo (10-12) continúa con entrevistas a protagonistas de la comunidad y selección musical. Una propuesta radial enfocada en la actualidad y las voces de la comunidad.',
      features: [
        'Sponsor con agradecimientos: Mención del sponsor + presencia en descripción digital',
        'PNT integrado: Mención comercial dentro de la conducción del programa',
        'Presencia en estudio: Producto o marca visible en el espacio de transmisión',
        'De lunes a viernes: Exposición continua en doble horario (7:30 a 12)',
        'Contenido digital complementario: Clips de entrevistas, reels informativos y stories',
      ],
    },
    {
      icon: <Globe size={32} />,
      title: 'Portal Web',
      subtitle: 'radiodelvolga.com.ar - Presencia Digital',
      description:
        'Posicioná tu marca en nuestro portal web con alto tráfico orgánico. Contenido optimizado para Google y audiencia segmentada.',
      features: [
        'Banners estratégicos: Ubicación premium en header, lateral o dentro de notas',
        'Publinotas SEO: Contenido de marca optimizado para buscadores con link y contacto',
        'Campaña mensual: 30 días de exposición continua garantizada',
        'Métricas incluidas: Reportes de clicks, impresiones y engagement',
      ],
    },
    {
      icon: <Instagram size={32} />,
      title: 'Redes Sociales',
      subtitle: 'Instagram + TikTok + YouTube Shorts',
      description:
        'Aprovechá el poder viral de las redes sociales. Contenido creativo que genera interacción real y amplifica el alcance de tu marca.',
      features: [
        'Publinotas con reel: Contenido web + video vertical para IG y TikTok + 4 stories',
        'Auspicio de reels: Tu marca integrada en contenido orgánico (4 reels/mes)',
        "UGC con figuras: Videos 'cara a cámara' con Aqua, Claudio o Andy (2 reels/mes)",
        'Templates personalizados: Stories con diseño exclusivo para tu negocio (12/mes)',
      ],
    },
    {
      icon: <MapPin size={32} />,
      title: 'Rumbo Sudoeste',
      subtitle: 'Ciclo audiovisual de recorridas por el sudoeste bonaerense',
      description:
        'Un ciclo que recorre pueblos, fiestas populares y tradiciones del sudoeste bonaerense. Historias, gastronomía y cultura local contadas desde el lugar donde ocurren, con producción en terreno y registro directo de cada evento.',
      features: [
        'Sponsor con agradecimientos: Mención del sponsor + presencia en descripción del video',
        'PNT integrado: Mención natural del producto integrada al relato del programa',
        'Presencia en locación: Producto o marca visible en contexto del evento (stands, recorridas, gastronomía)',
        'Contenido promocional adicional: Integración de marca en piezas audiovisuales especiales',
        'Contenido por cobertura: Reel principal + reels adicionales + stories durante la cobertura + redes',
      ],
    },
  ]

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
          <p>
            Soluciones publicitarias integrales para maximizar el alcance de tu
            marca
          </p>
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
              <div className="service-icon">{service.icon}</div>
              <h3>{service.title}</h3>
              <p className="service-subtitle">{service.subtitle}</p>
              <p className="service-description">{service.description}</p>
              <ul className="service-features">
                {service.features.map((feature, idx) => (
                  <li key={idx}>{feature}</li>
                ))}
              </ul>
              {service.href && (
                <a
                  href={service.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="service-cta-btn"
                >
                  Conocé Más
                </a>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services
