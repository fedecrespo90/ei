var DB, Everyone, 
    moment= require('moment');

var ListDeuda = function(db, everyone) {
  DB = db;
  Everyone = everyone;
  return ListDeuda;
};

ListDeuda.get = function(req, res, next) {
  DB.Vencimiento.findAll({
    where: {pagado: 0},
    include: [
      {model: DB.Impuesto, as: "impuesto"},
      {model: DB.Cronograma, as:"cronograma"},
      {model: DB.CronogramaImpuesto, as:"cronogramaImpuesto"},      
      {model: DB.Cliente, as: "cliente"}
    ]
  }).on('success', function(listVto) {
    var vtoImp, monto, msg = [];
    listVto.forEach(function(l){
      monto=parseFloat(l.monto0)+parseFloat(l.monto1)+parseFloat(l.monto2)+parseFloat(l.monto3)+parseFloat(l.monto4)
      vtoImp= "Sin Definir"
      if(l.cronogramaImpuesto){
          if(l.cronogramaImpuesto.vtoImpuesto != null)
            vtoImp= moment(l.cronogramaImpuesto.vtoImpuesto).format("DD/MM/YY");
        msg.push({
          id: l.id,
          cliente: l.cliente.nombre,
          impuesto: l.impuesto.nombre,
          cronograma: l.cronograma.mes+"/"+l.cronograma.año,
          vto: vtoImp,
          monto: "$"+monto.toMoney()
        })
      }
    })
    res.send(msg)
  });
};

module.exports = ListDeuda;