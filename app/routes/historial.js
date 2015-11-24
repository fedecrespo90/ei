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
	      order: '`movimiento`.`id` DESC'
  }).on('success', function(a) {
     var msg=[];
     a.forEach(function(mov){
        var tramite
        if(mov.vencimiento_id == 0){
          if(mov.ingreso){
           tramite = "Ingreso "+mov.observacion
          }else{
            tramite = "Egreso "+mov.observacion
          }
        }else{
           if(mov.tramite){
              tramite="Tramite "+mov.observacion
            }else{
              var crono = " "
              if(mov.vencimiento)
                if(mov.vencimiento.cronograma)
                  crono=" - "+mov.vencimiento.cronograma.mes+"/"+mov.vencimiento.cronograma.año+" - ";
              if(mov.ingreso){
                tramite="Cliente pagó al Estudio/Ingreso " + mov.observacion + crono
                if(mov.vencimiento){
                  if(mov.vencimiento.pagado==1){
                    if(mov.vencimiento.grupo_impuesto_id!= null){
                      if(mov.vencimiento.descargado!= null){
                        if(mov.vencimiento.archivado!= null){
                          tramite+= " Archivado"
                        }else{
                        tramite+= " A Archivar"
                        }
                      }else{
                        tramite+=" A Descargar"
                      }
                    }else{
                      tramite+=" Enviado a Pagar"
                    }
                  }else{
                    tramite+= " Sin enviar"
                  }
                }else{
                  tramite+= " Sin Detallar"
                }
              }else{
                tramite="El Estudio pagó/Egreso " + mov.observacion
              }
            }
        }
        //MANDA LA DATA A Clientes -> Cuentas Corrientes
	      msg.push({
	         id: mov.id,
	         clienteNombre: mov.clienteCuentaCorriente.cliente.nombre,
	         fecha: moment(mov.created_at).format('DD/MM/YYYY'),
	         tramite: tramite, //mov.tramite? "Trámite"+mov.observacion:"Pago de Impuestos"+mov.observacion,
	         monto: mov.monto.toMoney(),
	         ingreso: mov.ingreso
        });
     });
     res.send(msg);
   })//CIERRO LA CONSULTA DE RECIEN (ff)
  });
};
/*
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
};*/

module.exports = Historial;
