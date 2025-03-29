import React from "react";
import "../css/Brands.css"; // Import the CSS file
import PageWrapper from "../components/PageWrapper";
const Brands = () => {
  // Partnering Brands logos with names
  const partnerBrands = [
    { logo: "/assets/brand1.jpg", name: "Sony E5" },
    { logo: "/assets/brand2.png", name: "Azoom" },
    { logo: "/assets/brand3.jpg", name: "Cardi" },
    { logo: "/assets/brand4.jpg", name: "HyperSonic" },
    { logo: "/assets/brand5.jpg", name: "Geesonic" },
    { logo: "/assets/brand6.jpg", name: "Go Mechanic" },
  ];

  // Other Brands logos with names
  const otherBrands = [
    { logo: "/assets/other1.png", name: "Pioneer" },
    { logo: "/assets/other2.jpg", name: "Infiniti" },
    { logo: "/assets/other3.png", name: "Alpine" },
    { logo: "/assets/other4.jpg", name: "Hella" },
    { logo: "/assets/other5.png", name: "RockFord" },
    { logo: "/assets/other6.png", name: "BlauPunkt" },
    { logo: "/assets/other7.png", name: "Uno Minda" },
    { logo: "/assets/other8.png", name: "3M" },
    { logo: "/assets/other9.png", name: "JBL" },
    { logo: "/assets/other10.png", name: "Sony" },
  ];

  return (
    <PageWrapper>
      <div
        className="brands-container"
        style={{ backgroundImage: `url("/assets/carbon-fibre.png")` }}
      >
        {/* Partner Brands Section */}
        <div className="section-header">
          <h2 className="section-title">Authorized Distributors</h2>
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
          <h2 className="section-title">Brands We Deal In</h2>
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
