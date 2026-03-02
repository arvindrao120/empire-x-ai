import express from "express";
import passport from "passport";
import {
  registerUser,
  loginUser,
  logoutUser,
  facebookCallback,
} from "../controllers/authController.js";

const router = express.Router();

// Redirect to Facebook for authentication
router.get(
  "/facebook",
  passport.authenticate("facebook", { scope: ["email"] }),
);

// Facebook callback URL
router.get(
  "/facebook/callback",
  passport.authenticate("facebook", { failureRedirect: "/" }),
  facebookCallback,
);

// Local Register route
router.post("/register", registerUser);

// Local Login route
router.post("/login", loginUser);

// Logout route
router.get("/logout", logoutUser);

export default router;
