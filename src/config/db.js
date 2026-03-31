const mysql = require('mysql2/promise');

const pool = mysql.createPool(
    {
        host     :  "localhost",
        user     :  "root",
        password :  "senai",
        database :  "twitter",
    }
);
module.exports = pool;

