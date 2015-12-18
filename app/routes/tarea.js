var DB, Everyone;

var Tarea = function(db, everyone) {
  DB = db;
  Everyone = everyone;

  return Tarea;
};

Tarea.get = function(req, res, next) {
  DB.Tarea.findAll({ order: 'nombre ASC' }).on('success', function(a){
    res.send(a)
  });
};

Tarea.post = function(req, res, next) {
  DB.Tarea.find({ where: {
          nombre: req.body.nombre,
          descripcion: req.body.descripcion
          }
  }).on('success', function(e) {
    if(!e){
      DB.Tarea.create(req.body)
      res.send(true);
    }
  })
};

Tarea.put = function(req, res, next) {
  DB.Tarea.find({ where: {id: req.params.id} }).on('success', function(e) {
    if (e) {
      e.updateAttributes(req.body).success(function() {
        res.send(true);
      });
    }else{res.send(false)}
  });
};

Tarea.delete = function(req, res, next) {
  DB.Tarea.destroy({ id: req.params.id }).on('success',function(){res.send(true)});
};

module.exports = Tarea;
