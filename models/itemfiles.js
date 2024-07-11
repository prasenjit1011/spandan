const Sequelize = require('sequelize');
const dbconnect = require('../util/mysql_sequelize_database');

const Itemfiles = dbconnect.define('itemfiles', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    itemId:{
        type: Sequelize.INTEGER
    },
    filename: Sequelize.STRING
});

module.exports = Itemfiles;