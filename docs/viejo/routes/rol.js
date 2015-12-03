var DB, Everyone;

var Rol = function(db, everyone) {
  DB = db;
  Everyone = everyone;
  return Rol;
};

Rol.get = function(req, res, next){
  DB.Rol.findAll().on('success', function(a) {
    res.send(a)
  });
};

module.exports = Rol
