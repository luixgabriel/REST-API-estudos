import { Router } from 'express';
import multer from 'multer';
import fotoController from '../controllers/FotoController';
import multerConfig from '../config/multerConfig';
import loginRequired from '../middlewares/validateToken';

const upload = multer(multerConfig);
const router = new Router();

router.post('/', loginRequired, fotoController.upload);

export default router;
