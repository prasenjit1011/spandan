console.log('\n\n-: App Started :-');

const express       = require('express');
var bodyParser      = require('body-parser')
const mongoConnect  = require('./util/database').mongoConnect;
const mongoose      = require('mongoose');
const app           = express();

app.set('view engine', 'ejs');
app.set('views', 'views');
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())


const shop = require('./routes/shop');
app.use(shop);

const product = require('./routes/product');
app.use(product);

app.use('/', (req, res, next)=>{
    console.log('-: Welcome :-');
    //res.send('-: Welcome :-');
    res.render('home');
    next();
});



console.log('-: App Running :-');
mongoConnect(()=>app.listen(3000));

const uri   = "mongodb+srv://tester:tester1234@cluster0.hlicuim.mongodb.net/Mydb?retryWrites=true&w=majority";
mongoose.connect(uri).then(result => app.listen(3001)).catch(err=>console.log(err));

