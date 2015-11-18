var DB, Everyone;

var Otro = function(db, everyone) {
  DB = db;   
  Everyone = everyone;

  return Otro;
};
Otro.get = function(req, res, next) {
  res.send(true)
}
//creo un vencimiento, lo elimino, creo un cronoImp con el vto y los datos qe recibo etc
Otro.post = function(req, res, next) {
  var p=req.body;
  var t= p.vtoImpuesto
  var vto
  vto=t[3]+t[4]+t[5]+t[0]+t[1]+t[2]+t[6]+t[7]+t[8]+t[9]+" 12:00:00";
  DB.Impuesto.create({
    fijo: 1,
    nombre: p.impuesto,
    monto0: 0.00, 
    monto1: 0.00, 
    monto2: 0.00,
    monto3: 0.00
  }).on('success', function(a){
    DB.ImpuestoBanco.create({
      impuesto_id: a.id,
      banco_id: 4
    })
    DB.ImpuestoBanco.create({
      impuesto_id: a.id,
      banco_id: 1
    })
    DB.CronogramaImpuesto.create({
      impuesto_id: a.id,
      cronograma_id: p.cronograma_id,
      asignado: 1,
      vtoImpuesto: vto,
      vtoAviso: vto,
      vtoRecepcion: vto,
      vtoAsignacion: vto,
    }).on('success', function(ci){
      DB.Vencimiento.create({
        adeudado: 1,
        liquida: 1,
        cliente_id: p.cliente_id,
        impuesto_id: a.id,
        monto0: p.monto1,
        monto3: p.monto0,
        cronograma_id: p.cronograma_id,
        cronograma_impuesto_id: ci.id,
        anticipo: req.body.anticipo? req.body.anticipo : " "        
      }).on('success', function(iii){
        DB.Impuesto.destroy({id: a.id}).on('success',function(){
          res.send(true)            
        })
      })
    })        
  });
};

module.exports = Otro;
