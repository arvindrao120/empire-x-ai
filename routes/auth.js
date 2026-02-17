import express from "express";
import passport from "passport";

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
  (req, res) => {
    // Successful authentication, redirect profile.
    res.redirect("/profile");
  },
);

// Logout route
router.get("/logout", (req, res, next) => {
  req.logout((err) => {
    if (err) {
      return next(err);
    }
    res.redirect("/");
  });
});

export default router;
