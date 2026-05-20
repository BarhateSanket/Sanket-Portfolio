# Sanket Barhate Portfolio

A premium personal portfolio for Sanket Barhate, designed for Product Management, Business Analysis, and Full-Stack Development roles.

## Features

- Dark-first space UI with gradient glassmorphism and motion-led transitions
- Three.js particle hero scene and glitch text reveal
- Responsive React + Vite frontend with React Router v6
- Contact API with Express, MongoDB persistence, and Nodemailer email delivery
- Static blog cards, timeline section, skills dashboards, and embedded resume viewer

## Setup

1. Copy `.env.example` to `.env`.
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the app:
   ```bash
   npm run dev
   ```

## Backend API

The backend runs on `http://localhost:5000` and exposes:

- `POST /api/contact`
- `GET /api/health`

## Notes

- Replace `public/resume.pdf` with your actual resume PDF for the resume page.
- Update `.env` with your MongoDB URI, email credentials, and EmailJS values for fallback form submission.
- The project uses a dark theme and custom cursor for a premium portfolio experience.
