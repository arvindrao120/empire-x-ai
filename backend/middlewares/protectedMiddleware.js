export const protect = (req, res, next) => {
  if (req.user) return next();
  res.status(401).json({ success: false, message: "Login required" });
};