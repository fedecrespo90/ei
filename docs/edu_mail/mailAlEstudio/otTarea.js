var DB, Everyone, 
    moment= require('moment'),
    nodemailer = require('nodemailer'),
    util = require('util');   
  
var OtTarea = function(db, everyone) {
  DB = db;
  Everyone = everyone;
  return OtTarea;
};

OtTarea.byOt = function(req, res, next){
  DB.OtTarea.findAll({order: '`posicion` ASC', where: { ot_id: req.params.cliente_id }, include:[{model: DB.Empleado}]}).on('success', function(ott){
    res.send(ott)
  })
};

OtTarea.editCompleta = function(req, res, next){
  DB.OtTarea.find({where:{ id: req.params.id}}).on('success', function(tarea){
    if(req.body.fechaVencimiento){
      t=req.body.fechaVencimiento;
      req.body.fechaVencimiento = t[3]+t[4]+t[5]+t[0]+t[1]+t[2]+t[6]+t[7]+t[8]+t[9]+" 18:00:00"
    }
    if(req.body.fechaCompleta){
      t=req.body.fechaCompleta;
      req.body.fechaCompleta = t[3]+t[4]+t[5]+t[0]+t[1]+t[2]+t[6]+t[7]+t[8]+t[9]+" 18:00:00"
    }
    tarea.updateAttributes(req.body);
    if(req.body.tiempoInsumido != "00:00" && req.body.tiempoInsumido != ''){
      var att= req.body.tiempoInsumido.split(":")
      DB.OtTareaResource.find({where: {ot_tarea_id: req.params.id}}).on('success', function(otr){
        otr.updateAttributes({
          empleado_horas: att[0],
          empleado_minutos: att[1],
        })
      })
    }
  })
  res.send(true)
};

OtTarea.editIncompleta = function(req, res, next){
  DB.OtTarea.find({where:{ id: req.params.id}}).on('success', function(tarea){
    if(req.body.fechaVencimiento){
      t=req.body.fechaVencimiento;
      req.body.fechaVencimiento = t[3]+t[4]+t[5]+t[0]+t[1]+t[2]+t[6]+t[7]+t[8]+t[9]+" 18:00:00"
    }
    tarea.updateAttributes(req.body);
  })
  res.send(true)
};

OtTarea.all = function(req, res, next){
  DB.OtTarea.findAll({where: {completa: 1},include: [{model: DB.Ot}, {model: DB.Empleado}, {model: DB.Area}]}).on('success', function(otTarea){
    var msg=[];
    otTarea.forEach(function(o){
      msg.push({
        id: o.id,
        ot: o.ot.numero,
        area: o.area.nombre,
        ot_numero: "Ot_"+o.ot.numero,
        fechaCompleta: o.fechaCompleta? moment(o.fechaCompleta).format("YYYY/MM/DD HH:mm") : "Sin F/Finalización",
        fechaVencimiento: o.fechaCompleta? moment(o.fechaVencimiento).format("YYYY/MM/DD") : "Sin F/Vencimiento",
        nombre: o.nombre || "Sin Nombre",
        descripcion: o.descripcion || "Sin Descripción",
        observacion: o.observacion || "Sin Observación",
        tiempoEstimado: o.tiempoEstimado || "Sin T/Estimado",
        tiempoInsumido: o.tiempoInsumido || "Sin T/Insumido",
        conclusion: o.conclusion || "Sin Conclusión",
        empleado: o.empleado? o.empleado.nombre+' '+o.empleado.apellido : "Sin Empleado",
      })
    })
    res.send(msg)
  })
};

OtTarea.add = function(req, res, next) {
    var vto;
    if(req.body.vto){
      var x = req.body.vto;
      vto= x+" 15:00:00";
    }else
     vto = moment().format("YYYY-MM-DD 15: 00")
    DB.OtTarea.create({
      nombre: req.body.nombre,
      descripcion: req.body.descripcion,
      tiempoEstimado: req.body.tiempoEstimado,
      posicion: req.body.posicion || 1,
      fechaVencimiento: vto,
      area_id: req.body.area_id,
      empleado_id: req.body.empleado_id,
      ot_id: req.body.ot_id,
    }).on('success', function() {
      res.send(true);
    })
};

