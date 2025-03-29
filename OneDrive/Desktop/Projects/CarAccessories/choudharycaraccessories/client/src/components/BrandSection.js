import React from "react";
import "../css/Brand.css";
import { useNavigate } from "react-router-dom";
const brandLogos = [
  "/assets/brand-1.png",
  "/assets/brand-2.png",
  "/assets/brand-3.png",
  "/assets/brand-4.png",
  "/assets/brand-5.png",
  "/assets/brand-6.png",
  "/assets/brand-7.png",
  "/assets/brand-8.png",
  "/assets/brand-9.png",
];

const BrandsSection = () => {
  const navigate = useNavigate(); // Initialize navigate function

  const handleViewMore = () => {
    navigate("/brands"); // Navigate to /brands
  };
  return (
    <section className="brands-section">
      <div className="brands-content">
        {/* Left Image - Only for Desktop View */}
        <div className="brand-image-container">
          <img src="/assets/blackcar.jpg" alt="Car" className="brand-image" />
        </div>

        {/* Brand Grid */}
        <div className="brands-grid">
          {brandLogos.map((logo, index) => (
            <div key={index} className="brand-circle">
              <img
                src={logo}
                alt={`Brand ${index + 1}`}
                className="brand-logo"
              />
            </div>
          ))}
        </div>
      </div>

      {/* View More Button */}
      <button className="view-more-btn" onClick={handleViewMore}>
        VIEW MORE
      </button>
    </section>
  );
};

export default BrandsSection;
