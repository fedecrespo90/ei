var DB, Everyone;

var ClienteDocumentacion = function(db, everyone) {
  DB = db;
  Everyone = everyone;

  return ClienteDocumentacion;
};

ClienteDocumentacion.get = function(req, res, next) {
  if(req.session.rol_id<3){
    DB.ClienteCuentaCorriente.findAll({
        where: {id: {ne: 200}},
        include: [{
          model: DB.Cliente, include: [{model: DB.Clasificacion, as: 'clasificacion'}, {model: DB.Comunicacion, as: 'comunicacion'}, {model: DB.Actividad, as: 'actividad'}]
        }, {model: DB.CuentaCorriente} ]
    }).on('success', function(c){
        var msg=[];
	      c.forEach(function(c){
          var com;
          if(c.cliente.comunicacion){
            switch (c.cliente.comunicacion.nombre) {
             case "Teléfono":	com="Teléfono: "+c.cliente.telefono; break;
             case "Celular":	com="Celular: "+c.cliente.celular; break;
             case "Radio":	com="Radio: "+c.cliente.radio; break;
             case "Email":	com="E-Mail: "+c.cliente.email; break;
             default:		com="Indefinido";
            }
            msg.push({
             id: c.cliente.id,
             cliente_id: c.cliente.id,
             clasificacion_id: c.cliente.clasificacion_id,
             clasificacion: c.cliente.clasificacion.nombre,
             comunicacion_id: c.cliente.comunicacion_id,
             cierre_id: c.cliente.cierre_id,
             comunicacion: com,
             actividad_id: c.cliente.actividad_id,
             actividad: c.cliente.actividad.nombre,
             catedral: c.cliente.catedral,
             cuit: c.cliente.cuit,
             nombre: c.cliente.nombre,
             telefono: c.cliente.telefono,
             celular: c.cliente.celular,
             email: c.cliente.email,
             radio: c.cliente.radio,
             empleado: c.cliente.empleado,
             negocio: c.cliente.negocio,
             contacto: c.cliente.contacto,
             observaciones: c.cliente.observaciones,
		         monto: c.cuentaCorriente.monto.toMoney(),
		       })
          }
        })
      res.send(msg);
    })
  }else{
    DB.ClienteCuentaCorriente.findAll({
        include: [{
          model: DB.Cliente, include: [{model: DB.Clasificacion, as: 'clasificacion'}, {model: DB.Comunicacion, as: 'comunicacion'}, {model: DB.Actividad, as: 'actividad'}]
        }, {model: DB.CuentaCorriente} ]
    }).on('success', function(c){
        var msg=[];
	      c.forEach(function(c){
          var com;
          if(c.cliente.comunicacion){
            switch (c.cliente.comunicacion.nombre) {
             case "Teléfono":	com="Teléfono: "+c.cliente.telefono; break;
             case "Celular":	com="Celular: "+c.cliente.celular; break;
             case "Radio":	com="Radio: "+c.cliente.radio; break;
             case "Email":	com="E-Mail: "+c.cliente.email; break;
             default:		com="Indefinido";
            }
            msg.push({
             id: c.cliente.id,
             cliente_id: c.cliente.id,
             clasificacion_id: c.cliente.clasificacion_id,
             clasificacion: c.cliente.clasificacion.nombre,
             comunicacion_id: c.cliente.comunicacion_id,
             cierre_id: c.cliente.cierre_id,
             comunicacion: com,
             actividad_id: c.cliente.actividad_id,
             actividad: c.cliente.actividad.nombre,
             catedral: c.cliente.catedral,
             cuit: c.cliente.cuit,
             nombre: c.cliente.nombre,
             telefono: c.cliente.telefono,
             celular: c.cliente.celular,
             email: c.cliente.email,
             radio: c.cliente.radio,
             empleado: c.cliente.empleado,
             negocio: c.cliente.negocio,
             contacto: c.cliente.contacto,
             observaciones: c.cliente.observaciones,
		         monto: c.cuentaCorriente.monto.toMoney(),
		       })
          }
        })
      res.send(msg);
    })
  }
};

module.exports = ClienteDocumentacion;
