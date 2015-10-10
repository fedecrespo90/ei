var DB, Everyone;

var Rubro = function(db, everyone) {
  DB = db;
  Everyone = everyone;

  return Rubro;
};

Rubro.get = function(req, res, next) {
  DB.Rubro.findAll().on('success', function(a) {
    res.send(a)
  });
};

Rubro.post = function(req, res, next) {
  DB.Rubro.find({ where: {
          nombre: req.body.nombre,
          }
  }).on('success', function(e) {
    if(!e){
      DB.Rubro.create(req.body
      ).on('success', function(a){res.send(true)});
    }  
  })
};

Rubro.put = function(req, res, next) {
  DB.Rubro.find({ where: {id: req.params.id} }).on('success', function(e) {
    if (e) {
      e.updateAttributes(req.body).success(function() {
        res.send(true);
      });
    }else{res.send(false)}
  });
};

Rubro.delete = function(req, res, next) {
  DB.Rubro.destroy({ id: req.params.id }).on('success',function(){res.send(true)});
};

module.exports = Rubro;
