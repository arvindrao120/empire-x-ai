import dotenv from "dotenv";
import express from "express";
import mongoose from "mongoose";
import session from "express-session";
import passport from "passport";
import path from "path";
import { fileURLToPath } from "url";

// Convert import.meta.url to __dirname equivalent
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Load env vars
dotenv.config();

// Passport Config
import "./config/passport.js";
import authRoutes from "./routes/auth.js";

const app = express();

// Database Connection
mongoose
  .connect(
    process.env.MONGO_URI || "mongodb://localhost:27017/facebook-auth-demo",
  )
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.error("MongoDB Connection Error:", err));

// Middleware
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views")); // Explicitly set views directory
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: false }));

// Session
app.use(
  session({
    secret: process.env.SESSION_SECRET || "secret_key",
    resave: false,
    saveUninitialized: false,
  }),
);

// Passport init
app.use(passport.initialize());
app.use(passport.session());

// Global vars to access user in views
app.use((req, res, next) => {
  res.locals.user = req.user || null;
  next();
});

// Routes
app.use("/auth", authRoutes);

app.get("/", (req, res) => {
  res.render("login");
});

// Protected Profile Route
app.get("/profile", (req, res) => {
  if (!req.isAuthenticated()) {
    return res.redirect("/");
  }
  res.render("profile", { user: req.user });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
