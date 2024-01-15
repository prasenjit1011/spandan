const Sequelize = require('sequelize');
const sequelize = require('../util/mysql_sequelize_database');

const Item = sequelize.define('articles', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    title: Sequelize.STRING,
    price: Sequelize.FLOAT,
    image: Sequelize.STRING
});

module.exports = Item;