# SPDY Institute Backend (Express)

This backend provides API endpoints to support the SPDY Institute frontend.

## Features
- Express server with CORS and JSON body parsing
- dotenv for environment configuration
- Endpoints for courses, faculty, contact form, simple chat, and health check

## Endpoints
- GET `/api/health` → `{ status: 'ok', service: 'spdy-institute-backend', time }`
- GET `/api/courses` → `{ courses: Course[] }`
- GET `/api/faculty` → `{ faculty: Faculty[] }`
- POST `/api/contact` → body `{ firstName, lastName, email, phone?, subject, message }` → `{ success, message, data }`
- POST `/api/chat` → body `{ message }` → `{ reply }`

## Install & Run

1. Navigate to the server folder:

```bash
cd server
```

2. Copy the environment example and adjust if needed:

```bash
cp .env.example .env
# edit .env if your frontend runs on another port
```

3. Install dependencies:

```bash
npm install
```

4. Start the server in dev mode (with hot reload):

```bash
npm run dev
```

Or start normally:

```bash
npm start
```

The server starts by default on `http://localhost:4000`.

## Running frontend and backend together
- Frontend (Vite): `npm run dev` from the project root (defaults to `http://localhost:5173`).
- Backend: `npm run dev` from `server/`.

CORS is configured to allow the frontend origin from `CLIENT_ORIGIN` in `.env`.