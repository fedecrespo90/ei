var DB, Everyone;

var Usuario = function(db, everyone) {
  DB = db;
  Everyone = everyone;

  return Usuario;
};

Usuario.currentAreaId = function(req, res, next) {
  DB.Usuario.find({ where: { id: req.session.usuario_id } }).on('success', function(u) {
    res.send({
      result: true,
      area_id: u.area_id || 0
    });
  });
};

Usuario.get = function(req, res, next){
  DB.Usuario.findAll({
    include:[ DB.Rol, DB.Area, DB.Empleado ]
  }).on('success', function(user) {
    var msg = [];
    user.forEach(function (u){
//"id", "usuario", "empleado_id", "empleado", "rol_id", "rol", "area_id", "area"
      msg.push({
        id: u.id,
	      usuario: u.usuario,
	      empleado: u.empleado.nombre+" "+u.empleado.apellido,
	      empleado_id: u.empleado.id,
	      rol: u.rol.nombre,
	      rol_id: u.rol.id,
	      area: u.area.nombre,
	      area_id: u.area.id
      });
    });
    res.send(msg)
  });
};

Usuario.put = function(req, res, next){
DB.Usuario.find({ where: {id: req.params.id} }).on('success', function(u) {
  if (u) {
    u.updateAttributes(req.body).success(function() {
      res.send(true);
    });
  }else{res.send(false)}
});
};

Usuario.post = function(req, res, next) {
  var u= req.body
   ,  user=u.usuario.replace(/\s/g, "")
  DB.Usuario.find({ where: {
	      empleado_id: u.empleado_id,
	      rol_id: u.rol_id,
	      area_id: u.area_id
        }
  }).on('success', function(e) {
    if(!e){
      DB.Usuario.create({
        id: u.id,
	      usuario: user,
	      pass: user,
	      empleado_id: u.empleado_id,
	      rol_id: u.rol_id,
	      area_id: u.area_id
      }).on('success', function(a){
            res.send(true)
      });
    }else{
     DB.Empleado.find({ where: { id: u.empleado_id} }).on('success', function(empleado){
        var err = '"'+empleado.nombre+' '+empleado.apellido+'" ya tiene un usuario designado para esa Área y en ese Rol ';
        res.send(err); 
     })
    }
  })
};

Usuario.delete = function(req, res, next) {
DB.Usuario.destroy({ id: req.params.id }).on('success',function(){res.send(true)});
};

module.exports = Usuario;
