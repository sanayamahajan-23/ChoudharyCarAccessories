import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../css/CarCustomization.css";
import PageTransition from "../components/PageTransition";
import CarRoadDesktop from "../components/CarRoadDesktop"; // Desktop animation
import CarRoadMobile from "../components/CarRoadMobile"; // Mobile animation

const OffRoading = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const navigate = useNavigate();

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <PageTransition>
      <div className="car-customization-container">
        <div className={`content-container ${isMobile ? "mobile-layout" : ""}`}>
          {/* Text Section */}
          <div className="text-section">
            <h1 className="service-title">Off Roading Trail Trek</h1>
            <div className="sub-service-list">
              <p>Custom Front / Back Bumpers</p>
              <p>Rubicon Bumper</p>
              <p>Engine Bottom Cover</p>
              <p>Snorkel (Functional / Non-Functional)</p>
              <p>Show Antenna</p>
              <p>Foot Rest</p>
              <p>Handle Grabber</p>
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

export default OffRoading;