OtTarea.complete = function(req, res, next){
  DB.OtTareaResource.create({
    ot_tarea_id:	req.params.id,
    empleado_id: req.session.empleado_id,		
	  empleado_horas:	req.body.tiempo.split(":")[0],
  	empleado_minutos:req.body.tiempo.split(":")[1],
  }).on('success', function(){
    DB.OtTarea.find({where:{id: req.params.id}, include:[{model: DB.Ot}]}).on('success',function(otTarea){  
      if(otTarea.tiempoInsumido){
        var b=req.body.tiempo.split(":")
        a=otTarea.tiempoInsumido.split(":")
        b[1]=parseInt(b[1])+parseInt(a[1])
        b[0]=parseInt(b[0])+parseInt(a[0])
        var c = new Date()
        c.setMinutes(b[0]);
        c.setSeconds(b[1]);
        b=c.getMinutes()+":"+c.getSeconds();
      }else{
        var b=req.body.tiempo;
      }
      var conclusion= otTarea.conclusion ||"";
      var observacion= otTarea.observacion||"";
      res.send(true)
      otTarea.updateAttributes({
        fechaCompleta: moment().format('YYYY-MM-DD HH:mm:ss'),
        completa: 1,
        tiempoInsumido: b,
        observacion: observacion+" "+req.body.obsInt,
        conclusion: conclusion+" "+req.body.obs,
      }).on('success', function(){
      ///
        // CREAR NOVEDAD A QUIEN CORRESPONDA (AREA DE LA TAREA SIGUIENTE Y EMPLEADO RESPONSABLE)
        //tengo la otTarea
        DB.OtTarea.findAll({where: 'ot_id= '+otTarea.ot_id +' AND posicion >= '+otTarea.posicion+" AND completa = 0", include:[{model: DB.Ot}] }).on('success',function(ots){
          if(ots.length!=0){
            var o=ots.sort(function (a, b) {
              return ( a.posicion - b.posicion )
            })
            var p=ots[0].posicion;
            o.forEach(function(otT){
              if(p==otT.posicion){
                //creo novedad para el empleado correspondiente!
                DB.Novedades.create({
                  novedad: "Se completó la Tarea "+otT.nombre+" de la OT:"+otT.ot.numero,
                  descripcion: observacion+" "+req.body.obsInt,
                  empleado_id: otT.empleado_id,
                  area_id: otT.area_id
                })
              }  
            })
          }else{
            if(otTarea.ot.coordinador == 1){
            //Creo novedad para el coordinador          
              DB.Usuario.findAll({where: {area_id: 4, rol_id: 3}}).on('success',function(users){
                if(users){
                  users.forEach(function(user){
                    DB.Novedades.create({
                      novedad: "Se completó El PLAN DE TAREAS de la OT:"+otTarea.ot.numero,
                      descripcion: "Debe concluirla",
                      empleado_id: user.id,
                      area_id: 4,
                    })
                  })
                }
              })
            }else{
            //creo novedad para todos los supervisores.
              DB.Usuario.findAll({where: {rol_id: 3}}).on('success',function(users){
                if(users){
                  users.forEach(function(user){
                    DB.Novedades.create({
                      novedad: "Se completó El PLAN DE TAREAS de la OT:"+otTarea.ot.numero,
                      descripcion: "Debe concluirla",
                      empleado_id: user.id,
                      area_id: 999,
                    })
                  })
                }
              })          
            }
          }
        })      
      ///
      })
      //SI LA TAREA ES LA DE COORDINACION ENVIO MAIL INICIAL
      if(otTarea.nombre == "Coordinación"){//ES COORD
        if(otTarea.ot.reservado == 0){
          moment.lang("es");
          var transport = nodemailer.createTransport("SMTP", {
            auth: {
              user: "estudiopressacco@gmail.com",
              pass: "EeCc&689Gmail"
            }
          });
          var com;
          switch(otTarea.ot.comunicacion_id) { 
           case 1:	com="Teléfono"; break; 
           case 2:	com="Celular"; break;
           case 3:	com="Radio"; break; 
           case 4:	com="E-Mail"; break; 
           case 5:	com="Personal"; break;    
           default:		com="Indefinido"; 
          }
          DB.Usuario.find({where: {id: otTarea.ot.usuario_id}, include: [{model: DB.Empleado}]}).on('success', function(user){
            var honorarios, fechaV;
            (otTarea.ot.honorarios==1)? honorarios="NO" :honorarios="SI";
            (moment(otTarea.ot.fechaVencimiento).format("ll")!='Invalid date')?fechaV=moment(otTarea.ot.fechaVencimiento).format("ll") : fechaV="Sin Fecha de conclusión";
            DB.Cliente.find({where: {id: otTarea.ot.cliente_id}}).on('success', function(cliente){
            var htmlText= '\
            <style>body{background-color:gray; color: white;}</style><body><table style="background-color:gray; color: white; width: 750 px; height: 1px; margin: 0px; padding: 0px; border-collapse: collapse;" cellpadding="0"><tr><td rowspan="2">'+
            '<img src="/srv/pressacco/public/images/logo_estudio.png" height="90" width="90" />'+
            '<td><td colspan="5"><h4 style= "color: #8A2908">Estudio Integral Pressacco & Asoc.</h4><td></tr><tr><td colspan="5"><h2>SOLICITUD ORDEN DE TRABAJO N&ordm;:</h2></td><td colspan="2" bgcolor="#343434"><h2 align="center">'+otTarea.ot.numero+'</h2></td></tr><tr style="margin: 0px; border: 1px solid #000000; padding: 0px;"></tr><tr><td>&nbsp;</td><td>Cliente:</td><td colspan= "2">'+cliente.nombre+'</td></tr><tr><td>&nbsp;</td><td>Fecha:</td><td colspan= "2">'+moment(otTarea.ot.created_at).format("ll")+'</td><td> &nbsp; </td><td  align="right" > Atendido por: </td><td>'+user.empleado.nombre+" "+user.empleado.apellido+'</td></tr><tr><td> &nbsp; </td><td> Hora: </td><td colspan= "2">'+moment(otTarea.ot.created_at).format("HH:mm")+'</td><td> &nbsp; </td><td  align="right"> Canal de comunicaci&oacute;n: </td><td>'+com+'</td></tr><tr style="margin: 0px;  border: 1px solid #000000; padding: 0px;"></tr><tr><td colspan= "2"><h5><ins> TITULO:</ins> <h5></td><td colspan= "5"><h5>'+otTarea.ot.titulo+'<h5></td></tr><tr><td colspan= "2"><h6><ins> OBSERVACIONES:</ins><h6></td><td colspan= "5"><h6>'+otTarea.ot.descripcion+'<h6></td></tr><tr style="margin: 0px;  border: 1px solid #000000; padding: 0px;"></tr><tr><td colspan= "4"><h6><ins>*FECHA ESTIMADA DE CONCLUSION:</ins></h6></td><td colspan= "3"><h6>'+fechaV+'</h6></td></tr><tr><td colspan= "4"><h6><ins>¿Tarea incluida en abono mensual?:</ins></h6></td><td colspan= "3"><h6>'+honorarios+'</h6></td></tr><tr><td colspan= "7"><font size=1>(*) condicionada a situaciones ajenas al Estudio </font></td></table></body>';
              var mailOptions = {
                from: "estudiopressacco@gmail.com",
                to: cliente.email, //"2014estudiocontable@gmail.com",
                bcc: "estudiopressacco@gmail.com",
                subject: "Estudio Integral Pressacco y Asoc. - Orden de Trabajo",
                replyTo:  "estudiopressacco@gmail.com",
                html: htmlText,
                forceEmbeddedImages: true
              };  
              transport.sendMail(mailOptions, function(error, response) {
                console.log("MAIL INICIAL ENVIADO A:"+mailOptions.to);
			          transport.close();              
              })
            })
          })
         }
        }else{
      //SI EL CLIENTE LO SOLICITO envio MAIL!!
         if(otTarea.ot.notificarCliente == 1){//Envio Mail
          var transport = nodemailer.createTransport("SMTP", {
            auth: {
              user: "estudiopressacco@gmail.com",
              pass: "EeCc&689Gmail"
            }
          });      
          moment.lang("es");
          var com;
          switch(otTarea.ot.comunicacion_id) { 
           case 1:	com="Teléfono"; break; 
           case 2:	com="Celular"; break;
           case 3:	com="Radio"; break; 
           case 4:	com="E-Mail"; break; 
           case 5:	com="Personal"; break;    
           default:		com="Indefinido"; 
          }
          DB.Usuario.find({where: {id: otTarea.ot.usuario_id}, include: [{model: DB.Empleado}]}).on('success', function(user){
            DB.Cliente.find({where: {id: otTarea.ot.cliente_id}}).on('success', function(cliente){
            var honorarios;
            if(otTarea.ot.honorarios==1)
              honorarios="NO";
            else
              honorarios="SI";
            var htmlText= '\
                <style>body{background-color:gray; color: white;}</style><body><table style="background-color:gray; color: white; width: 750 px; height: 1px; margin: 0px; padding: 0px; border-collapse: collapse;" cellpadding="0"><tr><td rowspan="2"><img src="/srv/pressacco/public/images/logo_estudio.png" height="90" width="90" /><td><td colspan="5"><h4 style= "color: #8A2908">Estudio Integral Pressacco & Asoc.</h4><td></tr><tr><td colspan="5"><h2>NOTIFICACION ORDEN DE TRABAJO N&ordm;:</h2></td><td colspan="2" bgcolor="#343434"><h2 align="center">'+otTarea.ot.numero+'</h2></td></tr><tr style="margin: 0px; border: 1px solid #000000; padding: 0px;"></tr><tr><td>&nbsp;</td><td>Cliente:</td><td colspan= "2">'+cliente.nombre+'</td></tr><tr><td>&nbsp;</td><td>Fecha:</td><td colspan= "2">'+moment().format("ll")+'</td><td> &nbsp; </td><td  align="right" > Atendido por: </td><td>'+user.empleado.nombre+" "+user.empleado.apellido+'</td></tr><tr><td> &nbsp; </td><td> Hora: </td><td colspan= "2">'+moment().format("HH:mm")+'</td><td> &nbsp; </td><td  align="right"> Canal de comunicaci&oacute;n: </td><td>'+com+'</td></tr><tr style="margin: 0px;  border: 1px solid #000000; padding: 0px;"></tr><tr><td colspan= "2"><h5><ins> TITULO:</ins> <h5></td><td colspan= "5"><h5>'+otTarea.ot.titulo+'<h5></td></tr><tr><td colspan= "2"><h6><ins> OBSERVACIONES:</ins><h6></td><td colspan= "5"><h6>'+conclusion+" "+req.body.obs+'<h6></td></tr><tr style="margin: 0px;  border: 1px solid #000000; padding: 0px;"></tr><tr><td colspan= "4"><h6><ins>*FECHA ESTIMADA DE CONCLUSION:</ins></h6></td><td colspan= "3"><h6>'+moment(otTarea.ot.fechaVencimiento).format("ll")+'</h6></td></tr><tr><td colspan= "4"><h6><ins>¿Tarea incluida en abono mensual?:</ins></h6></td><td colspan= "3"><h6>'+honorarios+'</h6></td></tr><tr><td colspan= "7"><font size=1>(*) condicionada a situaciones ajenas al Estudio </font></td></table></body>';
              var mailOptions = {
                from: "estudiopressacco@gmail.com",
                to: cliente.email,//"2014estudiocontable@gmail.com",
                bcc: "estudiopressacco@gmail.com",
                subject: "Estudio Integral Pressacco y Asoc. - Orden de Trabajo",
                replyTo:  "estudiopressacco@gmail.com",
                html: htmlText,
                forceEmbeddedImages: true
              };            
              transport.sendMail(mailOptions, function(error, response) {
                console.log("MAIL ENVIADO A:"+mailOptions.to)
                transport.close();  
              });          
            })
          })
        }
      }
    })
  })
};

