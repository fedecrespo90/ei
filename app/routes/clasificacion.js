var DB, Everyone;

var Clasificacion = function(db, everyone) {
  DB = db;
  Everyone = everyone;

  return Clasificacion;
};

Clasificacion.get = function(req, res, next) {
  DB.Clasificacion.findAll().on('success', function(a) {
    res.send(a)
  });
};

Clasificacion.post = function(req, res, next) {
  DB.Clasificacion.find({ where: {
          nombre: req.body.nombre,
          observacion: req.body.observacion
          }
  }).on('success', function(e) {
    if(!e){
      DB.Clasificacion.create(req.body)
      res.send(true);  
    }  
  })
};

Clasificacion.put = function(req, res, next) {
  DB.Clasificacion.find({ where: {id: req.params.id} }).on('success', function(e) {
    if (e) {
      e.updateAttributes(req.body).success(function() {
        res.send(true);
      });
    }else{res.send(false)}
  });
};

Clasificacion.delete = function(req, res, next) {
  DB.Clasificacion.destroy({ id: req.params.id }).on('success',function(){res.send(true)});
};

module.exports = Clasificacion;
