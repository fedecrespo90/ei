var DB, Everyone;

var DetalleIngreso = function(db, everyone) {
  DB = db;
  Everyone = everyone;
  return DetalleIngreso;
};

DetalleIngreso.get = function(req, res, next) {
  DB.Detalle.findAll({where: {ingreso: 1}}).on('success', function(a) {
    res.send(a)
  });
};

DetalleIngreso.post = function(req, res, next) {
  DB.Detalle.find({ where: {
          nombre: req.body.nombre,
          ingreso: 1
          }
  }).on('success', function(e) {
    if(!e){
      DB.Detalle.create(req.body)
      res.send(true);
    }
  })
};

DetalleIngreso.put = function(req, res, next) {
  DB.Detalle.find({ where: {id: req.params.id} }).on('success', function(e) {
    if (e) {
      e.updateAttributes(req.body).success(function() {
        res.send(true);
      });
    }else{res.send(false)}
  });
};

DetalleIngreso.delete = function(req, res, next) {
  DB.Detalle.destroy({ id: req.params.id }).on('success',function(){res.send(true)});
};

module.exports = DetalleIngreso;
