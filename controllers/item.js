const sequelize = require('../util/mysql_sequelize_database');
const Item      = require('../models/item');
const Itemfiles = require('../models/itemfiles');



  exports.getItemList = (req, res, next) => {
    
    const pageNo = req.query.page ?? 0;

    Item.findAll()
        .then(fetchData=>{

            console.log(fetchData);

            return res.render('./item/list', {pageNo : pageNo, data:fetchData, pageTitle:'Item list using Asyn method with Mysql Sequelize.', sessionData:req.session});
        })
        .catch(err=>{
            console.log(err);
            return res.redirect('/');
        });
}


exports.deleteItem = async (req, res, next) => {

    return Item.destroy({
        where: {
            id: req.params.id
        },
    }).then(result=>{
        return res.redirect('/item/list');
    })
    .catch(err=>{
        console.log(err);
        return res.redirect('/');
    });;
}


exports.addEditItem = async (req, res, next) => {

    console.log("csruf: "+req.csrfToken());
    console.log(req.body);
    return res.render('./item/addEditFrm', {csrfToken:req.csrfToken(), sessionData:req.session});
}


exports.updateItem = async (req, res, next) => {
    console.log(req.body);

    const userId    = req.session.user.dataValues.id;
    let itemfiles   = undefined;
    const item = new Item({userId:userId, title: req.body.title, details: req.body.details, status: req.body.status});
    return item.save()
            .then(async result =>{
                let itemId = result.dataValues.id ?? 0;
                if(itemId){
                    console.log('************* ', itemId, ' *********');
                    req.files.forEach(async element => {
                        itemfiles = new Itemfiles({itemId:itemId, filename: element.filename});
                        await itemfiles.save();    
                    });
                }
                console.log('===================');
                return res.redirect('/item/list');
            })
            .catch(err=>{
                return res.redirect('/');
            });

}

