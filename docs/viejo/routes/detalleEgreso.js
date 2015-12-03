var DB, Everyone;

var DetalleEgreso = function(db, everyone) {
  DB = db;
  Everyone = everyone;
  return DetalleEgreso;
};

DetalleEgreso.get = function(req, res, next) {
  DB.Detalle.findAll({where: {ingreso: 0}}).on('success', function(a) {
    res.send(a)
  });
};

DetalleEgreso.post = function(req, res, next) {
  DB.Detalle.find({ where: {
          nombre: req.body.nombre,
          ingreso: 0
          }
  }).on('success', function(e) {
    if(!e){
      DB.Detalle.create(req.body)
      res.send(true);
    }
  })
};

DetalleEgreso.put = function(req, res, next) {
  DB.Detalle.find({ where: {id: req.params.id} }).on('success', function(e) {
    if (e) {
      e.updateAttributes(req.body).success(function() {
        res.send(true);
      });
    }else{res.send(false)}
  });
};

DetalleEgreso.delete = function(req, res, next) {
  DB.Detalle.destroy({ id: req.params.id }).on('success',function(){res.send(true)});
};

module.exports = DetalleEgreso;
