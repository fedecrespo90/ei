var DB, Everyone
 ,  moment= require('moment')
 ;
var NovTarea = function(db, everyone) {
  DB = db;
  Everyone = everyone;
  return NovTarea;
};
NovTarea.get = function(req, res, next) {
  if(req.session.rol_id<3){
    DB.OtTarea.findAll({order: 'fechaVencimiento ASC', where: "empleado_id="+req.session.empleado_id+" AND completa=0", include:[{model: DB.Ot},{model: DB.Empleado},{model: DB.Area}]}).on('success', function(a){
      var msg=[]
      a.forEach(function(o){
        if(o.ot.estado != 10){
          var area = "Sin Area"
          var empleado = "Sin Empleado"
          var cliente = "Sin Cliente"
          if(o.area)
            area = o.area.nombre
          if(o.empleado)
            empleado = o.empleado.nombre+" "+o.empleado.apellido
          if(o.ot.cliente)
            cliente = o.ot.cliente.nombre;
          if((moment(o.fechaVencimiento).format("YYYYMMDD")-moment().format("YYYYMMDD")) >= 1){        
            msg.push({
              id: o.id,
              area: area,
              cliente: cliente,
              vencimiento: moment(o.fechaVencimiento).format("DD/MM/YYYY"),
              tiempoEstimado: o.tiempoEstimado|| "00:00",
              empleado: empleado,
              otNumero: '<a href="/#/ot/audit/Ot_'+o.ot.numero+'">'+o.ot.numero+'</a>',//o.ot.numero,
              titulo: o.nombre||"Sin Título",
              descripcion: o.descripcion||"Sin Descripción",
            })
          }else{
            if( (moment(o.fechaVencimiento).format("YYYYMMDD")-moment().format("YYYYMMDD")) < 0){
              msg.push({
                id: o.id,
                area: area,
                cliente: cliente,
                vencimiento: '<p style="color=black;background-color:red">'+moment(o.fechaVencimiento).format("DD/MM/YYYY")+'</p>',
                tiempoEstimado: o.tiempoEstimado|| "00:00",
                empleado: empleado,
                otNumero: '<a href="/#/ot/audit/Ot_'+o.ot.numero+'">'+o.ot.numero+'</a>',//o.ot.numero,
                titulo: '<p style="color=black;background-color:red">'+o.nombre+"</p>",
                descripcion: '<p style="color=black;background-color:red">'+ o.descripcion+"</p>",
              })          
            }else{
              msg.push({
                id: o.id,
                area: area,
                cliente: cliente,
                vencimiento: '<p style="color=black;background-color:#EE808D">'+moment(o.fechaVencimiento).format("DD/MM/YYYY")+'</p>',
                tiempoEstimado: o.tiempoEstimado|| "00:00",
                empleado: empleado,
                otNumero: '<a href="/#/ot/audit/Ot_'+o.ot.numero+'">'+o.ot.numero+'</a>',//o.ot.numero,
                titulo: '<p style="color=black;background-color:#EE808D">'+o.nombre+"</p>",
                descripcion: '<p style="color=black;background-color:#EE808D">'+ o.descripcion+"</p>",
              })          
            }
        }
        }
      })
      res.send(msg)
    })
  }else{
    DB.OtTarea.findAll({order: 'fechaVencimiento ASC', where: 'completa = 0', include:[{model: DB.Empleado},{model: DB.Area}, {model: DB.Ot, include:[{model: DB.Cliente}]}]}).on('success', function(a){
      var msg=[]
      a.forEach(function(o){
        if(o.ot.estado != 10){      
          var area = "Sin Area"
          var empleado = "Sin Empleado"
          var cliente = "Sin Cliente"
          if(o.area)
            area = o.area.nombre
          if(o.empleado)
            empleado = o.empleado.nombre+" "+o.empleado.apellido
          if(o.ot.cliente)
            cliente = o.ot.cliente.nombre;
          if((moment(o.fechaVencimiento).format("YYYYMMDD")-moment().format("YYYYMMDD")) >= 1){        
            msg.push({
              id: o.id,
              area: area,
              cliente: cliente,
              vencimiento: moment(o.fechaVencimiento).format("DD/MM/YYYY"),
              tiempoEstimado: o.tiempoEstimado|| "00:00",
              empleado: empleado,
              otNumero: '<a href="/#/ot/audit/Ot_'+o.ot.numero+'">'+o.ot.numero+'</a>',//o.ot.numero,
              titulo: o.nombre||"Sin Título",
              descripcion: o.descripcion||"Sin Descripción",
            })
          }else{
            if( (moment(o.fechaVencimiento).format("YYYYMMDD")-moment().format("YYYYMMDD")) < 0){
              msg.push({
                id: o.id,
                area: area,
                cliente: cliente,
                vencimiento: '<p style="color=black;background-color:red">'+moment(o.fechaVencimiento).format("DD/MM/YYYY")+'</p>',
                tiempoEstimado: o.tiempoEstimado|| "00:00",
                empleado: empleado,
                otNumero: '<a href="/#/ot/audit/Ot_'+o.ot.numero+'">'+o.ot.numero+'</a>',
                titulo: '<p style="color=black;background-color:red">'+o.nombre+"</p>",
                descripcion: '<p style="color=black;background-color:red">'+ o.descripcion+"</p>",
              })          
            }else{
              msg.push({
                id: o.id,
                area: area,
                cliente: cliente,
                vencimiento: '<p style="color=black;background-color:#EE808D">'+moment(o.fechaVencimiento).format("DD/MM/YYYY")+'</p>',
                tiempoEstimado: o.tiempoEstimado|| "00:00",
                empleado: empleado,
                otNumero: '<a href="/#/ot/audit/Ot_'+o.ot.numero+'">'+o.ot.numero+'</a>',
                titulo: '<p style="color=black;background-color:#EE808D">'+o.nombre+"</p>",
                descripcion: '<p style="color=black;background-color:#EE808D">'+ o.descripcion+"</p>",
              })          
            }
          }
        }
      })
      res.send(msg)
    })  
  }
};

module.exports = NovTarea;
