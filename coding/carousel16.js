//16.Write a React component that implements a carousel.
import React, { useState } from 'react';
import './Carousel.css'; // Optional: For styling

const Carousel = ({ slides }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? slides.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === slides.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="carousel">
      <button onClick={goToPrevious} className="carousel-button prev">
        &#10094;
      </button>
      <div className="carousel-slide">
        <img src={slides[currentIndex]} alt={`Slide ${currentIndex + 1}`} />
      </div>
      <button onClick={goToNext} className="carousel-button next">
        &#10095;
      </button>
    </div>
  );
};



export default Carousel;
