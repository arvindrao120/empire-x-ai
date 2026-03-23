# EMPIRE-X AI

**Empire-X** is an advanced web application designed to help businesses oversee, analyze, and automate their Meta (Facebook) advertising campaigns using state-of-the-art AI. The platform provides a full command center interface for ad account management coupled with intelligent, AI-generated strategy recommendations via Google Gemini and Groq integrations.

## 🚀 Key Features

* **Facebook Authentication:** Secure OAuth login via Passport.js parsing Meta profiles and tokens.
* **Ad Account Management:** Seamlessly pulls and visualizes data from your Facebook Ad Accounts.
* **AI-Powered Strategies:** Integrates with `@google/generative-ai` and `groq-sdk` to automatically generate highly tailored marketing and conversion strategies.
* **Command Center Dashboard:** A highly interactive, customizable React frontend powered by Framer Motion animations and a sleek red/black minimalist dark theme.
* **Campaign Oversight:** Real-time visibility into all past and active advertising campaigns with high-level analytics overviews.
* **Role/Plan Tracking:** Dynamic tracking between user access levels seamlessly mapped in the MongoDB user schema.

## 🛠️ Tech Stack

### Frontend (Client)
* **Framework:** React 19 (via Vite)
* **Routing:** React Router v7 
* **Styling:** TailwindCSS v4 with custom UI components
* **Animations:** Framer Motion
* **Icons:** Lucide React
* **State/Requests:** Context API, Axios

### Backend (Server)
* **Runtime:** Node.js (v18+) & Express.js 5.x
* **Database:** MongoDB via Mongoose
* **Authentication:** JWT, Passport.js (Facebook Strategy), bcryptjs
* **AI Integration:** `@google/generative-ai`, `groq-sdk`

---

## 💻 Running Locally

### 1. Prerequisites 
Ensure you have the following installed to run this project:
- Node.js (v18 or higher recommended)
- MongoDB instance (local or Atlas)
- Properly configured Facebook App for OAuth flow
- Valid API keys for Google Gemini / Groq respectively

### 2. Environment Setup

* **Navigate to `/backend`:** 
  You will need an `.env` file referencing your application secrets:
  ```env
  PORT=5000
  MONGO_URI=your_mongodb_connection_string
  SESSION_SECRET=your_express_session_secret
  JWT_SECRET=your_jwt_signing_secret
  FACEBOOK_APP_ID=your_fb_app_id
  FACEBOOK_APP_SECRET=your_fb_app_secret
  FACEBOOK_CALLBACK_URL=http://localhost:5000/api/auth/facebook/callback
  FRONTEND_URL=http://localhost:5173
  GEMINI_API_KEY=your_google_ai_key
  GROQ_API_KEY=your_groq_api_key
  ```

### 3. Start Development Servers

You will need two separate terminal windows to run both the API and the React Client.

**Window 1: The Backend Engine**
```bash
cd backend
npm install
npm run dev
```

**Window 2: The Frontend Command Center**
```bash
cd frontend
npm install
npm run dev
```

Your React app will typically spin up at `http://localhost:5173`. Clicking login will route you through the backend layer, execute the Facebook authentication handshake, and immediately redirect you back into the protected `/dashboard`.

## 📂 Project Architecture

```
empire-x-ai/
├── backend/                  # Express server & API endpoints
│   ├── app.js                # Core Express application entry point
│   ├── routes/               # Modular Express router files
│   ├── controllers/          # Business logic (e.g., Auth, Ads, AI)
│   ├── models/               # Mongoose schemas (User, Campaigns, etc)
│   └── package.json    
├── frontend/                 # React client Application
│   ├── src/
│   │   ├── api/              # Axios configuration & standardized fetch calls
│   │   ├── components/       # Reusable layout and UI items (Sidebar, Layouts)
│   │   ├── context/          # React Context (AuthContext)
│   │   ├── pages/            # Core views (Dashboard, Landing, AI Strategy)
│   │   ├── App.jsx           # Master router orchestrator
│   │   └── index.css         # Tailwind initialization
│   └── package.json
└── readme.md                 # You are here
```

## 🔒 Security Summary
* Sensitive route access on the frontend is explicitly wrapped by a `<ProtectedRoute>` layout requiring active Session/JWT context.
* API rate limiting and standard CORS protocols protect the resource backend.
* Meta OAuth tokens are processed directly server-side and are NEVER needlessly exposed to client JavaScript. 

---
**Author:** Arvind Yadav  

