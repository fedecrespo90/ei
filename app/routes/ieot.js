var DB, Everyone
  , moment= require('moment')
  , nodemailer = require('nodemailer')    
  , util = require('util');

var Ot = function(db, everyone) {
  DB = db;
  Everyone = everyone;

  return Ot; 
};

Ot.get = function(req, res, next) {
  DB.Ot.findAll({order:'fechaVencimiento ASC' , include:[{model: DB.Cliente}, {model: DB.Oc}]}).on('success', function(a) {
    var msg = []
    a.forEach(function(b){
      var c='';
      var n='';
      if(b.oc){
        if(util.isArray(b.oc)){
          b.oc.forEach(function(d){
            n+= d.titulo+"-Nº"+d.numero+", ",
            c+=d.id+", ";
          })
        }else{
          c+= b.oc.id
          n+= b.oc.titulo+"-Nº"+b.oc.numero
        }
      }
      msg.push({
        id: b.id,
        ingreso: moment(b.created_at).format("DD/MM/YYYY")+" "+moment(b.created_at).format("HH:mm"),
        estado: b.estado,
        numero: b.numero,
        cliente_id: b.cliente_id,
        fechaVencimiento: moment(b.fechaVencimiento).format("DD/MM/YYYY")=='Invalid date'?" ":moment(b.fechaVencimiento).format("DD/MM/YYYY"),
        plan_id: b.plan_id,
        notificarCliente: b.notificarCliente? 1 : 0,
        honorarios: b.honorarios,
        prioridad: b.prioridad,
        coordinador: b.coordinador? 1 : 0,
        titulo: b.titulo,
        descripcion: b.descripcion,
        conclusion: b.conclusion,
        clienteNombre: b.cliente.nombre,
        comunicacion_id: b.comunicacion_id,
        ocs: n,
        oc_id: c,
        reservado: b.reservado,//? 1 : 0,
      })
    })
    res.send(msg)
  });
};

module.exports = Ot;
