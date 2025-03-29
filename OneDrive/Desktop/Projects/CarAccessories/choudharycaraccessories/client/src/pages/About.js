import React, { useState } from "react";
import "../css/AboutUs.css";
import PageWrapper from "../components/PageWrapper";
const AboutUs = () => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <PageWrapper>
      <div
        className="about-section"
        style={{ backgroundImage: `url("/assets/carbon-fibre.png")` }}
      >
        <div className="container">
          <div class="about-title">
            <h1>ABOUT US</h1>
            <div class="red-line"></div>
          </div>

          {/* About Car Accessories Section */}
          <div className="about-content">
            <div className="about-text">
              <h3 className="message-title">What's Special About Us?</h3>
              <p className="message">
                "Choudhary Car Accessories provides high-quality car
                modifications and accessories. We specialize in premium
                upgrades, interior enhancements, lighting solutions, and much
                more to elevate your driving experience. Our goal is to merge
                aesthetics with functionality, offering top-tier solutions for
                car enthusiasts. From custom upholstery and high-performance
                sound systems to advanced security features and exterior styling
                kits, we bring you the latest trends in automobile
                customization. Whether you're looking for a sleek, sporty look
                or added comfort and convenience, our expert team ensures a
                seamless transformation of your vehicle. We take pride in
                delivering products that are not only stylish but also durable
                and performance-oriented. Experience the perfect blend of
                innovation and craftsmanship with Choudhary Car Accessories."
              </p>
              <ul>
                <li>
                  <strong>Premium Upgrades:</strong> Enhance your car’s look and
                  performance with top-tier modifications.
                </li>
                <li>
                  <strong>Interior Enhancements:</strong> Custom upholstery,
                  high-performance sound systems, and more.
                </li>
                <li>
                  <strong>Exterior Styling:</strong> Body kits, custom wraps,
                  spoilers, and alloy wheels for a sleek finish.
                </li>
                <li>
                  <strong>Comfort & Convenience:</strong> Smart infotainment
                  systems, climate control, and ergonomic seating.
                </li>
              </ul>
            </div>

            {/* Owner's Desk Flip Card */}
            <div className={`owner-card ${isFlipped ? "flipped" : ""}`}>
              <div className="card-inner">
                {/* Front Side */}
                <div className="card-front">
                  <h3>From the Owner's Desk</h3>
                  <img
                    src="/assets/owner.jpg"
                    alt="Owner"
                    className="owner-image"
                  />
                  <button className="flip-button" onClick={handleFlip}>
                    Flip to Read
                  </button>
                </div>
                {/* Back Side */}
                <div className="card-back">
                  <div className="red-overline"></div>
                  <p className="owner-message">
                    "At Choudhary Car Accessories, we are passionate about
                    delivering top-notch car customization services. Every car
                    deserves the best, and we are here to provide it with
                    quality, precision, and dedication. Thank you for trusting
                    us!"
                  </p>
                  <button className="flip-button" onClick={handleFlip}>
                    Back
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Service Icons - Hidden in Mobile View */}
          <div className="services">
            <a href="/car-customization" className="service-item">
              <div className="service-icon"></div>
              <p>
                Car <br />
                Customization
              </p>
            </a>
            <a href="/interior-upgradation" className="service-item">
              <div className="service-icon"></div>
              <p>
                Interior
                <br /> Upgrading
              </p>
            </a>
            <a href="/car-accessories" className="service-item">
              <div className="service-icon"></div>
              <p>
                Car
                <br /> Accessories
              </p>
            </a>
            <a href="/music-system" className="service-item">
              <div className="service-icon"></div>
              <p>
                Music System
                <br /> Upgrading
              </p>
            </a>
            <a href="/lighting-solutions" className="service-item">
              <div className="service-icon"></div>
              <p>
                Lighting <br /> Solutions
              </p>
            </a>
            <a href="/car-care" className="service-item">
              <div className="service-icon"></div>
              <p>
                Car
                <br /> Care
              </p>
            </a>
            <a href="/off-roading" className="service-item">
              <div className="service-icon"></div>
              <p>
                Off Roading <br /> Trail/Trek
              </p>
            </a>
          </div>
        </div>
      </div>
    </PageWrapper>
  );
};

export default AboutUs;
