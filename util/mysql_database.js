const mysql = require('mysql2');

const pool = mysql.createPool({
    host: 'localhost',
    port:3632,
    user: 'root',
    database: 'test',
    password: 'password'
});

console.log('-: Mysql Connected :-');
module.exports = pool.promise();