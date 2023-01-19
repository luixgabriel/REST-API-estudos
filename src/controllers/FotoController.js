import multer from 'multer';
import multerConfig from '../config/multerConfig';
import Foto from '../models/Foto';

const upload = multer(multerConfig).single('foto');

class FotoController {
  upload(req, res) {
    return upload(req, res, async (error) => {
      if (error) {
        return res.status(400).json({
          error: [error.code],
        });
      }

      try {
        const { originalname, filename } = req.file;
        const { aluno_id } = req.body;
        console.log(aluno_id);
        const foto = await Foto.create({ originalname, filename, aluno_id });
        return res.json(foto);
      } catch (err) {
        console.log(err);
        return res.status(400).json({
          errors: ['Aluno não existe'],
        });
      }
    });
  }
}
export default new FotoController();
