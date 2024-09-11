import React, { useState, useEffect } from "react";
import "./HomePage.css";

const HomePage = ({ scrollToSection, aboutRef, servicesRef, contactRef }) => {
  const images = [
    "https://themewagon.github.io/Cental/img/carousel-2.jpg", 
    "https://themewagon.github.io/Cental/img/carousel-1.jpg",
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000); 
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="home-page">
      <header className="navbar">
        <div className="logo">Cental</div>
        <nav className="nav-links">
          <a href="#" onClick={() => scrollToSection(aboutRef)}>Home</a>
          <a href="#" onClick={() => scrollToSection(aboutRef)}>About</a>
          <a href="#" onClick={() => scrollToSection(servicesRef)}>Service</a>
          <a href="#" onClick={() => scrollToSection(contactRef)}>Contact</a>
        </nav>
        <button className="get-started-btn">Get Started</button>
      </header>

      <section
        className="banner"
        style={{
          backgroundImage: `url(${images[currentImageIndex]})`,
        }}
      >
        <div className="reservation-form">
          <h2>CONTINUE CAR RESERVATION</h2>
          <form>
            <div className="form-group">
              <label>Select Your Car Type</label>
              <select>
                <option>Select Your Car Type</option>
              </select>
            </div>

            <div className="form-group">
              <label>Pick Up - Enter a City or Airport</label>
              <input type="text" placeholder="Pick Up - Enter a City or Airport" />
            </div>

            <div className="form-group">
              <label>Drop Off - Enter a City or Airport</label>
              <input type="text" placeholder="Drop Off - Enter a City or Airport" />
            </div>

            <div className="form-group">
              <label>Pick Up Date</label>
              <input type="date" />
            </div>

            <div className="form-group">
              <label>Drop Off Date</label>
              <input type="date" />
            </div>

            <button type="submit">Book Now</button>
          </form>
        </div>
        <div className="offer-text">
          <h1>Get 15% off your rental</h1>
          <p>
            Discover your perfect ride with ease—unmatched comfort, convenience, and value,
            just a click away!
          </p>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
