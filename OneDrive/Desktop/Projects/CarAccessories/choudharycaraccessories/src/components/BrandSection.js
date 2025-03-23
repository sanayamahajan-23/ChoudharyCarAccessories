import React from "react";
import "../css/Brand.css";
const brandLogos = [
  "/assets/brand1.png",
  "/assets/brand2.png",
  "/assets/brand3.png",
  "/assets/brand4.png",
  "/assets/brand5.png",
  "/assets/brand6.png",
  "/assets/brand7.png",
  "/assets/brand8.png",
  "/assets/brand9.png",
];

const BrandsSection = () => {
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
      <button className="view-more-btn">VIEW MORE</button>
    </section>
  );
};

export default BrandsSection;
