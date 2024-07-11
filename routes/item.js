const express   = require('express');
const router    = express.Router();






const itemCtrl = require('../controllers/item');
router.get('/item/list', itemCtrl.getItemList);
router.get('/item/add', itemCtrl.addEditItem);
router.get('/item/edit/:id', itemCtrl.addEditItem);
router.get('/item/delete/:id', itemCtrl.deleteItem);
router.post('/item', itemCtrl.updateItem);

module.exports  = router;