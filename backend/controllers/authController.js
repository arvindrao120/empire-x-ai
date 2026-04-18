import jwt from "jsonwebtoken";
import User from "../models/User.js";

// Local Register controller
export const registerUser = async (req, res, next) => {
    try {
        const { email, password, name } = req.body;

        if (!email || !password || !name) {
            return res.status(400).json({
                success: false,
                message: "Please provide all required fields (email, password, name)"
            });
        }

        let user = await User.findOne({ email });

        if (user) {
            return res.status(409).json({
                success: false,
                message: "User already exists with this email"
            });
        }

        user = new User({ email, password, name: { givenName: name } });
        await user.save();

        const token = jwt.sign(
            { id: user._id },
            process.env.JWT_SECRET || "fallback_secret",
            {
                expiresIn: "1h",
            },
        );

        res.cookie("token", token, {
            httpOnly: true,
            secure: process.env.NODE_ENV === "production",
            sameSite: process.env.NODE_ENV === "production" ? "none" : "lax",
            maxAge: 60 * 60 * 1000 // 1 hour
        });

        return res.status(201).json({
            success: true,
            message: "User registered successfully",
            data: {
                id: user._id,
                email: user.email,
                name: user.name
            }
        });
    } catch (err) {
        console.error("Registration Error:", err);
        return res.status(500).json({
            success: false,
            message: "Internal server error during registration",
            error: process.env.NODE_ENV === "development" ? err.message : undefined
        });
    }
};

// Local Login controller
export const loginUser = async (req, res, next) => {
    try {
        const { email, password } = req.body;

        if (!email || !password) {
            return res.status(400).json({
                success: false,
                message: "Please provide both email and password"
            });
        }

        const user = await User.findOne({ email });

        if (!user) {
            return res.status(401).json({
                success: false,
                message: "Invalid email or password"
            });
        }

        const isMatch = await user.comparePassword(password);
        if (!isMatch) {
            return res.status(401).json({
                success: false,
                message: "Invalid email or password"
            });
        }

        const token = jwt.sign(
            { id: user._id },
            process.env.JWT_SECRET || "fallback_secret",
            {
                expiresIn: "1h",
            },
        );

        res.cookie("token", token, {
            httpOnly: true,
            secure: process.env.NODE_ENV === "production",
            sameSite: process.env.NODE_ENV === "production" ? "none" : "lax",
            maxAge: 60 * 60 * 1000 // 1 hour
        });

        return res.status(200).json({
            success: true,
            message: "Logged in successfully",
            data: {
                id: user._id,
                email: user.email,
                name: user.name
            }
        });
    } catch (err) {
        console.error("Login Error:", err);
        return res.status(500).json({
            success: false,
            message: "Internal server error during login",
            error: process.env.NODE_ENV === "development" ? err.message : undefined
        });
    }
};

// Logout controller
export const logoutUser = (req, res, next) => {
    try {
        res.clearCookie("token", {
            httpOnly: true,
            secure: process.env.NODE_ENV === "production",
            sameSite: process.env.NODE_ENV === "production" ? "none" : "lax",
        });

        // If using passport, req.logout will be present
        if (req.logout) {
            req.logout((err) => {
                if (err) {
                    console.error("Logout Error:", err);
                    return res.status(500).json({
                        success: false,
                        message: "Error during passport logout",
                        error: process.env.NODE_ENV === "development" ? err.message : undefined
                    });
                }
                return res.status(200).json({
                    success: true,
                    message: "Logged out successfully"
                });
            });
        } else {
            return res.status(200).json({
                success: true,
                message: "Logged out successfully"
            });
        }
    } catch (err) {
        console.error("Logout Error:", err);
        return res.status(500).json({
            success: false,
            message: "Internal server error during logout",
            error: process.env.NODE_ENV === "development" ? err.message : undefined
        });
    }
};

// Facebook callback controller
export const facebookCallback = (req, res) => {
    // For Facebook OAuth, a redirect to frontend URL works best
    const frontendUrl = process.env.FRONTEND_URL || "";
    // Successful authentication, redirect to frontend application
    res.redirect(`${frontendUrl}/dashboard`);
};

// Get current user controller
export const getMe = async (req, res, next) => {
    try {
        if (!req.user) {
            return res.status(401).json({
                success: false,
                message: "Not authenticated"
            });
        }
        return res.status(200).json({
            success: true,
            data: req.user
        });
    } catch (err) {
        console.error("Get Me Error:", err);
        return res.status(500).json({
            success: false,
            message: "Internal server error fetching user details",
            error: process.env.NODE_ENV === "development" ? err.message : undefined
        });
    }
};


// Update Profile controller
export const updateProfile = async (req, res) => {
  try {
    const { displayName, email, username } = req.body;
    const userId = req.user._id;

    // Email unique check
    if (email) {
      const emailExists = await User.findOne({ email, _id: { $ne: userId } });
      if (emailExists) {
        return res.status(400).json({ success: false, message: "Email already in use by another account" });
      }
    }

    // Username unique check
    if (username) {
      const usernameExists = await User.findOne({ username, _id: { $ne: userId } });
      if (usernameExists) {
        return res.status(400).json({ success: false, message: "Username already taken" });
      }
    }

    const updated = await User.findByIdAndUpdate(
      userId,
      { ...(displayName && { displayName }), ...(email && { email }), ...(username && { username }) },
      { new: true, runValidators: true }
    ).select('-accessToken -password');

    return res.status(200).json({ success: true, data: updated });

  } catch (err) {
    console.error("Update Profile Error:", err);
    return res.status(500).json({
      success: false,
      message: "Internal server error during profile update",
      error: process.env.NODE_ENV === "development" ? err.message : undefined
    });
  }
};
