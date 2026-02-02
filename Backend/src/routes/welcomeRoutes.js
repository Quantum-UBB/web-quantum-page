import { Router } from 'express';
import * as welcomeController from '../controllers/welcomeController.js';

const router = Router();

router.get('/', welcomeController.getWelcome);

export default router;
