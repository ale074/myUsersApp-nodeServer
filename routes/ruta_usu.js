//Ruta usu , ruta para trabajar con el objeto tabla users

//Importamos express
var express = require('express');
//Creamos el objeto para definir las rutas
var router = express.Router();
//Importamos el modelo que ejecutará las sentencias SQL
var model = require('../models/mod_usu');


/**
 * Consultar todos los usuarios
 */
router.post('getAllUsers', function(req, res) {
    console.log("Que mierda nea")
    model.getAllUsers(function(err,data) {
        if (typeof data !== 'undefined' && data !== null && data.length > 0) {
            respuesta = {'data': data,
                    'err_val': 0,
                    'men_err': err
                  }
            res.status(200).json(respuesta);
        }else
        {
          respuesta={'err_val':1,
                     'men_err':'No Existen usuarios'}
  
          res.status(500).json(respuesta);
        }
    });
});

module.exports = router;