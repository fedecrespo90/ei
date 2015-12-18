var DB, Everyone
  ;
var CargoImp = function(db, everyone) {
  DB = db;
  Everyone = everyone;
  return CargoImp;
};

CargoImp.get = function(req, res, next) {
  DB.Vencimientos.findAll({where:{pagado:1, grupoImpuesto_id: "IS NULL", archivado: "IS NULL", descargado: "IS NULL" }
  }).on('success', function(a){
    res.send(a)
  })
};

module.exports = CargoImp;
