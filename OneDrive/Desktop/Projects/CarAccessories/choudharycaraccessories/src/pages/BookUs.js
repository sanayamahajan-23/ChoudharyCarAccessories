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
    "Car Customization": ["Engine Fixing", "Brake Repair", "Oil Change"],
    "Car Accessories": ["Chain Fixing", "Brake Check", "Wheel Alignment"],
    "Interior Upgradation": ["Engine Fixing", "Brake Repair", "Oil Change"],
    "Music System Upgradation": ["Engine Fixing", "Brake Repair", "Oil Change"],
    "Lighting Solutions": ["Engine Fixing", "Brake Repair", "Oil Change"],
    "Car Care": ["Engine Fixing", "Brake Repair", "Oil Change"],
    "Off Roading Trail Trek": ["Engine Fixing", "Brake Repair", "Oil Change"],
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
