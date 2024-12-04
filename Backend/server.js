const express = require("express");
const nodemailer = require("nodemailer");
const bodyParser = require("body-parser");
const path = require("path");
const app = express();
const cors = require("cors");

app.use(cors());

app.use(
  cors({
    origin: "http://127.0.0.1:5500",
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);

app.use(bodyParser.json());

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "ordulucky330@gmail.com",
    pass: "fogf tnyk bzgl wjbo",
  },
});

app.post("/send-email", async (req, res) => {
  const { email, firstname, lastname } = req.body;

  const mailOptions = {
    from: "ordulucky330@gmail.com",
    to: email,
    subject: "Welcome to Our Conference",
    text: `Hello ${firstname},  ${lastname}\n\nWelcome to our conference! We're excited to have you on board.\n\nBest Regards,\nConference Team`,
  };

  try {
    await transporter.sendMail(mailOptions);
    res.status(200).send("Email sent successfully.");
  } catch (error) {
    console.error("Error sending email:", error);
    res.status(500).send("Failed to send email.");
  }
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
