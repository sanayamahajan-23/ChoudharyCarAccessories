import React, { useState, useEffect } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import "../css/ServiceModal.css";
const ServicesModal = ({ isOpen, onClose }) => {
  const [showAnimation, setShowAnimation] = useState(false);
  const preloadPage = (page) => {
    import(`../pages/${page}`);
  };

  useEffect(() => {
    if (isOpen) {
      setShowAnimation(true);
    } else {
      setTimeout(() => setShowAnimation(false), 500); // Wait for animation to complete
    }
  }, [isOpen]);

  if (!isOpen && !showAnimation) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div
        className={`modal-content ${isOpen ? "flip-in" : "flip-out"}`}
        onClick={(e) => e.stopPropagation()}
      >
        <h2>SERVICES</h2>
        <span className="modal-close-btn" onClick={onClose}>
          &times;
        </span>
        <ul>
          <li>
            <Link
              to="/car-customization"
              onMouseEnter={() => preloadPage("CarCustomization")}
            >
              Car Customization
            </Link>
          </li>
          <li>
            <Link
              to="/music-system"
              onMouseEnter={() => preloadPage("MusicSystem")}
            >
              Music System Upgradation
            </Link>
          </li>
          <li>
            <Link
              to="/lighting-solutions"
              onMouseEnter={() => preloadPage("LightingSolutions")}
            >
              Lighting Solutions
            </Link>
          </li>
          <li>
            <Link to="/car-care" onMouseEnter={() => preloadPage("CarCare")}>
              Car Care
            </Link>
          </li>
          <li>
            <Link
              to="/car-accessories"
              onMouseEnter={() => preloadPage("CarAccessories")}
            >
              Car Accessories
            </Link>
          </li>
          <li>
            <Link
              to="/interior-upgradation"
              onMouseEnter={() => preloadPage("InteriorUpgradation")}
            >
              Interior Upgradation
            </Link>
          </li>
          <li>
            <Link
              to="/off-roading"
              onMouseEnter={() => preloadPage("OffRoading")}
            >
              Off Roading Trail Trek
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ServicesModal;
