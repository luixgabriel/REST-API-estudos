import { Router } from 'express';
import multer from 'multer';
import fotoController from '../controllers/FotoController';
import multerConfig from '../config/multerConfig';

const upload = multer(multerConfig);
const router = new Router();

router.post('/', upload.single('foto'), fotoController.upload);

export default router;
