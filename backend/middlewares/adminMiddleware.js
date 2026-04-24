import User from '../models/User.js';

const adminMiddleware = async (req, res, next) => {
    if (!req.user) return res.status(401).json({ success: false, message: "Unauthorized" });

    const user = await User.findById(req.user.id);
    if (!user || user.role !== 'admin') return res.status(403).json({ success: false, message: "Access denied" });

    next();
};

export default adminMiddleware; 