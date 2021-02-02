const dbcon = require('../config/db');

const Sequelize = require('sequelize');
const sequelize = new Sequelize(dbcon.db, dbcon.user, dbcon.password, {
  host: dbcon.host,
  dialect: dbcon.dialect
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.outsiders = require("./outsider")(sequelize, Sequelize);

module.exports = db;