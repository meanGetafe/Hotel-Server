'use strict'

var mongoose = require('mongoose');
var app = require('./app');
var port = process.env.PORT || 1111;
var ip = process.env.IP_ADDRESS || "10.0.3.8";


mongoose.connect('mongodb://localhost:27017/habitacion', (err, res) => {

    if (err) {
        throw err;
        console.log("error tuti", err)

    } else {
        console.log(`Conexion a Mongodb establecida`);
        app.listen(1111,ip, function () {
        console.log(`Escuchando en http://localhost:${port}` );
        });

    }
});

