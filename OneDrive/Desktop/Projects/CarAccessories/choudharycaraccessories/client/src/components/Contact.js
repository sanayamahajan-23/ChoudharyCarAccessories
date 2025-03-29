import React,{useState} from "react";
import "../css/Contact.css";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:5000/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert("Message sent successfully!");
        setFormData({ name: "", email: "", message: "" });
      } else {
        alert("Failed to send message.");
      }
    } catch (error) {
      alert("Error sending message.");
    }
  };

  return (
    <section className="contact-section">
      <div className="container">
        {/* Google Map */}
        <div className="map-container">
          <iframe
            className="google-map"
            src="https://maps.google.com/maps?width=600&amp;height=400&amp;hl=en&amp;q=choudhary car accessories, jammu&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
            loading="lazy"
          ></iframe>
        </div>

        <div className="contact-content">
          {/* Left: Contact Info */}
          <div className="contact-info">
            <img
              src="/assets/logo.png"
              alt="Brand Logo"
              className="brand-logo"
            />
            <p className="tagline">"Quality Accessories, Reliable Service."</p>
          </div>

          {/* Center: Contact Details */}
          <div className="contact-details">
            <div className="contact-item">
              <img src="/assets/location.png" alt="Location" className="icon" />{" "}
              <p>51/f shastri nagar , near nirankari bhawan,jammu</p>
            </div>
            <div className="contact-item">
              <img src="/assets/telephone.png" alt="Phone" className="icon" />{" "}
              <p>+91 9419237723</p>
            </div>
            <div className="contact-item">
              <img src="/assets/mail.png" alt="Email" className="icon" />{" "}
              <p>contact@choudharycaraccessories.com</p>
            </div>
          </div>

          {/* Right: Contact Form */}
          <div className="contact-form">
            <h2>Get in Touch</h2>
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your Name"
                className="input-field"
              />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Your Email"
                className="input-field"
              />
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Your Message"
                className="input-field textarea"
              ></textarea>
              <button type="submit" className="submit-btn">
                Send Message
              </button>
            </form>
          </div>
          <div className="social-icons">
            
            <a
              href="https://www.instagram.com/choudhary_car_accessories?igsh=MTM0Zmdhdzl6emZmZQ=="
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="/assets/instagram.png" alt="Instagram" />
            </a>
            <a
              href="https://wa.me/+919419237723"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="/assets/social.png" alt="WhatsApp" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
