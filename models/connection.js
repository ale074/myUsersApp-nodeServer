var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  port     : '3306',
  user     : 'root',
  password : 'Alejo074',
  database : 'usersApp'
});

module.exports = connection;