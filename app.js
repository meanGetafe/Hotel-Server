'use strict'

var express = require('express');
var bodyParser = require('body-parser');
var api = require('./routes/habitacionRutas');

var app = express();


app.use(bodyParser.urlencoded({extended : true}));
app.use(bodyParser.json());


app.use((req, res, next)=>{
res.header('Access-Control-Allow-Origin', '*');
res.header('Access-Control-Allow-Headers', 'X-API-KEY, Origin, X-Requested-Width, Content-Type, Accept, Access-Control-Request-Method');
res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, OPTIONS, DELETE');
res.header('Allow', 'GET, POST, PUT, OPTIONS, DELETE');

next();


});

app.use('/hotel', api);





module.exports = app;