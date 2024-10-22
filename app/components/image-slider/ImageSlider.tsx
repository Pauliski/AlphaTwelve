import React, { useState, useEffect } from "react";
import Slide from "./Slide.png"
import checking from "./checking.png"
import cutting from "./cutting.png"
import "./Slider.css";
import Image from "next/image";
import BackArrow from "../icons/BackArrow";
import ForwardArrow from "../icons/ForwardArrow";

const ImageSlider = () => {
  const images = [
    Slide, checking, cutting
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto slide every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(interval);
  }, [currentIndex]);

  // Go to the next slide
  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  // Go to the previous slide
  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  // Go to a specific slide using dots
  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <div className="slider-container">
      <div className="prev" onClick={prevSlide}>
        <BackArrow />
      </div>
      <div className="next" onClick={nextSlide}>
        <ForwardArrow />
      </div>
      <div className="slider">
        {images.map((image, index) => (
          <div
            key={index}
            className={index === currentIndex ? "slide active" : "slide"}
          >
            {index === currentIndex && (
              <Image className="image" src={image} alt="pic" />
            )}
          </div>
        ))}

      </div>

      
      {/* Dots Navigation */}
      <div className="dots">
        {images.map((_, index) => (
          <span
            key={index}
            className={index === currentIndex ? "dot active" : "dot"}
            onClick={() => goToSlide(index)}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default ImageSlider;
