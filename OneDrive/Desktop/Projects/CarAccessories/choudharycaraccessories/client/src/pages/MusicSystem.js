import React from "react";
import { useNavigate } from "react-router-dom";
import "../css/CarCustomization.css";
import PageTransition from "../components/PageTransition";

const MusicSystem = () => {
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
            <h1 className="service-title">Music System Upgradation</h1>
            <div className="sub-service-list">
              <p>Android Auto Kits</p>
              <p>Wireless Apple & Android Car Play</p>
              <p>Bass Tubes</p>
              <p>Branded Music System Kits</p>
              <p>Custom Music System Kits Installation</p>
              <p>Variety of Amplifiers</p>
              <p>Branded Speakers</p>
              <p>Custom Speaker Solutions</p>
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
              src="/assets/service4.jpeg"
              alt="Music System"
              className="static-image"
            />
          </div>
        </div>
      </div>
    </PageTransition>
  );
};

export default MusicSystem;
