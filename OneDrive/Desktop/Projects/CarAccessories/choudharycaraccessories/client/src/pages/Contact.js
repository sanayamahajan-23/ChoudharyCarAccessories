import React from "react";
import "../css/Contacts.css"; // Import the CSS file
import Contact from "../components/Contact";
import PageWrapper from "../components/PageWrapper";
const Contacts = () => {
  return (
    <PageWrapper>
      <div
        className="contacts-container"
        style={{ backgroundImage: `url("/assets/carbon-fibre.png")` }}
      >
        <div className="section-header">
          <h2 className="section-title">CONTACT US</h2>
          <span className="red-line"></span>
        </div>
        <Contact />
      </div>
    </PageWrapper>
  );
};

export default Contacts;
