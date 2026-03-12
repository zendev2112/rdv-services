import React from 'react'
import { motion } from 'framer-motion'
import { Tv, Smartphone, Monitor, Radio, Play, Wifi } from 'lucide-react'
import { SiInstagram, SiYoutube } from 'react-icons/si'

const devices = [
  {
    id: 'tv',
    deviceIcon: <Tv size={16} />,
    platformIcon: <SiYoutube size={13} />,
    platformName: 'YouTube',
    platformColor: '#ff0000',
    title: 'La Última Cena',
    subtitle: 'Smart TV · Programa audiovisual',
    stat: '+1K suscriptores',
    floatDelay: 0,
    floatDuration: 6,
  },
  {
    id: 'phone',
    deviceIcon: <Smartphone size={16} />,
    platformIcon: <SiInstagram size={13} />,
    platformName: 'Instagram',
    platformColor: '#e1306c',
    title: 'Reels & Stories',
    subtitle: 'Smartphone · Contenido social',
    stat: '21.8K seguidores',
    floatDelay: 1.5,
    floatDuration: 7,
  },
  {
    id: 'laptop',
    deviceIcon: <Monitor size={16} />,
    platformIcon: null,
    platformName: 'Portal Web',
    platformColor: '#4ecdc4',
    title: 'Noticias Regionales',
    subtitle: 'Web · Coronel Suárez & Región',
    stat: 'Actualización 24/7',
    floatDelay: 0.8,
    floatDuration: 8,
  },
  {
    id: 'radio',
    deviceIcon: <Radio size={16} />,
    platformIcon: <Wifi size={13} />,
    platformName: 'FM & Streaming',
    platformColor: '#ff6b6b',
    title: 'Radio En Vivo',
    subtitle: 'FM · Señal online',
    stat: '24/7 al aire',
    floatDelay: 2.2,
    floatDuration: 6.5,
  },
]

const ScreenMockup = ({ id }) => {
  if (id === 'tv') {
    return (
      <div className="mockup-tv">
        <div className="mockup-tv-screen">
          <div className="mockup-tv-content">
            <SiYoutube size={18} color="#ff0000" />
            <div className="mockup-show-title">La Última Cena</div>
            <motion.div
              className="mockup-play-btn"
              animate={{ scale: [1, 1.2, 1] }}
              transition={{
                duration: 2.5,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            >
              <Play size={12} fill="white" color="white" />
            </motion.div>
          </div>
          <div className="mockup-progress-bar">
            <motion.div
              className="mockup-progress-fill"
              animate={{ width: ['15%', '70%', '15%'] }}
              transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut' }}
            />
          </div>
        </div>
        <div className="mockup-tv-stand" />
      </div>
    )
  }

  if (id === 'phone') {
    return (
      <div className="mockup-phone">
        <div className="mockup-phone-notch" />
        <div className="mockup-reel-header">
          <div className="mockup-avatar" />
          <span className="mockup-handle">@radiodelvolga</span>
        </div>
        <div className="mockup-reel-body">
          <SiInstagram size={26} color="#e1306c" />
        </div>
        <div className="mockup-reel-footer">
          <motion.span
            animate={{ scale: [1, 1.4, 1] }}
            transition={{ duration: 1.8, repeat: Infinity }}
            style={{ display: 'inline-block' }}
          >
            ♥
          </motion.span>
          <span className="mockup-likes"> 1.2K</span>
        </div>
      </div>
    )
  }

  if (id === 'laptop') {
    return (
      <div className="mockup-laptop">
        <div className="mockup-laptop-screen">
          <div className="mockup-browser-bar">
            <div className="mockup-dot mockup-dot-red" />
            <div className="mockup-dot mockup-dot-yellow" />
            <div className="mockup-dot mockup-dot-green" />
            <div className="mockup-url-bar" />
          </div>
          <div className="mockup-portal-body">
            <div className="mockup-portal-band" />
            <div className="mockup-portal-headline" />
            <div className="mockup-portal-line" />
            <div className="mockup-portal-cards">
              <div className="mockup-portal-card" />
              <div className="mockup-portal-card" />
            </div>
          </div>
        </div>
        <div className="mockup-laptop-base" />
      </div>
    )
  }

  if (id === 'radio') {
    return (
      <div className="mockup-radio">
        <div className="mockup-radio-freq">FM 97.7</div>
        <div className="mockup-wave-bars">
          {[0.4, 0.7, 1, 0.6, 0.9, 0.5, 1, 0.7, 0.4, 0.8].map((h, i) => (
            <motion.div
              key={i}
              className="mockup-wave-bar"
              animate={{ scaleY: [h * 0.3, h, h * 0.5, h * 0.85, h * 0.3] }}
              transition={{
                duration: 1.1,
                delay: i * 0.09,
                repeat: Infinity,
                repeatType: 'mirror',
                ease: 'easeInOut',
              }}
            />
          ))}
        </div>
        <div className="mockup-live-badge">
          <motion.span
            className="live-dot"
            animate={{ opacity: [1, 0.2, 1] }}
            transition={{ duration: 1, repeat: Infinity }}
          />
          EN VIVO
        </div>
      </div>
    )
  }

  return null
}

const Ecosystem = () => {
  return (
    <section className="ecosystem section">
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <h2>
            Tu marca en <span className="gradient-text">cada pantalla</span>
          </h2>
          <p>
            Llegamos a tu audiencia sin importar el dispositivo. Un ecosistema
            multiplatforma que conecta marcas con personas reales.
          </p>
        </motion.div>

        <div className="ecosystem-grid">
          {devices.map((device, index) => (
            <motion.div
              key={device.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              viewport={{ once: true }}
            >
              <motion.div
                className="device-card glass-card"
                animate={{ y: [0, -9, 0] }}
                transition={{
                  duration: device.floatDuration,
                  delay: device.floatDelay,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
              >
                <div className={`device-screen device-screen-${device.id}`}>
                  <ScreenMockup id={device.id} />
                </div>

                <div className="device-info">
                  <div className="device-meta">
                    <span className="device-icon-wrap">
                      {device.deviceIcon}
                    </span>
                    <span
                      className="device-platform-wrap"
                      style={{ color: device.platformColor }}
                    >
                      {device.platformIcon}
                      <span>{device.platformName}</span>
                    </span>
                  </div>
                  <h3 className="device-title">{device.title}</h3>
                  <p className="device-subtitle-text">{device.subtitle}</p>
                  <div className="device-stat-row">
                    <span
                      className="device-stat-dot"
                      style={{ background: device.platformColor }}
                    />
                    {device.stat}
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="ecosystem-signal"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.9, duration: 0.8 }}
          viewport={{ once: true }}
        >
          {[0, 1, 2, 3, 4].map((i) => (
            <motion.span
              key={i}
              className="signal-dot"
              animate={{ opacity: [0.15, 1, 0.15], scale: [0.8, 1.4, 0.8] }}
              transition={{ duration: 1.8, delay: i * 0.35, repeat: Infinity }}
            />
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Ecosystem
