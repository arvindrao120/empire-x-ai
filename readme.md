# EMPIRE-X AI

**Empire-X** is an advanced web application designed to help businesses oversee, analyze, and automate their Meta (Facebook) advertising campaigns using state-of-the-art AI. The platform provides a full command center interface for ad account management coupled with intelligent, AI-generated strategy recommendations via Google Gemini and Groq integrations.

## 🚀 Key Features

* **Facebook Authentication & Meta Graph Integration:** Secure OAuth login via Passport.js parsing Meta profiles and tokens, with robust Meta Ad Data synchronization and profile photos integration.
* **Ad Account Management:** Seamlessly pulls and visualizes data from your Facebook Ad Accounts.
* **AI-Powered Strategies:** Integrates with `@google/generative-ai` and `groq-sdk` to automatically generate highly tailored marketing and conversion strategies via a dedicated AI Strategy Component.
* **Command Center Dashboard:** A highly interactive, customizable React frontend powered by Framer Motion animations and a sleek red/black minimalist dark theme.
* **Modular Analytics Dashboard:** Dynamic, highly animated analytics layouts for a premium data review experience.
* **Campaign Oversight & Data Model:** Comprehensive tracking for Facebook/Meta campaigns, ad sets, budgets, and real-time operations, backed by a robust Mongoose schema.
* **Consistent & Responsive UI:** A seamless sidebar and responsive navigation mapping across all core routes, guaranteeing a native-like experience on any screen.
* **Admin & User Settings Panel:** Dedicated admin views for managing users, tracking roles, and comprehensive settings for profile customization.

## 🛠️ Tech Stack

### Frontend (Client)
* **Framework:** React 19 (via Vite)
* **Routing:** React Router v7 
* **Styling:** TailwindCSS v4 with a unified dark-mode design system
* **Animations:** Framer Motion
* **Charts & Data Viz:** Recharts
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

```text
empire-x-ai/
├── backend/                  # Express server & API endpoints
│   ├── config/               # Passport and DB configurations
│   ├── controllers/          # Business logic (e.g., Auth, Ads, AI, Admin, Settings)
│   ├── middlewares/          # Custom request middlewares
│   ├── models/               # Mongoose schemas (User, Campaign, AIStrategy)
│   ├── routes/               # Modular Express router files (ai.js, auth.js, campaign.js, admin.js)
│   ├── utils/                # Utility helpers (db.js)
│   ├── views/                # EJS server side templates
│   ├── app.js                # Core Express application entry point
│   ├── package.json          # Server dependencies
│   └── README.md             # Backend documentation
├── frontend/                 # React client Application
│   ├── public/               # Static icons and visuals
│   ├── src/
│   │   ├── api/              # Axios configuration & standardized fetch calls
│   │   ├── assets/           # Media and global static files
│   │   ├── components/       # Reusable modular components
│   │   │   ├── admin/        # Admin panel components
│   │   │   ├── analytics/    # Animated Charts, Metrics, Demographics
│   │   │   ├── campaigns/    # Active operations, AI Command Form
│   │   │   ├── common/       # Access control and shared UI elements
│   │   │   ├── dashboard/    # Core layout, Home elements, Sidebar setup
│   │   │   ├── layout/       # App-wide visual shells (Navigation, Container)
│   │   │   ├── sections/     # Modular Landing Page sections
│   │   │   └── settings/     # User settings and profile management
│   │   ├── context/          # React Context Providers (AuthContext)
│   │   ├── pages/            # Core routing views (Dashboard, Campaigns, Landing, Login, Admin, Setting)
│   │   ├── utils/            # Animation variants and tailwind mergings
│   │   ├── App.jsx           # Master router orchestrator
│   │   ├── main.jsx          # React DOM mounting
│   │   └── index.css         # Tailwind directives and CSS Variables
│   ├── package.json          # Client dependencies
│   └── README.md             # Frontend documentation
└── readme.md                 # You are here
```

## 🔒 Security Summary
* Sensitive route access on the frontend is explicitly wrapped by a `<ProtectedRoute>` layout requiring active Session/JWT context.
* API rate limiting and standard CORS protocols protect the resource backend.
* Meta OAuth tokens are processed directly server-side and are NEVER needlessly exposed to client JavaScript. 
* Admin routes are protected to ensure only authenticated administrative users have access to system-wide data.

---
**Author:** Arvind Yadav  
