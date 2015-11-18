var DB, Everyone;

var Concepto = function(db, everyone) {
  DB = db;
  Everyone = everyone;

  return Concepto;
};

Concepto.get = function(req, res, next) {
  DB.Concepto.findAll().on('success', function(a) {
    res.send(a)
  });
};

Concepto.post = function(req, res, next) {
  DB.Concepto.find({ where: {
          nombre: req.body.nombre,
          }
  }).on('success', function(e) {
    if(!e){
      DB.Concepto.create(req.body)
      res.send(true);
    }  
  })
};

Concepto.put = function(req, res, next) {
  DB.Concepto.find({ where: {id: req.params.id} }).on('success', function(e) {
    if (e) {
      e.updateAttributes(req.body).success(function() {
        res.send(true);
      });
    }else{res.send(false)}
  });
};

Concepto.delete = function(req, res, next) {
  DB.Concepto.destroy({ id: req.params.id }).on('success',function(){res.send(true)});
};

module.exports = Concepto;
