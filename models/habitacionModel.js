'use strict'

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var habiSchema = Schema({
    _id: String,
    tipo: String,
    categoria: String,
    precio: Number,
    reserva:  [{
        fechaIn:Number, 
        fechaSal: Number}
    ]
})
module.exports = mongoose.model("Habi", habiSchema);