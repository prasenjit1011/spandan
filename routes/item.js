const express   = require('express');
const router    = express.Router();

const itemCtrl = require('../controllers/item');
router.get('/item/list', itemCtrl.getItemList);

module.exports  = router;