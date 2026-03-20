import dotenv from "dotenv";
import express from "express";
import mongoose from "mongoose";
import session from "express-session";
import passport from "passport";
import path from "path";
import { fileURLToPath } from "url";
import cookieParser from "cookie-parser";
import dns from "dns";
import connectDB from "./utils/db.js";
import "./config/passport.js";
import authRoutes from "./routes/auth.js";
import indexRoutes from "./routes/index.js";
import authenticateJWT from "./middlewares/authMiddleware.js";

dns.setServers(["1.1.1.1", "8.8.8.8"])

// Convert import.meta.url to __dirname equivalent
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Load env vars
dotenv.config();


// Passport Config


const app = express();



// Database Connection
connectDB()


// Middleware
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views")); // Explicitly set views directory
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cookieParser());

// Session
app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
  }),
);

// Passport init
app.use(passport.initialize());
app.use(passport.session());

// JWT Authentication Middleware
app.use(authenticateJWT);

// Global vars to access user in views
app.use((req, res, next) => {
  res.locals.user = req.user || null;
  next();
});

// Routes
app.use("/auth", authRoutes);
app.use("/", indexRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
