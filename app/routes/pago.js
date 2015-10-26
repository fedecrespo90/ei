var DB, Everyone
 , async = require('async')
 , moment= require('moment')
 , cuentaEstudio = 200
 , cuentaAbogado = 131;
var Pago = function(db, everyone) {
  DB = db;
  Everyone = everyone;   
  return Pago;
};

Pago.put = function(req, res, next) {
  var param = req.body;
  var concepto;
  var efMonto = 0 , chMonto= 0;
  if(param.chequeMonto!='0'){
    if(param.efectivoMonto!='0'){
      efMonto= Number(param.efectivoMonto)
      chMonto= Number(param.chequeMonto)
      concepto="Recepción para Pago de Impuestos(Efectivo:$"+efMonto.toFixed(2)+" y Cheque: $"+ chMonto.toFixed(2)+" del Banco:"+param.chequeBanco+" Titular:"+param.chequeTitular+" Nº:"+param.chequeNumero+" Fecha de Emisión: "+param.fechaEmision+" Fecha de Cobro: "+param.fechaCobro+")";
      }else{  
        chMonto= Number(param.chequeMonto)      
        concepto="Recepción para Pago de Impuestos(Cheque: $"+ chMonto.toFixed(2)+" del Banco:"+param.chequeBanco+" Titular:"+param.chequeTitular+" Nº:"+param.chequeNumero+" Fecha de Emisión: "+param.fechaEmision+" Fecha de Cobro: "+param.fechaCobro+")";
      }
  }else{
    if(param.efectivoMonto!='0'){
      efMonto= Number(param.efectivoMonto)    
      concepto="Recepción para Pago de Impuestos(Efectivo:$"+ efMonto.toFixed(2)+")";
    }else{
      concepto="Recepción para Pago de Impuestos( A través de la Cuenta Corriente )"
    }
  }
  DB.Cliente.find({where:{id: param.cliente_id}}).on('success',function(cli){
    var descubierto= parseFloat(param.montoCC)+parseFloat(param.totalPago)-parseFloat(param.sumImp);
    DB.Autorizacion.create({
      empleado_id: req.session.usuario_id,
      descubierto: descubierto,
      cliente_id: param.cliente_id  
    }).on('success',function(){
      DB.Recibo.max('e').on('success',function(maximo){
        if(isNaN(maximo)){
          maximo=1
        }else{
          maximo=maximo+1
        }
        DB.Recibo.create({
          e: maximo,
          concepto: concepto,
          receptor: cli.nombre
        }).on('success', function(recibo){
          cargarMovimientosCaja(recibo.id, param.impuestos, cli, maximo, efMonto+chMonto);
          DB.CuentaCorriente.find({where:{id: param.cuentaCorriente_id}}).on('success', function(cuenta){
            var totalIngresado= parseFloat(param.totalPago) +parseFloat(cuenta.monto)-parseFloat(param.sumImp) ;
            cuenta.updateAttributes({monto:totalIngresado});
            var movimientoMonto = Number((Number(efMonto)+Number(chMonto))-Number(param.sumImp)||0);
           //   faltante = Number(Number(param.sumImp)||0-(Number(efMonto)+Number(chMonto))); 
            crearMovimientoMonto(recibo.id, totalIngresado, maximo, cli, (efMonto+chMonto))
            DB.ClienteCuentaCorriente.find({where:{cliente_id: param.cliente_id}}).on('success',function(ccc){
              var arrayImpuesto=["Giro en descubierto por un total de $"+Math.abs(Number(descubierto)).toFixed(2)]
              param.impuestos.forEach(function(imp){
                DB.Vencimiento.find({where:{id: imp.id},
                                     include: [{model: DB.Impuesto},
                                               {model: DB.CronogramaImpuesto, include:[{model: DB.Cronograma}]}]
                }).on('success',function(base){
                  var btotal = parseFloat(base.monto0)+parseFloat(base.monto1)+parseFloat(base.monto2)+parseFloat(base.monto3)+parseFloat(base.monto4)
                  if(btotal<=imp.monto){
                    base.vtoImpuesto=base.cronogramaImpuesto.cronograma.mes+ "/"+ base.cronogramaImpuesto.cronograma.año; 
                    if(/Monotributo/.test(base.impuesto.nombre) || /Plan Mis Facilidades AFIP/.test(base.impuesto.nombre) || /Plan de Pagos ARBA/.test(base.impuesto.nombre) ){  
                      var edit= base.vtoImpuesto.split("/")
                      if(edit[0]!="12")
                        edit[0]=parseInt(edit[0])+1
                      else{
                        edit[0]="1"
                        edit[1]= parseInt(edit[1])+1
                      }
                      base.vtoImpuesto=edit.join("/")
                    }
                    arrayImpuesto.push(base.vtoImpuesto+" - "+base.impuesto.nombre+" (Pago Total $"+Number(btotal).toMoney()+")")
                    base.updateAttributes({pagado: 1, adeudado:0})
                    if(base.impuesto.deleted_at)//EMC
                      base.updateAttributes({monto0: 0})
                  }else{
                    base.vtoImpuesto=base.cronogramaImpuesto.cronograma.mes+ "/"+base.cronogramaImpuesto.cronograma.año;
                    if(/Monotributo/.test(base.impuesto.nombre) || /Plan Mis Facilidades AFIP/.test(base.impuesto.nombre) || /Plan de Pagos ARBA/.test(base.impuesto.nombre) ){  
                      var edit= base.vtoImpuesto.split("/")
                      if(edit[0]!="12")
                        edit[0]=parseInt(edit[0])+1
                      else{
                        edit[0]="1"
                        edit[1]= parseInt(edit[1])+1
                      }
                      base.vtoImpuesto=edit.join("/")
                    }
                    arrayImpuesto.push(base.vtoImpuesto+" - "+base.impuesto.nombre+" (Pago Parcial $"+Number(imp.monto).toMoney()/*Number(btotal).toMoney()*/+" de un total de $"+Number(btotal).toMoney()/*Number(imp.monto).toMoney()*/+")")                                     
                    var arreglo=[]
                    arreglo.push(base.monto4,base.monto3,base.monto2,base.monto1,base.monto0)
                    arreglo.forEach(function(monto, indice){
                      var ingresado=parseFloat(imp.monto)
                      var base= parseFloat(monto)
                      if(base>=ingresado){
                        imp.monto=0; arreglo[indice]=base-ingresado
                      }else{
                        imp.monto=ingresado-monto; arreglo[indice]=0
                      }
                    })
                    var montoa0=arreglo[4];
                    var montoa1=arreglo[3];
                    var montoa2=arreglo[2];
                    var montoa3=arreglo[1];
                    var montoa4=arreglo[0];
                    base.updateAttributes({monto0:montoa0, monto1:montoa1 , monto2:montoa2 , monto3:montoa3 , monto4:montoa4})
                  }
                  DB.Movimiento.create({
                    monto: imp.monto,
                    ingreso: 1,
                    cliente_cuenta_corriente_id: ccc.id,
                    observacion: base.impuesto.nombre+" Recibo: E-"+maximo,
                  }).on('success',function(){
                    DB.Movimiento.create({
                      monto:imp.monto,
                      ingreso: 0,
                      cliente_cuenta_corriente_id: ccc.id,
                    observacion: base.impuesto.nombre,
                    }).on('success',function(){
                      var total = 0;
                      if(efMonto)
                        total += efMonto
                      if(chMonto)
                        total += chMonto
                      DB.Usuario.find({where: {id: req.session.usuario_id}, include:[{model: DB.Empleado}]}).on('success', function(u){
                        DB.CuentaCorriente.find({where:{id: param.cuentaCorriente_id}}).on('success', function(cuenta){
                          res.send({
                            saldo: cuenta.monto.toMoney(),
                            total: total.toMoney(),                         
                            impuestos: arrayImpuesto,
                            recibo: recibo,
                            reciboFecha: moment(recibo.updated_at).format("DD/MM/YYYY  HH:mm"),
                            receptor: cli.nombre,
                            operador: u.empleado.nombre + " " + u.empleado.apellido,
                          })
                        })
                      })
                    })
                  })  
                })
              })
            })
          })
        })
      })
    })
  })    
};

