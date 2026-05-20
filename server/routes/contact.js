const express = require('express');
const nodemailer = require('nodemailer');
const Message = require('../models/Message');

const router = express.Router();

router.post('/', async (req, res) => {
  const { name, email, subject, message } = req.body;

  if (!name || !email || !subject || !message) {
    return res.status(400).json({ message: 'All fields are required.' });
  }

  try {
    const newMessage = new Message({ name, email, subject, message });
    await newMessage.save();

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER,
      subject: `New contact from ${name}: ${subject}`,
      text: `${message}

From: ${name} <${email}>`,
    };

    await transporter.sendMail(mailOptions);
    return res.status(201).json({ message: 'Message sent successfully.' });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Unable to send message at this time.' });
  }
});

module.exports = router;
