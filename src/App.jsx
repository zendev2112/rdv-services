import React from 'react';
import Hero from './components/Hero.jsx';
import Services from './components/Services.jsx';
import Packages from './components/Packages.jsx';
import Contact from './components/Contact.jsx';
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