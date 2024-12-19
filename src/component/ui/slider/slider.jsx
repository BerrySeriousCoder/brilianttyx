import React, { useState, useEffect } from 'react';
import './slider.css';
import Image1 from '../../../assets/ProductDesign/Image1.png';
import Image2 from '../../../assets/ProductDesign/Image2.png';
import Image3 from '../../../assets/ProductDesign/Image3.png';
import Image4 from '../../../assets/ProductDesign/Image4.png';
import Image5 from '../../../assets/ProductDesign/Image5.png';
import Image6 from '../../../assets/ProductDesign/Image6.png';
import Image7 from '../../../assets/ProductDesign/Image7.png';
import Image8 from '../../../assets/ProductDesign/Image8.png';
import Image9 from '../../../assets/ProductDesign/Image9.png';
import Image10 from '../../../assets/ProductDesign/Image10.png';
import Image11 from '../../../assets/ProductDesign/Image11.png';
import Image12 from '../../../assets/ProductDesign/Image12.png';
import Image13 from '../../../assets/ProductDesign/Image13.png';
import Image14 from '../../../assets/ProductDesign/Image14.png';
import Image15 from '../../../assets/ProductDesign/Image15.png';

const HexagonSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = [
    Image1, Image2, Image3, Image4, Image5, Image6 , Image7 , Image8 , Image9 , Image10 , Image11 , Image12 , Image13 , Image14 , Image15
  ];
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); 

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="hexagon-slider">
      <div
        className="hexagon-container"
        style={{ transform: `rotateY(-${currentIndex * 30}deg)` }}
      >
        {images.map((image, index) => (
          <div
            key={index}
            className={`hexagon face-${index}`}
            style={{ backgroundImage: `url(${image})` }}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default HexagonSlider;
