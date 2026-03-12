import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Menu, X } from 'lucide-react'

const Header = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => setIsOpen(!isOpen)

  return (
    <header className="header">
      <div className="container header-container">
        {/* Logo + Legend */}
        <div className="header-brand">
          <img
            src="https://res.cloudinary.com/dptdloagw/image/upload/v1773229447/logo_ekjvir.svg"
            alt="Radio del Volga"
            className="header-logo"
          />
        </div>

        {/* Desktop Nav */}
        <nav className="header-nav desktop-nav">
          <a href="#services">Servicios</a>
          <a href="#packages">Paquetes</a>
          <a href="#contact">Contacto</a>
        </nav>

        {/* Mobile Menu Toggle */}
        <button className="mobile-menu-toggle" onClick={toggleMenu}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Nav */}
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
    </header>
  )
}

export default Header
