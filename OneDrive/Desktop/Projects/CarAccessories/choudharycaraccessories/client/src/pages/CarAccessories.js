import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../css/CarCustomization.css";
import PageTransition from "../components/PageTransition";
import CarRoadDesktop from "../components/CarRoadDesktop"; // Desktop animation
import CarRoadMobile from "../components/CarRoadMobile"; // Mobile animation

const CarAccessories = () => {
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
            <h1 className="service-title">Car Accessories</h1>
            <div className="sub-service-list">
              <p>Alloys Upgradation</p>
              <p>Wheel Cover Installation</p>
              <p>Center Locking</p>
              <p>Power Window Upgradation</p>
              <p>Reverse Camera Installation</p>
              <p>ORVMs / IRVMs Installation</p>
              <p>GPS Tracking Installation</p>
              <p>Converting Wired CarPlay to Wireless CarPlay</p>
              <p>360-Degree Camera Installation</p>
              <p>Steering Mounted Controls Installation</p>
              <p>Dash Cam Installation</p>
              <p>Chargers (Wired / Wireless)</p>
              <p>Door Visors</p>
              <p>Mud Flaps</p>
              <p>Wipers</p>
              <p>Door Guards</p>
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

export default CarAccessories;
