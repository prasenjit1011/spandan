const Shop = require('../models/shop');

exports.getShop = (req, res, next)=>{
    console.log('-: Welcome to shop page :-');
    res.render('./shop/page');
}

exports.getShopList = (req, res, next)=>{
    console.log('-: Welcome to shop listing page :-');
    Shop.fetchAll()
        .then(data => {
                console.log(data);
                res.render('./shop/list', {shoplist:data})
            }
        )
        .catch(err=>console.log(err));
    ;
}


exports.getShopDetails = (req, res, next)=>{
    console.log('-: Welcome to shop listing page :-');
    Shop.fetchDetails()
        .then(data => {
                console.log(data);
                res.render('./shop/details', {shopdata:data})
            }
        )
        .catch(err=>console.log(err));
    ;
}

