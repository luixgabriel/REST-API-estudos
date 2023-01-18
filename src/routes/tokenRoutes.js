import { Router } from 'express';
import TokenController from '../controllers/TokenController';

const router = new Router();

router.get('/', TokenController.create);

export default router;