OtTarea.continuar = function(req, res, next){
  DB.OtTareaResource.create({
    empleado_id: req.session.empleado_id,		
	  empleado_horas:	req.body.tiempo.split(":")[0],
  	empleado_minutos:req.body.tiempo.split(":")[1],
	  ot_tarea_id:	req.params.id,
  }).on('success', function(){
    DB.OtTarea.find({where:{id: req.params.id}, include:[{model: DB.Ot}]}).on('success',function(otTarea){  
      if(otTarea.tiempoInsumido){
        var b=req.body.tiempo.split(":")
        a=otTarea.tiempoInsumido.split(":")
        b[1]=parseInt(b[1])+parseInt(a[1])
        b[0]=parseInt(b[0])+parseInt(a[0])
        var c = new Date()
        c.setMinutes(b[0]);
        c.setSeconds(b[1]);
        b=c.getMinutes()+":"+c.getSeconds();
      }else{b=req.body.tiempo}
      var conclusion=  otTarea.conclusion ||"";
      var observacion= otTarea.observacion||"";
      otTarea.updateAttributes({
        completa: 0,
        tiempoInsumido: b,
        observacion: observacion+" "+req.body.obsInt,
        conclusion: conclusion+" "+req.body.obs,
      })
    })
  })
  res.send(true)
};

