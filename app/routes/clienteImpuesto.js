var DB, Everyone
  , moment= require('moment');

var ClienteImpuesto = function(db, everyone) {
  DB = db;
  Everyone = everyone;
  return ClienteImpuesto;
};

ClienteImpuesto.get = function(req, res, next) {
 DB.ClienteCuentaCorriente.findAll({
    where: {id: {ne: 200}},
    include:[{model: DB.CuentaCorriente, as: 'cuentaCorriente'},
            {model: DB.Cliente, as: 'cliente',
            include:
              [
               {model: DB.Clasificacion, as: 'clasificacion'}, {model: DB.Comunicacion, as: 'comunicacion'}, {model: DB.Actividad, as: 'actividad'}
              ]
            }
    ]
  }).on('success', function(cuentas){
      var msg=[];
	    cuentas.forEach(function(cuenta){
		      var com;
		      switch (cuenta.cliente.comunicacion.nombre) {
		           case "Teléfono":	com= "Teléfono: " + cuenta.cliente.telefono; break;
		           case "Celular":	com= "Celular: "  + cuenta.cliente.celular; break;
		           case "Radio":	  com= "Radio: "    + cuenta.cliente.radio; break;
		           case "Email":	  com= "E-Mail: "   + cuenta.cliente.email; break;
		           default:		      com= "Indefinido" ;
		      }
		      msg.push({ 
		       id: cuenta.cliente.id,
		       clienteCuentaCorriente_id: cuenta.id,
		       cuentaCorriente_id: cuenta.cuentaCorriente.id,
		       clasificacion_id: cuenta.cliente.clasificacion_id,
		       clasificacion: cuenta.cliente.clasificacion.nombre,
		       comunicacion_id: cuenta.cliente.comunicacion_id,
           cierre_id: cuenta.cliente.cierre_id,
		       comunicacion: com,
		       actividad_id: cuenta.cliente.actividad_id,
		       actividad: cuenta.cliente.actividad.nombre,
		       catedral: cuenta.cliente.catedral,
		       cuit: cuenta.cliente.cuit,
		       nombre: cuenta.cliente.nombre,
		       telefono: cuenta.cliente.telefono,
		       celular: cuenta.cliente.celular,
		       email: cuenta.cliente.email,
		       radio: cuenta.cliente.radio,
		       empleado: cuenta.cliente.empleado,
		       negocio: cuenta.cliente.negocio,
		       contacto: cuenta.cliente.contacto,
		       observaciones: cuenta.cliente.observaciones,
		       monto: cuenta.cuentaCorriente.monto,
		       montoTramite: cuenta.cuentaCorriente.montoTramite
           

		     })
      })
      res.send(msg);
  })
}

ClienteImpuesto.byCliente = function(req, res, next) {
  DB.Impuesto.findAll({order: 'nombre ASC'}).on('success', function(imp) {
    DB.ClienteImpuesto.findAll({where: {cliente_id: req.params.cliente_id}}).on('success', function(cliImp){
      var msg = []
	    imp.forEach(function(i){
	      var temporal=!1
	        , clienteImpuestoId=-1;
        cliImp.forEach(function(c){
          if(c.impuesto_id == i.id){
            temporal=!0
            clienteImpuestoId=c.id
          }
        })
        msg.push({
          idClienteImpuesto: clienteImpuestoId,
          idCliente: req.params.cliente_id,
          idImpuesto: i.id,
          nombre: i.nombre,
          matchea: temporal,
        })
	    })
	    res.send(msg);
    })
  });
};

ClienteImpuesto.delete = function(req, res, next) {
  var q = "DELETE FROM clienteImpuesto where id = "+req.params.id;
  DB._.query(q, function(err, data) {
    res.send(true)
  })
  //DB.ClienteImpuesto.destroy({ id: req.params.id }).on('success',function(){res.send(true)});
};

ClienteImpuesto.post = function(req, res, next) {
  /*ANOTACIONES*/
  // Loc  1000 = 8
  // Vent 0100 = 4
  // Sip 0010 = 2
  // Os   0001 = 1
  // casos -> 11, 10, 9, 8
  //       -> 7, 6, 5, 4
  var parametro   = req.params.ids.split(":")
  var idCliente   = parametro[0];
  var idImpuesto  = parametro[1];
  var paga        = parametro[2];
  var adherentes  = parametro[3];
  DB.ClienteImpuesto.find({
        where: {
          cliente_id: idCliente,
          impuesto_id: idImpuesto,
          rubro_id: 1,
        }
  }).on('success', function(e) {
    if(!e){
      DB.ClienteImpuesto.create({
        detalle: req.body.detalle,
        paga: paga,
        cliente_id: idCliente,
        rubro_id: 1,
        impuesto_id: idImpuesto,
        adherentes: adherentes,//en la bd default1!!!!
      })
      res.send(true);
    }
  })
};

module.exports = ClienteImpuesto;
