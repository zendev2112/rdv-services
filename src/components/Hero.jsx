import React from 'react'
import { motion } from 'framer-motion'
import {
  Radio,
  Mic,
  Headphones,
  Camera,
  Video,
  TvMinimalPlay,
  Play,
  MapPin,
  Compass,
  Users,
  MessageCircle,
  Calendar,
  Instagram,
  Wifi,
  TrendingUp,
  Zap,
  Music,
} from 'lucide-react'
import { SiInstagram, SiTiktok, SiYoutube, SiWhatsapp } from 'react-icons/si'

const Hero = () => {
  const stats = [
    { icon: <SiInstagram size={20} />, number: '21.9K', label: 'Instagram' },
    { icon: <SiTiktok size={20} />, number: '3.5K', label: 'TikTok' },
    { icon: <SiYoutube size={20} />, number: '+1K', label: 'YouTube' },
    { icon: <Radio size={20} />, number: '24/7', label: 'Radio En Vivo' },
  ]

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
            <motion.h1
              className="hero-title"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              Impulsá tu marca con
              <span className="gradient-text"> Radio del Volga</span>
            </motion.h1>

            <motion.p
              className="hero-subtitle"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
            >
              Contenido audiovisual, redes sociales y radio en vivo para generar
              presencia constante con propuestas pensadas para cada formato.
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
                <SiWhatsapp size={20} />
                Contactar
              </a>
            </motion.div>

            <motion.div
              className="hero-stats"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.8 }}
            >
              <motion.h3
                className="stats-title"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.1, duration: 0.6 }}
              >
                Nos siguen
              </motion.h3>

              <div className="stats-items-row">
                {stats.map((stat, index) => (
                  <div key={index} className="stat-item">
                    <div className="stat-icon">{stat.icon}</div>
                    <div className="stat-number">{stat.number}</div>
                    <div className="stat-label">{stat.label}</div>
                  </div>
                ))}
              </div>
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
                  <img
                    src="https://res.cloudinary.com/dptdloagw/image/upload/v1773229447/logo_ekjvir.svg"
                    alt="Radio del Volga"
                    style={{ width: '4rem', height: '4rem' }}
                  />
                </div>
              </div>

              <div className="orbit-item orbit-1">
                <Mic size={24} />
              </div>
              <div className="orbit-item orbit-2">
                <Headphones size={24} />
              </div>
              <div className="orbit-item orbit-3">
                <Music size={24} />
              </div>
              <div className="orbit-item orbit-4">
                <TvMinimalPlay size={24} />
              </div>
              <div className="orbit-item orbit-5">
                <Instagram size={24} />
              </div>
              <div className="orbit-item orbit-6">
                <Camera size={24} />
              </div>
              <div className="orbit-item orbit-7">
                <Video size={24} />
              </div>
              <div className="orbit-item orbit-8">
                <Play size={24} />
              </div>
              <div className="orbit-item orbit-9">
                <MapPin size={24} />
              </div>
              <div className="orbit-item orbit-10">
                <Compass size={24} />
              </div>
              <div className="orbit-item orbit-11">
                <MessageCircle size={24} />
              </div>
              <div className="orbit-item orbit-12">
                <Calendar size={24} />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Hero
