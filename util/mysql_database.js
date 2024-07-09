const mysql = require('mysql2');

const pool = mysql.createPool({
    host: 'localhost',
    port:3306,
    user: 'newuser',
    database: 'NodeJSDBMaster',
    password: 'password'
});

console.log('-: Mysql Connected Successfully:-');
module.exports = pool.promise();