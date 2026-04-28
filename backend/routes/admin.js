import express from "express";
import authenticateJWT from "../middlewares/authMiddleware.js";
import adminMiddleware from "../middlewares/adminMiddleware.js";
import { getStats, getAllUsers, getAllCampaigns, updateUserPlan, deleteUser, getUserDetail, updateUser } from '../controllers/adminController.js';


const router = express.Router();

router.get("/stats", authenticateJWT, adminMiddleware, getStats);
router.get("/users", authenticateJWT, adminMiddleware, getAllUsers);
router.get("/campaigns", authenticateJWT, adminMiddleware, getAllCampaigns);
router.put("/users/:id/plan", authenticateJWT, adminMiddleware, updateUserPlan);
router.delete("/users/:id", authenticateJWT, adminMiddleware, deleteUser);
router.get('/users/:id', authenticateJWT, adminMiddleware, getUserDetail);
router.put('/users/:id/update', authenticateJWT, adminMiddleware, updateUser);

export default router;