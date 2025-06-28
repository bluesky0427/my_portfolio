# Hiro Tanaka Portfolio Website

A modern, interactive portfolio website built with React, TypeScript, and Tailwind CSS.

## Features

- **Interactive Background**: Dynamic particle system that responds to mouse movement
- **Responsive Design**: Optimized for all device sizes
- **Contact Form**: Working contact form with email notifications
- **Modern UI**: Beautiful gradients, animations, and micro-interactions
- **Performance Optimized**: Fast loading and smooth animations

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```

3. Set up environment variables:
   ```bash
   cp .env.example .env
   ```
   
4. Configure your email settings in `.env`:
   ```
   EMAIL_USER=your-email@gmail.com
   EMAIL_PASS=your-app-password
   ```

### Development

1. Start the development server:
   ```bash
   npm run dev
   ```

2. In a separate terminal, start the backend server:
   ```bash
   npm run server
   ```

3. Open [http://localhost:5173](http://localhost:5173) in your browser

### Production Build

1. Build the project:
   ```bash
   npm run build
   ```

2. Start the production server:
   ```bash
   npm run server
   ```

## Email Configuration

To enable the contact form, you'll need to:

1. Use a Gmail account or configure another email service
2. Generate an App Password for Gmail:
   - Go to Google Account settings
   - Enable 2-Factor Authentication
   - Generate an App Password for "Mail"
   - Use this password in your `.env` file

## Deployment

The site can be deployed to any platform that supports Node.js:

- **Netlify**: Use the build command `npm run build` and publish directory `dist`
- **Vercel**: Automatic deployment with GitHub integration
- **Railway/Render**: Full-stack deployment with backend support

## Technologies Used

- **Frontend**: React, TypeScript, Tailwind CSS, Vite
- **Backend**: Express.js, Nodemailer
- **Icons**: Lucide React
- **Animations**: CSS transitions and transforms
- **Email**: Nodemailer with Gmail SMTP

## Contact

For questions or collaboration opportunities, reach out through the contact form or email directly at danieltanaka0420@gmail.com.