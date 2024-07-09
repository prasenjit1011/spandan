const Sequelize = require('sequelize');

const dbconnect = new Sequelize('NodeJSDBMaster', 'newuser', 'password', {
  dialect: 'mysql',
  host: 'localhost',
  port: 3306
});

module.exports = dbconnect;
