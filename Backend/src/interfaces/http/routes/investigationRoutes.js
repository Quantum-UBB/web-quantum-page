import { Router } from 'express';
import * as controller from '../controllers/InvestigationController.js';
import { authMiddleware } from '../middlewares/authMiddleware.js';

const router = Router();

// Aplicamos el middleware a todas las rutas de investigaciones para identificar al usuario
router.use(authMiddleware);

router.get('/', controller.getAll);
router.get('/tags', controller.getTags);
router.get('/my/:researcher', controller.getMy);
router.get('/:id', controller.getById);
router.post('/', controller.create);
router.patch('/:id/visibility', controller.toggleVisibility);

export default router;
