console.log('\n\n-: App Started :-');

const express       = require('express');
var bodyParser      = require('body-parser')
const mongoConnect  = require('./util/database').mongoConnect;
const app           = express();

app.set('view engine', 'ejs');
app.set('views', 'views');
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())


const shop = require('./routes/shop');
app.use(shop);

app.use('/', (req, res, next)=>{
    console.log('-: Welcome :-');
    //res.send('-: Welcome :-');
    res.render('home');
    next();
});

console.log('-: App Running :-');
mongoConnect(()=>app.listen(3000));