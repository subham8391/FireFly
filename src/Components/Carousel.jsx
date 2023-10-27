import React, { useState } from "react";
import BeejPatakha from '../image/BeejPatakha.png'
import beej2 from '../image/beej2.png'
import beej3 from '../image/beej-3.png'
const images = [
  BeejPatakha,
  beej2,
  BeejPatakha,
  beej3,
];

const Carousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  return (
    <div className="carousel-container">
      <div className="big-screen">
        <img src={images[currentSlide]} alt={`Image ${currentSlide + 1}`} />
      </div>
      <div className="thumbnail-carousel">
        {images.map((image, index) => (
          <div
            key={index}
            className={`thumbnail ${index === currentSlide ? "active" : ""}`}
            onClick={() => setCurrentSlide(index)}
          >
            <img src={image} alt={`Image ${index + 1}`} />
          </div>
        ))}
      </div>
      
    </div>
  );
};

export default Carousel;
