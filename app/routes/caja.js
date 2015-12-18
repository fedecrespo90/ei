var DB, Everyone
  , moment = require('moment');

var Caja = function(db, everyone) {
  DB = db;
  Everyone = everyone;
  return Caja;
};
Caja.getAll = function(req, res, next) {
  var caja=0.00
    , banco=0.00
    , ctaCliente=0.00
    , cajaP=0.00
    , bancoP=0.00
    , ctaClienteP=0.00
    ;
  DB.Empleado.find({where:{id: req.session.empleado_id}}).on('success',function(empleado){
    DB.MovimientoCaja.findAll().on('success', function(movCajas){
      movCajas.forEach(function(c){
        if(c.chequeado==1){
          if(c.ingreso==1){
            if(c.caja_id==2)
              caja+=c.monto;
            if(c.caja_id==3)
              banco+=c.monto;
            if(c.caja_id==4)
              ctaCliente+=c.monto;
          }else{
            if(c.caja_id==2)
              caja-=c.monto;
            if(c.caja_id==3)
              banco-=c.monto;
            if(c.caja_id==4)
              ctaCliente-=c.monto;
          }
        }else{
          if(c.ingreso==1){
            if(c.caja_id==2)
              cajaP+=c.monto;
            if(c.caja_id==3)
              bancoP+=c.monto;
            if(c.caja_id==4)
              ctaClienteP+=c.monto;
          }else{
            if(c.caja_id==2)
              cajaP-=c.monto;
            if(c.caja_id==3)
              bancoP-=c.monto;
            if(c.caja_id==4)
              ctaClienteP-=c.monto;
          }
        }
      })
      res.send({
        detalleFecha: moment().format("YYYY-MM-DD HH:mm"),
        operador: empleado.nombre+' '+empleado.apellido,
        cajaP: cajaP,
        bancoP: bancoP,
        ctaClienteP: ctaClienteP,
        caja: caja,
        banco: banco,
        ctaCliente: ctaCliente
      })
    })
  })
};

Caja.get = function(req, res, next) {
  DB.MovimientoCaja.findAll({where: {chequeado:1, caja_id:2}, include:[{model: DB.Caja}, {model: DB.Recibo}]}).on('success', function(mov){
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
        msg.push({
          id: m.id,
          ie: m.ingreso==1?"Ingreso":"Egreso",
          creado: moment(m.created_at).format("YYYY-MM-DD"),
          recibido: moment(m.recibido).format("YYYY-MM-DD"),      
          montoTotal: m.caja.monto,
          observacion: m.observacion,
          concepto: m.concepto,
          subConcepto: m.subConcepto,
          rSubConcepto: m.rSubConcepto,
          monto: m.monto.toMoney(),
          recibo: recibo,
          montoTotal: m.monto_total
        })
      }
    })
    res.send(msg)
  })
};

module.exports = Caja;
