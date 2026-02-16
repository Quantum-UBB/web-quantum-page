import { Router } from 'express';
import * as welcomeController from '../controllers/WelcomeController.js';

const router = Router();

router.get('/', welcomeController.getWelcome);

export default router;
