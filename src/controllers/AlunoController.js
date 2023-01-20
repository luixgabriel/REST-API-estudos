import Aluno from '../models/Aluno';
import Foto from '../models/Foto';

class AlunoController {
  async index(req, res) {
    const aluno = await Aluno.findAll({
      order: [['id', 'DESC'], [Foto, 'id', 'DESC']],
      include: {
        model: Foto,
        attributes: ['filename'],
      },
    });
    return res.json(aluno);
  }

  async create(req, res) {
    try {
      const novoAluno = await Aluno.create(req.body);
      // const { id, nome, email } = novoUser;
      return res.status(200).json(novoAluno);
    } catch (error) {
      console.log(error);
      return res.status(400).json({ errors: error.errors.map((err) => err.message) });
    }
  }

  async show(req, res) {
    try {
      const aluno = await Aluno.findByPk(req.params.id, {
        order: [['id', 'DESC'], [Foto, 'id', 'DESC']],
        include: {
          model: Foto,
          attributes: ['filename'],
        },
      });
      return res.status(200).json(aluno);
    } catch (error) {
      console.log(error);
      return res.json(null);
    }
  }

  async update(req, res) {
    try {
      const aluno = await Aluno.findByPk(req.params.id);
      if (!aluno) {
        res.status(400).json({ errors: ['O aluno não existe na base de dados'] });
      }
      const alunoAtualizado = await aluno.update(req.body);
      return res.status(200).json(alunoAtualizado);
    } catch (error) {
      console.log(error);
      return res.status(400).json({ errors: error.errors.map((err) => err.message) });
    }
  }

  async delete(req, res) {
    try {
      const aluno = await Aluno.findByPk(req.params.id);
      if (!aluno) {
        res.status(400).json({ errors: ['O aluno não existe na base de dados'] });
      }
      await aluno.destroy();
      return res.status(200).json({ msg: 'O aluno foi apagado com sucesso' });
    } catch (error) {
      console.log(error);
      return res.status(400).json({ errors: error.errors.map((err) => err.message) });
    }
  }
}

export default new AlunoController();
