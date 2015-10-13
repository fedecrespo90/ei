var DB, Everyone
  , moment = require('moment');
var DescImp = function(db, everyone) {
  DB = db;
  Everyone = everyone;
  return DescImp;
};

//DB.Impuesto.findAll({order: 'nombre ASC'}).on //impuesto.js
DescImp.get = function(req, res, next) {
  DB.Vencimiento.findAll({include: [{model: DB.Cliente},{model: DB.Cronograma},{model: DB.Impuesto},{model: DB.GrupoImpuesto, include: [{model: DB.Banco}],where:{enviado: 1, pagado: 1}}], where:"vencimiento.pagado = 1 AND grupo_impuesto_id IS NOT NULL AND descargado IS NULL AND archivado IS NULL", order:"grupo_impuesto_id DESC"}).on('success', function(as) {
    var msg=[]
    as.forEach(function(a){

      //test
      //console.log("Grupo_"+a.grupo_impuesto_id);

      var impMonto=parseFloat(a.monto0)+parseFloat(a.monto1)+parseFloat(a.monto2)+parseFloat(a.monto3)+parseFloat(a.monto4)
      if(/Monotributo/.test(a.impuesto.nombre) || /Plan Mis Facilidades AFIP/.test(a.impuesto.nombre) || /Plan de Pagos ARBA/.test(a.impuesto.nombre) ){
        var edit= a.cronograma.mes
        if(edit!="12")
          a.cronograma.mes=parseInt(edit)+1
        else{
          a.cronograma.mes="1"
          a.cronograma.año= parseInt(a.cronograma.año)+1
        }
      }   
      if(a.anticipo<12 && 0<a.anticipo)
        a.impuesto.nombre+=" - Anticipo "+a.anticipo;
      if(impMonto!=0.00)
        msg.push({
          id: a.id,
          grupoNumero: "Grupo_"+a.grupo_impuesto_id,
          clienteNombre: a.cliente.nombre,
          cronograma: a.cronograma.mes+"/"+a.cronograma.año,
          impuestoNombre: a.impuesto.nombre,
          bancoNombre: a.grupoImpuesto.banco.nombre,
          diaDePago: moment(a.grupoImpuesto.diaDePago).format("DD/MM/YYYY"),
          total: impMonto.toMoney()
        })
      else{
        a.updateAttributes({descargado: 1, archivado: 1, grupo_impuesto_id: 1})
      }
    })
    res.send(msg)
  });  
};

DescImp.err = function(req, res, next) {
  if(req.params.id && req.params.id != "undefined"){
    DB.Vencimiento.find({where:{id: req.params.id}}).on('success', function(gi){
      DB.GrupoImpuesto.find({where: {id: gi.grupo_impuesto_id}}).on('success', function(grupo){
        var mont = Number(grupo.total) - Number(gi.monto0) - Number(gi.monto1) - Number(gi.monto2) - Number(gi.monto3) - Number( gi.monto4 );
        grupo.updateAttributes({total: mont}).on('success', function(gru){
          gi.updateAttributes({grupo_impuesto_id: null}).on('success', function(){
            res.send(true)      
          })
         })
      })
    })
  }else{
    res.send(!1)
}
};

DescImp.post = function(req, res, next) {
  DB.Vencimiento.find({where:{id: req.params.id}}).on('success', function(gi){
    gi.updateAttributes({descargado: 1}).on('success', function(){res.send(true)})
  })
};

module.exports = DescImp;
