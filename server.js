import express from 'express';
import nodemailer from 'nodemailer';
import cors from 'cors';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, 'dist')));

// Email configuration
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER || 'danieltanaka0420@gmail.com',
    pass: process.env.EMAIL_PASS || 'your-app-password-here'
  }
});

// Verify email configuration on startup
transporter.verify((error, success) => {
  if (error) {
    console.log('Email configuration error:', error);
    console.log('Please check your EMAIL_USER and EMAIL_PASS environment variables');
  } else {
    console.log('Email server is ready to send messages');
  }
});

// Contact form endpoint
app.post('/api/contact', async (req, res) => {
  try {
    const { name, email, phone, message } = req.body;

    // Validate required fields
    if (!name || !email || !message) {
      return res.status(400).json({ 
        success: false, 
        message: 'Name, email, and message are required.' 
      });
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({ 
        success: false, 
        message: 'Please provide a valid email address.' 
      });
    }

    // Prepare email content
    const mailOptions = {
      from: process.env.EMAIL_USER || 'danieltanaka0420@gmail.com',
      to: 'danieltanaka0420@gmail.com',
      subject: `Portfolio Contact: Message from ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #7c3aed; border-bottom: 2px solid #7c3aed; padding-bottom: 10px;">
            New Contact Form Submission
          </h2>
          
          <div style="background-color: #f8fafc; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #334155; margin-top: 0;">Contact Information</h3>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
            <p><strong>Phone:</strong> ${phone || 'Not provided'}</p>
          </div>
          
          <div style="background-color: #f1f5f9; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #334155; margin-top: 0;">Message</h3>
            <p style="line-height: 1.6; white-space: pre-wrap;">${message}</p>
          </div>
          
          <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #e2e8f0; color: #64748b; font-size: 14px;">
            <p>This message was sent from your portfolio website contact form.</p>
            <p>Timestamp: ${new Date().toLocaleString()}</p>
          </div>
        </div>
      `,
      text: `
        New Contact Form Submission
        
        Name: ${name}
        Email: ${email}
        Phone: ${phone || 'Not provided'}
        
        Message:
        ${message}
        
        Sent from portfolio website at ${new Date().toLocaleString()}
      `
    };

    // Send auto-reply to the sender
    const autoReplyOptions = {
      from: process.env.EMAIL_USER || 'danieltanaka0420@gmail.com',
      to: email,
      subject: 'Thank you for contacting Hero Tanaka',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #7c3aed; border-bottom: 2px solid #7c3aed; padding-bottom: 10px;">
            Thank You for Your Message!
          </h2>
          
          <p>Hi ${name},</p>
          
          <p>Thank you for reaching out through my portfolio website. I've received your message and will get back to you as soon as possible, typically within 24 hours.</p>
          
          <div style="background-color: #f8fafc; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #334155; margin-top: 0;">Your Message Summary</h3>
            <p><strong>Subject:</strong> Portfolio Contact</p>
            <p><strong>Sent:</strong> ${new Date().toLocaleString()}</p>
            <p style="margin-top: 15px; padding-top: 15px; border-top: 1px solid #e2e8f0;">
              "${message.substring(0, 150)}${message.length > 150 ? '...' : ''}"
            </p>
          </div>
          
          <p>In the meantime, feel free to:</p>
          <ul>
            <li>Check out my latest projects on <a href="https://github.com/bluesky0427" style="color: #7c3aed;">GitHub</a></li>
            <li>Schedule a direct meeting via <a href="https://calendly.com/danieltanaka0420/30min" style="color: #7c3aed;">Calendly</a></li>
            <li>Connect with me on professional networks</li>
          </ul>
          
          <p>Looking forward to our conversation!</p>
          
          <p>Best regards,<br>
          <strong>Hero Tanaka</strong><br>
          Senior Software Engineer</p>
          
          <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #e2e8f0; color: #64748b; font-size: 14px;">
            <p>This is an automated response. Please do not reply to this email.</p>
          </div>
        </div>
      `
    };

    // Send both emails
    await transporter.sendMail(mailOptions);
    await transporter.sendMail(autoReplyOptions);

    res.json({ 
      success: true, 
      message: 'Message sent successfully! You should receive a confirmation email shortly.' 
    });

  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({ 
      success: false, 
      message: 'Failed to send message. Please try again or contact me directly at danieltanaka0420@gmail.com' 
    });
  }
});

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.json({ status: 'OK', timestamp: new Date().toISOString() });
});

// Serve React app for all other routes
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
  console.log(`Frontend available at: http://localhost:${PORT}`);
  console.log(`API available at: http://localhost:${PORT}/api`);
});