import React from 'react'
import Hero from './components/Hero.jsx'
import Services from './components/Services.jsx'
import Packages from './components/Packages.jsx'
import Contact from './components/Contact.jsx'
import Header from './components/Header.jsx'
import Ecosystem from './components/Ecosystem'
import Manifesto from './components/Manifesto.jsx'
import './App.css'

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <Manifesto />
      <Ecosystem />
      <Services />
      <Packages />
      <Contact />
    </div>
  )
}

export default App
