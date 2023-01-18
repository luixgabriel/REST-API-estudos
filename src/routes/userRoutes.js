import { Router } from 'express';
import UserController from '../controllers/UserController';
import loginRequired from '../middlewares/validateToken';

const router = new Router();

router.post('/', UserController.create);
router.get('/listUsers', loginRequired, UserController.getUsers);
router.get('/show', UserController.show);
router.put('/update', loginRequired, UserController.update);
router.delete('/delete', loginRequired, UserController.delete);

export default router;
