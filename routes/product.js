const express   = require('express');
const router    = express.Router();

const prodCtrl  = require('../controllers/product');
router.get('/product/list',  prodCtrl.getProductList);
router.get('/product/details/:id',  prodCtrl.getProductDetails);
router.post('/product/add',  prodCtrl.addProduct);

module.exports = router;