import jwt from "jsonwebtoken";
import User from "../models/User.js";

const authenticateJWT = async (req, res, next) => {
    const token = req.cookies.token;
    if (token) {
        try {
            const decoded = jwt.verify(
                token,
                process.env.JWT_SECRET || "fallback_secret",
            );
            const user = await User.findById(decoded.id);
            if (user) {
                req.user = user;
            }
        } catch (err) {
            console.error("JWT verification failed:", err.message);
        }
    }
    next();
};

export default authenticateJWT;
