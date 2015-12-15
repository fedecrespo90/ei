var DB, Everyone
  , moment = require('moment')
  , util = require('util')
  ;

var Revision = function(db, everyone) {
  DB = db;
  Everyone = everyone;

  return Revision;
};


Revision.get = function(req, res, next) {
  DB.MovimientoCaja.findAll({where: {chequeado: 0}, include:[{model: DB.Caja},{model: DB.Recibo}]}).on('success',function(mov){
    var msg=[]
    mov.forEach(function(m){
      if(m.recibo.c != 0)
        recibo = "C "+m.recibo.c;
      if(m.recibo.d != 0)
        recibo = "D "+m.recibo.d;
      if(m.recibo.E != 0)
        recibo = "E "+m.recibo.e;
      if(m.recibo.f != 0)
        recibo = "F "+m.recibo.f;
      if(m.recibo.g != 0)
        recibo = "G "+m.recibo.g;
      if(m.recibo.h != 0)
        recibo = "H "+m.recibo.h;
      if(m.monto != 0){
        var monto_total= Math.abs(m.monto_total).toMoney();
        msg.push({
          id: m.id,
          ie: m.ingreso==1 ? "Ingreso" : "Egreso",
          creado: moment(m.created_at).format("YYYY-MM-DD"),
          caja: m.caja.nombre,
          observacion: m.observacion,
          concepto: m.concepto,
          subConcepto: m.subConcepto,
          rSubConcepto: m.rSubConcepto,
          monto: m.ingreso==1 ?m.monto.toMoney(): "-"+m.monto.toMoney(),
          recibo: recibo || " " ,
          montoTotal: monto_total,
        })
      }
    })
    res.send(msg)
  })
};

Revision.detalleRango = function(req, res, next) {
  DB.MovimientoCaja.findAll({where: {chequeado: 0}, include:[{model: DB.Recibo}]}).on('success',function(mc){
    DB.CierresCaja.findAll({ order: 'id DESC LIMIT 1' }).on('success',function(cc){
      DB.Recibo.findAll({ order: 'e DESC LIMIT 1' }).on('success',function(rec){
      cc.forEach(function(ccc){
        rec.forEach(function(recib){
    var diaMin="01 January, 2070 UTC"
    ,   diaMax="01 January, 1970 UTC"
    //ORIGINAL 1/3
    /*
    ,   reciboMin=999999
    ,   reciboMax=-1
    ,   recibo;
    */
    //Agrego 1/3
    ,   reciboMinE=999999
    ,   reciboMaxE=-1
    ,   reciboE
    /*
    ,   reciboMinH=999999
    ,   reciboMaxH=-1
    ,   reciboH;
    */
    mc.forEach(function(m){
      //ORIGINAL +
      //recibo=m.recibo.c!=0?m.recibo.c:(m.recibo.d!=0?m.recibo.d:(m.recibo.e!=0?m.recibo.e:(m.recibo.f!=0?m.recibo.f:(m.recibo.g!=0?m.recibo.g:(m.recibo.h!=0?m.recibo.h:-1)))));

      //AGREGO +
      if(m.recibo.e != 0)
      {
        reciboE = m.recibo.e;
      }

      if(Date.parse(m.created_at)>Date.parse(diaMax))
        diaMax=m.created_at;
      if(Date.parse(m.created_at)<Date.parse(diaMin))
        diaMin=m.created_at;
      //ORIGINAL 2/3
      /*
      if(recibo>reciboMax)
        reciboMax=recibo;
      if(recibo<reciboMin)
        reciboMin=recibo;
      */

      //Agrego 2/3

      if(reciboE>reciboMaxE)
        reciboMaxE=reciboE;
      if(reciboE<reciboMinE)
        reciboMinE=reciboE;
      /*
      if(reciboH>reciboMaxH)
        reciboMaxH=reciboH;
      if(reciboH<reciboMinH)
        reciboMinH=reciboH;
        */
    })
    //Aca manda la data a Movimientos
    res.send({
      diaMax: moment(diaMax).format('YYYY-MM-DD"'), 
      diaMin: moment(diaMin).format('YYYY-MM-DD"'),
      //ORIGINAL 3/3
      /*
      reciboMin: reciboMin,
      reciboMax: reciboMax,
      */
      //Agrego 3/3

      reciboMinE: Number(ccc.ultimoReciboE)+1,//reciboMinE,
      reciboMaxE: recib.e,//reciboMaxE,
      /*
      reciboMinH: reciboMinH,
      reciboMaxH: reciboMaxH
      */
    })
  })//rec.forEach
  })//cc.forEach
  })//rec
  })//cc
  })
};

