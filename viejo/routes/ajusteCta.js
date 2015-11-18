var DB, Everyone, 
    moment= require('moment');

var AjusteCta = function(db, everyone) {
  DB = db;
  Everyone = everyone;
  return AjusteCta;
};

AjusteCta.get = function(req, res, next) {
  DB.CuentaCorriente.findAll({
      where: {'clienteCuentaCorriente.principal': 1},
      include: [{
        model: DB.ClienteCuentaCorriente, 
        include: [{ 
          model: DB.Cliente,
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
    	    catedral: cc.clienteCuentaCorriente.cliente.catedral,
    	    monto: cc.monto.toMoney(),
    	    montoTramite: cc.montoTramite.toMoney(),
    	    nombre: cc.clienteCuentaCorriente.cliente.nombre,
    	    comunicacion: com,
    	})
  	})
    res.send(msg);
  });
};

AjusteCta.post = function(req, res, next) {
// genero un movimiento de Ingreso o Egreso según corresponda
  DB.Empleado.find({where:{id: req.session.empleado_id}}).on('success',function(empleado){
    DB.Recibo.max('g').on('success',function(maximo){
      if(isNaN(maximo)){
        maximo=1
      }else{
        maximo=maximo+1
      }
      if(req.body.iedoc_id == 'Ingreso'){
        var concepto = "Ajuste de Cuenta por parte del empleado "+empleado.nombre+" "+empleado.apellido
      }
      DB.Recibo.create({
        g: maximo,
        concepto: concepto,
        receptor: "Jorge Pressacco"
      }).on('success', function(recibo){
        if(req.body.iedoc_id == 'Ingreso'){
          DB.Movimiento.create({
            monto: req.body.montoNuevo,
            ingreso: 1,
            cliente_cuenta_corriente_id: req.params.id,
            observacion: req.body.observacion
          }).on('success', function(m){
            DB.CuentaCorriente.find({where:{id: req.params.id}, include:[{model: DB.ClienteCuentaCorriente, include:[{model: DB.Cliente}]}]}).on('success', function(cuenta){
              var montoNuevo = Number(cuenta.monto) + Number(req.body.montoNuevo)
              cuenta.updateAttributes({monto: montoNuevo});
              DB.MovimientoCaja.create({
                recibo_id: recibo.id,
                monto_total: Number(req.body.montoNuevo),
                caja_id: 4,
                monto: Number(req.body.montoNuevo),
                observacion: "Ajuste de CTA/CTE",
                concepto: "Cliente: "+cuenta.clienteCuentaCorriente.cliente.nombre, 
                subConcepto: "Realizado por: "+empleado.nombre+" "+empleado.apellido,
                rSubConcepto: req.body.observacion,
                ingreso: 1,
                chequedo: 0,
              })
              res.send({
                saldo:  req.body.montoNuevo,
                total:  montoNuevo,                         
                recibo: recibo,
                detalle: "Ajuste de Cuenta mediante un ingreso de $"+req.body.montoNuevo,
                reciboFecha: moment(recibo.updated_at).format("DD/MM/YYYY  HH:mm"),
                receptor: cuenta.clienteCuentaCorriente.cliente.nombre,
                operador: empleado.nombre + " " + empleado.apellido,
              }) 
            })
          })
        }else{//es un egreso
          DB.Movimiento.create({
            monto: req.body.montoNuevo,
            ingreso: 0,
            cliente_cuenta_corriente_id: req.params.id,
            observacion: req.body.observacion
          }).on('success', function(m){
            DB.CuentaCorriente.find({where:{id: req.params.id}, include:[{model: DB.ClienteCuentaCorriente, include:[{model: DB.Cliente}]}]}).on('success', function(cuenta){
              var montoNuevo = Number(cuenta.monto) - Number(req.body.montoNuevo)
              cuenta.updateAttributes({monto:montoNuevo});
              DB.MovimientoCaja.create({
                recibo_id: recibo.id,
                monto_total: Number(req.body.montoNuevo),
                caja_id: 4,
                monto: Number(req.body.montoNuevo),
                observacion: "Ajuste de CTA/CTE",
                concepto: "Cliente: "+cuenta.clienteCuentaCorriente.cliente.nombre, 
                subConcepto: "Realizado por: "+empleado.nombre+" "+empleado.apellido,
                rSubConcepto: req.body.observacion, 
                ingreso: 0,
                chequedo: 0,
              })
              res.send({
                saldo:  req.body.montoNuevo,
                total:  montoNuevo,                         
                recibo: recibo,
                detalle: "Ajuste de Cuenta mediante un egreso de $"+req.body.montoNuevo,
                reciboFecha: moment(recibo.updated_at).format("DD/MM/YYYY  HH:mm"),
                receptor: cuenta.clienteCuentaCorriente.cliente.nombre,
                operador: empleado.nombre + " " + empleado.apellido,
              })        
            })    
          })  
        }
      })
    })
  })
}

module.exports = AjusteCta;
