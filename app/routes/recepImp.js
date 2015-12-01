var DB, Everyone
  , moment = require('moment');
var RecepImp = function(db, everyone) {
  DB = db;
  Everyone = everyone;
  return RecepImp;
};


RecepImp.get = function(req, res, next) {
  DB.GrupoImpuesto.findAll({where:{enviado: 1, pagado: 0}, include:[{model: DB.Banco}, {model: DB.Empleado}]}).on('success', function(as) {
    var msg=[]
    as.forEach(function(a){
      msg.push({
        id: a.id,
        numero: "Grupo_"+a.id,
        banco_id: a.banco_id,
        bancoNombre: a.banco.nombre,
        empleado_id: a.empleado_id,
        empleadoNombre: a.empleado.nombre+" "+a.empleado.apellido,
        total: a.total.toMoney(),
        diaDePago: moment(a.diaDePago).format("DD/MM/YYYY"),
      })
    })
    res.send(msg)
  });
};

RecepImp.editMonto = function(req, res, next){
  DB.Vencimiento.find({where: {id: req.params.id}, include:[{model: DB.Cliente}]}).on('success', function(vto){
    var baseMontos = Number(vto.monto0)+Number(vto.monto1)+Number(vto.monto2)+Number(vto.monto3)
    var bodyMontos = Number(req.body.monto0)+ Number(req.body.monto1)+ Number(req.body.monto2)+ Number(req.body.monto3);
    DB.Recibo.max('f').on('success',function(maximo){
      if(isNaN(maximo)){
        maximo=1
      }else{
        maximo=maximo+1
      }
      DB.GrupoImpuesto.find({ where: {id: vto.grupo_impuesto_id} }).on('success', function(grup){
      vto.updateAttributes({monto0: req.body.monto0, monto1: req.body.monto1, monto2 : req.body.monto2, monto3: req.body.monto3});
      grup.updateAttributes({total: bodyMontos});
      //generarRecibo(maximo, vto, baseMontos, bodyMontos, req, res);
      actualizarCuenta(maximo, vto, baseMontos, bodyMontos);
      res.send(true);
      })//function(grup)
    })
  })
  setTimeout(limpiarDb(), 300)
};

RecepImp.imprimirReciboRecep = function(req, res, next){
  DB.Vencimiento.find({where: {id: req.params.id}, include:[{model: DB.Cliente}]}).on('success', function(vto){
    var baseMontos = Number(vto.monto0)+Number(vto.monto1)+Number(vto.monto2)+Number(vto.monto3)
    var bodyMontos = Number(req.body.monto0)+ Number(req.body.monto1)+ Number(req.body.monto2)+ Number(req.body.monto3);
    DB.Recibo.max('f').on('success',function(maximo){
      if(isNaN(maximo)){
        maximo=1
      }else{
        maximo=maximo+1
      }
      //vto.updateAttributes({monto0: req.body.monto0, monto1: req.body.monto1, monto2 : req.body.monto2, monto3: req.body.monto3});
      generarRecibo(maximo, vto, baseMontos, bodyMontos, req, res);
      //actualizarCuenta(maximo, vto, baseMontos, bodyMontos);
    })
  })
  setTimeout(limpiarDb(), 300)
};

actualizarCuenta = function(maximo, vto, baseMontos, bodyMontos){
  var imp = vto.impuesto_id
  var q= "SELECT * FROM impuesto WHERE id="+imp;  // === DB.Impuesto.find({where: {id: imp}}).on('success', function(impu){
  DB._.query(q, function(err, impu) {// ===  DB.Impuesto.find({where: {id: imp}}).on('success', function(impu){
    if(impu){
      if(baseMontos>bodyMontos){//Entra plata a la cuenta
        DB.ClienteCuentaCorriente.find({where:{cliente_id: vto.cliente_id}}).on('success', function(ccuenta){
          DB.CuentaCorriente.find({where:{id: ccuenta.cuenta_corriente_id}}).on('success', function(cuenta){
            if(cuenta){
              var nuevoMonto = Number(cuenta.monto) + Number(baseMontos) - Number(bodyMontos);
              var monto = Number(baseMontos) - Number(bodyMontos);
              var observacion= "Ajuste en el pago de Impuestos ("+impu[0].nombre+"), con saldo a favor";
              DB.Movimiento.find({where: {monto: monto, ingreso: 1, cliente_cuenta_corriente_id: ccuenta.id, observacion: observacion }}).on('success', function(e){
                if(!e){//EVITAR REPETIDOS
                  cuenta.updateAttributes({monto: nuevoMonto});
                  DB.Movimiento.create({
                    monto: monto,
                    ingreso: 1,
                    cliente_cuenta_corriente_id: ccuenta.id,
                    observacion: observacion,
                  })
                  DB.Cliente.find({where: {id: vto.cliente_id}}).on('success', function(cliente){
                    DB.MovimientoCaja.create({
                      recibo_id: maximo,
                      monto_total: monto,
                      caja_id: 4,
                      monto: monto,
                      observacion: "Ajuste en el pago de impuestos, con saldo a favor",
                      concepto: cliente.nombre,
                      ingreso: 1,
                      chequedo: 0,
                    })
                  })
                }
              })
            }
          })
        })
      }else{
        if(baseMontos<bodyMontos){
          DB.ClienteCuentaCorriente.find({ where:{cliente_id: vto.cliente_id}}).on('success', function(ccuenta){
            DB.CuentaCorriente.find({where: {id: ccuenta.cuenta_corriente_id}}).on('success', function(cuenta){
              if(cuenta){
                var nuevoMonto = Number(cuenta.monto) + Number(baseMontos) - Number(bodyMontos);
                var monto = Number(bodyMontos) - Number(baseMontos)
                var observacion=  "Ajuste en el pago de Impuestos ("+impu[0].nombre+"), con saldo en contra"
                DB.Movimiento.find({where: {monto: monto, ingreso: 0, cliente_cuenta_corriente_id: ccuenta.id, observacion: observacion }}).on('success', function(e){
                  if(!e){
                    cuenta.updateAttributes({monto: nuevoMonto});
                    DB.Movimiento.create({
                      monto:  monto,
                      ingreso: 0,
                      cliente_cuenta_corriente_id: ccuenta.id,
                      observacion: observacion,
                    })
                    DB.Cliente.find({where: {id: vto.cliente_id}}).on('success', function(cliente){
                      DB.MovimientoCaja.create({
                        recibo_id: maximo,
                        monto_total: monto,
                        caja_id: 4,
                        monto: monto,
                        observacion: "Ajuste en el pago de impuestos, con saldo en contra",
                        concepto: cliente.nombre,
                        ingreso: 0,
                        chequedo: 0,
                      })
                    })
                  }
                })
              }
            })
          })
        }
      }
    }
  });setTimeout(function(){limpiarCaja(); limpiarDb();}, 300)
};

