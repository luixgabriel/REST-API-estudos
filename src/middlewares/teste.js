export default (req, res, next) => {
  req.luix = 'nome é esse';
  console.log(req.luix);
  return next();
};