Pago.post = function(req, res, next) { 
  var param = req.body;
  var concepto;
  var efMonto=0, chMonto=0;
  if(param.chequeMonto!='0'){
    if(param.efectivoMonto!='0'){
      efMonto= Number(param.efectivoMonto)
      chMonto= Number(param.chequeMonto)
      concepto="Recepción para Pago de Impuestos(Efectivo:$"+efMonto.toFixed(2)+" y Cheque: $"+ chMonto.toFixed(2)+" del Banco:"+param.chequeBanco+" Titular:"+param.chequeTitular+" Nº:"+param.chequeNumero+" Fecha de Emisión: "+param.fechaEmision+" Fecha de Cobro: "+param.fechaCobro+")";
      }else{  
        chMonto= Number(param.chequeMonto)      
        concepto="Recepción para Pago de Impuestos(Cheque: $"+ chMonto.toFixed(2)+" del Banco:"+param.chequeBanco+" Titular:"+param.chequeTitular+" Nº:"+param.chequeNumero+" Fecha de Emisión: "+param.fechaEmision+" Fecha de Cobro: "+param.fechaCobro+")";
      }
  }else{
    if(param.efectivoMonto!='0'){
      efMonto= Number(param.efectivoMonto)
      concepto="Recepción para Pago de Impuestos(Efectivo:$"+efMonto.toFixed(2)+")";
    }else{
      concepto="Recepción para Pago de Impuestos( A través de la Cuenta Corriente )"
    }
  }
  DB.Cliente.find({where:{id: param.cliente_id}}).on('success',function(cli){
    DB.Recibo.max('e').on('success',function(maximo){
      if(isNaN(maximo)){
        maximo=1
      }else{
        maximo=maximo+1
      }
      DB.Recibo.create({
        e: maximo,
        concepto: concepto,
        receptor: cli.nombre
      }).on('success', function(recibo){
        cargarMovimientosCaja(recibo.id, param.impuestos, cli, maximo, efMonto||0+chMonto||0);
        DB.CuentaCorriente.find({where:{id: param.cuentaCorriente_id}}).on('success', function(cuenta){
          var totalIngresado= parseFloat(param.totalPago) +parseFloat(cuenta.monto)-parseFloat(param.sumImp) ;
          cuenta.updateAttributes({monto:totalIngresado});
          var movimientoMonto = Number((Number(efMonto)+Number(chMonto))-Number(param.sumImp)||0);	
             // faltante = Number(Number(param.sumImp)||0-(Number(efMonto)+Number(chMonto))); 
          crearMovimientoMonto(recibo.id, movimientoMonto, maximo,  cli, (efMonto+chMonto));
          DB.ClienteCuentaCorriente.find({where:{cliente_id: param.cliente_id}}).on('success',function(ccc){
           var arrayImpuesto=[];
           param.impuestos.forEach(function(imp){
              var aPagar= imp.monto;
              DB.Vencimiento.find({where:{id: imp.id}, include:[{model: DB.Impuesto},{model: DB.CronogramaImpuesto, include:[{model: DB.Cronograma}]}]}).on('success',function(base){
                var btotal = parseFloat(base.monto0)+parseFloat(base.monto1)+parseFloat(base.monto2)+parseFloat(base.monto3)+parseFloat(base.monto4)
                if(parseFloat(btotal)<=parseFloat(imp.monto)){
                  base.vtoImpuesto=base.cronogramaImpuesto.cronograma.mes+ "/"+base.cronogramaImpuesto.cronograma.año;//moment(base.vtoImpuesto).format("MM/YY");
                  if(/Monotributo/.test(base.impuesto.nombre) || /Plan Mis Facilidades AFIP/.test(base.impuesto.nombre) || /Plan de Pagos ARBA/.test(base.impuesto.nombre) ){  
                    var edit= base.vtoImpuesto.split("/")
                    if(edit[0]!="12")
                      edit[0]=parseInt(edit[0])+1
                    else{
                      edit[0]="1"
                      edit[1]= parseInt(edit[1])+1
                    }
                    base.vtoImpuesto=edit.join("/")
                  }
                arrayImpuesto.push(base.vtoImpuesto+" - "+base.impuesto.nombre+" (Pago Total $"+Number(btotal).toMoney()+")")
                if(base.impuesto.id == 34 || base.impuesto.id == 63 || base.impuesto.id == 66){
                  base.updateAttributes({pagado: 1, adeudado: 0, grupo_impuesto_id: 1})
                }else{
                  base.updateAttributes({pagado: 1, adeudado:0})
                  if(base.impuesto.deleted_at)//EMC
                    base.updateAttributes({monto0: 0})
                }
              }else{
                  base.vtoImpuesto=base.cronogramaImpuesto.cronograma.mes+ "/"+base.cronogramaImpuesto.cronograma.año;//moment(base.vtoImpuesto).format("MM/YY");
                  if(/Monotributo/.test(base.impuesto.nombre) || /Plan Mis Facilidades AFIP/.test(base.impuesto.nombre) || /Plan de Pagos ARBA/.test(base.impuesto.nombre) ){  
                    var edit= base.vtoImpuesto.split("/")
                    if(edit[0]!="12")
                      edit[0]=parseInt(edit[0])+1
                    else{
                      edit[0]="1"
                      edit[1]= parseInt(edit[1])+1
                    }
                    base.vtoImpuesto=edit.join("/")
                  }
                arrayImpuesto.push(base.vtoImpuesto+" - "+base.impuesto.nombre+" (Pago Parcial $"+Number(imp.monto).toMoney()+" de un total de $"+Number(btotal).toMoney()+")")
                var arreglo=[]
                arreglo.push(base.monto4,base.monto3,base.monto2,base.monto1,base.monto0)
                arreglo.forEach(function(monto, indice){
                  var ingresado=parseFloat(aPagar)
                  var base= parseFloat(monto)
                  if(base>=ingresado){
                    aPagar=0; arreglo[indice]=base-ingresado
                  }else{
                    aPagar=ingresado-monto; arreglo[indice]=0
                  }
                })
                var montoa0=arreglo[4];
                var montoa1=arreglo[3];
                var montoa2=arreglo[2];
                var montoa3=arreglo[1];
                var montoa4=arreglo[0];
                base.updateAttributes({monto0:montoa0, monto1:montoa1, monto2:montoa2, monto3:montoa3, monto4:montoa4})
              }
              DB.Movimiento.create({
                vencimiento_id: base.id,
                monto: imp.monto,
                ingreso: 1,
                cliente_cuenta_corriente_id: ccc.id,
                observacion: base.impuesto.nombre+" Recibo: E-"+maximo,                      
              }).on('success',function(){
                DB.Movimiento.create({
                  vencimiento_id:base.id,
                  monto:imp.monto,
                  ingreso: 0,
                  cliente_cuenta_corriente_id: ccc.id,
                  observacion: base.impuesto.nombre+" Recibo: E-"+maximo,
                  }).on('success',function(){
                    var total = 0;
                    if(efMonto)
                      total += efMonto
                    if(chMonto)
                      total += chMonto
                    DB.Usuario.find({where: {id: req.session.usuario_id}, include:[{model: DB.Empleado}]}).on('success', function(u){
                      DB.CuentaCorriente.find({where:{id: param.cuentaCorriente_id}}).on('success', function(cuenta){
                        res.send({
                          saldo: cuenta.monto.toMoney(),
                          total: total.toMoney(),  
                          impuestos: arrayImpuesto,
                          recibo: recibo,
                          reciboFecha: moment(recibo.updated_at).format("DD/MM/YYYY  HH:mm"),
                          receptor: cli.nombre,
                          operador: u.empleado.nombre+" "+u.empleado.apellido,
                        })
                      })
                    })
                  })
                })
              })
            })
          })
        })
      })
    })
  })
};