Revision.getAllRecibos = function(req, res, next){
  DB.MovimientoCaja.findAll({
    where: {chequeado: 0}, include:[{model: DB.Recibo}]
  }).on('success',function(mc){
    var msg = [];
    var reciboM, a;
    mc.forEach(function(m){
      a= true;
      if(m.recibo.c != 0)
        reciboM = "C-"+m.recibo.c;
      if(m.recibo.d != 0)
        reciboM = "D-"+m.recibo.d;
      if(m.recibo.E != 0)
        reciboM = "E-"+m.recibo.e;
      if(m.recibo.f != 0)
        reciboM = "F-"+m.recibo.f;
      if(m.recibo.g != 0)
        reciboM = "G-"+m.recibo.g;
      if(m.recibo.h != 0)
        reciboM = "H-"+m.recibo.h;
      msg.forEach(function(m){
        if(m.recibo == reciboM)
          a=false;
      })
      if(a)
        msg.push({
          recibo: reciboM,
          id: m.recibo.id,
          mov_id: m.id,
        })
    })
    res.send(msg)
  })
};

Revision.anularRecibo = function(req, res, next){
  DB.Recibo.find({where: {id: req.params.id}}).on('success', function(recibo){//Recibo que tiene cliente y un "monto"
    if(recibo.e != 0 || recibo.g != 0){
      DB.Cliente.find({where: {nombre: recibo.receptor}}).on('success', function(cliente){
        DB.ClienteCuentaCorriente.find({where:{ cliente_id: cliente.id}}).on('success', function(ccc){
          DB.Movimiento.findAll({where: {cliente_cuenta_corriente_id: ccc.id}}).on('succes', function(movimientos){
            console.log(movimientos)
          });
        });
      });
    }
  });
  res.send(true);
};

Revision.aceptarRango = function(req, res, next){
  /*
  var rmin= req.body.rmin
    , rmax= req.body.rmax
    , fd = req.body.fd
    , fhi = moment(req.body.fh).add(1, 'days')
    , fh = moment(fhi).format("YYYY-MM-DD")
    , id = [];
  if(req.body.rangoRecibos){
    DB.Recibo.findAll({where: ['(c>=? AND c<=? ) OR (d>=? AND d<=?) OR (e>=? AND e<=?)OR (f>=? AND f<=?) OR (g>=? AND g<=?) OR (h>=? AND h<=?)', rmin, rmax, rmin, rmax, rmin, rmax, rmin, rmax, rmin, rmax, rmin, rmax]}).on('success',function(rec){
      rec.forEach(function(r){
        id.push(r.id);
      })
      var ids="("+id.toString()+")";
      if(req.body.rangoDias){
        DB.MovimientoCaja.findAll({where: ['chequeado=0 AND (movimientoCaja.created_at>=? AND movimientoCaja.created_at <=?) AND recibo_id IN '+ids, fd, fh], include:[{model: DB.Recibo}, {model: DB.Caja}]}).on('success', function(movs){
          generarReciboRevision(movs, res, req.body.empleado_id);
        })
      }else{
        DB.MovimientoCaja.findAll({where: 'chequeado=0 AND recibo_id IN'+ids, include:[{model: DB.Recibo}, {model: DB.Caja}]}).on('success', function(movs){
          generarReciboRevision(movs, res, req.body.empleado_id);
        })
      }
    })
  }else{
    DB.MovimientoCaja.findAll({where: ['chequeado=0 AND (movimientoCaja.created_at>=? AND movimientoCaja.created_at <=?)', fd, fh], include:[{model: DB.Recibo}, {model: DB.Caja}]}).on('success', function(movs){
      generarReciboRevision(movs, res, req.body.empleado_id);
    })
  }
  */
};

