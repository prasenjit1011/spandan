const Sequelize = require('sequelize');

const sequelize = new Sequelize('test', 'root', 'password', {
  dialect: 'mysql',
  host: 'localhost',
  port: 3632
});

module.exports = sequelize;
