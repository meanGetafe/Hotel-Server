'use strict'

var express = require('express');
var HabitacionControler = require('../controllers/habitacion');
var api = express.Router();

/*api.get('/:id', HabitacionControler.verHabitacion );*/
// localhost:1111/hotel/reserva
 api.get('/:id', HabitacionControler.consulta );
api.post('/reserva', HabitacionControler.addHabitaciones );
api.put('/actualizar', HabitacionControler.actualizarHabitacion );
api.delete('/borrar', HabitacionControler.borrarHabitacion );

module.exports = api;