cargarMovimientosCaja = function(recId, impuestos, cliente, nroRecibo, pagoMonto){//el cliente ya viene el objeto de la db
  var caja=0,banco=0,ctaCliente=0;
  impuestos.forEach(function(imp){
    DB.Vencimiento.find({where: {id: imp.id}, include:[{model: DB.Impuesto}]}).on('success', function(vencimiento){
      var monto0=Number(vencimiento.monto0),
          monto1=Number(vencimiento.monto1),
          monto2=Number(vencimiento.monto2),
          monto3=Number(vencimiento.monto3),
          monto4=Number(vencimiento.monto4),
          totalImpuesto=monto0+monto1+monto2+monto3+monto4;
      if(totalImpuesto <= imp.monto){//SI PAGA Todo
        //Hay qe saber si hay faltante o sobrante de la ctaCte
        if(vencimiento.impuesto.deleted_at){
          //Imp.Otros 0-Caja 1-noseutiliza 2-CajaBanco 3-noseutiliza 
          caja+= monto0;
          banco+= monto2;
        }else{
          if(vencimiento.impuesto.id == 34 || vencimiento.impuesto == 63){
            //Serv.Mensuales 0-Caja 1-Caja 2-CTACTEEstudio 3-Caja
            var tmp = Number(monto0)+Number(monto1)+Number(monto3);
            caja+= tmp;
            ctaCliente+=monto2;
            //ACA TMB TENGO QUE CREAR UN MOVIMIENTO A LA CUENTA DEL ESTUDIO, y ACTUALIZAR SU MONTO TOTAL
            movimientoCta(cuentaEstudio, monto2, cuentaEstudio, "Por pago de Honorarios del cliente "+cliente.nombre+" Recibo Nº"+nroRecibo);
          }else{
            if(vencimiento.impuesto.id == 66 || vencimiento.impuesto == 66){
              //Serv.Jurídicos 0-Caja 1-CTACTEAbogado 2-CTACTEAbogado 3-CTACTEAbogado
              caja+=monto0;
              //ACA TMB TENGO QUE CREAR UN MOVIMIENTO A LA CUENTA DEL ABOGADO, y ACTUALIZAR SU MONTO TOTAL
              var montoMvto = Number(monto1)+Number(monto2)+Number(monto3);
              ctaCliente+=montoMvto;
              movimientoCta(cuentaAbogado, montoMvto, cuentaAbogado, "Por pago de Honorarios del cliente "+cliente.nombre+" Recibo Nº"+nroRecibo);
            }else{
              //Impuesto 0-CajaBanco 1-CajaBanco 2-CajaBanco 3-CajaBanco
              banco+=totalImpuesto
            }
          }
        }
      }else{//Si hace un pago parcial
        if(vencimiento.impuesto.deleted_at){
          //Imp.Otros 0-Caja 1-noseutiliza 2-CajaBanco 3-noseutiliza 
          if(imp.monto>monto0){
            caja+= monto0;
            banco+= imp.monto-monto0;
          }else{
            caja+=imp.monto
          }
        }else{
          if(vencimiento.impuesto == 34 || vencimiento.impuesto == 63){
            //Serv.Mensuales 0-Caja 1-Caja 2-CTACTEEstudio 3-Caja
            var montoCaja= monto0+monto1+monto3;
            if(imp.monto >= montoCaja){
              caja+=montoCaja
              ctaCliente+=imp.monto-montoCaja;
              var ctaClienteTemp=imp.monto-montoCaja;
            }else{
              caja+=imp.monto;
            }
            //ACA TMB TENGO QUE CREAR UN MOVIMIENTO A LA CUENTA DEL ESTUDIO, y ACTUALIZAR SU MONTO TOTAL
            //ctaClienteTemp, tiene el valor a insertar en la cta
            movimientoCta(cuentaEstudio, monto2, cuentaEstudio, "Por pago de Honorarios del cliente"+cliente.nombre+"Recibo Nº"+nroRecibo);
          }else{
            if(vencimiento.impuesto == 66){
              //Serv.Jurídicos 0-Caja 1-CTACTEAbogado 2-CTACTEAbogado 3-CTACTEAbogado
              var montoMov =Number(monto1)+Number(monto2)+Number(monto3)
              if(imp.monto>monto0){
                caja+=monto0;
                ctaCliente+=montoMov;
              }else{
                caja=imp.monto;
              }
              //ACA TMB TENGO QUE CREAR UN MOVIMIENTO A LA CUENTA DEL ABOGADO, y ACTUALIZAR SU MONTO TOTAL
              //ctaClienteTemp, tiene el valor a insertar en la cta
              movimientoCta(cuentaAbogado, montoMov, cuentaAbogado, "Por pago de Honorarios del cliente "+cliente.nombre+" Recibo Nº"+nroRecibo)
            }else{
              //Impuesto 0-CajaBanco 1-CajaBanco 2-CajaBanco 3-CajaBanco
              banco+=imp.monto;
            }
          }
        }      
      }
    })
  })
  setTimeout(function(){
    //Toda la cosa esta + datos del cliente que pago y el recibo cliente
    //caja=2 banco=3 ctaCte=4
    var total = Number(pagoMonto)
    if(caja > 0){
      DB.MovimientoCaja.create({
        recibo_id: recId,
        monto_total: Number(total),
        caja_id: 2,
        monto: caja,
        observacion: "Pago del cliente - Recibo Nº"+nroRecibo+" valor $"+total.toMoney(),
        concepto: cliente.nombre,
        ingreso: 1,
        chequedo: 0,
      })    
    }
    if(banco > 0){
      DB.MovimientoCaja.create({
        recibo_id: recId,
        monto_total: Number(total),
        caja_id: 3,
        monto: banco,
        observacion: "Pago del cliente - Recibo E Nº"+nroRecibo+" valor $"+total.toMoney(),
        concepto: cliente.nombre,
        ingreso: 1,
        chequedo: 0,
      })    
    }
    if(ctaCliente > 0){
      DB.MovimientoCaja.create({
        recibo_id: recId,
        monto_total: Number(total),
        caja_id: 4,
        monto: ctaCliente,
        observacion: "Pago del cliente - Recibo E Nº"+nroRecibo+" valor $"+total.toMoney(),
        concepto: cliente.nombre,
        ingreso: 1,
        chequedo: 0,
      })    
    }
  }, 500)
};

