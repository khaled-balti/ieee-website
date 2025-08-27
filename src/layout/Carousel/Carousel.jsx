import React, { useEffect, useState } from "react";
import CarouselImage1 from '../../assets/woman-vr1.jpg'
import CarouselImage2 from '../../assets/woman-vr-2.jpg'

const ImageCarousel = () => {
  const images = [
    CarouselImage1,
    CarouselImage2
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 2000);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="relative w-full lg:w-[550px] h-[400px] sm:h-[450px] md:h-[600px] lg:h-[500px] overflow-hidden rounded-3xl">
      {images.map((img, index) => (
        <img
          key={index}
          src={img}
          alt={`carousel-${index}`}
          className={`absolute w-full h-full object-fit transition-transform duration-400 ease-in-out ${
            index === currentIndex
              ? "translate-x-0"
              : index < currentIndex
              ? "-translate-x-full"
              : "translate-x-full"
          }`}
        />
      ))}
    </div>
  );
};

export default ImageCarousel;