OtTarea.resources = function(req, res, next) {
  DB.OtTareaResource.findAll({where: {ot_tarea_id: req.params.id}, include: [{model: DB.Empleado, as: "empleado"}] }).on('success', function(otr){
    var msg = [];
if(util.isArray(otr)){
      otr.forEach(function(o){
        msg.push({
          id: o.id,
          horas: o.empleado_horas+":"+o.empleado_minutos,
          empleado: o.empleado.nombre+" "+ o.empleado.apellido
        })
      })
    }else{
      msg.push({
        id: otr.id,
        horas: otr.empleado_horas+":"+otr.empleado_minutos,
        empleado: otr.empleado.nombre+" "+ otr.empleado.apellido
      })    
    }
    res.send({ result: true, resources: msg })
  }).on('error',function(){
    res.send({result: false, error: error})
  })
};

OtTarea.put = function(req, res, next) {
  DB.OtTarea.find({ where: { id: req.params.id } }).on('success', function(t) {
    if(t){
			DB.Ot.find({where: {id: t.ot_id}}).on('success',function(ot){
			  if(req.body.fechaVencimiento){
			    var x = req.body.fechaVencimiento;
			    req.body.fechaVencimiento = x[3]+x[4]+x[5]+x[0]+x[1]+x[2]+x[6]+x[7]+x[8]+x[9];
			    req.body.fechaVencimiento = moment(req.body.fechaVencimiento).format('YYYY-MM-DD 15:00');
			    console.log(moment(ot.fechaVencimiento).format("YYYYMMDD"));
			    console.log(moment(req.body.fechaVencimiento).format("YYYYMMDD"))
			    console.log((moment(ot.fechaVencimiento).format("YYYYMMDD")>=moment(req.body.fechaVencimiento).format("YYYYMMDD")))
					if(moment(ot.fechaVencimiento).format("YYYYMMDD")>=moment(req.body.fechaVencimiento).format("YYYYMMDD")){
						t.updateAttributes(req.body).on('success', function() {
						  res.send(req.body);
						})
					}else{
						res.send(false)
					}
			  }else{
			  	res.send(false)
			  }
			})
    }
  });
};

OtTarea.delete = function(req, res, next) {
  DB.OtTarea.destroy({ id: req.params.id }).on('success',function(){res.send(true)});
};

module.exports = OtTarea;
