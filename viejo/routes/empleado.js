var DB, Everyone, 
    moment= require('moment');

var Empleado = function(db, everyone) {
  DB = db;
  Everyone = everyone;
  return Empleado;
};

Empleado.get = function(req, res, next) {
  DB.Empleado.findAll().on('success', function(empleado) {
    var msg = [];
    empleado.forEach(function (e){
      msg.push({
        id: e.id,
        name: e.nombre+" "+e.apellido,
        nombre: e.nombre,
        apellido: e.apellido,
        dni: e.dni,
        telefono: e.telefono,
        mail: e.mail,
        legajo: e.legajo,
        pc: e.pc,
      }) 
    })
    res.send(msg)
  });
};

Empleado.byId = function(req, res, next) { 
  DB.Empleado.find({ where: {id: req.params.id} }).on('success', function(e) {
    res.send(e.nombre+" "+e.apellido)
  })
};

Empleado.post = function(req, res, next) {
  DB.Empleado.find({ where: {
          nombre: req.body.nombre,
          apellido: req.body.apellido,
          dni: req.body.dni,
          telefono: req.body.telefono,
          legajo: req.body.legajo,          
          }
  }).on('success', function(e) {
    if(!e){
      DB.Empleado.create(req.body)
      res.send(true)
    }
  })
};

Empleado.put = function(req, res, next) {
DB.Empleado.find({ where: {id: req.params.id} }).on('success', function(e) {
  if (e) {
    e.updateAttributes(req.body).success(function() {
      res.send(true);
    });
  }else{res.send(false)}
});
};

Empleado.delete = function(req, res, next) {
DB.Empleado.destroy({ id: req.params.id }).on('success',function(){res.send(true)});
};




module.exports = Empleado;
