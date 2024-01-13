const express   = require('express');
const router    = express.Router();

const shopCtrl  = require('../controllers/shop');
router.get('/list',  shopCtrl.getList);

module.exports = router;