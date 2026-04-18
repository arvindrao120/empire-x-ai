import express from 'express';
import { generateStrategy, getStrategies } from '../controllers/aiStrategyController.js';
import authenticateJWT from '../middlewares/authMiddleware.js';
import { protect } from '../middlewares/protectedMiddleware.js';

const router = express.Router();

router.post('/generate-strategy', authenticateJWT, protect, generateStrategy);
router.get('/strategies', authenticateJWT, protect, getStrategies);


export default router;