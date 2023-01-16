import Aluno from '../models/Aluno';

class HomeController {
  async index(req, res) {
    const novoAluno = await Aluno.create({
      nome: 'luis',
      sobrenome: 'gabriel',
      email: 'luis@gmail.com',
      idade: 12,
      peso: 70,
      altura: 1.8,
    });
    res.json(novoAluno);
  }
}

export default new HomeController();
