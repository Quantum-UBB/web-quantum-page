import { Router } from 'express';
import * as controller from '../controllers/NewsController.js';
import { authMiddleware } from '../middlewares/authMiddleware.js';

const router = Router();

router.get('/', authMiddleware, controller.getAll);
router.get('/:id', authMiddleware, controller.getById);
router.post('/', authMiddleware, controller.create);
router.patch('/:id/status', authMiddleware, controller.updateStatus);
router.delete('/:id', authMiddleware, controller.remove);

export default router;
