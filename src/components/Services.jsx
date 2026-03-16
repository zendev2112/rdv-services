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
      description:
        'Producción audiovisual exclusiva de Radio del Volga, con invitados de Coronel Suárez y la región que comparten historias, proyectos y experiencias.',
      href: 'https://rdv-ultima-cena.vercel.app',
      features: [
        'Sponsor con agradecimientos: Mención verbal + presencia en descripción del video',
        'PNT integrado: Mención comercial natural dentro de la charla, sin cortes publicitarios',
        'Presencia física: Tu producto visible en mesa durante todo el programa',
        'Difusión en reels:  Fragmentos del programa publicados en redes sociales con presencia de la marca.',
        'Publicidad ficcionada premium:  Actuación de las figuras del programa en una pieza publicitaria.',
      ],
    },
    {
      icon: <UtensilsCrossed size={32} />,
      title: 'Recetas del Volga',
      description:
        'Un ciclo gastronómico dedicado a recuperar y volver a poner en circulación las recetas tradicionales de los alemanes del Volga.',
      href: 'https://rdv-recetas-volga.vercel.app',
      features: [
        'Sponsor con agradecimientos: Mención del sponsor + presencia en descripción del video',
        'PNT integrado: Uso natural del producto durante la preparación de la receta',
        'Presencia en escena: Producto visible en la cocina durante todo el episodio',
        'Difusión en reels:  Fragmentos del programa publicados en redes sociales con presencia de la marca.',
      ],
    },
    {
      icon: <Radio size={32} />,
      title: 'Primera Mañana & Pienso Positivo',
      description:
        'Dos programas conducidos por Claudio Quiñones que acompañan la mañana con noticias, entrevistas y actualidad local. De lunes a viernes de 7:30 a 12.',
      features: [
        'Sponsor del programa: Mención del sponsor durante la emisión y presencia en la descripción digital del contenido',
        'PNT integrado: Mención comercial dentro de la conducción del programa',
        'Presencia en estudio: Producto o marca visible dentro del espacio de transmisión',
        'Difusión en reels: Fragmentos de entrevistas del programa publicados en redes sociales con presencia de la marca.',
      ],
    },
    {
      icon: <Radio size={32} />,
      title: 'Radio 24/7',
      subtitle: 'Música y programación continua',
      description:
        'Radio del Volga transmite música las 24 horas con segmentos musicales organizados por estilos, décadas y momentos del día. Una programación pensada para acompañar el trabajo, el comercio y el día a día.',
      features: [
        'Mención comercial rotativa: Spots y menciones distribuidos a lo largo de la programación',
        'Sponsor de segmento musical: Asociación de la marca a bloques musicales',
        'Presencia diaria: Exposición dentro de la programación musical continua',
      ],
    },
    {
      icon: <Globe size={32} />,
      title: 'Portal Web',
      description:
        'Posicioná tu marca en nuestro portal web radiodelvolga.com.ar, con alto tráfico orgánico. Contenido optimizado para Google y audiencia segmentada.',
      features: [
        'Banners estratégicos: Ubicación premium en header, lateral o dentro de notas',
        'Publinotas SEO: Contenido de marca optimizado para buscadores con link y contacto',
        'Campaña mensual: 30 días de exposición continua garantizada',
      ],
    },
    {
      icon: <MapPin size={32} />,
      title: 'Rumbo Sudoeste',
      description:
        'Un ciclo que recorre pueblos, fiestas populares y tradiciones del sudoeste bonaerense.',
      features: [
        'Sponsor con agradecimientos: Mención del sponsor + presencia en descripción del video',
        'PNT integrado: Mención natural del producto integrada al relato del programa',
        'Presencia en locación: Producto o marca visible en contexto del evento (stands, recorridas, gastronomía)',
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
