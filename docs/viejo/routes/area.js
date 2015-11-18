var DB, Everyone;

var Area = function(db, everyone) {
  DB = db;
  Everyone = everyone;
  return Area;
};

Area.get = function(req, res, next){
  DB.Area.findAll().on('success', function(a) {
    res.send(a)
  });
};

Area.post = function(req, res, next) {
  DB.Area.find({ where: {
          nombre: req.body.nombre,
          observacion: req.body.observacion          
          }
  }).on('success', function(e) {
    if(!e){
      DB.Area.create(req.body)
      res.send(true);
    }
  })  
};

Area.put = function(req, res, next) {
  DB.Area.find({ where: {id: req.params.id} }).on('success', function(e) {
    if (e) {
      e.updateAttributes(req.body).success(function() {
        res.send(true);
      });
    }else{res.send(false)}
  });
};

Area.delete = function(req, res, next) {
  DB.Area.destroy({ id: req.params.id }).on('success',function(){res.send(true)});
};

module.exports = Area
