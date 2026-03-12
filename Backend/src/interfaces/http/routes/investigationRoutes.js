import { Router } from 'express';
import * as controller from '../controllers/InvestigationController.js';
import { authMiddleware } from '../middlewares/authMiddleware.js';
import { upload } from '../middlewares/uploadMiddleware.js';

const router = Router();

// Aplicamos el middleware a todas las rutas de investigaciones para identificar al usuario
router.use(authMiddleware);

router.get('/', controller.getAll);
router.get('/tags', controller.getTags);
router.get('/my/:researcher', controller.getMy);
router.get('/:id', controller.getById);
router.post('/', upload.single('pdf'), controller.create);
router.patch('/:id/visibility', controller.toggleVisibility);

export default router;
