import React from 'react';
import './Services.css';
import { FaPhoneAlt, FaDollarSign, FaRoad, FaLifeRing, FaCity, FaCarSide } from 'react-icons/fa';

const Services = () => {
  return (
    <section id="services" className="services-section">
      <h2>Cental <span className="highlight">Services</span></h2>
      <p className="intro-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut amet nemo expedita asperiores commod accusantium.</p>
      
      <div className="services-grid">
        <div className="service-box">
          <FaPhoneAlt className="service-icon"/>
          <h3>Phone Reservation</h3>
          <p>Book your car rental quickly and easily by calling us, ensuring a smooth and personalized experience.</p>
        </div>
        <div className="service-box">
          <FaDollarSign className="service-icon"/>
          <h3>Special Rates</h3>
          <p>Exclusive discounts and deals on car rentals, providing you with exceptional value and savings.</p>
        </div>
        <div className="service-box">
          <FaRoad className="service-icon"/>
          <h3>One Way Rental</h3>
          <p>Pick up a car at one location and drop it off at another, hassle-free.</p>
        </div>
        <div className="service-box">
          <FaLifeRing className="service-icon"/>
          <h3>Life Insurance</h3>
          <p>Comprehensive protection for you while driving, giving peace of mind on every trip.</p>
        </div>
        <div className="service-box">
          <FaCity className="service-icon"/>
          <h3>City to City</h3>
          <p>Offering services for city-to-city rentals with flexible return options.</p>
        </div>
        <div className="service-box">
          <FaCarSide className="service-icon"/>
          <h3>Free Rides</h3>
          <p>Complimentary rides for premium members to and from select locations.</p>
        </div>
      </div>
    </section>
  );
}

export default Services;