generarReciboRevision = function(db, res, empleado){
  DB.Empleado.find({where: {id: empleado}}).on('success', function(emp){
    DB.Recibo.max('h').on('success',function(recibo){
      if(isNaN(recibo)){
        recibo=1
      }else{
        recibo=recibo+1
      }
      var movs= []
	      , montoCaja= 0
	      , montoBanco= 0
	      , montoCtaCte=0
        , concepto
        , subConcepto
        , rSubConcepto;
      if(db){
        if(util.isArray(db)){
          db.forEach(function(m){
            switch (m.caja_id) {
              case 2:
                if(m.ingreso==1){
                	montoCaja=Number(montoCaja)+Number(m.monto);
                }else{
                	montoCaja=Number(montoCaja)-Number(m.monto);
                }
                break;
              case 3:
                if(m.ingreso==1){
                	montoBanco=Number(montoBanco)+Number(m.monto);
                }else{
                	montoBanco=Number(montoBanco)-Number(m.monto);
                }
                break;
              case 4:
                if(m.ingreso==1){
                	montoCtaCte=Number(montoCtaCte)+Number(m.monto);
                }else{
                	montoCtaCte=Number(montoCtaCte)-Number(m.monto);
                }
                break;
            }
            subConcepto=m.subConcepto? m.subConcepto : " ";
            rSubConcepto=m.rSubConcepto? m.rSubConcepto : " ";
            concepto=  m.concepto+" "+subConcepto+" "+rSubConcepto;
            var reciboM;
            if(m.recibo.c != 0)
              reciboM = "C-"+m.recibo.c;
            if(m.recibo.d != 0)
              reciboM = "D-"+m.recibo.d;
            if(m.recibo.E != 0)
              reciboM = "E-"+m.recibo.e;
            if(m.recibo.f != 0)
              reciboM = "F-"+m.recibo.f;
            if(m.recibo.g != 0)
              reciboM = "G-"+m.recibo.g;
            if(m.recibo.h != 0)
              reciboM = "H-"+m.recibo.h;

            movs.push({
              id: m.id,
              movimiento: m.observacion.split("-")[0],
              recibo: reciboM,
              monto: m.monto.toMoney()+"&nbsp;&nbsp;",
              monto_total: m.monto_total.toMoney(),
              concepto: concepto,
              caja: m.caja.nombre,
              ie: m.ingreso==1?"Ingreso":"Egreso",
              fecha: moment(m.created_at).format("DD/MM/YYYY")+"&nbsp;&nbsp;"
            })
          })
        }else{
          var m= db;
          switch (m.caja_id) {
            case 2:
              if(m.ingreso==1){
                montoCaja=Number(montoCaja)+Number(m.monto);
              }else{
                montoCaja=Number(montoCaja)-Number(m.monto);
              }
              break;
            case 3:
              if(m.ingreso==1){
                montoBanco=Number(montoBanco)+Number(m.monto);
              }else{
                montoBanco=Number(montoBanco)-Number(m.monto);
              }
              break;
            case 4:
              if(m.ingreso==1){
                montoCtaCte=Number(montoCtaCte)+Number(m.monto);
              }else{
                montoCtaCte=Number(montoCtaCte)-Number(m.monto);
              }
              break;
          }
          subConcepto=m.subConcepto? m.subConcepto : " ";
          rSubConcepto=m.rSubConcepto? m.rSubConcepto : " ";
          concepto=  m.concepto+" "+subConcepto+" "+rSubConcepto;
          var reciboM;
          if(m.recibo){
            if(m.recibo.c != 0)
              reciboM = "C-"+m.recibo.c;
            if(m.recibo.d != 0)
              reciboM = "D-"+m.recibo.d;
            if(m.recibo.E != 0)
              reciboM = "E-"+m.recibo.e;
            if(m.recibo.f != 0)
              reciboM = "F-"+m.recibo.f;
            if(m.recibo.g != 0)
              reciboM = "G-"+m.recibo.g;
            if(m.recibo.h != 0)
              reciboM = "H-"+m.recibo.h;
          }else{
            reiboM= "TELODEBO"
          }
          if(m.observacion)
            var obs=m.observacion.split("-")[0];
          else
            var obs= " "
          movs.push({
            id: m.id,
            movimiento: obs,
            recibo: reciboM,
            monto: m.monto.toMoney()+"&nbsp;&nbsp;",
            monto_total: m.monto_total.toMoney(),
            concepto: concepto,
            caja: m.caja.nombre,
            ie: m.ingreso==1?"Ingreso":"Egreso",
            fecha: moment(m.created_at).format("DD/MM/YYYY")+"&nbsp;&nbsp;"
          })
        }
        total= Number(montoCaja)+Number(montoBanco)+Number(montoCtaCte);
        res.send({
          movs: movs,
          recibo: recibo,
          total: total.toMoney(),
          caja: montoCaja.toMoney(),
          banco: montoBanco.toMoney(),
          ctaCte: montoCtaCte.toMoney(),
          empleado: emp.nombre+" "+emp.apellido,
          fechaActual: moment().format("DD/MM/YYYY HH:mm")
        })
      }
    })
  })
};


