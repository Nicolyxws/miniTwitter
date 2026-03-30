const mysql = require('mysql2/promise');

const pool = mysql.createpool(
    {
        host     :  "localhost",
        user     :  "root",
        password :  "senai",
        database :  "twitter",
    }
);
module.exports = pool;

