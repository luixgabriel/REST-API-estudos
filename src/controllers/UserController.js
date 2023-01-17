import User from '../models/User';

class UserController {
  async create(req, res) {
    try {
      const novoUser = await User.create(req.body);
      res.json(novoUser);
    } catch (error) {
      console.log(error);
      res.status(400).json({ errors: error.errors.map((err) => err.message) });
    }
  }

  async getUsers(req, res) {
    try {
      const listUsers = await User.findAll();
      return res.status(200).json(listUsers);
    } catch (error) {
      console.log(error);
      return res.json(null);
    }
  }

  async show(req, res) {
    try {
      const { id } = req.params;
      const user = await User.findByPk(id);
      return res.status(200).json(user);
    } catch (error) {
      console.log(error);
      return res.json(null);
    }
  }

  async update(req, res) {
    try {
      const { id } = req.params;
      if (!id) {
        res.status(400).json({ errors: ['O usuário não existe na base de dados'] });
      }
      const user = await User.findByPk(id);
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
      const { id } = req.params;
      if (!id) {
        res.status(400).json({ errors: ['O usuário não existe na base de dados'] });
      }
      const user = await User.findByPk(id);
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
