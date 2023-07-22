var mysql = require("mysql");

var connection = mysql.createConnection({
    host: 'localhost',
    database: 'sys',
    user: 'root',
    password: 'root',
    port: '3306'
});

module.exports = connection;