generarRecibo = function(maximo, vto, baseMontos, bodyMontos, req, res){
  DB.GrupoImpuesto.find({where: {id: vto.grupo_impuesto_id}}).on('success', function(gi){
    DB.Usuario.find({where:{id: req.session.usuario_id}, include: [{model: DB.Empleado}]}).on('success', function(u){
      var concepto= "Edición de Pago de impuestos por parte del Estudio Pressacco y Asoc."
      DB.Recibo.create({
        f: maximo,
        concepto: concepto,
        receptor: "Jorge Pressaco"
      }).on('success', function(recibo){
        var nTotal = Number(gi.total) - Number(baseMontos) + Number(bodyMontos)
        gi.updateAttributes({total: nTotal}).on('success',function(gi){
          DB.Vencimiento.findAll({where: {grupo_impuesto_id: gi.id}, include: [{model: DB.Cliente}, {model: DB.Impuesto}, {model: DB.Cronograma}]}).on('success', function(vtos){
            if(vtos){
              var arrayImpuesto=[];
              vtos.forEach(function(vi){
                  var importe= parseFloat(vi.monto0)+ parseFloat(vi.monto1)+parseFloat(vi.monto2)+parseFloat(vi.monto3)+parseFloat(vi.monto4)
                  arrayImpuesto.push({
                    cliente: vi.cliente.nombre,
                    importe: importe.toMoney(),
                    impuesto: vi.impuesto.nombre,
                    periodo: vi.cronograma.mes+"/"+vi.cronograma.año,
                  })
              })
            }
            res.send({
              pagoNumero: gi.id,
              total: gi.total,
              recibo: recibo,
              impuestos: arrayImpuesto,
              creador: u.empleado.nombre+" "+u.empleado.apellido,
              receptor: "Jorge Pressacco",
              reciboFecha: moment(recibo.update_at).format("DD/MM/YYYY  HH:mm")
            })
          })
        })
      })
    })
  })
};

RecepImp.byGroup = function(req, res, next){
  DB.Vencimiento.findAll({where: {grupo_impuesto_id: req.params.id}, include: [{model: DB.Impuesto},{model: DB.Cliente}]}).on('success',function(vencimientos){
    res.send(vencimientos);
  })
};

RecepImp.post = function(req, res, next) {
  DB.GrupoImpuesto.find({where:{id: req.params.id}}).on('success', function(gi){
    gi.updateAttributes({pagado: 1}).on('success', function(){res.send(true)})
  })
};


limpiarDb = function(){
  var q= "SELECT id FROM movimiento GROUP BY monto, ingreso , cliente_cuenta_corriente_id, observacion, updated_at";
  DB._.query(q, function(err, data) {
    if(data){
      var t='';
      data.forEach(function(d){
        if(d)
          t+=d.id+","
      })
      var nt = t.substring(0, t.length-1);
      var qd= "DELETE FROM movimiento WHERE id NOT IN ("+nt+")";
      DB._.query(qd);
    }
  })
};

limpiarCaja = function(){
  var q= "SELECT id FROM movimientoCaja GROUP BY monto, ingreso , caja_id, observacion, concepto, updated_at";
  DB._.query(q, function(err, data) {
    if(data){
      var t='';
      data.forEach(function(d){
        if(d)
          t+=d.id+","
      })
      var nt = t.substring(0, t.length-1);
      var qd= "DELETE FROM movimientoCaja WHERE id NOT IN ("+nt+")";
      DB._.query(qd);
    }
  })
};

module.exports = RecepImp;
