const Product = require('../models/product');

exports.getProductList = (req, res, next)=>{
    console.log('-: Welcome to product listing page :-');
    console.log('Token', req.csrfToken());

    Product.find()
            .then(data=>{
                res.render('./product/list', {csrfToken:req.csrfToken(), productlist:data});
            })
            .catch(err=>console.log(err));
}


exports.getProductDetails = (req, res, next) => {
    console.log('-: Product Details :-');

    id = req.params.id;
    Product.findById(id)
            .then(data => {
                res.render('./product/details', {shopdata:data})
            })
            .catch(err=>console.log(err));
}


exports.addProduct = (req, res, next)=>{
    console.log('-: Product added successfully! :-');
    console.log(req.body.productName, req.body.productPrice);

    const product = new Product({name:req.body.productName, price:req.body.productPrice});
    product.save()
            .then(result=>console.log(result))
            .catch(err=>console.log(err));

    res.redirect('/product/list');
}

