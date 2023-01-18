import jwt from 'jsonwebtoken';
import User from '../models/User';

class TokenController {
  async create(req, res) {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(401).json({ errors: ['Credenciais inválidas'] });
    }
    const user = await User.findOne({ where: { email } });

    if (!user) {
      return res.status(401).json({ errors: ['O usuario não existe na base de dados'] });
    }

    if (!(await user.passwordIsValid(password))) {
      return res.status(401).json({ errors: ['Senha inválida'] });
    }

    const { id } = user;
    const token = jwt.sign({ id, email }, process.env.secret, {
      expiresIn: 7000000,
    });

    return res.status(200).json({ token });
  }
}
export default new TokenController();
