'use strict'

var Habitacion = require('../models/habitacionModel');

var incHabitacion =18;

function verHabitacion (req, res){

      var habitacionId = req.params._id;
      res.status(200).send({ "habitacion ": ` Nº ${habitacionId} `});
}
// http://
function consulta (req, res){
  
    /* var datosDesdeWeb = new Habitacion ();

     var params= req.body;
     datosDesdeWeb._id = params.id;
     datosDesdeWeb.tipo = params.tipo;
     datosDesdeWeb.categoria = params.categoria;
     
     
   if(!datosDesdeWeb){
       res.send({ message: "Existe habitacion" });
        addHabitaciones (req, res);
   } 
    res.send({ message: "No hay habitacion" });*/

    
         
     //  var params = req.body;   
      console.log("Entra0");
    //consulta por id
     var habitacionId = req.params._id;
      //var habitacionId = 21;
 // Habitacion.find({"_id": habitacionId}, (err,habitacionParam)=> {
    //     Habitacion.find({"tipo": "doble","categoria":"lujo"}, (err,habitacionParam)=> {
             
 //   Habitacion.find({"reserva.fechaIn": {$gt:30}}, function(err,habitacionParam) {
     Habitacion.find({"tipo": "doble","categoria":"lujo", "reserva.fechaIn": {$gt:3}}, (err,habitacionParam)=> {
    if (err) {
      res.status(500).send({ message: "Error al devolver la habitacion" });
      } else {
        console.log("test",habitacionParam);
        console.log("Entra bien")
        if (!habitacionParam) {
            console.log("entra mal");
             res.status(404).send({ message: "No hay habitacion" });
       // addHabitaciones(req, res);
       }
       if (habitacionParam.length==0) {
           addHabitaciones (req, res)
       }     
           else{
      res.status(200).send({ habitacionParam })
      }
      
    }
  });
   /*var misParamFiltro = Generarjson(req.params.tipo,req.params.categoria)
       Habitacion.find({misParamFiltro}, function (err,habitacionParam) {
    if (err) {
      res.status(500).send({ message: "Error al devolver el marcador" });
    } else {
      if (!habitacionParam) {
        res.status(404).send({ message: "No hay marcador" });
      }
      res.status(200).send({ habitacionParam })
    }
  });*/
}

/*
function Generarjson(tipo, categoria){

    var jsonFind ="";

    if(tipo != "")
    {
        jsonFind = "tipo" + tipo;
    }


    if(categoria !="")
    {
        jsonFind += "categoria" + categoria;
    }
}*/


function addHabitaciones (req, res){
    var habitacion2 = new Habitacion ();

     var params= req.body;
     habitacion2._id = ++incHabitacion;
     habitacion2.tipo = params.tipo;
     habitacion2.categoria = params.categoria;
    // habitacion2.reserva[0].fechaIn = params.fechaIn;
     //habitacion2.reserva[0].fechaSal = params.fechaSal;     

    habitacion2.save((err, habitacionStored)=>{

        if(err){
           res.status(500).send({message: " Error al guardar habitacion"});
        }

        res.status(200).send({message : "Reserva hecha"});
    });


    // res.status(200).send({ "habitacion ": habitacion2});
}
function actualizarHabitacion (req, res){
      var habitacion= req.body;
     res.status(200).send({update:true,  "habitacion ": habitacion});
}
function borrarHabitacion (req, res){
      var habitacion= req.body;
     res.status(200).send({ delete:true,"habitacion ": habitacion});
}

module.exports = {
    verHabitacion,
    addHabitaciones,
    actualizarHabitacion,
    borrarHabitacion,
    consulta

}