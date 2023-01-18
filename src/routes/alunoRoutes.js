import { Router } from 'express';
import AlunoController from '../controllers/AlunoController';
import loginRequired from '../middlewares/validateToken';

const router = new Router();

router.get('/', AlunoController.index);
router.post('/create', loginRequired, AlunoController.create);
router.get('/show/:id', AlunoController.show);
router.put('/update/:id', loginRequired, AlunoController.update);
router.delete('/delete/:id', loginRequired, AlunoController.delete);

export default router;
