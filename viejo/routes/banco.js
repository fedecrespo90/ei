var DB, Everyone;

var Banco = function(db, everyone) {
  DB = db;
  Everyone = everyone;
  return Banco;
}; 

Banco.get = function(req, res, next){
  DB.Banco.findAll().on('success', function(banco) {
    var msg = [];
    banco.forEach(function (e){
      msg.push({
        name: e.nombre+" "+e.direccion,
        id: e.id,
        nombre: e.nombre,
        direccion: e.direccion,
        rangoHorario: e.rangoHorario,
        puntaje: e.puntaje,
      }) 
    })
    res.send(msg)
  });
};

Banco.post = function(req, res, next) {
  DB.Banco.find({ where: {  
          nombre: req.body.nombre,
          direccion: req.body.direccion
          }
  }).on('success', function(e) {
    if(!e){
      DB.Banco.create(req.body)
      res.send(true);
    }  
  })
};

Banco.byId = function(req, res, next) { 
  DB.Banco.find({ where: {id: req.params.id} }).on('success', function(e) {
    res.send(e.nombre+"-"+e.direccion)
  })
};

Banco.byIdNombre = function(req, res, next) { 
  DB.Banco.find({ where: {id: req.params.id} }).on('success', function(e) {
    res.send(e.nombre)
  })
};

Banco.put = function(req, res, next) {
DB.Banco.find({ where: {id: req.params.id} }).on('success', function(e) {
  if (e) {
    e.updateAttributes(req.body).success(function() {
      res.send(true);
    });
  }else{res.send(false)}
});
};

Banco.delete = function(req, res, next) {
DB.Banco.destroy({ id: req.params.id }).on('success',function(){res.send(true)});
};

module.exports = Banco
