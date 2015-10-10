var DB, Everyone, 
    moment= require('moment');

var Perfil = function(db, everyone) {
  DB = db;
  Everyone = everyone;
  return Perfil;
};

Perfil.get = function(req, res, next) {
	DB.Usuario.find({
 		where: {id: req.params.id},
 		include:[ 
 			DB.Empleado, DB.Area, DB.Rol
 		]
	}).on('success', function(usuario){
	  res.send({
		  usuario_id: usuario.id,
		  usuario: usuario.usuario,
		  pass1: usuario.pass,
		  pass2: usuario.pass,
		  rol_id: usuario.rol_id,
		  rol: usuario.rol.nombre,
		  area_id: usuario.area_id,
	          area: usuario.area.nombre,
		  empleado_id: usuario.empleado.id,
		  nombre: usuario.empleado.nombre,
		  apellido: usuario.empleado.apellido,
		  telefono: usuario.empleado.telefono,
		  dni: usuario.empleado.dni,
		  email: usuario.empleado.mail
	  });
	}).on('error', function(err){
	res.send(false);});
};

Perfil.put = function(req, res, next) {
  var data = req.body;
  DB.Usuario.find({where: {id: req.session.usuario_id}}).on('success', function(u) {
  if(u){
    DB.Empleado.find({where: {id: u.empleado_id}}).on('success', function(e) {
            e.updateAttributes({
              nombre: data.nombre,
              apellido: data.apellido,
              telefono: data.telefono,
              mail: data.email
            }).on('success', function() {
              res.send(data);
            }).on('error', function(err) {
              res.send(false);
            });
    });};
  });
};

Perfil.changePassword = function(req, res, next) {
  var pass1 = req.body.pass1,
      pass2 = req.body.pass2;
  if (pass1 === pass2) {
    DB.Usuario.find({where: {id: req.session.usuario_id}}).on('success', function(u) {
      if (u) {
        u.updateAttributes({ pass: pass1 }).on('success', function() {
          res.send(req.body);
        }).on('error', function(err) {
          res.send(false);
        });
      }
    });
  }
};

module.exports = Perfil;
