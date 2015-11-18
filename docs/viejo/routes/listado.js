var DB, Everyone 
  , moment= require('moment');

var Listado = function(db, everyone) {
  DB = db;
  Everyone = everyone;
  return Listado;
};

Listado.get = function(req, res, next) {
  DB.ClienteImpuesto.findAll(
    {include:[{model: DB.Cliente}, {model: DB.Impuesto}]}
  ).on('success',function(listado){
    var msg=[];
    listado.forEach(function(l){
      if(l.impuesto){
        msg.push({
          id: l.id,
          cliente: l.cliente.nombre,
          impuesto: l.impuesto.nombre
        })
      }
    })
    res.send(msg);
  })
};

module.exports = Listado;
