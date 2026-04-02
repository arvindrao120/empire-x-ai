import express from 'express';
import { createCampaign, getCampaigns } from '../controllers/campaignController.js';
import authenticateJWT from '../middlewares/authMiddleware.js';
import { protect } from '../middlewares/protectedMiddleware.js';

const router = express.Router();

router.post('/create', authenticateJWT, protect, createCampaign);
router.get('/', authenticateJWT, protect, getCampaigns);

export default router;