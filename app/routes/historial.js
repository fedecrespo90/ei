var DB, Everyone
  , moment= require('moment');
var Historial = function(db, everyone) {
  DB = db;
  Everyone = everyone;

  return Historial;
};
Historial.get = function(req, res, next){
  DB.ClienteCuentaCorriente.find({ where: { cliente_id: req.params.cliente_id } }).on('success', function(ff){
  DB.Movimiento.findAll({
        where: {'clienteCuentaCorriente.cuenta_corriente_id': ff.cuenta_corriente_id},
	      include: [{model:DB.Vencimiento, include:[{model: DB.Cronograma}]},{model: DB.ClienteCuentaCorriente,
	               include:[{  model:DB.Cliente
	               }]
	      }],
	      order: '`movimiento`.`created_at` DESC'//antes era: id
  }).on('success', function(a) {
    ////la otra consulta
    DB.Vencimiento.findAll(
            {order: 'vencimiento.created_at DESC',
            where: {cliente_id: req.params.cliente_id },
            include: [{model: DB.Impuesto},{model: DB.GrupoImpuesto}]
    }).on('success', function(b){
      var msg=[];
      var miArray = [];
      var indice = 0;
      var idos = 0;
      b.forEach(function(d){
        a.forEach(function(ee){
          miArray[indice] = moment(ee.created_at).format('DD/MM/YYYY');
          indice++;
        });
        var total= parseFloat(d.monto0)+parseFloat(d.monto1)+parseFloat(d.monto2)+parseFloat(d.monto3)+parseFloat(d.monto4)
        var imp= d.impuesto.nombre
        var fecha;
        if(d.grupo_impuesto_id != null){//si no entra es que obligadamente no se pago
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
          //fecha="Sin Definir";
        }
        msg.push({
          fecha: miArray[idos],
          impuesto: imp,
          monto:total.toMoney(),
        })
        idos++;
      });
     res.send(msg);
     });
   })//CIERRO LA CONSULTA DE RECIEN (ff)
  });
};

module.exports = Historial;
