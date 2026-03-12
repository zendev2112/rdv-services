import React from 'react'
import { motion } from 'framer-motion'

const Manifesto = () => {
  return (
    <section className="manifesto section">
      <div className="container">
        <motion.div
          className="manifesto-inner"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: 'easeOut' }}
          viewport={{ once: true }}
        >
          <motion.h2
            className="manifesto-heading"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.1 }}
            viewport={{ once: true }}
          >
            Contenido digital de calidad para la audiencia de{' '}
            <span className="gradient-text">
              Coronel Suárez y la región
            </span>{' '}
          </motion.h2>

          <motion.p
            className="manifesto-sub"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
          >
            Acompañamos a las marcas con credibilidad, innovación y el alcance
            de un medio conectado con la comunidad. Creamos propuestas
            publicitarias que generan impacto, confianza y resultados.
          </motion.p>
        </motion.div>
      </div>
    </section>
  )
}

export default Manifesto
