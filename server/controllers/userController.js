const ApiError = require('../error/ApiError');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { User, Basket } = require('../models/models.js');

const generateJwt = (id, email, role) => {
  return jwt.sign({ id, email, role }, process.env.SECRET_KEY, {
    expiresIn: '24h',
  });
};

class UserController {
  async registration(req, res) {
    const { email, password, role } = req.body;
    // защита от пустого email или password при регистации
    if (!email || !password) {
      return next(ApiError.badRequest('Incorrect email or password!'));
    }

    // проверка на существующего зарегистрированного юзера по email
    const candidate = await User.findOne({ where: { email } });

    // если пользователь найден
    if (candidate) {
      return next(ApiError.badRequest('User with this email exist!'));
    }

    // если пользователь не найден...
    // хэшируем пароль
    const hashPassword = await bcrypt.hash(password, 5);
    // создаем пользователя и его корзину
    const user = await User.create({ email, role, password: hashPassword });
    const basket = await Basket.create({ userId: user.id });
    // генерируем jwt-токен
    const token = generateJwt(user.id, user.email, user.role);
    return res.json({ token });
  }

  async login(req, res, next) {
    const { email, password } = req.body;

    const user = await User.findOne({ where: { email } });
    if (!user) return next(ApiError.internal('The user not found!'));

    let compatePassword = bcrypt.compareSync(password, user.password);
    if (!compatePassword) return next(ApiError.internal('Wrong password!'));

    const token = generateJwt(user.id, user.email, user.role);
    return res.json({ token });
  }

  async check(req, res, next) {
    const { id } = req.query;
    if (!id) return next(ApiError.badRequest('No id!'));
    res.json(id);
  }
}

module.exports = new UserController();
