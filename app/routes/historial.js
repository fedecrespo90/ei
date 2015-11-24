var DB, Everyone
  , moment= require('moment');
var Historial = function(db, everyone) {
  DB = db;
  Everyone = everyone;

  return Historial;
};

Historial.get = function(req, res, next) {
//a pagar en transito a archivar"a descargar"archivado
  DB.Vencimiento.findAll(
          {order: 'vencimiento.created_at DESC',
          where: {cliente_id: req.params.cliente_id },
          include: [{model: DB.Impuesto},{model: DB.GrupoImpuesto}]//{model: DB.CronogramaImpuesto},
  }).on('success', function(a){
    var msg= [];
    a.forEach(function(d){
      var total= parseFloat(d.monto0)+parseFloat(d.monto1)+parseFloat(d.monto2)+parseFloat(d.monto3)+parseFloat(d.monto4)
      var imp= d.impuesto.nombre
      var fecha;
      if(d.grupo_impuesto_id != null){//si no entra es que obligadamente no se pago
        fecha= moment(d.grupoImpuesto.diaDePago).format("DD/MM/YYYY");
        if(d.grupoImpuesto.pagado!=null){
          if(d.descargado != null){//no esta archivado
            if(d.archivado!= null){
              imp+=" (Archivado)";
            }else{
              imp+=" (A Archivar)";//Descargar
            }
          }else{
            imp+=" (A Descargar)";//Archivar
          }
        }else{
          imp+=" (En Tránsito)";
        }
      }else{
        imp+=" (A Pagar)";
        fecha="Sin Definir";
      }
      msg.push({
        fecha: fecha,
        impuesto: imp,
        monto:total.toMoney(),
      })
    })
    res.send(msg)
  })
};

module.exports = Historial;
