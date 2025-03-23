import React from "react";
import "../css/Brands.css"; // Import the CSS file
import PageWrapper from "../components/PageWrapper";
const Brands = () => {
  // Partnering Brands logos with names
  const partnerBrands = [
    { logo: "/assets/brand1.jpg", name: "Sony" },
    { logo: "/assets/brand1.jpg", name: "Samsung" },
    { logo: "/assets/brand1.jpg", name: "LG" },
    { logo: "/assets/brand1.jpg", name: "Bose" },
    { logo: "/assets/brand1.jpg", name: "JBL" },
    { logo: "/assets/brand1.jpg", name: "Harman" },
  ];

  // Other Brands logos with names
  const otherBrands = [
    { logo: "/assets/other1.jpg", name: "Levit8" },
    { logo: "/assets/other1.jpg", name: "Pioneer" },
    { logo: "/assets/other1.jpg", name: "Yamaha" },
    { logo: "/assets/other1.jpg", name: "Philips" },
    { logo: "/assets/other1.jpg", name: "Denon" },
    { logo: "/assets/other1.jpg", name: "Kenwood" },
    { logo: "/assets/other1.jpg", name: "Panasonic" },
    { logo: "/assets/other1.jpg", name: "Onkyo" },
    { logo: "/assets/other1.jpg", name: "Alpine" },
    { logo: "/assets/other1.jpg", name: "Marshall" },
  ];

  return (
    <PageWrapper>
    <div className="brands-container">
      {/* Partner Brands Section */}
      <div className="section-header">
        <h2 className="section-title">
          Partnering Brands in Our Collaboration
        </h2>
        <span className="red-line"></span>
      </div>
      <div className="partner brands-grid">
        {partnerBrands.map((brand, index) => (
          <div key={index} className="brand-card">
            <div className="brand-inner">
              <div className="brand-front">
                <img src={brand.logo} alt={brand.name} />
              </div>
              <div className="brand-back">
                <span>{brand.name}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Other Brands Section */}
      <div className="section-header">
        <h2 className="section-title">Other Brands We Deal In</h2>
        <span className="red-line"></span>
      </div>
      <div className="brands-grid">
        {otherBrands.map((brand, index) => (
          <div key={index} className="brand-card other">
            <div className="brand-inner">
              <div className="brand-front">
                <img src={brand.logo} alt={brand.name} />
              </div>
              <div className="brand-back">
                <span>{brand.name}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
    </PageWrapper>
  );
};

export default Brands;
