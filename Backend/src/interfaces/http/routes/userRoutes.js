import { Router } from 'express';
import * as controller from '../controllers/UserController.js';

import { authMiddleware } from '../middlewares/authMiddleware.js';

const router = Router();

router.post('/login', controller.login);

// Rutas protegidas (identifican al usuario que intenta realizar la acción)
router.use(authMiddleware);

router.post('/register', controller.register);
router.patch('/assign-role', controller.changeRole);

export default router;
