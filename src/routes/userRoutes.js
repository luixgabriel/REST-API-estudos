import { Router } from 'express';
import UserController from '../controllers/UserController';
import loginRequired from '../middlewares/validateToken';

const router = new Router();

router.post('/', UserController.create);
router.get('/listUsers', loginRequired, UserController.getUsers);
router.get('/show/:id', UserController.show);
router.put('/update', loginRequired, UserController.update);
router.delete('/delete/:id', loginRequired, UserController.delete);

export default router;
