require('dotenv').config();
const express = require('express');
const sequelize = require('./db');
const models = require('./models/models.js');
const cors = require('cors');

const PORT = process.env.PORT;

const app = express();
app.use(cors());

app.get('/', (req, res) => {
  res.status(200).json({ message: 'working!!!' });
});

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
