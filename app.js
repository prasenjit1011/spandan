console.log('\n\n-: App Started :-');

const express       = require('express');
const bodyParser    = require('body-parser');
const mongoose      = require('mongoose');
const session       = require('express-session');
const mongodbStore  = require('connect-mongodb-session')(session);

//const cookieParser  = require('cookie-parser');
const csrf          = require('csurf')
const csrfProtect   = csrf();//{ cookie: true }

const mongoConnect  = require('./util/database').mongoConnect;
const MONGODB_URI   = "mongodb+srv://tester:tester1234@cluster0.hlicuim.mongodb.net/spandan?retryWrites=true&w=majority";
const store         = new mongodbStore({ uri: MONGODB_URI, collection: 'sessions' });
const params        = { secret: 'my-secret', resave: false, saveUninitialized: false, store: store };



const app   = express();
app.set('view engine', 'ejs');
app.set('views', 'views');
app.use(express.static('images'));
app.use(express.static('public'));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(session(params));
//app.use(csrfProtect);



const multer        = require('multer');
const panStorage    = multer.diskStorage({
                                destination: 'images',
                                filename: (req, file, cb) => { cb(null, parseInt(100*Math.random())+'-'+file.originalname); }
                            });

const aadharStorage    = multer.diskStorage({
                                destination: 'images',
                                filename: (req, file, cb) => { cb(null, parseInt(100*Math.random())+'-'+file.originalname); }
                            });
const fileFilter = (req, file, cb) => {
                                        if ( file.mimetype === 'image/png' || file.mimetype === 'image/jpg' || file.mimetype === 'image/jpeg' ) { cb(null, true); } 
                                        else { cb(null, false); }
                                    };

app.use(multer({ storage: panStorage, fileFilter: fileFilter }).fields([
    { name: 'user_photo', maxCount: 1},
    { name: 'pan_photo', minCount:1, maxCount: 10 },
    { name: 'aadhaar_card_photo', minCount:1, maxCount: 10 }
]));




app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'OPTIONS, GET, POST, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
});


const user = require('./routes/userRoute');
app.use(user);


app.use('/', (req, res, next)=>{
    console.log('-: Welcome :-');
    res.send('-: Welcome :-');
    next();
});

console.log('-: App Running Successfully 1235 :-');
mongoose.connect(MONGODB_URI).then(result => app.listen(3000)).catch(err=>console.log(err));
