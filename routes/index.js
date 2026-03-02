import express from "express";
import { renderHome, renderProfile } from "../controllers/pageController.js";

const router = express.Router();

router.get("/", renderHome);
router.get("/profile", renderProfile);

export default router;
