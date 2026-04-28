import dotenv from "dotenv";
dotenv.config(); // Load env vars first

import express from "express";
import session from "express-session";
import passport from "passport";
import path from "path";
import { fileURLToPath } from "url";
import cookieParser from "cookie-parser";
import dns from "dns";
import cors from 'cors';
import connectDB from "./utils/db.js";
import "./config/passport.js";
import authRoutes from "./routes/auth.js";
import indexRoutes from "./routes/index.js";
import userRoutes from "./routes/auth.js";
import aiRoutes from './routes/ai.js';
import campaignRoutes from './routes/campaign.js';
import adminRoutes from "./routes/admin.js";
import authenticateJWT from "./middlewares/authMiddleware.js";

const app = express();

// Convert import.meta.url to __dirname equivalent
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Set custom DNS servers
dns.setServers(["1.1.1.1", "8.8.8.8"]);

// Connect to MongoDB
connectDB();

// CORS - must be before all routes
app.use(cors({
  origin: 'http://localhost:5173',
  credentials: true
}));

// Core middleware - order matters
app.use(cookieParser()); // Parse cookies before JWT middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

// View engine setup
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// Session setup
app.use(session({
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: false,
}));

// Passport initialization
app.use(passport.initialize());
app.use(passport.session());

// JWT Authentication - runs on every request
app.use(authenticateJWT);

// Make user available in views
app.use((req, res, next) => {
  res.locals.user = req.user || null;
  next();
});

// Health check route
app.get("/health", (req, res) => {
  res.json({ success: true, message: "Server is running!" });
});

// API Routes
app.use("/auth", authRoutes);
app.use("/api/user", userRoutes);
app.use("/api/ai", aiRoutes);
app.use("/api/campaigns", campaignRoutes);
app.use("/api/admin", adminRoutes);
app.use("/", indexRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});