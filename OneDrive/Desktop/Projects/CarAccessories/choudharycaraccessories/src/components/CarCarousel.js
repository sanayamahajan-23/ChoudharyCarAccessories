import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "../css/CarCarousel.css"; // Import the CSS file for styling

const carData = [
  {
    name: "BMW M5",
    description: "Carbon fiber spoiler, performance exhaust, LED headlamps",
    image: "/assets/car1.png",
  },
  {
    name: "Audi R8",
    description: "Custom body kit, lowered suspension, custom rims",
    image: "/assets/car2.png",
  },
  {
    name: "Mercedes-AMG GT",
    description: "Matte black wrap, carbon fiber hood, sport seats",
    image: "/assets/car3.png",
  },
];

const CarCarousel = () => {
  const [index, setIndex] = useState(0);
  const [userInteracted, setUserInteracted] = useState(false);
  const nextSlide = () => {
    setUserInteracted(true);
    setIndex((prevIndex) => (prevIndex + 1) % carData.length);
  };
  useEffect(() => {
    if (userInteracted) {
      const resumeTimer = setTimeout(() => {
        setUserInteracted(false);
      }, 5000); // Resume auto-slide after 10 seconds
      return () => clearTimeout(resumeTimer);
    }
  }, [userInteracted]);

  useEffect(() => {
    if (!userInteracted) {
      const interval = setInterval(() => {
        setIndex((prevIndex) => (prevIndex + 1) % carData.length);
      }, 7000); // Auto-slide every 5 seconds
      return () => clearInterval(interval);
    }
  }, [userInteracted]);

  return (
    <div className="carousel-container">
      <AnimatePresence mode="wait">
        <motion.div
          key={carData[index].name}
          className="carousel-slide"
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.5 }}
        >
          {/* Text (Top Right) */}
          <motion.div
            className="car-text"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
          >
            <h2>{carData[index].name}</h2>
            <p>{carData[index].description}</p>
          </motion.div>
          {/* Car Image (Left) */}
          <motion.img
            src={carData[index].image}
            alt={carData[index].name}
            className="car-image"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.6 }}
          />
        </motion.div>
      </AnimatePresence>
      {/* Right Arrow Button */}

      <button className="arrow" onClick={nextSlide}>
        <img src="/assets/arrow.svg" alt="Next" />
      </button>
    </div>
  );
};

export default CarCarousel;
