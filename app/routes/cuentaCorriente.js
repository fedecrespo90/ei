var DB, Everyone,
    moment= require('moment');

var CuentaCorriente = function(db, everyone) {
  DB = db;
  Everyone = everyone;
  return CuentaCorriente;
};

CuentaCorriente.get = function(req, res, next) {
  if(req.session.rol_id > 2){
    DB.CuentaCorriente.findAll({
        where: {'clienteCuentaCorriente.principal': 1},
        include: [{
          model: DB.ClienteCuentaCorriente,
          include: [{
            model: DB.Cliente,
            include: [{
              model: DB.Actividad
            }]

          }]
        }]
    }).on('success', function(a) {
    	var msg= [];
    	a.forEach(function(cc){
        var com;
        switch (cc.clienteCuentaCorriente.cliente.comunicacion_id) {
                case 1:	com="Teléfono: "+cc.clienteCuentaCorriente.cliente.telefono; break;
                case 2:	com="Celular: "+cc.clienteCuentaCorriente.cliente.celular; break;
                case 3:	com="Radio: "+cc.clienteCuentaCorriente.cliente.radio; break;
                case 4:	com="E-Mail: "+cc.clienteCuentaCorriente.cliente.email; break;
                default:	com="Indefinido";
        }
     	  msg.push({
      	    id: cc.id,
      	    monto: cc.monto.toMoney(),
      	    montoTramite: cc.montoTramite.toMoney(),
      	    clienteNombre: cc.clienteCuentaCorriente.cliente.nombre,
      	    cliente_id: cc.clienteCuentaCorriente.cliente_id,
      	    clienteCuentaCorriente_id: cc.clienteCuentaCorriente.id,
      	    clienteComunicacion: com,
      	    clienteActividad: cc.clienteCuentaCorriente.cliente.actividad.nombre
      	})
    	})
      res.send(msg);
    });
  }else{
    DB.CuentaCorriente.findAll({
        where: {'clienteCuentaCorriente.principal': 1, id: {ne: 200}},
        include: [{
          model: DB.ClienteCuentaCorriente,
          include: [{
            model: DB.Cliente,
            include: [{
              model: DB.Actividad
            }]

          }]
        }]
    }).on('success', function(a) {
    	var msg= [];
    	a.forEach(function(cc){
        var com;
        switch (cc.clienteCuentaCorriente.cliente.comunicacion_id) {
                case 1:	com="Teléfono: "+cc.clienteCuentaCorriente.cliente.telefono; break;
                case 2:	com="Celular: "+cc.clienteCuentaCorriente.cliente.celular; break;
                case 3:	com="Radio: "+cc.clienteCuentaCorriente.cliente.radio; break;
                case 4:	com="E-Mail: "+cc.clienteCuentaCorriente.cliente.email; break;
                default:	com="Indefinido";
        }
     	  msg.push({
      	    id: cc.id,
      	    monto: cc.monto.toMoney(),
      	    montoTramite: cc.montoTramite.toMoney(),
      	    clienteNombre: cc.clienteCuentaCorriente.cliente.nombre,
      	    cliente_id: cc.clienteCuentaCorriente.cliente_id,
      	    clienteCuentaCorriente_id: cc.clienteCuentaCorriente.id,
      	    clienteComunicacion: com,
      	    clienteActividad: cc.clienteCuentaCorriente.cliente.actividad.nombre
      	})
    	})
      res.send(msg);
    });
  }
};

CuentaCorriente.monto = function(req, res, next){
  DB.ClienteCuentaCorriente.find({where:{cliente_id: req.params.cliente_id},
                                  include:[{model: DB.CuentaCorriente, as:"cuentaCorriente"}]
  }).on('success', function(cc){
      res.send(cc.cuentaCorriente)
  })
};

CuentaCorriente.byCliente = function(req, res, next){
  DB.Movimiento.findAll({
        where: {'clienteCuentaCorriente.cuenta_corriente_id': req.params.cuentaCorriente_id},
	      include: [{model:DB.Vencimiento, include:[{model: DB.Cronograma}]},{model: DB.ClienteCuentaCorriente,
	               include:[{  model:DB.Cliente
	               }]
	      }],
	      order: '`movimiento`.`id` DESC'
  }).on('success', function(a) {
     var msg=[];
     a.forEach(function(mov){
        var tramite
        if(mov.vencimiento_id == 0){
          if(mov.ingreso){
           tramite = "Ingreso "+mov.observacion
          }else{
            tramite = "Egreso "+mov.observacion
          }
        }else{
           if(mov.tramite){
              tramite="Tramite "+mov.observacion
            }else{
              var crono = " "
              if(mov.vencimiento)
                if(mov.vencimiento.cronograma)
                  crono=" - "+mov.vencimiento.cronograma.mes+"/"+mov.vencimiento.cronograma.año+" - ";
              if(mov.ingreso){
                tramite="Cliente pagó al Estudio/Ingreso " + mov.observacion + crono
                if(mov.vencimiento){
                  if(mov.vencimiento.pagado==1){
                    if(mov.vencimiento.grupo_impuesto_id!= null){
                      if(mov.vencimiento.descargado!= null){
                        if(mov.vencimiento.archivado!= null){
                          tramite+= " Archivado"
                        }else{
                        tramite+= " A Archivar"
                        }
                      }else{
                        tramite+=" A Descargar"
                      }
                    }else{
                      tramite+=" Enviado a Pagar"
                    }
                  }else{
                    tramite+= " Sin enviar"
                  }
                }else{
                  tramite+= " Sin Detallar"
                }
              }else{
                tramite="El Estudio pagó/Egreso " + mov.observacion
              }
            }
        }
        //MANDA LA DATA A Clientes -> Cuentas Corrientes
	      msg.push({
	         id: mov.id,
	         clienteNombre: mov.clienteCuentaCorriente.cliente.nombre,
	         fecha: moment(mov.created_at).format('DD/MM/YYYY'),
	         tramite: tramite, //mov.tramite? "Trámite"+mov.observacion:"Pago de Impuestos"+mov.observacion,
	         monto: mov.monto.toMoney(),
	         ingreso: mov.ingreso
        });
     });
     res.send(msg);
  });
};
module.exports = CuentaCorriente;