movimientoCta= function(ctaId, monto, cliId, obs){
  DB.CuentaCorriente.find({where: {id: ctaId}}).on('success', function(cc){
    cc.updateAttributes({monto: Number(cc.monto) + Number(monto) })
    DB.Movimiento.create({
      monto: monto,
      ingreso: 1,
      cliente_cuenta_corriente_id: cliId,
      observacion: obs
    })
  })
}

crearMovimientoMonto= function(recId, monto, nroRecibo, cliente, totalIngresado){
  if(monto > 0){
    DB.MovimientoCaja.create({
      recibo_id: recId,
      monto_total: Math.abs(Number(totalIngresado)),
      caja_id: 4,
      monto: Math.abs(monto),
      observacion: "Sobrante Pago de Impuestos entra a la cta/cte - Recibo E Nº"+nroRecibo,
      concepto: cliente.nombre,
      ingreso: 1,
      chequedo: 0,
    })
  }else{
    if(monto<0){
      DB.MovimientoCaja.create({
        recibo_id: recId,
        monto_total: Math.abs(Number(totalIngresado)),
        caja_id: 4,
        monto: Math.abs(monto),
        observacion: "Faltante Pago de Impuestos sale de la cta/cte - Recibo E Nº"+nroRecibo,
        concepto: cliente.nombre,
        ingreso: 0,
        chequedo: 0,
      })
    }
  }
};
module.exports = Pago;