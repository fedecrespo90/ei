var DB, Everyone
  , moment= require('moment');

var Carga = function(db, everyone) {
  DB = db;
  Everyone = everyone;
  return Carga;
};

var idCrono;
var flag;

Carga.get = function(req, res, next) {
  DB.ClienteImpuesto.findAll({
       include: [{model: DB.Impuesto, where:{fijo:0}}
              ,  {model: DB.Cliente}]
  }).on('success', function(imp) {
      var msg=[];
	    imp.forEach(function(i){
	      var com;
		    switch (i.cliente.comunicacion_id) {
		      case 1:	com="Teléfono: "+i.cliente.telefono; break;
		      case 2:	com="Celular: "+i.cliente.celular; break;
		      case 3:	com="Radio: "+i.cliente.radio; break; afs
		      case 4:	com="E-Mail: "+i.cliente.email; break;
		      default:com="Indefinido";
		    }
        msg.push({
          all: i,
          id: i.id,
          liquida: 1,
          impId: i.impuesto.id,
          impNombre: i.impuesto.nombre,
          impObservacion: i.impuesto.observacion,
          impFijo: i.impuesto.fijo,
          impMonto0: i.impuesto.monto0,
          impMonto1: i.impuesto.monto1,
          impMonto2: i.impuesto.monto2,
          impMonto3: i.impuesto.monto3,
          impTotal: i.impuesto.monto1 + i.impuesto.monto2 + i.impuesto.monto3 +i.impuesto.monto0 ,
          cliId: i.cliente.id,
          cliNombre: i.cliente.nombre,
          cliComunicacion: com,
          cliCatedral: i.cliente.catedral
        })
      })
      res.send(msg);
  });
};

Carga.post = function(req, res, next) {
  DB.Impuesto.find({ where: {
          nombre: req.body.nombre,
          }
  }).on('success', function(e) {
    if(!e){
      DB.Impuesto.create(req.body
      ).on('success', function(a){res.send(true)});
    }
  })
};

Carga.repetirMesAnterior = function(req, res, next){
  var impNombre= req.params.nombre.replace("%20"," ");
  DB.Impuesto.find({where: {nombre: impNombre}}).on('success',function(impuesto){
    console.log("IMP"+impuesto.id)
    DB.Vencimiento.max('cronograma_id',{where: {impuesto_id: impuesto.id}}).on('success', function(ven){
      //console.log(ven);
      ///////////Agreg
      DB.Cronograma.findAll({order: 'id DESC LIMIT 1 ', where: {auditado: false}
      }).on('success', function(cronn) {
        cronn.forEach(function(cc){
          cronnId = cc.id;
        })
      ///////////
      DB.CronogramaImpuesto.find({where:{impuesto_id: impuesto.id, cronograma_id: ven}}).on('success', function(cronoImp){
//        console.log(cronoImp.id)
        DB.Vencimiento.findAll({where: {impuesto_id: impuesto.id, cronograma_id: ven }}).on('success', function(e){
          if(e && cronoImp != 0 && cronoImp != -1 && cronoImp != null){ //PRUEBO CAMBIANDO LA CONDICION
            e.forEach(function(vto){
              //Asigno valor a idCrono
              idCrono = Number(vto.cronograma_id)+1;
            }) // Estos cierran el forEach

              if(idCrono == cronnId)
              {
                flag = true;
                e.forEach(function(vto){
                  DB.Vencimiento.create({
                    cliente_id: vto.cliente_id,
                    cliente_impuesto_id: vto.cliente_impuesto_id,
                    impuesto_id: vto.impuesto_id,
                    liquida: vto.liquida,
                    monto0: vto.monto0,
                    monto1: vto.monto1,
                    monto2: vto.monto2,
                    monto3: vto.monto3,
                    monto4: vto.monto4,
                    cronograma_id: idCrono,
                    cronograma_impuesto_id: cronoImp.id,//////////
                    anticipo: vto.anticipo,
                  })
                }) // Estos cierran el forEach
              }
              else
              {
                flag = false;
                console.log("No pudimos asignar el cronograma: "+idCrono+" es != que "+cronnId);
              }

          }else{
            /*for (var i = 0; i < 1000; i++) {
              console.log("ERROR: cronoImp.id is null");
            }*/
          }

      }).on('success', function(){
        mensaje = [];
        mensaje.push({
          mensaje: flag
        })
        res.send(mensaje);
      })//////////
    })//CONSULTA cronogramaImpuesto
    })// CONSULTA CRONOGRAMA
  })
  ///////////Cierro Agrego
  });
  ///////////
};

Carga.put = function(req, res, next) {
  req.body.impMonto0= req.body.impMonto0 == ''? req.body.impMonto0=0:parseFloat(req.body.impMonto0.replace(",","."));
  req.body.impMonto1= req.body.impMonto1 == ''? req.body.impMonto1=0:parseFloat(req.body.impMonto1.replace(",","."));
  req.body.impMonto2= req.body.impMonto2 == ''? req.body.impMonto2=0:parseFloat(req.body.impMonto2.replace(",","."));
  req.body.impMonto3= req.body.impMonto3 == ''? req.body.impMonto3=0:parseFloat(req.body.impMonto3.replace(",","."));
  var suma = req.body.impMonto0 + req.body.impMonto1  + req.body.impMonto2 + req.body.impMonto3;
  var monto2= req.body.impMonto4;
  DB.ClienteImpuesto.find({where:{id:req.params.id}}).on('success', function(cliImp){
    DB.CronogramaImpuesto.find({where:{impuesto_id: cliImp.impuesto_id, cronograma_id: req.body.cronograma_id}}).on(
    'success', function(cronoImp){
      if(cronoImp){
        DB.Vencimiento.find({where:{cliente_id:cliImp.cliente_id, impuesto_id: cliImp.impuesto_id,cronograma_id:req.body.cronograma_id}}).on('success', function(e){
          if(!e){
            DB.Vencimiento.create({
              cliente_id: cliImp.cliente_id,
              impuesto_id: cliImp.impuesto_id,
              liquida: req.body.liquida,
              monto0: req.body.impMonto0||0.00,
              monto1: req.body.impMonto1||0.00,
              monto2: req.body.impMonto2||0.00,
              monto3: req.body.impMonto3||0.00,
              monto4: req.body.impMonto4||0.00,
              cronograma_id: req.body.cronograma_id,
              cronograma_impuesto_id: cronoImp.id,
              anticipo: req.body.anticipo? req.body.anticipo : " "
            }).on('success', function(){res.send(true)})
          }else{
            res.send(false)
          }
        })
      }else{
        res.send('No esta cargada la fecha de vencimiento')
      }
    })
  })
};

Carga.delete = function(req, res, next) {
  DB.Impuesto.destroy({ id: req.params.id
  }).on('success',function(){res.send(true)});
};

module.exports = Carga;
