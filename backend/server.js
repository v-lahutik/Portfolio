import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import nodemailer from 'nodemailer';
import dotenv from 'dotenv';
import morgan from 'morgan';

dotenv.config();

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(morgan('dev'));

// Configure your email service
const transporter = nodemailer.createTransport({
    host: process.env.HOST,
    port: 465,
    secure: true, 
    auth: {
      user: process.env.EMAIL,
      pass: process.env.PASSWORD,
    },
  });

// Handle contact form submissions
app.post('/contact', (req, res) => {
  const { name, email, subject, message } = req.body;

  const mailOptions = {
    from: process.env.EMAIL,  // authenticated user for nodemailer
    to: process.env.EMAIL,    // email whoever should receive the contact message
    subject: subject,
    html: `
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Message:</strong></p>
      <p>${message}</p>
    `,  // Include sender's email in the body
    replyTo: email,           // Set the sender's email as the reply-to address
  };
  if(!name || !email || !subject || !message) {
    return res.status(400).send('All fields are required');
  }
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error('Error sending email:', error); // Log the error for more details
      return res.status(500).send('Error sending email');
    }
    res.status(200).send('Message sent successfully');
  });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
