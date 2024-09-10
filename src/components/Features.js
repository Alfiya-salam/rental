import React from 'react';
import './Features.css';

const Features = () => {
  return (
    <div className="features-container">
      <h1 className="features-title">Central <span>Features</span></h1>
      <p className="features-subtitle">
         Experience unparalleled driving with our vehicles, engineered to deliver top-notch performance while maximizing fuel efficiency.
          Enjoy the perfect blend of power and economy on every journey.


      </p>
      
      <div className="features-content">
        <div className="features-column">
          <div className="feature-item">
            <h3>First Class Services</h3>
            <p>Drive your dreams. Experience excellence with every mile.</p>
          </div>
          <div className="feature-item">
            <h3>24/7 Road Assistance</h3>
            <p>Your journey to perfection starts here.</p>
          </div>
        </div>

        <div className="features-center">
          <img src="images/carphoto.png" alt="Car" className="car-image" />
        </div>

        <div className="features-column">
          <div className="feature-item">
            <h3>Quality at Minimum</h3>
            <p>Maximum value, minimum cost—experience excellence without compromise.</p>
          </div>
          <div className="feature-item">
            <h3>Free Pick-Up & Drop-Off</h3>
            <p>Your convenience is our priority—free pick-up and drop-off, always.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
