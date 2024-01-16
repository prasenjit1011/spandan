const sequelize = require('../util/mysql_sequelize_database');
const Item      = require('../models/item');

exports.getItemList = (req, res, next) => {

    const pageNo = req.query.page ?? 0;

    Item.findAll()
        .then(fetchData=>{
            return res.render('./article/list', {pageNo : pageNo, data:fetchData, pageTitle:'Item list using Asyn method with Mysql Sequelize.'});
        })
        .catch(err=>console.log(err));

    const fetchData = [];
}