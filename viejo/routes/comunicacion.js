var DB, Everyone;

var Comunicacion = function(db, everyone) {
  DB = db;
  Everyone = everyone;

  return Comunicacion;
};

Comunicacion.get = function(req, res, next) {
  DB.Comunicacion.findAll().on('success', function(a) {
    res.send(a)
  });
};

module.exports = Comunicacion;
