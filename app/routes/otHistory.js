var DB, Everyone
  , moment= require('moment')
  , nodemailer = require('nodemailer')    
  , util = require('util');
   
var OtHistory = function(db, everyone) {
  DB = db;
  Everyone = everyone;

  return OtHistory;
};

OtHistory.get = function(req, res, next) {
  DB.Ot.findAll({order:'fechaVencimiento DESC' , include:[{model: DB.OtTarea},{model: DB.Cliente}, {model: DB.Oc}], where:{estado: 10}}).on('success', function(a) {
    var msg = []
    a.forEach(function(b){
      var n = ' ';
      if(b.oc){
        if(util.isArray(b.oc)){
          b.oc.forEach(function(d){
            n+=d.titulo+"-Nº"+d.numero+"- Solución: "+d.solucion;
          })
        }else{
            var d=b.oc;
            n+=d.titulo+"-Nº"+d.numero+"- Solución: "+d.solucion;
        }
      }
      var tInsumido="00:00";
      b.otTareas.forEach(function(otTarea){
        if(otTarea.tiempoInsumido){
          var b=tInsumido.split(":")
          a=otTarea.tiempoInsumido.split(":")
          b[1]=parseInt(b[1])+parseInt(a[1])
          b[0]=parseInt(b[0])+parseInt(a[0])
          var c = new Date()
          c.setHours(0);
          c.setMinutes(b[0]);
          c.setSeconds(b[1]);
          if(Number(c.getHours())>0){
            var parcial=(60*Number(c.getHours()))+Number(c.getMinutes())
            if(c.getSeconds() < 10)
              tInsumido=parcial+":0"+c.getSeconds();
            else
              tInsumido=parcial+":"+c.getSeconds();          
          
          }else{
            if(c.getSeconds() < 10)
              tInsumido=c.getMinutes()+":0"+c.getSeconds();
            else
              tInsumido=c.getMinutes()+":"+c.getSeconds();          
          }
          
        }
      })
      msg.push({
        id: b.id,
        tInsumido: tInsumido,
        numero: b.numero,
        estado: b.estado,
        cliente_id: b.cliente_id,
        clienteNombre: b.cliente.nombre,        
        ingreso: moment(b.created_at).format("YYYY/MM/DD"),
        fechaVencimiento: moment(b.fechaVencimiento).format("YYYY/MM/DD")=='Invalid date'?" ":moment(b.fechaVencimiento).format("YYYY/MM/DD"),
        concluida: moment(b.conclude_at).format("YYYY/MM/DD")=='Invalid date'?" ":moment(b.conclude_at).format("YYYY/MM/DD"),
        plan_id: b.plan_id,
        notificarCliente: b.notificarCliente? "Sí" : "No",
        honorarios: b.honorarios? "Sí" : "No",
        juridica: b.juridica? "Sí": "No",
        prioridad: b.prioridad,
        coordinador: b.coordinador? 1 : 0,
        titulo: b.titulo,
        descripcion: b.descripcion,
        conclusion: b.conclusion,
        consulta: n==' '?"Sin Consultas":n,
      })
    })
    res.send(msg)
  });
};

module.exports = OtHistory;
