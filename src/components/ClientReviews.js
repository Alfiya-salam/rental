import React, { useState } from 'react';
import './ClientReviews.css';

const reviews = [
  {
    name: 'John Doe',
    profession: 'Business Owner',
    rating: 5,
    review: 'Great service! Highly recommend for anyone looking for a smooth rental experience.',
    image: 'images/client.png',
  },
  {
    name: 'Jane Smith',
    profession: 'Travel Blogger',
    rating: 4,
    review: 'Good selection of cars and fair prices. Will rent again in the future!',
    image: 'images/client3.png',
  },
  {
    name: 'David Johnson',
    profession: 'Entrepreneur',
    rating: 4,
    review: 'Very helpful customer service. The car was clean and well-maintained.',
    image: 'images/client4.png',
  },
  {
    name: 'Emily Davis',
    profession: 'Software Engineer',
    rating: 5,
    review: 'Loved the whole experience. Friendly staff and a wide variety of cars!',
    image: 'images/client5.png',
  }
];

const ClientReviews = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide + 2 >= reviews.length ? 0 : prevSlide + 2
    );
  };

  const prevSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === 0 ? reviews.length - 2 : prevSlide - 2
    );
  };

  return (
    <section className="reviews-section">
      <h2>Our Clients <span className="highlight">Reviews</span></h2>
      <p className="review-intro">Discover why our clients rave about our service. We take pride in delivering exceptional experiences every time.</p>

      <div className="slider">
        <button className="slider-button prev" onClick={prevSlide}>
          &#10094;
        </button>

        <div className="reviews-container">
          {reviews.map((review, index) => (
            <div
              className={`review-card ${index === currentSlide || index === currentSlide + 1 ? 'active' : ''}`}
              key={index}
              style={{ display: index === currentSlide || index === currentSlide + 1 ? 'block' : 'none' }}
            >
              <div className="review-header">
                <img src={review.image} alt={`${review.name}`} />
                <div className="reviewer-info">
                  <h3>{review.name}</h3>
                  <p>{review.profession}</p>
                  <div className="stars">
                    {'★'.repeat(review.rating)}{'☆'.repeat(5 - review.rating)}
                  </div>
                </div>
              </div>
              <p className="review-text">{review.review}</p>
            </div>
          ))}
        </div>

        <button className="slider-button next" onClick={nextSlide}>
          &#10095;
        </button>
      </div>
    </section>
  );
};

export default ClientReviews;
