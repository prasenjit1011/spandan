console.log('\n\n-: App Started :-');

const express       = require('express');
const bodyParser    = require('body-parser');
const mongoose      = require('mongoose');
const session       = require('express-session');
const mongodbStore  = require('connect-mongodb-session')(session);

const cookieParser  = require('cookie-parser');
const csrf          = require('csurf')
const csrfProtect   = csrf();//{ cookie: true }

const mongoConnect  = require('./util/database').mongoConnect;
const MONGODB_URI   = "mongodb+srv://tester:tester1234@cluster0.hlicuim.mongodb.net/Mydb?retryWrites=true&w=majority";
const store         = new mongodbStore({ uri: MONGODB_URI, collection: 'sessions' });
const params        = { secret: 'my-secret', resave: false, saveUninitialized: false, store: store };

const multer        = require('multer');
const fileStorage   = multer.diskStorage({
                                destination: 'images',
                                filename: (req, file, cb) => { cb(null, parseInt(100*Math.random())+'-'+file.originalname); }
                            });


const fileFilter = (req, file, cb) => {
                                        if ( file.mimetype === 'image/png' || file.mimetype === 'image/jpg' || file.mimetype === 'image/jpeg' ) { cb(null, true); } 
                                        else { cb(null, false); }
                                    };


const app   = express();
app.use(multer({ storage: fileStorage }).any());

app.set('view engine', 'ejs');
app.set('views', 'views');
app.use(express.static('images'));
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use(session(params));
//app.use(csrfProtect);
app.use(cookieParser())
app.use(csrf({ cookie: true }))






const auth = require('./routes/auth');
app.use(auth);


const item = require('./routes/item');
app.use(item);

app.use('/', (req, res, next)=>{
    //console.clear();
    //console.log(req.session);
    //console.log(req.session.isLoggedIn);
    console.log('-: Welcome :-');
    //res.send('-: Welcome :-');
    res.render('home', {sessionData:req.session});
});



console.log('-: App Running :-');
mongoConnect(()=>app.listen(3000));

mongoose.connect(MONGODB_URI).then(result => app.listen(3001)).catch(err=>console.log(err));

