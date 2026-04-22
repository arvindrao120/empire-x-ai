import express from "express";
import passport from "passport";
import {
  registerUser,
  loginUser,
  logoutUser,
  facebookCallback,
  getMe,
  updateProfile,
} from "../controllers/authController.js";
import authenticateJWT from "../middlewares/authMiddleware.js";

const router = express.Router();

// Redirect to Facebook for authentication
router.get(
  "/facebook",
  passport.authenticate("facebook", {
    scope: [
      'email',
      'user_birthday',
      'user_gender',
      'user_location',
      'user_hometown',
      'user_photos',
      'user_posts',
      'ads_management',
      'ads_read'
    ]
  }),
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

// Get current user route
router.get("/me", authenticateJWT, getMe);
router.put("/update-profile", authenticateJWT, updateProfile);

export default router;
