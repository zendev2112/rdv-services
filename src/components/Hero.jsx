import React from 'react';
import { motion } from 'framer-motion';
import { Radio, Zap, TrendingUp, Play, Users, Mic } from 'lucide-react';

const Hero = () => {
  const stats = [
    { icon: <Users size={20} />, number: "50K+", label: "Oyentes" },
    { icon: <Radio size={20} />, number: "24/7", label: "En Vivo" },
    { icon: <TrendingUp size={20} />, number: "100+", label: "Marcas" }
  ];

  return (
    <section className="hero">
      <div className="container">
        <div className="hero-layout">
          <motion.div 
            className="hero-content"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div 
              className="hero-badge"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              <Radio size={20} />
              <span>Radio del Volga</span>
            </motion.div>
            
            <motion.h1 
              className="hero-title"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              Potenciá tu marca con
              <span className="gradient-text"> publicidad que conecta</span>
            </motion.h1>
            
            <motion.p 
              className="hero-subtitle"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
            >
              Desde radio FM hasta streaming y redes sociales. Ofrecemos soluciones 
              publicitarias integrales para hacer crecer tu negocio.
            </motion.p>
            
            <motion.div 
              className="hero-buttons"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
            >
              <a href="#packages" className="btn-primary">
                <TrendingUp size={20} />
                Ver Paquetes
              </a>
              <a href="#contact" className="btn-secondary">
                <Zap size={20} />
                Contactar
              </a>
            </motion.div>

            <motion.div 
              className="hero-stats"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.8 }}
            >
              {stats.map((stat, index) => (
                <div key={index} className="stat-item">
                  <div className="stat-icon">{stat.icon}</div>
                  <div className="stat-number">{stat.number}</div>
                  <div className="stat-label">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </motion.div>
          
          <motion.div 
            className="hero-visual"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6, duration: 1 }}
          >
            <div className="visual-container">
              <div className="main-circle">
                <div className="circle-content">
                  <Mic size={48} />
                  <span>AL AIRE</span>
                </div>
              </div>
              
              <div className="orbit-item orbit-1">
                <Radio size={24} />
              </div>
              <div className="orbit-item orbit-2">
                <Play size={24} />
              </div>
              <div className="orbit-item orbit-3">
                <TrendingUp size={24} />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;