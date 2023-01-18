import User from '../models/User';

class UserController {
  async create(req, res) {
    try {
      const novoUser = await User.create(req.body);
      const { id, nome, email } = novoUser;
      res.json({ id, nome, email });
    } catch (error) {
      console.log(error);
      res.status(400).json({ errors: error.errors.map((err) => err.message) });
    }
  }

  async getUsers(req, res) {
    try {
      const listUsers = await User.findAll({ attributes: ['id', 'nome', 'email'] });
      console.log(`PEGUEI NO MEU MIDDLEARE DE VALIDAÇÃO JWT ${req.userId} E ${req.userEmail}`);
      return res.status(200).json(listUsers);
    } catch (error) {
      console.log(error);
      return res.json(null);
    }
  }

  async show(req, res) {
    try {
      const user = await User.findByPk(req.userId);

      const { id, nome, email } = user;
      return res.status(200).json({ id, nome, email });
    } catch (error) {
      console.log(error);
      return res.json(null);
    }
  }

  async update(req, res) {
    console.log(req.userId);
    try {
      const user = await User.findByPk(req.userId);
      if (!user) {
        res.status(400).json({ errors: ['O usuário não existe na base de dados'] });
      }
      const userAtualizado = await user.update(req.body);
      return res.status(200).json(userAtualizado);
    } catch (error) {
      console.log(error);
      return res.status(400).json({ errors: error.errors.map((err) => err.message) });
    }
  }

  async delete(req, res) {
    try {
      const user = await User.findByPk(req.userId);
      if (!user) {
        res.status(400).json({ errors: ['O usuário não existe na base de dados'] });
      }
      await user.destroy();
      return res.status(200).json({ msg: 'O usuario foi apagado com sucesso' });
    } catch (error) {
      console.log(error);
      return res.status(400).json({ errors: error.errors.map((err) => err.message) });
    }
  }
}

export default new UserController();
