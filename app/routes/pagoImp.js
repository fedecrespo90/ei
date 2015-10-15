var DB, Everyone 
  , moment= require('moment');
var PagoImp = function(db, everyone) {
  DB = db;
  Everyone = everyone;
  return PagoImp;    
};

PagoImp.get = function(req, res, next) {
  DB.Vencimiento.findAll({order: 'puntaje ASC',where:"banco_id != 0 AND pagado = 1 AND grupo_impuesto_id IS NULL AND archivado IS NULL AND descargado IS NULL",
                           include:[{model: DB.Impuesto, as: "impuesto", include:[{model: DB.ImpuestoBanco, include:[{model: DB.Banco, as: "banco" }]}]}, {model: DB.Cliente}, {model: DB.Cronograma}]
  }).on('success', function(a){
    var msg= []
    if(a){
      a.forEach(function(ven){
          var impuestoBanco=''
          if(ven.impuesto.impuestoBancoes){
            ven.impuesto.impuestoBancoes.forEach(function(v){
              impuestoBanco+=v.banco.nombre+" ";//'"'+v.banco.nombre+'-'+v.banco.direccion+'"'+' '
            })  
          }else{
              impuestoBanco=' ';
          }
          if(/Monotributo/.test(ven.impuesto.nombre) || /Plan Mis Facilidades AFIP/.test(ven.impuesto.nombre) || /Plan de Pagos ARBA/.test(ven.impuesto.nombre) ){
            var edit= ven.cronograma.mes
            if(edit!="12")
              ven.cronograma.mes=parseInt(edit)+1
            else{
              ven.cronograma.mes="1"
              ven.cronograma.año= parseInt(ven.cronograma.año)+1
            }
          }   
          if(ven.anticipo<12 && 0<ven.anticipo)
            ven.impuesto.nombre+=" - Anticipo "+ven.anticipo;
          var impMonto=parseFloat(ven.monto0)+parseFloat(ven.monto1)+parseFloat(ven.monto2)+parseFloat(ven.monto3)+parseFloat(ven.monto4);
          if(impMonto != 0.00){
            msg.push({
              id: ven.id,
              check: '-',
              impuesto_id: ven.impuesto_id,
              impuestoNombre: ven.impuesto.nombre,
              impuestoMonto: impMonto.toFixed(2),
              impuestoBanco: impuestoBanco,
              cronograma_id: ven.cronograma_id,
              cronogramaFecha: ven.cronograma.año+"/"+ven.cronograma.mes,
              cliente_id: ven.cliente_id,
              clienteNombre: ven.cliente.nombre,
            })

          }else{
            ven.updateAttributes({descargado: 1, archivado: 1})
          }
      })
    }
    res.send(msg);
  })
};

PagoImp.multiple = function(req, res, next) {
  DB.Vencimiento.findAll({where: "vencimiento.id IN ("+req.params.ids.toString()+")",
                           include:[{model: DB.Impuesto}, {model: DB.Cliente}, {model: DB.Cronograma}]
  }).on('success', function(a){
    res.send(a)
  })
};

