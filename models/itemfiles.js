const Sequelize = require('sequelize');
const dbconnect = require('../util/mysql_sequelize_database');

const Itemfiles = dbconnect.define('articlefiles', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    
    filename: Sequelize.STRING
});

module.exports = Itemfiles;