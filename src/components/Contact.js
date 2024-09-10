import React from "react";
import './contact.css'; 

const Contact = () => {
  return (
    <section id="contact" className="contact-section">
      <div className="contact-container">
        <div className="contact-row">
          
        
          <div className="about-us">
            <h3>About Us</h3>
            <p>
              Our website provides an online platform where users can browse and book various rental services, such as vehicles, properties, or equipment. 
            </p>
            <button className="subscribe-btn">Subscribe</button>
          </div>

        
          <div className="quick-links">
            <h3>Quick Links</h3>
            <ul>
              <li><a href="#about">About</a></li>
              <li><a href="#cars">Cars</a></li>
              <li><a href="#team">Team</a></li>
              <li><a href="#contact">Contact Us</a></li>
              <li><a href="#terms">Terms & Conditions</a></li>
            </ul>
          </div>

          
          <div className="business-hours">
            <h3>Business Hours</h3>
            <p>Mon - Fri: 09.00 am to 07.00 pm</p>
            <p>Saturday: 10.00 am to 05.00 pm</p>
            <p>Sunday: Closed</p>
          </div>

        
          <div className="contact-info">
            <h3>Contact Info</h3>
            <p>123 Street, kochi, Ernakulam</p>
            <p>Email: info@eywheel.com</p>
            <p>Phone: +91 925674345</p>
            <div className="social-icons">
              <a href="#"><i className="fa fa-facebook"></i></a>
              <a href="#"><i className="fa fa-twitter"></i></a>
              <a href="#"><i className="fa fa-linkedin"></i></a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
