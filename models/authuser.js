const Sequelize = require('sequelize');
const dbconnect = require('../util/mysql_sequelize_database');

const Item = dbconnect.define('authusers', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    fullname: Sequelize.STRING,
    username: Sequelize.STRING,
    password: Sequelize.STRING,
    type: Sequelize.BOOLEAN,
});

module.exports = Item;