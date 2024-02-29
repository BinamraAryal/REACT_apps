import React, { useState, useEffect } from 'react';
import 'D:/React Projects/RD Mart Website/src/CSS/ImageCarousel.css'; // Import CSS for styling

const ImageCarousel = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const images = [{src:require('D:/React Projects/RD Mart Website/src/images/mock1.jpg')},{src:require('D:/React Projects/RD Mart Website/src/images/mock2.jpg')},{src:require('D:/React Projects/RD Mart Website/src/images/mock3.jpg')}
];
  const totalImages = images.length;

  useEffect(() => {
    const interval = setInterval(() => {
      goToNextImage();
    }, 5000);

    return () => clearInterval(interval);
  }, [currentImageIndex]);

  const goToNextImage = () => {
    setCurrentImageIndex((currentImageIndex + 1) % totalImages);
  };

  const goToPrevImage = () => {
    setCurrentImageIndex((currentImageIndex - 1 + totalImages) % totalImages);
  };

  return (
    <div className="carousel-container">
      <div className="carousel" style={{ transform: `translateX(-${currentImageIndex * 100}%)` }}>
        {images.map((image, index) => (
          <img
            key={index}
            src={image.src}
            alt={`Image ${index}`}
            className="carousel-slide"
          />
        ))}
      </div>
      <button className="prev" onClick={goToPrevImage}>&#10094;</button>
      <button className="next" onClick={goToNextImage}>&#10095;</button>
    </div>
  );
};

export default ImageCarousel;
