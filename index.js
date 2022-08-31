var express = require('express');
var app = express();


// Iniciamos las rutas de nuestro servidor/API
var router=express.Router();


var bodyParser             = require("body-parser");
var cors                   = require('cors');


var ruta_usu =   require("./routes/ruta_usu")

// parse application/json
app.use(bodyParser.json())
app.use(cors({
	origin: '*'
}))


// rutas para consultas de usuarios
app.use(ruta_usu);




app.get('/', function (req, res) {
  res.send('Hello World!');
});
app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});