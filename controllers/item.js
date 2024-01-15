const sequelize = require('../util/mysql_sequelize_database');
const Item      = require('../models/item');

exports.getItemList = (req, res, next) => {

    Item.findAll()
        .then(fetchData=>{
            return res.render('./article/list', {pageTitle:'Item list using Asyn method with Mysql Sequelize.', data:fetchData});
        })
        .catch(err=>console.log(err));

    const fetchData = [];
}