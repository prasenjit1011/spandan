const express   = require('express');
const multer        = require('multer');

const getUserMiddleware = require('../middleware/getUserMiddleware');
const addUserMiddleware = require('../middleware/addUserMiddleware');
const router    = express.Router();



const upload    = multer({ dest: 'uploads/' });
const cpUpload  = upload.fields([{ name: 'pan_photo', maxCount: 1 }, { name: 'aadhaar_card_photo', maxCount: 8 }]);
// console.log('-- Here-- 01');
// console.log(req.files);
// console.log('-- Here-- 02');


const userCtrl = require('../controllers/userController');
router.get('/getuser/:id', getUserMiddleware, userCtrl.getUser);
router.post('/adduser', addUserMiddleware,  userCtrl.addUser);

module.exports = router;