const Sequelize  = require('sequelize');

module.exports = (sequelize, Sequelize) => {
  const Outsider = sequelize.define("outsider", {
    name: {
      type: Sequelize.STRING
    },
    status: {
      type: Sequelize.BOOLEAN
    },
    code: {
      type: Sequelize.TEXT
    }
  });
  return Outsider;
};