const jwt = require('jsonwebtoken');

module.exports = function (req, res, next) {
  if (req.method === 'options') next();

  try {
    // get token
    const token = req.headers.authorization.split(' ')[1];

    if (!token)
      return res.status(401).json({ message: 'User not authenticated!' });

    // decode token
    const decoded = jwt.verify(token, process.env.SECRET_KEY);

    req.user = decoded;
    next();
  } catch (error) {
    res.status(401).json({ message: 'User not authenticated!' });
  }
};
