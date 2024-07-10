const Sequelize = require('sequelize');
const dbconnect = require('../util/mysql_sequelize_database');

const Item = dbconnect.define('articles', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    title: Sequelize.STRING,
    details: Sequelize.STRING,
    files: Sequelize.STRING,
    status: Sequelize.BOOLEAN,
});

module.exports = Item;