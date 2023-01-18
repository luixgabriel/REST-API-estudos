import Aluno from '../models/Aluno';

class HomeController {
  async index(req, res) {
    return res.json('estou na home');
  }
}
export default new HomeController();
