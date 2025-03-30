import React from "react";
import { useNavigate } from "react-router-dom";
import "../css/CarCustomization.css";
import PageTransition from "../components/PageTransition";

const InteriorUpgradation = () => {
  const navigate = useNavigate();

  return (
    <PageTransition>
      <div
        className="car-customization-container"
        style={{ backgroundImage: `url("/assets/carbon-fibre.png")` }}
      >
        <div className="content-container">
          {/* Text Section */}
          <div className="text-section">
            <h1 className="service-title">Interior Upgradation</h1>
            <div className="sub-service-list">
              <p>Custom Made Seat Covers</p>
              <p>Ready to Install Seat Covers</p>
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

          {/* Static Image Section */}
          <div className="static-image-container">
            <img
              src="/assets/service2.jpeg"
              alt="Interior Upgradation"
              className="static-image"
            />
          </div>
        </div>
      </div>
    </PageTransition>
  );
};

export default InteriorUpgradation;
