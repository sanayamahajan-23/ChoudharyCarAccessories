import React from "react";
import { useNavigate } from "react-router-dom";
import "../css/CarCustomization.css";
import PageTransition from "../components/PageTransition";

const LightingSolutions = () => {
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
            <h1 className="service-title">Lighting Solutions</h1>
            <div className="sub-service-list">
              <p>Headlight Upgradation</p>
              <p>Fog Lamps Upgradation</p>
              <p>Auxiliary Lights</p>
              <p>Modified Tail Lights</p>
              <p>Car Custom Reflectors / DRLs & Tail Lights</p>
              <p>Custom Light Addons</p>
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
              src="/assets/service1.jpeg"
              alt="Lighting Solutions"
              className="static-image"
            />
          </div>
        </div>
      </div>
    </PageTransition>
  );
};

export default LightingSolutions;
