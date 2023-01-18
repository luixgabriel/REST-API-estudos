import jwt from 'jsonwebtoken';
import User from '../models/User';

export default async (req, res, next) => {
  const { authorization } = req.headers;
  // console.log(req.headers);

  if (!authorization) {
    return res.status(401).json({ errors: ['Token inválido'] });
  }

  const [, token] = authorization.split(' ');

  try {
    const dados = jwt.verify(token, process.env.secret);
    const { id, email } = dados;
    const user = await User.findOne({ where: { id, email } });
    if (!user) {
      return res.status(401).json({ errors: ['Token expirado'] });
    }
    req.userId = id;
    req.userEmail = email;
  } catch (error) {
    console.log(error);
    return res.status(401).json({ errors: ['Token inválido'] });
  }

  return next();
};
