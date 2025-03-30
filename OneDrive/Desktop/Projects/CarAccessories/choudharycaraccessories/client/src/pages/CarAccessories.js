import React from "react";
import { useNavigate } from "react-router-dom";
import "../css/CarCustomization.css";
import PageTransition from "../components/PageTransition";

const CarAccessories = () => {
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

          {/* Static Image Section */}
          <div className="static-image-container">
            <img
              src="/assets/service5.jpeg"
              alt="Car Accessories"
              className="static-image"
            />
          </div>
        </div>
      </div>
    </PageTransition>
  );
};

export default CarAccessories;
