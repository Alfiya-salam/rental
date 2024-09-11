
import React from 'react';
import './customArrows.css'; 

export const PrevArrow = ({ onClick }) => (
  <div className="custom-prev-arrow" onClick={onClick}>
    <i className="fas fa-chevron-left"></i> {/* Use Font Awesome class */}
  </div>
);

export const NextArrow = ({ onClick }) => (
  <div className="custom-next-arrow" onClick={onClick}>
    <i className="fas fa-chevron-right"></i> {/* Use Font Awesome class */}
  </div>
);
