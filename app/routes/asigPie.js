var DB, Everyone;
  
var AsigPie = function(db, everyone) {
  DB = db;
  Everyone = everyone;

  return AsigPie;
};

AsigPie.get = function(req, res, next) {
  DB.AsigPie.findAll().on('success', function(a) {
    res.send(a)
  });
};

AsigPie.post = function(req, res, next) {
  DB.AsigPie.find({ where: {
          observacion: req.body.observacion
          }
  }).on('success', function(e) {
    if(!e){
      DB.AsigPie.create(req.body)
      res.send(true);
    }
  })  
};

AsigPie.put = function(req, res, next) {
  DB.AsigPie.find({ where: {id: req.params.id} }).on('success', function(e) {
    if (e) {
      e.updateAttributes(req.body).success(function() {
        res.send(true);
      });
    }else{res.send(false)}
  });
};

AsigPie.delete = function(req, res, next) {
  DB.AsigPie.destroy({ id: req.params.id }).on('success',function(){res.send(true)});
};

module.exports = AsigPie;
