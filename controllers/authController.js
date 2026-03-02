import jwt from "jsonwebtoken";
import User from "../models/User.js";

// Local Register controller
export const registerUser = async (req, res, next) => {
    try {
        const { email, password, name } = req.body;
        let user = await User.findOne({ email });

        if (user) {
            return res.status(400).send("User already exists");
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
        });
        res.redirect("/profile");
    } catch (err) {
        next(err);
    }
};

// Local Login controller
export const loginUser = async (req, res, next) => {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ email });

        if (!user) {
            return res.status(401).send("Invalid credentials");
        }

        const isMatch = await user.comparePassword(password);
        if (!isMatch) {
            return res.status(401).send("Invalid credentials");
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
        });
        res.redirect("/profile");
    } catch (err) {
        next(err);
    }
};

// Logout controller
export const logoutUser = (req, res, next) => {
    res.clearCookie("token");
    req.logout((err) => {
        if (err) {
            return next(err);
        }
        res.redirect("/");
    });
};

// Facebook callback controller
export const facebookCallback = (req, res) => {
    // Successful authentication, redirect profile.
    res.redirect("/profile");
};
