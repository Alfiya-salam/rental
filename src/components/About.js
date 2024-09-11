import React from "react";
import "./About.css";

const About = () => {
  return (
    <div className="about-page">
      <header className="about-banner">
        <h1>About Us</h1>
        <p>
          Home / Pages / <span>About</span>
        </p>
      </header>

      <section className="about-content">
        <div className="about-text">
          <h2>
            Central <span>About</span>
          </h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut amet nemo
            expedita asperiores commodi accusantium at cum harum, excepturi, quia
            tempora cupiditate! Adipisci facilis modi quisquam quia distinctio.
          </p>

          <div className="about-cards">
            <div className="card">
              <div className="icon">🎯</div>
              <h3>Our Vision</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </p>
            </div>
            <div className="card">
              <div className="icon">🚗</div>
              <h3>Our Mission</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </p>
            </div>
          </div>

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae,
            aliquam ipsum. Sed suscipit dolorem libero sequi quos natus debitis
            reprehenderit facilis quaerat similique.
          </p>

          {/* Experience Section */}
          <div className="experience-points-container">
            <div className="experience-box">
              <h2>17</h2>
              <p>Years of Experience</p>
            </div>

            <div className="points">
              <ul>
                <li>Simple</li>
                <li>Heavy</li>
                <li>Look</li>
                <li>Simplicity</li>
              </ul>
            </div>
          </div>

          <div className="about-footer">
            <div className="founder">
              <img
                src="https://themewagon.github.io/Cental/img/attachment-img.jpg"
                alt="man"
                className="man-img"
              />
            </div>
            <div className="founder-content">
              <h3>William Burgess</h3>
              <p>Carveo Founder</p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora
                iste, facilis quisquam eum molestias rerum repellat.
              </p>
            </div>
          </div>
        </div>

        <div className="about-image">
          <img
            src="https://themewagon.github.io/Cental/img/about-img.jpg"
            alt="Car Key"
            className="about-image-key"
          />
          <img
            src="https://themewagon.github.io/Cental/img/about-img-1.jpg"
            alt="Vintage Car"
            className="about-image-car"
          />
        </div>
      </section>
    </div>
  );
};

export default About;