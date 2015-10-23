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
            msg.push({//le manda la data en un array para que lo imprima en los value de los inputs
              id: ven.id,
              check: '-',
              impuesto_id: ven.impuesto_id,
              impuestoNombre: ven.impuesto.nombre,
              impuestoMonto: impMonto.toFixed(2), //ESTE ENVIA EL MONTO A LA VISTA
              impuestoBanco: impuestoBanco,
              cronograma_id: ven.cronograma_id,
              cronogramaFecha: ven.cronograma.año+"/"+ven.cronograma.mes,
              cliente_id: ven.cliente_id,
              clienteNombre: ven.cliente.nombre,
              /* AGREGO */
              monto0: ven.monto0,
              monto1: ven.monto1,
              monto2: ven.monto2,
              monto3: ven.monto3,
              monto4: ven.monto4,
              /* FIN AGREGO */
            })

          }else{
            ven.updateAttributes({
              descargado: 1,
              archivado: 1
            })
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
                  /* AGREGO */
                  if(vi.monto0 != 0 || vi.monto0 != 0.00){
                    vi.updateAttributes({
                      grupo_impuesto_id: gi.id,
                      monto0: param.total
                    })
                  }
                  /* FIN AGREGO */
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
                  importe: param.total, //importe.toMoney(), //CAMBIE PARA QUE IMPRIMA BIEN EL IMPORTE EN EL RECIBO
                  impuesto: vi.impuesto.nombre,
                  periodo: vi.cronograma.mes+"/"+vi.cronograma.año,
                })
              })
              res.send({
                pagoNumero: gi.id,
                total: param.total,//total.toMoney(), //CAMBIE PARA QUE IMPRIMA BIEN EL TOTAL EN EL RECIBO
                recibo: recibo,
                impuestos: arrayImpuesto,
                creador: u.empleado.nombre+" "+u.empleado.apellido,
                receptor: empleado.nombre+" "+empleado.apellido,
                reciboFecha: moment(recibo.update_at).format("DD/MM/YYYY  HH:mm"),
              })
            })
          })
        })
      })
    })
  })
};

module.exports = PagoImp;
