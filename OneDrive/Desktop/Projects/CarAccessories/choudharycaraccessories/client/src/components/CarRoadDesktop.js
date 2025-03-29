import React, { useState, useEffect } from "react";
import "../css/CarCustomization.css"; // Ensure styles apply

const CarRoadDesktop = () => {
  const [animateFirst, setAnimateFirst] = useState(false);
  const [animateSecond, setAnimateSecond] = useState(false);
  const [animateThird, setAnimateThird] = useState(false);

  useEffect(() => {
    setTimeout(() => setAnimateFirst(true), 800);
    setTimeout(() => setAnimateSecond(true), 500);
    setTimeout(() => setAnimateThird(true), 1000);
  }, []);

  return (
    <div className="road-section">
      {/* Road 1 */}
      <div className="road-container road1">
        <img src="/assets/road1.png" alt="road" className="road-img" />
        <img
          src="/assets/car-2.png"
          alt="Car 1"
          className={`car-img1 ${animateFirst ? "slide-top" : ""}`}
        />
      </div>

      {/* Road 2 */}
      <div className="road-container road2">
        <img src="/assets/road2.png" alt="road" className="road-img" />
        <img
          src="/assets/car-1.png"
          alt="Car 2"
          className={`car-img ${animateSecond ? "slide-bottom" : ""}`}
        />
      </div>

      {/* Road 3 */}
      <div className="road-container road3">
        <img src="/assets/road1.png" alt="road" className="road-img" />
        <img
          src="/assets/car-2.png"
          alt="Car 3"
          className={`car-img1 ${animateThird ? "slide-top" : ""}`}
        />
      </div>
    </div>
  );
};

export default CarRoadDesktop;
