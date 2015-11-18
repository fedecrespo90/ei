var DB, Everyone
  , moment = require('moment');
var Archivado = function(db, everyone) {
  DB = db;
  Everyone = everyone;   
  return Archivado;
};

Archivado.get = function(req, res, next) {
  DB.Vencimiento.findAll({include: [{model: DB.Cliente},{model: DB.Cronograma},{model: DB.Impuesto},{model: DB.GrupoImpuesto,  include: [{model: DB.Banco}]}], where://{ 
  "vencimiento.pagado = 1 AND grupo_impuesto_id IS NOT NULL AND descargado IS NOT NULL AND archivado IS NOT NULL"
  /*pagado: 1, archivado: 1, descargado: 1}*/}).on('success', function(as) {
  //
    var msg=[]
    as.forEach(function(a){
      var impMonto=parseFloat(a.monto0)+parseFloat(a.monto1)+parseFloat(a.monto2)+parseFloat(a.monto3)+parseFloat(a.monto4)
      var e =" "
      var i = " "
      if(a.grupoImpuesto){
        if(a.grupoImpuesto.banco)
          e = a.grupoImpuesto.banco.nombre;
        if(a.grupoImpuesto.diaDePago)
          i= moment(a.grupoImpuesto.diaDePago).format("DD/MM/YYYY")
      }

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
          impMonto: impMonto,
          clienteNombre: a.cliente.nombre,
          cronograma: a.cronograma.mes+"/"+a.cronograma.año,
          impuestoNombre: a.impuesto.nombre,
          bancoNombre: e,
          diaDePago: i,
  //        diaDeArchivo: moment(a.diaDeArchivo).format("DD/MM/YYYY"),
  //        ver que mas se podria agregar!!
          total: impMonto.toFixed(2)
        })
    })
    res.send(msg)
  });  
};

module.exports = Archivado;
