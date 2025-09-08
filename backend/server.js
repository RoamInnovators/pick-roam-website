import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import contactHandler from './api/contact.js';

// Load environment variables
dotenv.config();

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(cors({
  origin: ['http://localhost:5173', 'http://localhost:8080', 'http://localhost:3000', 'https://pickroam.com'],
  credentials: true
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Health check endpoint
app.get('/health', (req, res) => {
  res.json({ status: 'OK', message: 'Roam Backend Server is running' });
});

// Contact form endpoint
app.post('/api/contact', contactHandler);

// Error handling middleware
app.use((err, req, res, next) => {
  console.error('Error:', err);
  res.status(500).json({ 
    error: 'Internal server error',
    message: err.message 
  });
});

// 404 handler
app.use('*', (req, res) => {
  res.status(404).json({ error: 'Endpoint not found' });
});

// Start server
app.listen(PORT, () => {
  console.log(`🚀 Roam Backend Server running on port ${PORT}`);
  console.log(`📧 Contact form endpoint: https://pickroam.com/backend/api/contact`);
  console.log(`🏥 Health check: https://pickroam.com/backend/health`);
  console.log(`🔑 Resend API Key loaded: ${process.env.RESEND_API_KEY ? 'Yes' : 'No'}`);
  console.log(`📧 From Email: ${process.env.FROM_EMAIL || 'contact@no-reply.pickroam.com'}`);
  console.log(`📧 To Email: ${process.env.TO_EMAIL || 'roamtechnologiesltd@gmail.com'}`);
});

export default app;
