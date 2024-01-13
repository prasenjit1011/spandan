const express   = require('express');
const router    = express.Router();

const shopCtrl  = require('../controllers/shop');
router.get('/shop',  shopCtrl.getShop);
router.get('/shop/list',  shopCtrl.getShopList);
router.get('/shop/details',  shopCtrl.getShopDetails);
router.post('/shop/add',  shopCtrl.addShop);

module.exports = router;