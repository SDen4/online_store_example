require('dotenv').config();
const express = require('express');
const sequelize = require('./db');
const cors = require('cors');
const fileupload = require('express-fileupload');
const router = require('./routes/index');
const errorHandler = require('./middleware/ErrorHandlingMiddleware.js');
const path = require('path');

const PORT = process.env.PORT;

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.static(path.resolve(__dirname, 'static'))); // http://localhost:5000/1656253022090.jpg - works!
app.use(fileupload({}));
app.use('/api', router);
// обработчик ошибок должен подключаться последним
app.use(errorHandler);

const start = async () => {
  try {
    await sequelize.authenticate();
    await sequelize.sync();
    app.listen(PORT, () => console.log(`Server started on port ${PORT}.`));
  } catch (error) {
    console.log(error);
  }
};

start();
