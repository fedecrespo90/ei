var DB, Everyone 
  , moment= require('moment');

var NoCargado = function(db, everyone) {
  DB = db;
  Everyone = everyone;
  return NoCargado;
};

NoCargado.get = function(req, res, next) {
  DB.Vencimiento.findAll({
        where:{adeudado:0},
  }).on('success', function(vencimientos) {
      DB.ClienteImpuesto.findAll({include:[{model:DB.Cliente},{model: DB.Impuesto, where: {fijo: 0}}]
      }).on('success', function(impuestos){
        var msg= [];
        var cumple;      
        impuestos.forEach(function(impuesto){
          cumple=false;
          vencimientos.forEach(function(vencimiento){
            if(impuesto.cliente_id==vencimiento.cliente_id){
              cumple=true //match
            }

          })
          if(!cumple)
            msg.push({
              id: impuesto.id,
              cliente: impuesto.cliente.nombre,
              impuesto: impuesto.impuesto.nombre,
            })
        })
        res.send(msg);
      })
  });
};

module.exports = NoCargado;
