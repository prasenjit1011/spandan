const express   = require('express');
const router    = express.Router();

const articleCtrl = require('../controllers/article');
router.get('/article/list', articleCtrl.getArticleList);
router.get('/article/listing', articleCtrl.getArticleListing);

module.exports  = router;
