import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "../css/CarCarousel.css"; // Import the CSS file for styling

const carData = [
  { name: "Mahindra Scorpio N", image: "/assets/car1.png" },
  { name: "Mahindra Thar", image: "/assets/car2.png" },
  { name: "Tata Safari", image: "/assets/car3.png" },
  { name: "Tata Harrier", image: "/assets/car4.png" },
  { name: "Hyundai Verna", image: "/assets/car5.png" },
  { name: "BMW", image: "/assets/car6.png" },
  { name: "Maruti Gypsy", image: "/assets/car7.png" },
  { name: "Toyota Hilux", image: "/assets/car8.png" },
  { name: "Toyota Corolla", image: "/assets/car9.png" },
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
      }, 5000);
      return () => clearTimeout(resumeTimer);
    }
  }, [userInteracted]);

  useEffect(() => {
    if (!userInteracted) {
      const interval = setInterval(() => {
        setIndex((prevIndex) => (prevIndex + 1) % carData.length);
      }, 7000);
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
          <motion.div
            className="car-text"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
          >
            <h2>{carData[index].name}</h2>
          </motion.div>
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
      <button className="arrow" onClick={nextSlide}>
        <img src="/assets/arrow.svg" alt="Next" />
      </button>
    </div>
  );
};

export default CarCarousel;
