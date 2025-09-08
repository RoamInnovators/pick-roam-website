# Roam - Workforce Monitoring Platform

A comprehensive workforce monitoring solution with real-time tracking, QR code check-ins, incident reporting, and digital occurrence books.

## Features

- **Real-time GPS Tracking**: Monitor field personnel locations
- **QR Code Check-ins**: Streamlined attendance management
- **Incident Reporting**: Quick incident logging with photo evidence
- **Digital Occurrence Books**: Replace paper logs with digital records
- **Role-based Dashboards**: Tailored interfaces for different user types
- **Contact Form Integration**: Seamless communication with Resend email service

## Tech Stack

- **Frontend**: React, TypeScript, Tailwind CSS, Vite
- **Backend**: Node.js, Express
- **Email Service**: Resend
- **UI Components**: Radix UI, Lucide React

## Getting Started

1. Clone this repository
2. Install dependencies: `npm install`
3. Start the development server: `npm run dev`
4. Open [http://localhost:8080](http://localhost:8080) with your browser

## Backend Setup

1. Navigate to the backend directory: `cd backend`
2. Install dependencies: `npm install`
3. Create a `.env` file with your Resend API key
4. Start the backend server: `npm run dev`

## Project Structure

```
├── src/
│   ├── components/     # React components
│   ├── pages/         # Page components
│   ├── hooks/         # Custom React hooks
│   ├── lib/           # Utility functions
│   └── ui/            # UI components
├── backend/
│   ├── api/           # API endpoints
│   └── server.js      # Express server
├── public/            # Static assets
└── package.json       # Dependencies and scripts
```

## Deployment

See the deployment instructions provided in the chat for cPanel deployment.