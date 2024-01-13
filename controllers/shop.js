const Shop = require('../models/shop');

exports.getShop = (req, res, next)=>{
    console.log('-: Welcome to shop page :-');
    res.render('./shop/page');
}

exports.getShopList = (req, res, next)=>{
    console.log('-: Welcome to shop listing page :-');
    Shop.fetchAll()
        .then(data => {
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
                res.render('./shop/details', {shopdata:data})
            }
        )
        .catch(err=>console.log(err));
    ;
}


exports.addShop = (req, res, next) => {
    console.log('-: Shop Add :-');
    const newShop = new Shop(req.body.shopName+' '+parseInt(100*Math.random()), req.body.shopAddress);
    newShop.save()
            .then(result=>{
                console.log(result);
                res.redirect('/shop/list')
            })
            .catch(err=>console.log(err));
}