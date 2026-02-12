import React from 'react';
import { motion } from 'framer-motion';
import Hero from './components/Hero';
import Services from './components/Services';
import Packages from './components/Packages';
import Contact from './components/Contact';
import './App.css';

function App() {
  return (
    <div className="App">
      <Hero />
      <Services />
      <Packages />
      <Contact />
    </div>
  );
}

export default App;