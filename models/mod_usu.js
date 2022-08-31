//Importamos los datos de la conexión
var conn=require('./connection');
//Importamos el paquete mysql
var mysql = require('mysql');
//Creamos la conexión a nuestra base de datos con los datos almacenados en conn


//Creamos un objeto  obj
var obj = {};



/**
 * 
 * @param {*} callback 
 */
 obj.getAllUsers = function(callback)
 {
     connection = mysql.createConnection(
         conn
     );
     if (connection)
     {
         var sql = "SELECT * FROM users;";
         connection.query(sql, function(error, rows)
         {
             if(error)
             {
                 console.log(error);
             }
             else
             {
                 callback(null, rows);
             }
         });
         connection.end();
     }
 }
 
 module.exports = obj;