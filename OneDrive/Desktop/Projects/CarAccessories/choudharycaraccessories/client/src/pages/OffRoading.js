import React from "react";
import { useNavigate } from "react-router-dom";
import "../css/CarCustomization.css";
import PageTransition from "../components/PageTransition";

const OffRoading = () => {
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
            <h1 className="service-title">Off-Roading Trail Trek</h1>
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

          {/* Static Image Section */}
          <div className="static-image-container">
            <img
              src="/assets/service7.png"
              alt="Off-Roading"
              className="static-image"
            />
          </div>
        </div>
      </div>
    </PageTransition>
  );
};

export default OffRoading;
