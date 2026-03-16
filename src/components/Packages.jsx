import React from 'react'
import { motion } from 'framer-motion'
import { Check, Star, Zap, Crown } from 'lucide-react'

const Packages = () => {
  const packages = [
    {
      name: 'Presencia',
      subtitle: 'Básico',
      icon: <Zap size={24} />,
      price: 'Consultar',
      features: [
        'Radio 24/7: Mención comercial rotativa',
        'Primera Mañana / Pienso Positivo: Mención del sponsor',
        'Portal web: Banner básico',
      ],
      popular: false,
    },
    {
      name: 'Alcance',
      subtitle: 'Medio',
      icon: <Star size={24} />,
      price: 'Consultar',
      features: [
        'Primera Mañana & Pienso Positivo: Sponsor del programa',
        'Radio 24/7: Menciones comerciales rotativas',
        'Portal web: Banner destacado',
        'Reels informativos: Fragmentos en redes',
      ],
      popular: false,
    },
    {
      name: 'Contenido',
      subtitle: 'Premium',
      icon: <Crown size={24} />,
      price: 'Consultar',
      features: [
        'La Última Cena / Recetas: Sponsor con agradecimientos',
        'La Última Cena / Recetas: Reels con presencia de marca',
        'Portal web: Publinota optimizada',
        'Radio: Menciones comerciales',
      ],
      popular: true,
    },
    {
      name: 'Personalizado',
      subtitle: 'A medida',
      icon: <Zap size={24} />,
      price: 'Consultar',
      features: [
        'La Última Cena: Integración de marca',
        'Recetas del Volga: Uso del producto',
        'Rumbo Sudoeste: Presencia en cobertura',
        'Radio en vivo: Menciones comerciales',
        'Portal web: Publinotas y banners',
        'Redes sociales: Reels, clips y stories',
      ],
      description:
        'Campañas diseñadas a medida para marcas que buscan mayor presencia dentro del ecosistema de Radio del Volga.',
      popular: false,
    },
  ]

  return (
    <section id="packages" className="section packages">
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2>Paquetes Publicitarios</h2>
          <p>
            Elegí el plan que mejor se adapte a tus necesidades y presupuesto
          </p>
        </motion.div>

        <div className="packages-grid">
          {packages.map((pkg, index) => (
            <motion.div
              key={index}
              className={`package-card glass-card ${pkg.popular ? 'popular' : ''}`}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.8 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
            >
              {pkg.popular && (
                <div className="popular-badge">
                  <Star size={16} />
                  Más Popular
                </div>
              )}

              <div className="package-header">
                <div className="package-icon">{pkg.icon}</div>
                <h3>{pkg.name}</h3>
                <p className="package-subtitle">{pkg.subtitle}</p>
                <div className="package-price">{pkg.price}</div>
              </div>

              {pkg.description && (
                <p
                  style={{
                    color: 'rgba(255, 255, 255, 0.7)',
                    fontSize: '0.95rem',
                    lineHeight: '1.6',
                    marginBottom: '20px',
                  }}
                >
                  {pkg.description}
                </p>
              )}

              <ul className="package-features">
                {pkg.features.map((feature, idx) => (
                  <li key={idx}>
                    <Check size={16} />
                    {feature}
                  </li>
                ))}
              </ul>

              <a
                href="#contact"
                className={pkg.popular ? 'btn-primary' : 'btn-secondary'}
              >
                Contratar Ahora
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Packages
