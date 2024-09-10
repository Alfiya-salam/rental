import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import About from './components/About';
import Services from './components/Services';
import ClientReviews from './components/ClientReviews';
import Features from './components/Features';
import SupportCenter from './components/SupportCenter';
import Contact from './components/Contact';

function App() {
  return (
    <div className="App">
      <Navbar />
      <About />
      <Services />
      <Features />
      <SupportCenter />
      <ClientReviews />
      <Contact />

    </div>
  );
}

export default App;
