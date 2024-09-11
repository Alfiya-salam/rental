import React, { useRef } from 'react';
import './App.css';
// In your main index.js or App.js
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
// index.js or App.js
import '@fortawesome/fontawesome-free/css/all.min.css';
import Navbar from './components/HomePage';
import About from './components/About';
import Features from './components/Features';
import Services from './components/Services';
import ClientReviews from './components/ClientReviews';
import SupportCenter from './components/SupportCenter';
import Contact from './components/Contact';

function App() {
  const aboutRef = useRef(null);
  const servicesRef = useRef(null);
  const contactRef = useRef(null);

  const scrollToSection = (ref) => {
    ref.current.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="App">
      {/* Navbar that allows navigation to different sections */}
      <Navbar scrollToSection={scrollToSection} aboutRef={aboutRef} servicesRef={servicesRef} contactRef={contactRef} />

      {/* About section */}
      <section ref={aboutRef}>
        <About />
      </section>

      {/* Features section placed after About */}
      <Features />
       
        {/* Support Center section */}
      <SupportCenter />


      {/* Services section */}
      <section ref={servicesRef}>
        <Services />
      </section>

      {/* Client Reviews section placed after Services */}
      <ClientReviews />

    
      {/* Contact section */}
      <section ref={contactRef}>
        <Contact />
      </section>
    </div>
  );
}

export default App;
