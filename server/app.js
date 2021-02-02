const express = require('express');

const db = require('./model/index');

const app = express();

db.sequelize.sync();

app.get('/', (req, res) => {
  res.send('Hi!');
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}. 🚀`);
});