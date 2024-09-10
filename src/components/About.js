import React, { useState, useEffect } from 'react';
import './About.css';

const images = [
  'images/carrr.png',  // Replace with actual image URL
  'images/caa.png',  // Replace with actual image URL
];

const About = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000); 
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div
      className="about-page"
      style={{ backgroundImage: `url(${images[currentImageIndex]})` }}
    >
      <div className="overlay">
        <div className="content">
          <h1>Get 15% off your Rentals!</h1>
          <p>Choose your model from our wide selection of cars.</p>
          <form className="rental-form">
            <div className="form-group">
              <label htmlFor="carModel">Choose a Model:</label>
              <select id="carModel" name="carModel">
                <option value="sedan">Sedan</option>
                <option value="suv">SUV</option>
                <option value="sports">Sports Car</option>
                <option value="electric">Electric</option>
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="pickupDate">Pickup Date:</label>
              <input type="date" id="pickupDate" name="pickupDate" />
            </div>
            <div className="form-group">
              <label htmlFor="dropoffDate">Dropoff Date:</label>
              <input type="date" id="dropoffDate" name="dropoffDate" />
            </div>
            <button type="submit" className="submit-button">
              Book Now
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default About;
