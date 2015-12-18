var DB, Everyone
  , moment = require('moment');
var ArchImp = function(db, everyone) {
  DB = db;
  Everyone = everyone;
  return ArchImp;
};

ArchImp.get = function(req, res, next) {
  DB.Vencimiento.findAll({include: [{model: DB.Cliente},{model: DB.Cronograma},{model: DB.Impuesto},{model: DB.GrupoImpuesto, include: [{model: DB.Banco}],where:{enviado: 1, pagado: 1}}], where:"vencimiento.pagado = 1 AND grupo_impuesto_id IS NOT NULL AND descargado IS NOT NULL AND archivado IS NULL"} ).on('success', function(as) {
  //  //descargado IS NOT NULL AND archivado IS NULL
    var msg=[]
    as.forEach(function(a){
      var impMonto=parseFloat(a.monto0)+parseFloat(a.monto1)+parseFloat(a.monto2)+parseFloat(a.monto3)+parseFloat(a.monto4)
      if(impMonto != 0.00)
        msg.push({
          id: a.id,
          grupoNumero: "Grupo_"+a.grupo_impuesto_id,
          clienteNombre: a.cliente.nombre,
          cronograma: a.cronograma.mes+"/"+a.cronograma.año,
          impuestoNombre: a.impuesto.nombre,
          bancoNombre: a.grupoImpuesto.banco.nombre,
          diaDePago: moment(a.grupoImpuesto.diaDePago).format("DD/MM/YYYY"),
          total: impMonto.toMoney()
        })
      else{
        a.updateAttributes({descargado: 1, archivado: 1, grupo_impuesto_id: 1})
      }
    })
    res.send(msg)
  });  
};

ArchImp.err = function(req, res, next) {
  DB.Vencimiento.find({where:{id: req.params.id}}).on('success', function(gi){
    gi.updateAttributes({grupo_impuesto_id: null}).on('success', function(){res.send(true)})
  })
};

ArchImp.post = function(req, res, next) {
  DB.Vencimiento.find({where:{id: req.params.id}}).on('success', function(gi){
    gi.updateAttributes({archivado: 1}).on('success', function(){res.send(true)})
  })
};

module.exports = ArchImp;
