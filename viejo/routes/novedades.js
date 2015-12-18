var DB, Everyone
 ,  moment= require('moment')
 ;  
var Novedades = function(db, everyone) {
  DB = db;
  Everyone = everyone;
  return Novedades;
};

Novedades.get = function(req, res, next) {
  if(req.session.rol_id<3){
    //CADA EMPLEADO PUEDE VER LAS NOVEDADES DE SU AREA, "SIN AREA es decir para cualquiera!"(CERO), y PARA EL MISMO (empleado_id)
    DB.Novedades.findAll({order: 'created_at DESC', where: "(empleado_id= "+req.session.empleado_id+" OR (area_id= "+req.session.area_id+" OR area_id=0)) AND activa = 1"}).on('success', function(a){
      var msg=[];
      a.forEach(function(a){
        if(a.empleado_id==req.session.empleado_id)
          a.novedad = "[PERSONAL] - "+a.novedad
        msg.push(a)
      })
      res.send(msg)
    })
  }else{
    DB.Novedades.findAll({order: 'created_at DESC', where: "activa = 1"}).on('success', function(a){
      res.send(a)
    })  
  }
};

Novedades.post = function(req, res, next) {
  DB.Novedades.find({where: {id: req.params.id}}).on('success', function(a){
    a.updateAttributes({activa: !1}).on('success', function(){
      res.send(true)
    })
  })  
};

module.exports = Novedades;
