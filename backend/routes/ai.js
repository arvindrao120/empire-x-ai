import express from 'express';
import { generateStrategy } from '../controllers/aiController.js';
import authenticateJWT from '../middlewares/authMiddleware.js';
import { protect } from '../middlewares/protectedMiddleware.js';

const router = express.Router();

router.post('/generate-strategy', authenticateJWT, protect, generateStrategy);

export default router;