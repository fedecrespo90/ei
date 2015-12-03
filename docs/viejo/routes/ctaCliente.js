var DB, Everyone  
  , moment = require('moment');

var CtaCliente = function(db, everyone) {
  DB = db;
  Everyone = everyone;
  return CtaCliente;
};

CtaCliente.get = function(req, res, next) {
  DB.MovimientoCaja.findAll({where: {chequeado:1, caja_id:4}, include:[{model: DB.Caja}]}).on('success', function(mov){
    var msg=[]
    mov.forEach(function(m){
      if(m.monto != 0 ){
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
        })
      }
    })
    res.send(msg) 
  })
};
module.exports = CtaCliente;
