import React, { useState, useEffect } from "react";
import "../css/CarCustomization.css"; // Ensure styles apply

const CarRoadMobile = () => {
  const [animateLeft, setAnimateLeft] = useState(false);
  const [animateRight, setAnimateRight] = useState(false);

  useEffect(() => {
    setTimeout(() => setAnimateLeft(true), 800);
    setTimeout(() => setAnimateRight(true), 1200);
  }, []);

  return (
    <div className="road-section-mobile">
      {/* Road 1 - Left */}
      <div className="road-container-mobile road-left">
        <img src="/assets/road-2.png" alt="road" className="road-img" />
        <img
          src="/assets/car_1.png"
          alt="Car Left"
          className={`car-img-left ${animateLeft ? "slide-left" : ""}`}
        />
      </div>

      {/* Road 2 - Right */}
      <div className="road-container-mobile road-right">
        <img src="/assets/road-1.png" alt="road" className="road-img" />
        <img
          src="/assets/car_2.png"
          alt="Car Right"
          className={`car-img-right ${animateRight ? "slide-right" : ""}`}
        />
      </div>
    </div>
  );
};

export default CarRoadMobile;
