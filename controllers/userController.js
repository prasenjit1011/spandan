const express       = require('express');
const multer        = require('multer');
const bodyParser    = require('body-parser');

const app = express();

const panStorage    = multer.diskStorage({
                                destination: './images',
                                filename: (req, file, cb) => { cb(null, parseInt(100*Math.random())+'-'+file.originalname); }
                            });

const aadharStorage    = multer.diskStorage({
                                destination: './images',
                                filename: (req, file, cb) => { cb(null, parseInt(100*Math.random())+'-'+file.originalname); }
                            });


const fileFilter = (req, file, cb) => {
                                        if ( file.mimetype === 'image/png' || file.mimetype === 'image/jpg' || file.mimetype === 'image/jpeg' ) { cb(null, true); } 
                                        else { cb(null, false); }
                                    };


const UserModel    = require('../models/userModel');

exports.getUser = async (req, res, next)=>{
    let id = req.params.id;
    data = await UserModel.findById(id);
    return res.send({status:true, msg:"User details", data : data});
}


exports.addUser = async (req, res, next)=>{

    console.log('---- UserCtrl ----');
    console.log('-- UserCtrl user_photo --',req.files.user_photo[0]);
    // console.log('-- UserCtrl pan_photo --',req.files.pan_photo);
    // console.log('-- UserCtrl aadhaar_card_photo --',req.files.aadhaar_card_photo);
    
    let user_photo  = req.files.user_photo[0];
    let pan_photo = req.files.pan_photo;
    let aadhaar_card_photo  = req.files.aadhaar_card_photo;


    let data = [];
    const upload = multer({ dest: "./images" });
    upload.any("files");

    app.use(bodyParser.urlencoded({ extended: false }));
    app.use(bodyParser.json());
    app.use(multer({ storage: panStorage, fileFilter: fileFilter }).any('pan_photo'));
    app.use(multer({ storage: aadharStorage, fileFilter: fileFilter }).any('aadhaar_card_photo'));

    //console.log('---userCtrl--',req.body);
    let userData = {...req.body, user_photo, pan_photo, aadhaar_card_photo};

    // user_photo, pan_photo, aadhaar_card_photo};
    // userData.merge({"user_photo":req.files.user_photo});
    //console.log(userData);
    data = await UserModel.create(userData);
    return res.send({status:true, msg:"User details added successfully.", data : data});
}