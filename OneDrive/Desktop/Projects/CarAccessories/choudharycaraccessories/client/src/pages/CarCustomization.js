import React from "react";
import { useNavigate } from "react-router-dom";
import "../css/CarCustomization.css";
import PageTransition from "../components/PageTransition";

const CarCustomization = () => {
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
            <h1 className="service-title">Car Customization</h1>
            <div className="sub-service-list">
              <p>Custom Made Headlights</p>
              <p>Custom Made Taillights</p>
              <p>Custom Made Exhaust</p>
              <p>Custom Made Reflectors</p>
              <p>Custom Made Splitters</p>
              <p>Custom Made Front Grill</p>
              <p>ORVM Batman Covers</p>
              <p>Custom Made Side Stands</p>
              <p>Roof Rails</p>
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
              src="/assets/service6.png"
              alt="Service"
              className="static-image"
            />
          </div>
        </div>
      </div>
    </PageTransition>
  );
};

export default CarCustomization;
