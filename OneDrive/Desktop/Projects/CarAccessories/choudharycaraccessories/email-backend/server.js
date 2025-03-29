require("dotenv").config();
const express = require("express");
const cors = require("cors");
const nodemailer = require("nodemailer");
const path = require("path");
const app = express();
app.use(cors());
app.use(express.json());

// ⚡️ Setup Nodemailer Transporter
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});
const _dirname = path.dirname("")
const buildPath = path.join(__dirname, "../client/build")
app.use(express.static(buildPath))
app.get("/*", function (req, res) {
  res.sendFile(
    path.join(__dirname, "../client/build/index.html"),
    function (err) {
      if (err) {
        res.status(500).send(err);
      }
    }
  );
})
// 📩 Contact Form Email Route
app.post("/send-email", async (req, res) => {
  const { name, email, message } = req.body;

  try {
    await transporter.sendMail({
      from: `"${name}" <${email}>`,
      to: process.env.RECEIVER_EMAIL,
      subject: `New Contact Form Message from ${name}`,
      text: message,
    });

    res.status(200).json({ message: "Email sent successfully!" });
  } catch (error) {
    console.error("Email Error:", error);
    res.status(500).json({ error: "Failed to send email" });
  }
});

// 📅 Book Us Form Email Route
app.post("/book-appointment", async (req, res) => {
  const { name, email, phone, service, subService, date, time } = req.body;

  // Ensure required fields are provided
  if (!name || !phone || !service || !date || !time) {
    return res.status(400).json({ error: "Missing required fields" });
  }

  const appointmentMessage = `
    📌 New Booking Request:
    - Name: ${name}
    - Phone: ${phone}
    - Email: ${email || "Not provided"}
    - Service: ${service}
    - Sub-Service: ${subService || "Not selected"}
    - Date: ${date}
    - Time: ${time}
  `;

  try {
    await transporter.sendMail({
      from: `"${name}" <${email || process.env.EMAIL_USER}>`,
      to: process.env.RECEIVER_EMAIL,
      subject: `New Booking Request from ${name}`,
      text: appointmentMessage,
    });

    res.status(200).json({ message: "Booking request sent successfully!" });
  } catch (error) {
    console.error("Booking Email Error:", error);
    res.status(500).json({ error: "Failed to send booking request" });
  }
});

// 🌍 Start Server
app.listen(5000, () => console.log("Server running on port 5000"));