Revision.realizarMovimientos = function(req, res, next){
  for (var i = 0; i < 100; i++) {
    console.log("realizarMovimientos");
  };
  //TMB USA LA FUNCTION: guardarMovs

  /*
  var rmin= req.body.rmin
    , rmax= req.body.rmax
    , fd = req.body.fd
    , fhi = moment(req.body.fh).add(1, 'days')
    , fh = moment(fhi).format("YYYY-MM-DD")
    , id = [];
  if(req.body.rangoRecibos){
    DB.Recibo.findAll({where: ['(c>=? AND c<=? ) OR (d>=? AND d<=?) OR (e>=? AND e<=?)OR (f>=? AND f<=?) OR (g>=? AND g<=?) OR (h>=? AND h<=?)', rmin, rmax, rmin, rmax, rmin, rmax, rmin, rmax, rmin, rmax, rmin, rmax]}).on('success',function(rec){
      rec.forEach(function(r){
        id.push(r.id);
      })
      var ids="("+id.toString()+")";
      if(req.body.rangoDias){
        DB.MovimientoCaja.findAll({where: ['chequeado=0 AND (movimientoCaja.created_at>=? AND movimientoCaja.created_at <=?) AND recibo_id IN '+ids, fd, fh], include:[{model: DB.Recibo}, {model: DB.Caja}]}).on('success', function(movs){
          generarReciboRevision(movs, res, req.body.empleado_id);
          guardarMovs(movs, res, req.body.empleado_id);
        })
      }else{
        DB.MovimientoCaja.findAll({where: 'chequeado=0 AND recibo_id IN'+ids, include:[{model: DB.Recibo}, {model: DB.Caja}]}).on('success', function(movs){
          generarReciboRevision(movs, res, req.body.empleado_id);
          guardarMovs(movs, res, req.body.empleado_id);
        })
      }
    })
  }else{
    DB.MovimientoCaja.findAll({where: ['chequeado=0 AND (movimientoCaja.created_at>=? AND movimientoCaja.created_at <=?)', fd, fh], include:[{model: DB.Recibo}, {model: DB.Caja}]}).on('success', function(movs){
      generarReciboRevision(movs, res, req.body.empleado_id);
      guardarMovs(movs, res, req.body.empleado_id);
    })
  }
  */
};


guardarMovs = function(db, res, empleado){
  var montoCaja= 0;
  var montoBanco= 0;
  var montoCtaCte=0;
  db.forEach(function(m){
    m.updateAttributes({chequeado:1,recibido:moment().format('YYYY-MM-DD hh:mm:ss')});
    switch (m.caja_id) {
      case 2:
        if(m.ingreso==1){
          montoCaja=Number(montoCaja)+Number(m.monto);
        }else{
          montoCaja=Number(montoCaja)-Number(m.monto);
        }
        break;
      case 3:
        if(m.ingreso==1){
          montoBanco=Number(montoBanco)+Number(m.monto);
        }else{
          montoBanco=Number(montoBanco)-Number(m.monto);
        }
        break;
      case 4:
        if(m.ingreso==1){
          montoCtaCte=Number(montoCtaCte)+Number(m.monto);
        }else{
          montoCtaCte=Number(montoCtaCte)-Number(m.monto);
        }
        break;
    }
  });
  DB.Empleado.find({where: {id: empleado}}).on('success', function(emp){
    var concepto = "Ajuste de caja al: "+moment().format('YYYY-MM-DD')+" por: "+emp.nombre+" "+emp.apellido;
    DB.Recibo.create({
      h: recibo,
      concepto: concepto,
      receptor: emp.nombre+" "+emp.apellido
    })
  })
  setTimeout(function(){
    if(montoCaja!=0){
      DB.Caja.find({where: {id: 2}}).on('success', function(caja){
        caja.updateAttributes({monto: Number(caja.monto)+Number(montoCaja)})
      })
    }
    if(montoBanco!=0){
      DB.Caja.find({where: {id: 3}}).on('success', function(caja){
        caja.updateAttributes({monto: Number(caja.monto)+Number(montoBanco)})
      })
    }
    if(montoCtaCte!=0){
      DB.Caja.find({where: {id: 4}}).on('success', function(caja){
        caja.updateAttributes({monto: Number(caja.monto)+Number(montoCtaCte)})
      })
    }
  }, 500)
};

Revision.put = function(req, res, next) {
  DB.MovimientoCaja.find({where: {id: req.params.id}}).on('success', function(m){
    m.updateAttributes({chequeado:1,recibido:moment().format('YYYY-MM-DD hh:mm:ss')}).on('success', function(m){
      DB.Caja.find({where: {id: m.caja_id}}).on('success', function(caja){
        var montoNuevo;
        m.ingreso==1?montoNuevo=Number(caja.monto)+Number(m.monto):montoNuevo=Number(caja.monto)-Number(m.monto);
        caja.updateAttributes({monto: montoNuevo})
      })
    })
  })
  res.send(true)
};

module.exports = Revision;
