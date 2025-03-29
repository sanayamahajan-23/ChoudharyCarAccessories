import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../css/CarCustomization.css";
import PageTransition from "../components/PageTransition";
import CarRoadDesktop from "../components/CarRoadDesktop"; // Desktop animation
import CarRoadMobile from "../components/CarRoadMobile"; // Mobile animation

const InteriorUpgradation = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const navigate = useNavigate();

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <PageTransition>
      <div
        className="car-customization-container"
        style={{ backgroundImage: `url("/assets/carbon-fibre.png")` }}
      >
        <div className={`content-container ${isMobile ? "mobile-layout" : ""}`}>
          {/* Text Section */}
          <div className="text-section">
            <h1 className="service-title">Interior Upgradation</h1>
            <div className="sub-service-list">
              <p>Custom Made Seat Covers</p>
              <p>Ready to install Seat Covers</p>
              <p>Steering Covers</p>
              <p>Ambient Lighting</p>
              <p>Authorized Brand Damping Services</p>
              <p>Interior Leather Work</p>
              <p>Variety of Car Matting</p>
              <p>Car Flooring</p>
              <p>Car Curtains (Roller / Magnetic)</p>
              <p>
                <button
                  className="appointment-btn"
                  onClick={() => navigate("/book-us")}
                >
                  Book an Appointment
                </button>
              </p>
            </div>
          </div>

          {/* ✅ Ensure this is inside the same container but below */}
          {isMobile && (
            <div className="car-road-mobile-container">
              <CarRoadMobile />
            </div>
          )}

          {/* Desktop: Keep beside the text */}
          {!isMobile && <CarRoadDesktop />}
        </div>
      </div>
    </PageTransition>
  );
};

export default InteriorUpgradation;
