const sequelize = require('../util/mysql_sequelize_database');
const Item      = require('../models/item');

exports.getItemList = (req, res, next) => {
    
    const pageNo = req.query.page ?? 0;

    Item.findAll()
        .then(fetchData=>{
            return res.render('./item/list', {pageNo : pageNo, data:fetchData, pageTitle:'Item list using Asyn method with Mysql Sequelize.'});
        })
        .catch(err=>{
            console.log(err);
            return res.redirect('/');
        });
}


exports.deleteItem = async (req, res, next) => {
    await Item.destroy({
        where: {
            title: "test"
        },
    });

    return res.end('-- Data deleted from table --');
}


exports.addEditItem = async (req, res, next) => {

    return res.render('./item/addEditFrm');
}


exports.updateItem = async (req, res, next) => {

    return res.end('-- Data added to table --');
}

