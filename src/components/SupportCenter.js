import React from "react";
import "./supportCenter.css"; 

const SupportCenter = () => {
  return (
    <div className="support-center">
      <h1>Customer <span className="highlight">Support</span> Center</h1>
      <p>Dedicated to providing you with exceptional support and solutions, anytime you need."
          Let me know if you'd like a different variation!</p>
      <div className="support-team">
        
        <div className="team-member">
          <img src="images/client2.png" alt="Martin Doe" />
          <h3>Martin Doe</h3>
          <p>Profession</p>
          <div className="social-links">
            <a href="#"><i className="fa fa-facebook"></i></a>
            <a href="#"><i className="fa fa-twitter"></i></a>
            <a href="#"><i className="fa fa-linkedin"></i></a>
          </div>
        </div>
      
        <div className="team-member">
          <img src="images/cline.png" alt="Catherine" />
          <h3>Catherine</h3>
          <p>Profession</p>
          <div className="social-links">
            <a href="#"><i className="fa fa-facebook"></i></a>
            <a href="#"><i className="fa fa-twitter"></i></a>
            <a href="#"><i className="fa fa-linkedin"></i></a>
          </div>
        </div>
        <div className="team-member">
          <img src="images/cli.png" alt="Karoline" />
          <h3>Karoline</h3>
          <p>Profession</p>
          <div className="social-links">
            <a href="#"><i className="fa fa-facebook"></i></a>
            <a href="#"><i className="fa fa-twitter"></i></a>
            <a href="#"><i className="fa fa-linkedin"></i></a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SupportCenter;
