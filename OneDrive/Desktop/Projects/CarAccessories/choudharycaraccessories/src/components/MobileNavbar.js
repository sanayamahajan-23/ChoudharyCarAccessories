import React, { useState, useEffect } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import "../css/MobileNavbar.css";

const preloadPage = (page) => {
  import(`../pages/${page}`);
};

const MobileNavbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const location = useLocation();
  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]); // Close menu when route changes
  return (
    <>
      <nav className="mobile-navbar">
        <img src="/assets/logo.png" alt="Logo" className="logo" />

        <NavLink
          to="/book-us"
          className="appointment-btn"
          activeClassName="active"
          onMouseEnter={() => preloadPage("BookUs")}
        >
          BOOK US
        </NavLink>

        <div
          className={`hamburger ${menuOpen ? "active" : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <div className="bar"></div>
          <div className="bar"></div>
        </div>

        {/* Mobile Menu */}
        <div className={`mobile-menu ${menuOpen ? "open flip" : ""}`}>
          <ul>
            <li>
              <Link
                to="/"
                className={`nav-link ${
                  location.pathname === "/" ? "active" : ""
                }`}
                onMouseEnter={() => preloadPage("Home")}
              >
                HOME
              </Link>
            </li>
            <li className="navbar-item">
              <div
                className={`nav-link services-toggle ${
                  location.pathname.includes("/services/") ? "active" : ""
                }`}
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  setServicesOpen(!servicesOpen);
                }}
              >
                SERVICES
              </div>
              <ul className={`dropdown-menu ${servicesOpen ? "show" : ""}`}>
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
                  <Link
                    to="/car-care"
                    onMouseEnter={() => preloadPage("CarCare")}
                  >
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
            </li>

            <li>
              <Link
                to="/brands"
                className={`nav-link ${
                  location.pathname === "/brands" ? "active" : ""
                }`}
                onMouseEnter={() => preloadPage("Brands")}
              >
                BRANDS
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className={`nav-link ${
                  location.pathname === "/about" ? "active" : ""
                }`}
                onMouseEnter={() => preloadPage("About")}
              >
                ABOUT US
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className={`nav-link ${
                  location.pathname === "/contact" ? "active" : ""
                }`}
                onMouseEnter={() => preloadPage("Contact")}
              >
                CONTACT
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default MobileNavbar;
