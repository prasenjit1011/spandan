const Sequelize = require('sequelize');
const dbconnect = require('../util/mysql_sequelize_database');
const Itemfiles = require('./itemfiles');

const Item = dbconnect.define('items', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    userId: {
        type : Sequelize.INTEGER
    },
    title: Sequelize.STRING,
    details: Sequelize.STRING,
    status: {
        type : Sequelize.ENUM,
        values:['Draft', 'Created', 'Approve', 'Rejected']
    },
});

Item.hasMany(Itemfiles, { foreignKey: 'itemId' });

module.exports = Item;