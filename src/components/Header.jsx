import React, { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'

const Header = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [visible, setVisible] = useState(true)
  const [scrolled, setScrolled] = useState(false)
  const lastY = useRef(0)

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY
      setScrolled(y > 10)
      setVisible(y < lastY.current || y < 60)
      lastY.current = y
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <motion.header
      className="header"
      animate={{ y: visible ? 0 : '-100%', opacity: visible ? 1 : 0 }}
      transition={{ duration: 0.3, ease: 'easeInOut' }}
      style={{
        background: scrolled
          ? 'linear-gradient(135deg, rgba(10,10,10,0.98) 0%, rgba(26,26,26,0.98) 100%)'
          : 'linear-gradient(to bottom, rgba(10,10,10,0.92) 0%, transparent 100%)',
        backdropFilter: scrolled ? 'blur(12px)' : 'none',
        transition: 'background 0.4s ease, backdrop-filter 0.4s ease',
      }}
    >
      <div className="container header-container">
        <div className="header-brand">
          <img
            src="https://res.cloudinary.com/dptdloagw/image/upload/v1773229447/logo_ekjvir.svg"
            alt="Radio del Volga"
            className="header-logo"
          />
        </div>

        <nav className="header-nav desktop-nav">
          <a href="#services">Servicios</a>
          <a href="#packages">Paquetes</a>
          <a href="#contact">Contacto</a>
        </nav>

        <button
          className="mobile-menu-toggle"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.nav
            className="header-nav mobile-nav"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
          >
            <a href="#services" onClick={() => setIsOpen(false)}>
              Servicios
            </a>
            <a href="#packages" onClick={() => setIsOpen(false)}>
              Paquetes
            </a>
            <a href="#contact" onClick={() => setIsOpen(false)}>
              Contacto
            </a>
          </motion.nav>
        )}
      </AnimatePresence>
    </motion.header>
  )
}

export default Header
