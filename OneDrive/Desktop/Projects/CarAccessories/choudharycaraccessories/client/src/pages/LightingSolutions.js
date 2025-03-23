import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom"; // For navigation
import "../css/CarCustomization.css"; // Import CSS
import PageTransition from "../components/PageTransition";

const LightingSolutions = () => {
  const [animateFirst, setAnimateFirst] = useState(false);
  const [animateSecond, setAnimateSecond] = useState(false);
  const [animateThird, setAnimateThird] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const navigate = useNavigate(); // Navigation hook

  // Detect screen size changes
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    setTimeout(() => setAnimateFirst(true), 800);
    setTimeout(() => setAnimateSecond(true), 500);
    setTimeout(() => setAnimateThird(true), 1000);
  }, []);

  return (
    <PageTransition>
      <div className="car-customization-container">
        <div className={`content-container ${isMobile ? "mobile-layout" : ""}`}>
          <div className="text-section">
            <h1 className="service-title">Lighting Solutions</h1>
            <div className="sub-service-list">
              <p>Engine Tuning</p>
              <p>Brake Upgrade</p>
              <p>Suspension Modification</p>
              <p>Body Kits Installation</p>
              <p>Custom Paint Jobs</p>
            </div>
            <button
              className="appointment-btn"
              onClick={() => navigate("/book-us")}
            >
              Book an Appointment
            </button>
          </div>
          <div className="road-section">
            <div className="road-container road1">
              <img src="/assets/road1.png" alt="road" className="road-img" />
              <img
                src={isMobile ? "/assets/car-2.png" : "/assets/car-2.png"}
                alt="Car 1"
                className={`car-img1 ${animateFirst ? "slide-top" : ""}`}
              />
            </div>
            <div className="road-container road2">
              <img src="/assets/road2.png" alt="road" className="road-img" />
              <img
                src={isMobile ? "/assets/car-1.png" : "/assets/car-1.png"}
                alt="Car 2"
                className={`car-img ${animateSecond ? "slide-bottom" : ""}`}
              />
            </div>
            <div className="road-container road3">
              <img src="/assets/road1.png" alt="road" className="road-img" />
              {!isMobile && (
                <img
                  src="/assets/car-2.png"
                  alt="Car 3"
                  className={`car-img1 ${animateThird ? "slide-top" : ""}`}
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </PageTransition>
  );
};

export default LightingSolutions;
