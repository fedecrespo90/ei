var DB, Everyone,
    moment= require('moment');

var AjusteCaja = function(db, everyone) {
  DB = db;
  Everyone = everyone;
  return AjusteCaja;
};

AjusteCaja.get = function(req, res, next) {
  DB.Caja.findAll().on('success', function(caja) {
    var msg = [];
    caja.forEach(function(c){
      msg.push({
        id: c.id,
        created_at: c.created_at,
        updated_at: c.updated_at,
        deleted_at: c.deleted_at,
        nombre: c.nombre,
        monto: c.monto.toMoney()
      })
    })
		res.send(msg);
  });
};

AjusteCaja.put = function(req, res, next) {
  DB.Empleado.find({where: {id: req.session.empleado_id}}).on('success', function(empleado){
    DB.Recibo.max('h').on('success',function(maximo){
      if(isNaN(maximo)){
        maximo=1
      }else{
        maximo=maximo+1
      }
      var caja= " ";
      switch(req.body.caja_id) {
          case "2":
              caja="Caja";
              break;
          case "3":
              caja="Banco";
              break;
          case "4":
              caja="Cta Cliente";
              break;
      }
      var concepto='Ajuste de la caja "'+caja+'" por parte del empleado '+empleado.nombre+" "+empleado.apellido;
      DB.Recibo.create({
        h: maximo,
        concepto: concepto,
        receptor: "Jorge Pressacco"
      }).on('success', function(recibo){
        var ingreso
        req.body.ie==1?ingreso=1:ingreso=0
        DB.MovimientoCaja.create({
          monto_total: req.body.monto,
          recibo_id: recibo.id,
          caja_id: req.body.caja_id,
          monto:req.body.monto,
          observacion: req.body.observacion,
          chequeado: 0,
          ingreso: ingreso,
          concepto: req.body.concepto_id,
          subConcepto: req.body.subConcepto_id,
          rSubConcepto: req.body.rSubConcepto_id
        }).on('success', function(){
          res.send(true)
        })
      })
    })
  })
};

module.exports = AjusteCaja;
