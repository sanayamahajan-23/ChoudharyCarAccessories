import React from "react";
import { useNavigate } from "react-router-dom";
import "../css/CarCustomization.css";
import PageTransition from "../components/PageTransition";

const CarCare = () => {
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
            <h1 className="service-title">Car Care</h1>
            <div className="sub-service-list">
              <p>Car Compound Spray</p>
              <p>Car Compound Cream</p>
              <p>Body Covers</p>
              <p>Dashboard Polish</p>
              <p>Tyre Coatings</p>
              <p>Body Chrome</p>
              <p>Ceramic Coating</p>
              <p>Car Perfumes</p>
              <p>Car Humidifiers</p>
              <p>Car Décor Accessories</p>
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
              src="/assets/service3.jpeg"
              alt="Car Care"
              className="static-image"
            />
          </div>
        </div>
      </div>
    </PageTransition>
  );
};

export default CarCare;
