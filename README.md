# Sanket Barhate Portfolio

A premium personal portfolio for Sanket Barhate, designed for Product Management, Business Analysis, and Full-Stack Development roles.

## Features

- Dark-first space UI with gradient glassmorphism and motion-led transitions
- Three.js particle hero scene and glitch text reveal
- Responsive React + Vite frontend with React Router v6
- Contact form powered by EmailJS for static deployment (optional Express backend is included in `/server`)
- Static blog cards, timeline section, skills dashboards, and embedded resume viewer

## Setup

1. Copy `.env.example` to `.env` and fill in your EmailJS values.
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the app locally:
   ```bash
   npm run dev
   ```

## Netlify Deployment

This project is ready to deploy as a static site on Netlify.

1. Push the repository to GitHub.
2. On Netlify, create a new site and connect your GitHub repository.
3. Set the build command to:
   ```bash
   npm run build
   ```
4. Set the publish directory to:
   ```bash
   dist
   ```
5. Add the following environment variables in Netlify site settings:
   - `VITE_EMAILJS_SERVICE_ID`
   - `VITE_EMAILJS_TEMPLATE_ID`
   - `VITE_EMAILJS_USER_ID`

The project already includes `netlify.toml` and `public/_redirects` so React Router client-side routing works correctly.

## Backend API

The current deployed frontend uses EmailJS directly for the contact form, so Netlify can host the site as a static app.

If you want to use the included Express backend in `/server`, deploy that separately to a Node.js host and update the frontend API endpoint accordingly.

## Notes

- Replace `public/resume.pdf` with your actual resume PDF for the resume page.
- Update `.env` with your MongoDB URI, email credentials, and EmailJS values for fallback form submission.
- The project uses a dark theme and custom cursor for a premium portfolio experience.
