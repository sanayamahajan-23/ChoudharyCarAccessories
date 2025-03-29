import PageWrapper from "../components/PageWrapper";
import React, { useState } from "react";
import "../css/BookUs.css";

const BookUs = () => {
  const [service, setService] = useState("");
  const [subService, setSubService] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    subService: "",
    date: "",
    time: "",
  });

  // Update form fields dynamically
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value.trim() });
  };

  // Handle Service Selection
  const handleServiceChange = (e) => {
    setFormData({ ...formData, service: e.target.value, subService: "" }); // Reset sub-service
  };

  // Handle Sub-Service Selection
  const handleSubServiceChange = (e) => {
    setFormData({ ...formData, subService: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:5000/book-appointment", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert("Booking request sent successfully!");
        setFormData({
          name: "",
          email: "",
          phone: "",
          service: "",
          subService: "",
          date: "",
          time: "",
        });
      } else {
        alert("Failed to send booking request.");
      }
    } catch (error) {
      alert("Error sending booking request.");
    }
  };
  const services = {
    "Car Customization": [
      "Custom Made Headlights",
      "Custom Made Taillights",
      "Custom Made Exhaust",
      "Custom Made Reflectors",
      "Custom Made Splitters",
      "Custom Made Front Grill",
      "ORVM Batman Covers",
      "Custom Made Side Stands",
      "Roof Rails",
    ],
    "Car Accessories": [
      "Alloys Upgradation",
      "Wheel Cover Installation",
      "Center Locking",
      "Power Window Upgradation",
      "Reverse Camera Installation",
      "ORVMs / IRVMs Installation",
      "GPS Tracking Installation",
      "Converting Wired CarPlay to Wireless CarPlay",
      "360-Degree Camera Installation",
      "Steering Mounted Controls Installation",
      "Dash Cam Installation",
      "Chargers (Wired / Wireless)",
      "Door Visors",
      "Mud Flaps",
      "Wipers",
      "Door Guards",
    ],
    "Interior Upgradation": [
      "Custom Made Seat Covers",
      "Ready to install Seat Covers",
      "Steering Covers",
      "Ambient Lighting",
      "Authorized Brand Damping Services",
      "Interior Leather Work",
      "Variety of Car Matting",
      "Car Flooring",
      "Car Curtains (Roller / Magnetic)",
    ],
    "Music System Upgradation": [
      "Android Auto Kits",
      "Wireless Apple & Android Car Play",
      "Bass Tubes",
      "Branded Music System Kits",
      "Custom Music System Kits Installation",
      "Variety of Amplifiers",
      "Branded Speakers",
      "Custom Speaker Solutions",
    ],
    "Lighting Solutions": [
      "Headlight Upgradation",
      "Fog Lamps Upgradation",
      "Auxiliary Lights",
      "Modified Tail Lights",
      "Car Custom Reflectors / DRLs & Tail Lights",
      "Custom Light Addons",
    ],
    "Car Care": [
      "Car Compound Spray",
      "Car Compound Cream",
      "Body Covers",
      "Dashboard Polish",
      "Tyre Coatings",
      "Body Chrome",
      "Ceramic Coating",
      "Car Perfumes",
      "Car Humidifiers",
      "Car Décor Accessories",
    ],
    "Off Roading Trail Trek": [
      "Custom Front / Back Bumpers",
      "Rubicon Bumper",
      "Engine Bottom Cover",
      "Snorkel (Functional / Non-Functional)",
      "Show Antenna",
      "Foot Rest",
      "Handle Grabber",
    ],
  };

  return (
    <PageWrapper>
      <div className="book-us-container">
        {/* Heading with Red Line */}
        <div className="book-us-header">
          <h2 className="book-us-title">BOOK US</h2>
          <span className="red-line"></span>
        </div>
        <div className="book-us-content">
          {/* Appointment Form */}
          <form className="appointment-form" onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your Name"
              required
            />
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Your Phone Number"
              required
            />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Your Email (Optional)"
            />

            {/* Service Selection */}
            <select
              name="service"
              onChange={handleServiceChange}
              value={formData.service}
              required
            >
              <option value="">Select Service Category</option>
              {Object.keys(services).map((serviceOption) => (
                <option key={serviceOption} value={serviceOption}>
                  {serviceOption}
                </option>
              ))}
            </select>

            {/* Sub-Service Selection */}
            {formData.service && (
              <select
                name="subService"
                onChange={handleSubServiceChange}
                value={formData.subService}
                required
              >
                <option value="">Select Sub-Service</option>
                {services[formData.service].map((sub) => (
                  <option key={sub} value={sub}>
                    {sub}
                  </option>
                ))}
              </select>
            )}

            {/* Date & Time Selection */}
            <input
              type="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
              required
            />
            <input
              type="time"
              name="time"
              value={formData.time}
              onChange={handleChange}
              required
            />

            {/* Submit Button */}
            <button type="submit">Submit</button>
          </form>

          {/* Contact Info */}
          <div className="other-ways">
            {/* Book an Appointment Button (Above Contact) */}
            <a href="tel:+1234567890" className="book-appointment-btn">
              Book an Appointment
            </a>
            <div className="other-ways-container">
              <div className="other-ways-header">Other Ways to Reach Us</div>
              <div className="other-ways-content">
                <p>Phone 1: +1234567890</p>
                <p>Phone 2: +0987654321</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </PageWrapper>
  );
};

export default BookUs;
