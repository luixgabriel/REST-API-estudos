import Aluno from '../models/Aluno';

class AlunoController {
  async index(req, res) {
    const aluno = await Aluno.findAll();
    return res.json(aluno);
  }
}

export default new AlunoController();
