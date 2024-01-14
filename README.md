# NodeJS master project with ExpressJS.

Using MongoDB with mongoose  <br />
Using SQL with Sequelize



## Important command list

npm init <br />
npm i --save express express-session body-parser ejs mongodb mongoose connect-mongodb-session bcryptjs cookie-parser csurf csrf <br />
npm i --save-dev nodemon <br />
nodemon app.js <br />


## Ejs Template Engine 

<%= %> <br />

## MongoDB

DB URL : 
https://cloud.mongodb.com/v2/65a000d7e3a5563410a0f43b#/metrics/replicaSet/65a0010b250b252ebbbd1382/explorer/Mydb/customers/find


## Session-Cookie with MongoDB

### Create Pwd : bcryptjs.hash(pwd, 12)

### Compare Pwd : bcryptjs.compare(pwd, pwd1).then().catch()


# Middleware and CSRF

const bodyParser    = require('body-parser') <br />
const cookieParser  = require('cookie-parser'); <br />
const csrf          = require('csurf') <br />
const csrfProtect   = csrf();//{ cookie: true } <br />
app.use(csrfProtect); <br />


