var DB, Everyone;

var Clave = function(db, everyone) {
  DB = db;
  Everyone = everyone;

  return Clave;
};

Clave.get = function(req, res, next) {
  DB.Clave.findAll().on('success', function(a) {
    res.send(a)
  });
};

Clave.post = function(req, res, next) {
  DB.Clave.find({ where: {
          nombre: req.body.nombre,
          descripcion: req.body.descripcion
          }
  }).on('success', function(e) {
    if(!e){
      DB.Clave.create(req.body)
      res.send(true);
    }
  })
};

Clave.put = function(req, res, next) {
  DB.Clave.find({ where: {id: req.params.id} }).on('success', function(e) {
    if (e) {
      e.updateAttributes(req.body).success(function() {
        res.send(true);
      });
    }else{res.send(false)}
  });
};

Clave.delete = function(req, res, next) {
  DB.Clave.destroy({ id: req.params.id }).on('success',function(){res.send(true)});
};

module.exports = Clave;
