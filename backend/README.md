# Roam Backend API

This is the backend API for the Roam contact form integration with Resend email service.

## Setup Instructions

### 1. Environment Variables

Create a `.env` file in the backend directory with the following content:

```env
# Resend Configuration
RESEND_API_KEY=re_GwCasS6w_PDFhqdrZTTwejJScPYxZ3Jus

# Server Configuration
PORT=3001
NODE_ENV=development

# Frontend URL (for CORS)
FRONTEND_URL=http://localhost:5173

# Email Configuration
FROM_EMAIL=no-reply.pickroam.com
TO_EMAIL=roamtechnologiesltd@gmail.com
```

### 2. Running the Server

```bash
# Development mode (with auto-restart)
npm run dev

# Production mode
npm start
```

The server will start on port 3001 by default.

### 3. API Endpoints

- `GET /health` - Health check endpoint
- `POST /api/contact` - Contact form submission endpoint

### 4. Contact Form Integration

The contact form sends data to `http://localhost:3001/api/contact` with the following structure:

```json
{
  "firstName": "string (required)",
  "lastName": "string (required)", 
  "email": "string (required)",
  "company": "string (optional)",
  "subject": "string (required)",
  "category": "string (optional)",
  "message": "string (required)"
}
```

### 5. Email Configuration

- **From Email**: no-reply.pickroam.com
- **To Email**: roamtechnologiesltd@gmail.com
- **Reply-To**: Uses the sender's email for direct replies

## Dependencies

- express: Web framework
- cors: Cross-origin resource sharing
- dotenv: Environment variable management
- resend: Email service integration

## Development

The backend uses ES modules and includes:
- Form validation
- Email formatting with HTML templates
- Error handling
- CORS configuration for frontend integration
