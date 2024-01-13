console.log('\n\n-: App Started :-');

const express   = require('express');
const app       = express();

app.set('view engine', 'ejs');
app.set('views', 'views');

const shop = require('./routes/shop');
app.use(shop);

app.use('/', (req, res, next)=>{
    console.log('-: Welcome :-');
    //res.send('-: Welcome :-');
    res.render('home');
    next();
});

console.log('-: App Running :-');
app.listen(3000);