var DB, Everyone
  , moment = require('moment')
  , CronogramaImpuesto = function(db, everyone) {
  DB = db;
  Everyone = everyone;
  return CronogramaImpuesto;
};

CronogramaImpuesto.get = function(req, res, next) {
  DB.CronogramaImpuesto.findAll({where: {"cronograma_id": req.params.id},
    include:[{model: DB.Impuesto,}]
  }).on('success', function(crono) {
    res.send(crono)
  });
};
module.exports = CronogramaImpuesto;
