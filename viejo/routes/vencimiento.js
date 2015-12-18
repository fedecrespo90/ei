var DB, Everyone;
   
var Vencimiento = function(db, everyone) {
  DB = db;
  Everyone = everyone;

  return Vencimiento;
};

Vencimiento.get = function(req, res, next) {
  DB.Vencimiento.findAll({where:{pagado:0, cliente_id: req.params.id},//adeudado: 1
                          include: [{model: DB.CronogramaImpuesto},{model: DB.Cronograma, include:[{model: DB.CronogramaImpuesto}]},{model: DB.Impuesto}]
  }).on('success',function(a){
    var msg = []
    a.forEach(function(b){
      if(b.anticipo<12 && 0<b.anticipo)
        b.impuesto.nombre+= " - Anticipo"+b.anticipo
      if(b.cronogramaImpuesto){
        if(/Monotributo/.test(b.impuesto.nombre) || /Plan Mis Facilidades AFIP/.test(b.impuesto.nombre) || /Plan de Pagos ARBA/.test(b.impuesto.nombre) ){  
          if(b.cronograma.mes!="12")
            b.cronograma.mes=parseInt(b.cronograma.mes)+1
          else{
            b.cronograma.mes="1"
            b.cronograma.año= parseInt(b.cronograma.año)+1
          }
        }   
        msg.push(b)
      }
    })  
    res.send(msg)
    })
};

Vencimiento.post = function(req, res, next) {
  DB.Vencimiento.create(req.body)
};

Vencimiento.put = function(req, res, next) {
  
  DB.Vencimiento.find({where:{id: req.params.id}}).on('success', function(ven){
    if((ven.monto0 != req.body.monto0) || (ven.monto1 != req.body.monto1) || (ven.monto2 != req.body.monto2) || (ven.monto3 != req.body.monto3) || (ven.monto4 != req.body.monto4) || (ven.anticipo != req.body.anticipo) || (ven.liquida != req.body.liquida))
      {
      ven.updateAttributes(req.body).on('success', function(){res.send(true)})
      }
  })
};

Vencimiento.delete = function(req, res, next) {
  res.send(true)
};

module.exports = Vencimiento;
