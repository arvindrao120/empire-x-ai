import dotenv from "dotenv";
import express from "express";
import mongoose from "mongoose";
import session from "express-session";
import passport from "passport";
import path from "path";
import { fileURLToPath } from "url";
import cookieParser from "cookie-parser";
// import connectDB from "./utils/db.js";

// Convert import.meta.url to __dirname equivalent
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Load env vars
dotenv.config();


// Passport Config
import "./config/passport.js";
import authRoutes from "./routes/auth.js";
import indexRoutes from "./routes/index.js";
import authenticateJWT from "./middlewares/authMiddleware.js";

const app = express();
console.log("hello");


// Database Connection


const mongoUri = process.env.MONGO_URI
console.log(mongoUri);


const db = () => mongoose.connect(mongoUri)
  .then(() => {
    console.log(" connected successfully");
  })
  .catch((error) => {
    console.log("connection failed", error);
  });




db()

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
