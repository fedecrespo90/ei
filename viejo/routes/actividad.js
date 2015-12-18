var DB, Everyone;

var Actividad = function(db, everyone) {
  DB = db;
  Everyone = everyone;

  return Actividad;
};

Actividad.get = function(req, res, next) {
  DB.Actividad.findAll().on('success', function(a) {
    res.send(a)
  });
};

Actividad.post = function(req, res, next) {
  DB.Actividad.find({ where: {
          nombre: req.body.nombre,
          observacion: req.body.observacion
          }
  }).on('success', function(e) {
    if(!e){
      DB.Actividad.create(req.body)
      res.send(true);
    }
  })
};

Actividad.put = function(req, res, next) {
  DB.Actividad.find({ where: {id: req.params.id} }).on('success', function(e) {
    if (e) {
      e.updateAttributes(req.body).success(function() {
        res.send(true);
      });
    }else{res.send(false)}
  });
};

Actividad.delete = function(req, res, next) {
  DB.Actividad.destroy({ id: req.params.id }).on('success',function(){res.send(true)});
};

module.exports = Actividad;
