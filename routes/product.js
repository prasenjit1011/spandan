const isAuth    = require('../middleware/isAuth');
const express   = require('express');
const router    = express.Router();

const prodCtrl  = require('../controllers/product');
router.get('/product/list', isAuth,  prodCtrl.getProductList);
router.get('/product/details/:id', isAuth,  prodCtrl.getProductDetails);
router.post('/product/add', isAuth,  prodCtrl.addProduct);
router.get('/product/delete/:id', isAuth,  prodCtrl.deleteProduct);

module.exports = router;