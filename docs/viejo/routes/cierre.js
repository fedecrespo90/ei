var DB, Everyone;

var Cierre = function(db, everyone) {
  DB = db;
  Everyone = everyone;

  return Cierre;
};

Cierre.get = function(req, res, next) {
  DB.Cierre.findAll().on('success', function(a) {
    res.send(a)
  });
};

module.exports = Cierre;
  