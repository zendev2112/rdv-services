import React from 'react';
import { motion } from 'framer-motion';
import { Check, Star, Zap, Crown } from 'lucide-react';

const Packages = () => {
  const packages = [
    {
      name: "Presencia",
      subtitle: "Básico",
      icon: <Zap size={24} />,
      price: "Consultar",
      features: [
        "Spot grabado 6 salidas/día (L-V)",
        "8 stories por mes en redes",
        "Banner 30 días en portal",
        "Programación en tandas",
        "Soporte básico"
      ],
      popular: false
    },
    {
      name: "Movimiento",
      subtitle: "Medio",
      icon: <Star size={24} />,
      price: "Consultar",
      features: [
        "PNT 2 menciones/día (L-V)",
        "4 reels + 8 stories por mes",
        "1 publinota mensual",
        "Adaptación del mensaje",
        "Soporte prioritario"
      ],
      popular: true
    },
    {
      name: "La Última Cena",
      subtitle: "Premium",
      icon: <Crown size={24} />,
      price: "$160.000",
      features: [
        "PNT + presencia en mesa",
        "4 reels + 8 stories por mes",
        "Pieza ficcionada mensual",
        "Campaña 30 días completa",
        "Soporte VIP 24/7"
      ],
      popular: false
    }
  ];

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
          <p>Elegí el plan que mejor se adapte a tus necesidades y presupuesto</p>
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
                <div className="package-icon">
                  {pkg.icon}
                </div>
                <h3>{pkg.name}</h3>
                <p className="package-subtitle">{pkg.subtitle}</p>
                <div className="package-price">{pkg.price}</div>
              </div>
              
              <ul className="package-features">
                {pkg.features.map((feature, idx) => (
                  <li key={idx}>
                    <Check size={16} />
                    {feature}
                  </li>
                ))}
              </ul>
              
              <a href="#contact" className={pkg.popular ? "btn-primary" : "btn-secondary"}>
                Contratar Ahora
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Packages;