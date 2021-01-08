var mysql = require('mysql');

var database = mysql.createConnection({
    host: process.env.HOST,
    user: process.env.USER,
    password: process.env.PASSWORD,
    port: 3306,
    database: "showdata"
});
database.connect();

module.exports = database;