var DB, Everyone
 , moment= require('moment');  
var PagoCompensacion = function(db, everyone) {
  DB = db;
  Everyone = everyone;
  return PagoCompensacion;
};

PagoCompensacion.put = function(req, res, next) {
  var param = req.body;   
  var concepto;
  var ids=[];
  param.impuestos.forEach(function(a){
    ids.push(a.id)
  })  
  if(param.clienteMonto!='0'){
    if(param.compensacionMonto!='0'){
      concepto="Recepción para Pago de Impuestos(Compensación: $"+Number(param.compensacionMonto).toMoney()+" y Pago del por parte del Cliente: $"+Number(param.clienteMonto).toMoney()+" con Comprobante: "+param.clienteComprobante +")";
      }else{  
        concepto="Recepción para Pago de Impuestos(Pago del por parte del Cliente: $"+ Number(param.clienteMonto).toMoney()+" con Comprobante: "+param.clienteComprobante +")";
      }
  }else{
    if(param.compensacionMonto!='0'){
      if(param.clienteComprobante == '')
        concepto="Recepción para Pago de Impuestos(Compensación: $"+Number(param.compensacionMonto).toMoney()+")";
      else
        concepto="Recepción para Pago de Impuestos(Compensación: $"+Number(param.compensacionMonto).toMoney()+"), con Comprobante: "+param.clienteComprobante;
    }
  }
  DB.Cliente.find({where:{id: param.cliente_id}}).on('success',function(cli){
//    DB.Recibo.find({where:{concepto: concepto, receptor:cli.nombre }}).on('success', function(e){
//    if(!e){
        DB.Recibo.max('c').on('success',function(maximo){
          if(isNaN(maximo)){
            maximo=1
          }else{
            maximo=maximo+1
          }
          DB.Recibo.create({
            c: maximo,
            concepto: concepto,
            receptor: cli.nombre
          }).on('success', function(recibo){
            var totalIngresado= parseFloat(param.clienteMonto) + parseFloat(param.compensacionMonto)
            var arrayImpuesto=[]            
            param.impuestos.forEach(function(imp){
              DB.Vencimiento.find({where:{id: imp.id}, include:[{model: DB.Impuesto},{model: DB.CronogramaImpuesto, include:[{model: DB.Cronograma}]}]}).on('success',function(base){
                var totalBase= parseFloat(base.monto0)+parseFloat(base.monto1)+parseFloat(base.monto2)+parseFloat(base.monto3)+parseFloat(base.monto4);
                if(parseFloat(totalBase) <=  parseFloat(totalIngresado)){
                  ////////////////
                  base.vtoImpuesto=base.cronogramaImpuesto.cronograma.mes+ "/"+base.cronogramaImpuesto.cronograma.año;//moment(base.vtoImpuesto).format("MM/YY");
                  if(/Monotributo/.test(base.impuesto.nombre) || /Plan Mis Facilidades AFIP/.test(base.impuesto.nombre) || /Plan de Pagos ARBA/.test(base.impuesto.nombre) ){  
                    var edit= base.vtoImpuesto.split("/")
                    if(edit[0]!="12")
                      edit[0]=parseInt(edit[0])+1
                    else{
                      edit[0]="1"
                      edit[1]= parseInt(edit[1])+1
                    }
                    base.vtoImpuesto=edit.join("/")
                  }
                  //////////////
                  arrayImpuesto.push(base.vtoImpuesto+" - "+base.impuesto.nombre+" (Pago Total $"+totalBase+")") 
                  //
                  base.updateAttributes({pagado: 1, adeudado:0, grupo_impuesto_id:1, descargado:1})
                }else{
                  var arreglo=[]
                  //////////////////////
                  base.vtoImpuesto=base.cronogramaImpuesto.cronograma.mes+ "/"+base.cronogramaImpuesto.cronograma.año;//moment(base.vtoImpuesto).format("MM/YY");
                  if(/Monotributo/.test(base.impuesto.nombre) || /Plan Mis Facilidades AFIP/.test(base.impuesto.nombre) || /Plan de Pagos ARBA/.test(base.impuesto.nombre) ){  
                    var edit= base.vtoImpuesto.split("/")
                    if(edit[0]!="12")
                      edit[0]=parseInt(edit[0])+1
                    else{
                      edit[0]="1"
                      edit[1]= parseInt(edit[1])+1
                    }
                    base.vtoImpuesto=edit.join("/")
                  }
                  arrayImpuesto.push(base.vtoImpuesto+" - "+base.impuesto.nombre+" (Pago Parcial $"+totalIngresado+" de un total de $"+totalBase+")")
                  arreglo.push(parseFloat(base.monto4),parseFloat(base.monto3),parseFloat(base.monto2),parseFloat(base.monto1),parseFloat(base.monto0))
                  arreglo.forEach(function(monto, indice){
                    var ingresado=parseFloat(totalIngresado)
                    var base= parseFloat(monto)
                    if(parseFloat(monto)<=parseFloat(totalIngresado)){
                      monto=0; 
                      totalIngresado=ingresado-base;
                    }else{
                      totalIngresado=0; 
                      arreglo[indice]=base-ingresado;
                    }
                  })
                  var monto0=arreglo[4]
                  var monto1=arreglo[3]
                  var monto2=arreglo[2]
                  var monto3=arreglo[1]
                  var monto4=arreglo[0]
                  base.updateAttributes({ monto0:monto0, monto1:monto1, monto2:monto2, monto3:monto3, monto4:monto4})
                }
              })
            })
            DB.Usuario.find({where: {id: req.session.usuario_id}, include:[{model: DB.Empleado}]}).on('success', function(u){
              res.send({
                impuestos: arrayImpuesto,
                recibo: recibo,
                reciboFecha: moment(recibo.updated_at).format("DD/MM/YYYY  HH:mm"),
                receptor: cli.nombre,
                operador: u.empleado.nombre + " " + u.empleado.apellido,
              })
            })
          })
        })
      })
//  })  
//  res.send(true)
}
module.exports = PagoCompensacion;

