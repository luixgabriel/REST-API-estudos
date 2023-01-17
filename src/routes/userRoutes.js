import { Router } from 'express';
import UserController from '../controllers/UserController';

const router = new Router();

router.post('/', UserController.create);
router.get('/listUsers', UserController.getUsers);
router.get('/show/:id', UserController.show);
router.put('/update/:id', UserController.update);
router.delete('/delete/:id', UserController.delete);

export default router;
