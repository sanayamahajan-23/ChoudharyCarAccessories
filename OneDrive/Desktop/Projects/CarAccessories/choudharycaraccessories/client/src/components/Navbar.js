import React, { useState, lazy } from "react";
import { useLocation } from "react-router";
import { NavLink } from "react-router-dom";
import ServicesModal from "./ServicesModal";
import "../css/Navbar.css";

// Preload function to preload pages on hover
const preloadPage = (page) => {
  if (page !== "Services") {
    // Prevent loading Services as a page
    lazy(() => import(`../pages/${page}`));
  }
};

const Navbar = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  const location = useLocation();

  const handleServicesClick = (e) => {
    e.preventDefault();
    setModalOpen(true);
  };

  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <img src="/assets/logo.png" alt="Logo" className="logo" />

          <ul className="nav-menu">
            <li>
              <NavLink
                to="/"
                className="nav-link"
                activeClassName="active"
                onMouseEnter={() => preloadPage("Home")}
              >
                HOME
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/services"
                className="nav-link"
                activeClassName="active"
                onClick={handleServicesClick}
                onMouseEnter={() => preloadPage("Services")}
              >
                SERVICES
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/brands"
                className="nav-link"
                activeClassName="active"
                onMouseEnter={() => preloadPage("Brands")}
              >
                BRANDS
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                className="nav-link"
                activeClassName="active"
                onMouseEnter={() => preloadPage("About")}
              >
                ABOUT US
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contact"
                className="nav-link"
                activeClassName="active"
                onMouseEnter={() => preloadPage("Contact")}
              >
                CONTACT
              </NavLink>
            </li>
          </ul>

          <NavLink
            to="/book-us"
            className="appointment-btn"
            activeClassName="active"
            onMouseEnter={() => preloadPage("BookUs")}
          >
            BOOK US
          </NavLink>
        </div>
      </nav>

      <ServicesModal isOpen={isModalOpen} onClose={() => setModalOpen(false)} />
    </>
  );
};

export default Navbar;
