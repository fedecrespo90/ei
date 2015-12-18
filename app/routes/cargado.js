var DB, Everyone
  , moment= require('moment');

var Cargado = function(db, everyone) {
  DB = db;
  Everyone = everyone;
  return Cargado;
};

Cargado.get = function(req, res, next) {
  DB.Vencimiento.findAll({
        where:{adeudado:0, pagado:0},
        include: [{model: DB.Cliente}, {model: DB.Cronograma}, {model: DB.Impuesto}]
  }).on('success', function(imp) {
      DB.ClienteImpuesto.findAll({
            include:[{model:DB.Cliente},{model: DB.Impuesto, where: {fijo: 1}}]
      }).on('success', function(fijo){
        var monto, msg= [];
        imp.forEach(function(i){
          monto= parseFloat(i.monto0)+parseFloat(i.monto1)+parseFloat(i.monto2)+parseFloat(i.monto3)+parseFloat(i.monto4)
          msg.push({
            id: i.id,
            cliente: i.cliente.nombre,
            impuesto: i.impuesto.nombre,
            cronograma: i.cronograma.mes+ "/" + i.cronograma.año,
            monto0: i.monto0.toFixed(2),
            monto1: i.monto1.toFixed(2),
            monto2: i.monto2.toFixed(2),
            monto3: i.monto3.toFixed(2),
            monto4: i.monto4.toFixed(2),
            monto: monto.toMoney(),
            liquida: i.liquida? 1 : 0,
          })
        })
        fijo.forEach(function(i){
          if(i.paga == 0)
            binario = "1111";
          else{
            binario = i.paga.toString(2)
            if(binario.length == 3)
              binario ="0"+binario
            if(binario.length == 2)
              binario="00"+binario
            if(binario.length == 1)
              binario="000"+binario
          }
          if(binario[0]==1)
            monto0 = i.impuesto.monto0
          else
            monto0 = 0
          if(binario[1]==1)
            monto1 = i.impuesto.monto1
          else
            monto1 = 0
          if(binario[2]==1)
            monto2 = i.impuesto.monto2
          else
            monto2 = 0
          if(binario[3]==1)
            monto3 = Number(i.adherentes) * Number(i.impuesto.monto3)	//monto3 = i.adherentes*i.impuesto.monto3
          else
            monto3 = 0
          if(binario[4]==1)
            monto4 = i.impuesto.monto4
          else
            monto4 = 0
          monto=parseFloat(monto0)+parseFloat(monto1)+parseFloat(monto2)+parseFloat(monto3)+parseFloat(monto4)
          msg.push({
            id: i.id,
            cliente: i.cliente.nombre,
            impuesto: i.impuesto.nombre,
            liquida: 1,
            cronograma: "Actual",
            monto0: monto0 || 0.00,
            monto1: monto1 || 0.00,
            monto2: monto2 || 0.00,
            monto3: monto3 || 0.00,
            monto4: monto4 || 0.00,
            monto: monto.toMoney(),
          })
        })
        res.send(msg);
      })
  });
};

Cargado.put = function(req, res, next) {
  DB.Vencimiento.find({where: {id: req.params.vencimiento_id}}).on('success', function(e) {
    if (e) {
      e.updateAttributes(req.body).success(function() {
        res.send(true);
      });
    }else{
      res.send(false)
    }
  });
};

module.exports = Cargado;