PagoImp.post = function(req, res, next) {
  var param= req.body
  var d= param.diaDePago;
  var dia= d[3]+d[4]+d[2]+d[0]+d[1]+d[5]+d[6]+d[7]+d[8]+d[9];
  var ids=[];
  param.vi.forEach(function(a){
    ids.push(a.id)
  })
  DB.Usuario.find({where:{id: req.session.usuario_id}, include: [{model: DB.Empleado}]}).on('success', function(u){
    DB.Empleado.find({where: {id: param.empleado_id}}).on('success', function(empleado){
      DB.Recibo.max('f').on('success',function(maximo){
        if(isNaN(maximo)){
          maximo=1
        }else{
          maximo=maximo+1
        }
        var concepto= "Pago de impuestos por parte del Estudio Pressacco y Asoc."
        DB.Recibo.create({
          f: maximo,
          concepto: concepto,
          receptor: empleado.nombre+" "+empleado.apellido
        }).on('success', function(recibo){
          var arrayImpuesto= []
          DB.GrupoImpuesto.create({banco_id: param.banco_id, diaDePago: dia ,empleado_id: param.empleado_id, recibo_id: recibo.id, enviado:1, total: param.total}).on('success',function(gi){
            param.vi.forEach(function(v){
              DB.Vencimiento.find({where:{id:v.id}, include:[{model: DB.Cliente},{model: DB.Impuesto}, {model: DB.Cronograma}]}).on('success', function(vi){
                vi.updateAttributes({grupo_impuesto_id: gi.id})
              })
            })
            //vencimiento.cliente.nombre ASC, 'vencimiento.cronograma.año ASC', 'vencimiento.cronograma.mes ASC
            DB.Vencimiento.findAll({where:"vencimiento.id IN ("+ids+")", include:[{model: DB.Cliente},{model: DB.Impuesto}, {model: DB.Cronograma}]}).on('success', function(a){
////////////
              var b = a.sort(function(a, b){
                if(a.cliente.nombre < b.cliente.nombre) return -1;
                if(a.cliente.nombre > b.cliente.nombre) return 1;
                return 0;
              })              
              var total = 0;
              b.forEach(function(vi){
                var importe= parseFloat(vi.monto0)+ parseFloat(vi.monto1)+parseFloat(vi.monto2)+parseFloat(vi.monto3)+parseFloat(vi.monto4)
                total += importe;
                //aca deberia poner lo del impuesto anticipo
                //console.log(vi)
                arrayImpuesto.push({
                  cliente: vi.cliente.nombre,
                  importe: importe.toMoney(),
                  impuesto: vi.impuesto.nombre,
                  periodo: vi.cronograma.mes+"/"+vi.cronograma.año,
                })
                /*AGREGO*/
                DB.Vencimiento.create({
                  monto0: param.total//importe.toMoney()
                }).on('success', function(ss){
                  console.log("Listo!");
                })
                /*FIN AGREGO*/
              })
              res.send({
                pagoNumero: gi.id,
                total: total.toMoney(),
                recibo: recibo,
                impuestos: arrayImpuesto,
                creador: u.empleado.nombre+" "+u.empleado.apellido,
                receptor: empleado.nombre+" "+empleado.apellido,
                reciboFecha: moment(recibo.update_at).format("DD/MM/YYYY  HH:mm")
              })
            })
          })
        })
      })
    })
  })
};

/*
Project.find({ where: {title: 'aProject'} }).on('success', function(project) {
  if (project) { // if the record exists in the db
    project.updateAttributes({
      title: 'a very different title now'
    }).success(function() {});
  }
})
*/

/* AGREGO DE recepImp.js 
RecepImp.editMonto = function(req, res, next){
  DB.Vencimiento.find({where: {id: req.params.id}, include:[{model: DB.Cliente}]}).on('success', function(vto){
    var baseMontos = Number(vto.monto0)+Number(vto.monto1)+Number(vto.monto2)+Number(vto.monto3)
    var bodyMontos = Number(req.body.monto0)+ Number(req.body.monto1)+ Number(req.body.monto2)+ Number(req.body.monto3);
    DB.Recibo.max('f').on('success',function(maximo){
      if(isNaN(maximo)){
        maximo=1
      }else{
        maximo=maximo+1
      }
      vto.updateAttributes({monto0: req.body.monto0, monto1: req.body.monto1, monto2 : req.body.monto2, monto3: req.body.monto3});
      //generarRecibo(maximo, vto, baseMontos, bodyMontos, req, res);
      actualizarCuenta(maximo, vto, baseMontos, bodyMontos);
      res.send(true);
    })
  })
  setTimeout(limpiarDb(), 300)
};
/* FIN AGREGO DE recepImp.js */

module.exports = PagoImp;
