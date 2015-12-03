var DB, Everyone
  , moment= require('moment')
  , nodemailer = require('nodemailer')    
  , util = require('util');
  
var Ot = function(db, everyone) {
  DB = db;
  Everyone = everyone;

  return Ot;
};

Ot.byNumero = function(req, res, next) { 
  DB.Ot.find({where: {numero : req.params.numero}}).on('success',function(b){
    res.send({
        vto: moment(b.fechaVencimiento).format("DD/MM/YYYY")=='Invalid date'?" ":moment(b.fechaVencimiento).format("DD/MM/YYYY"),
        titulo: b.titulo,
        descripcion: b.descripcion,
    })
  });
};

Ot.byOt = function(req, res, next) { 
  DB.Ot.find({where: {id : req.params.numero}}).on('success',function(b){
    var conclusion = b.conclusion? b.conclusion : "Sin Conclusión";
    DB.Cliente.find({where:{id: b.cliente_id}}).on('success', function(cli){
      res.send({
          ingreso: moment(b.created_at).format("YYYY/MM/DD")+" "+moment(b.created_at).format("HH:mm"),
          clienteNombre: cli.nombre,
          vto: moment(b.fechaVencimiento).format("DD/MM/YYYY")=='Invalid date'?" ":moment(b.fechaVencimiento).format("DD/MM/YYYY"),
          titulo: b.titulo,
          descripcion: b.descripcion,
          conclusion: conclusion,
      })
    })
  });
};

Ot.get = function(req, res, next) {
  DB.Ot.findAll({order:'fechaVencimiento ASC , prioridad ASC  ' , include:[{model: DB.Usuario, include: [{model: DB.Empleado}]},{model: DB.OtTarea, include:[{model:DB.Empleado}]}, {model: DB.Cliente}, {model: DB.Oc}], where:{estado: 1}}).on('success', function(a) {  
    var msg = []
    var com
    a.forEach(function(b){
      com='';
		  switch(b.prioridad) {
           case 1:	com="URGENTE"; break;
           case 2:	com="Prioritario"; break;
           case 3:	com="Normal"; break; 
           case 4:	com="Retrasable"; break; 
           default:	com=" "; 
      }
      var c='';
      var n='';
      if(b.oc){
        if(util.isArray(b.oc)){
          b.oc.forEach(function(d){
            n+= d.titulo+"-Nº"+d.numero+", ",
            c+=d.id+", ";
          })
        }else{
          c+= b.oc.id
          n+= b.oc.titulo+"-Nº"+b.oc.numero
        }
      }
      var objeto={nombre: 'Sin Empleados', posicion: 999};
      var completa=0;
      var total=0;
      b.otTareas.forEach(function(otTarea){
        if(otTarea.completa == 1){
          completa+=1
        }else{
          if(otTarea.posicion < objeto.posicion){
            if(otTarea.empleado){
              objeto.nombre=otTarea.empleado.nombre+" "+otTarea.empleado.apellido;
              objeto.posicion=otTarea.posicion;
            }
          }        
        }
        total+=1
      })

      msg.push({
        creada: b.usuario.empleado.nombre+" "+b.usuario.empleado.apellido,
        ingreso: moment(b.created_at).format("YYYY/MM/DD")+" "+moment(b.created_at).format("HH:mm"),
        com: com,
        vidente: completa+" de "+ total,
        ultima: objeto.nombre,
        id: b.id,
        estado: b.estado,
        ot_numero: b.numero,
        ot_numero_busqueda: "Ot_"+b.numero,
        numero: b.numero,
        cliente_id: b.cliente_id,
        fechaVencimiento: moment(b.fechaVencimiento).format("DD-MM-YYYY")=='Invalid date'?" ":moment(b.fechaVencimiento).format("YYYY/MM/DD"),
        plan_id: b.plan_id,
        notificarCliente: b.notificarCliente? 1 : 0,
        honorarios: b.honorarios,
        prioridad: b.prioridad,
        coordinador: b.coordinador? 1 : 0,
        juridica: b.juridica? 1 : 0,        
        reservado: b.reservado,
        titulo: b.titulo,
        descripcion: b.descripcion,
        conclusion: b.conclusion,
        clienteNombre: b.cliente.nombre,
        comunicacion_id: b.comunicacion_id,
        oc_id: c,
        ocs: n,
      })
    })
    res.send(msg)
  });
};

Ot.post = function(req, res, next) {
  res.send(true);
  DB.Ot.find({ where: {
          cliente_id: req.body.cliente_id,
          plan_id: req.body.plan_id,
          fechaVencimiento: req.body.fechaVencimiento,
          }
  }).on('success', function(e) {
    if(!e){
      DB.Ot.max('numero').on('success',function(numero){
        if(isNaN(numero)){
          numero=1
        }else{
          numero=numero+1
        }
        if(req.body.notificarCliente == 0){
          req.body.notificarCliente = false;
        }else{
          req.body.notificarCliente = true;
        }/*
        if(req.body.reservado == 0){
          req.body.reservado = false;
        }else{
          req.body.reservado = true;
        }    */    
        req.body['numero']=numero;
	req.body['usuario_id']=req.session.usuario_id;
        var x = req.body.fechaVencimiento;
        req.body.fechaVencimiento =  x[6]+x[7]+x[8]+x[9]+"-"+x[3]+x[4]+"-"+x[0]+x[1]+" 15:00:00";
        DB.Ot.create(req.body).on('success', function(ot){
          if(req.body.oc_id){
            if(util.isArray(req.body.oc_id)){
              req.body.oc_id.forEach(function(oc){
                if(oc != '' && oc !=' '){
                  DB.Oc.find({where:{id: oc}}).on('success', function(dbOc){
                    dbOc.updateAttributes({activa: 0, ot_id: ot.id})
                  })
                }                  
              })
            }else{
              if(req.body.oc_id != '' && req.body.oc_id !=' '){
                DB.Oc.find({where:{id: req.body.oc_id}}).on('success',function(dbOc){
                  dbOc.updateAttributes({activa: 0, ot_id: ot.id})
                })
              }                
            }     
          }        
          DB.PlanTarea.findAll({where:{plan_id: req.body.plan_id}, include:[{model: DB.Tarea}]}).on('success',function(planT){
            if(planT){
              if(util.isArray(planT)){
                planT.forEach(function(t){
                  if(t.tarea){
                    DB.OtTarea.create({
                      posicion: t.tarea.posicion,
                      nombre: t.tarea.nombre,
                      descripcion: t.tarea.descripcion,
                      tiempoEstimado: t.tarea.tiempoEstimado,
                      area_id: t.tarea.area_id,
                      empleado_id: t.tarea.empleado_id,                  
                      ot_id: ot.id,
                      fechaVencimiento: req.body.fechaVencimiento || moment().format('YYYY-MM-DD 15:00:00'),                       
                    })
                  }
                })        
              }else{
                if(t.tarea){
                  DB.OtTarea.create({
                    posicion: planT.tarea.posicion,
                    nombre: planT.tarea.nombre,
                    descripcion: planT.tarea.descripcion,
                    tiempoEstimado: planT.tarea.tiempoEstimado,
                    area_id: planT.tarea.area_id,
                    empleado_id: planT.tarea.empleado_id,                
                    ot_id: ot.id,
                    fechaVencimiento: req.body.fechaVencimiento || moment().format('YYYY-MM-DD 15:00:00'), 
                  })
                }
              } 
            }         
          })
        })
        DB.Cliente.find({where:{id: req.body.cliente_id}}).on('success',function(client){
          DB.Empleado.find({where: {id: req.session.empleado_id}}).on('success', function(user){
            DB.Novedades.create({
              novedad: "Se creó la Ot:"+numero,
              descripcion: "Creada por "+user.nombre+" "+user.apellido+" para el cliente "+client.nombre+" Fecha: "+moment().format("ll")+" - "+moment().format("HH:mm"),
              area_id: 4
            })        
          //ACA ENVIABA EL MAIL AHORA LO HACE CUANDO SETEAN LA TAREA "Coordinación"
            /*
            
            if(req.body.reservado == 0){      
              console.log("ACA ENVIARÍA EL MAIL")                  
              moment.lang("es");          
              var transport = nodemailer.createTransport("SMTP", {
                auth: {
                  user: "estudiopressacco@gmail.com",
                  pass: "EeCc&689Gmail"
                }
              }); 
              var com;
	            switch(req.body.comunicacion_id) { 
               case 1:	com="Teléfono"; break; 
               case 2:	com="Celular"; break;
               case 3:	com="Radio"; break; 
               case 4:	com="E-Mail"; break; 
               case 5:	com="Personal"; break;                
               default:		com="Indefinido"; 
	            }
              var htmlText= '\
              <H1>Se ha creado una orden de trabajo con el Nº: '+numero+"<br /><H2> \
              Fecha: "+moment().format("ll")+"<br />  \
              Hora: "+moment().format("HH:mm")+"<br />  \
              Atendido por: "+user.nombre+" "+user.apellido+"<br /> \
              Comunicación: Por "+com+"<br />\
              Título: "+req.body.titulo+"<br /> \
              Observaciones: "+req.body.descripcion+"</H2>";            
                var mailOptions = {
                  from: "estudiopressacco@gmail.com",
                  to: "2014estudiocontable@gmail.com",//cliente.email,
                  bcc: "estudiopressacco@gmail.com",
                  subject: "Estudio Integral Pressacco y Asoc. - Orden de Trabajo",
                  replyTo:  "estudiopressacco@gmail.com",
                  html: htmlText,
      //            attachments: attached_file
                };  
              transport.sendMail(mailOptions, function(error, response) {
                console.log("MAIL ENVIADO A:"+mailOptions.to)
                transport.close();  
              });
            }*/
          })          
        })
      })
    }
  })
};   

Ot.postie = function(req, res, next) {
  res.send(true);
  DB.Ot.find({ where: {
          cliente_id: req.body.cliente_id,
          }
  }).on('success', function(e) {
    DB.Ot.max('numero').on('success',function(numero){
      if(isNaN(numero)){
        numero=1
      }else{
        numero=numero+1
      }
      if(req.body.notificarCliente == 0){
        req.body.notificarCliente = false;
      }else{
        req.body.notificarCliente = true;
      }
      /*if(req.body.reservado == 0){
        req.body.reservado = false;
      }else{
        req.body.reservado = true;
      } */     
      req.body['numero']=numero;
      req.body['usuario_id']=req.session.usuario_id;
      DB.Ot.create(req.body).on('success', function(ot){
        if(req.body.oc_id){
          if(util.isArray(req.body.oc_id)){
            req.body.oc_id.forEach(function(oc){
              DB.Oc.find({where:{id: oc}}).on('success', function(dbOc){
                dbOc.updateAttributes({activa: 0, ot_id: ot.id})
              })
            })
          }else{
            DB.Oc.find({where:{id: req.body.oc_id}}).on('success',function(dbOc){
              dbOc.updateAttributes({activa: 0, ot_id: ot.id})
            })
          }     
        }         
      })
      DB.Cliente.find({where:{id: req.body.cliente_id}}).on('success',function(client){
        DB.Empleado.find({where: {id: req.session.empleado_id}}).on('success', function(user){
          DB.Novedades.create({
            //novedad descripcion empleado_id area_id
            novedad: "Se creó la Ot:"+numero,
            descripcion: "Creada por "+user.nombre+" "+user.apellido+" para el cliente "+client.nombre+" Fecha: "+moment().format("ll")+" - "+moment().format("HH:mm"),
            area_id: 4
          })        
        })          
      })
    })
  })
};

Ot.numero = function(req, res, next) {
  DB.Ot.max('numero').on('success',function(maximo){
    if(isNaN(maximo)){
      maximo=1
    }else{
      maximo=maximo+1
    }
    res.send({maxi:maximo})
  })
};

Ot.otTarea = function(req, res, next) {
  DB.OtTarea.find({where:{id: req.params.id}, include: [{model: DB.Ot}]}).on('success', function(otTarea){
    if(otTarea.ot.notificarCliente == 1)
      res.send(!0)
    else
      res.send(!1)
  })
};

Ot.desconclude = function(req, res, next) {
  DB.Ot.find({where: {id: req.params.id}}).on('success', function(ot){
    res.send(true)
    if(ot)
      ot.updateAttributes({estado: 1})
  })
};

Ot.conclude = function(req, res, next) {
  DB.Ot.find({where:{ id: req.params.id}, include:[{model:DB.Usuario, include:[{model: DB.Empleado}]}]}).on('success', function(ot) {
  	DB.OtTarea.find({where: {ot_id: req.params.id, completa: 0}}).on('success', function(e){
  		if(!e){
  		  res.send(true)
				if (ot) {
					//actualizo las novedades
					DB.Novedades.findAll({where: ["novedad LIKE '%OT:"+ot.numero+"%'"]}).on('success',function(novs){
						if(novs){
							if(util.isArray(novs)){
								novs.forEach(function(n){
									n.updateAttributes({activa: 0});
								});
							}else{
								novs.updateAttributes({activa: 0});
							}
						}
					})    
				  ot.updateAttributes({
				    estado:10,
				    conclusion: req.body.observation,
				    conclude_at: moment().format("YYYY/MM/DD 18:00:00")
				  })
				  DB.Cliente.find({where: {id: ot.cliente_id}}).on('success', function(client){
				    DB.Empleado.find({where:{id: req.session.empleado_id}}).on('success', function(user){
				      DB.Novedades.create({
				        //novedad descripcion empleado_id area_id
				        novedad: "Se concluyó la Ot Nro "+req.params.id,
				        descripcion: "Concluida por "+user.nombre+" "+user.apellido+" para el cliente "+client.nombre,
				        area_id: 4
				      })        
				    //ACA ENVIARÍA EL MAIL
				      var transport = nodemailer.createTransport("SMTP", {
				        auth: {
				          user: "estudiopressacco@gmail.com",
				          pass: "EeCc&689Gmail"
				        }
				      });
				      if(!ot.reservado){  //si no es "RESERVADO"
				        moment.lang("es");
				        DB.Cliente.find({where: {id: ot.cliente_id}}).on('success', function(cliente){
				          var com;
				          switch(ot.comunicacion_id) { 
				           case 1:	com="Teléfono"; break; 
				           case 2:	com="Celular"; break;
				           case 3:	com="Radio"; break; 
				           case 4:	com="E-Mail"; break; 
				           case 5:	com="Personal"; break;    
				           default:		com="Indefinido"; 
				          }                  
				          var honorarios
				          if(ot.honorarios==1)
				            honorarios="NO"
				          else
				            honorarios="SI" 
				          var htmlText= '\
				        <style>body{background-color:gray; color: white;}</style><body><table style="background-color:gray; color: white; width: 750 px; height: 1px; margin: 0px; padding: 0px; border-collapse: collapse;" cellpadding="0"><tr><td rowspan="2"><img src="/srv/pressacco/public/images/logo_estudio.png" height="90" width="90" /><td><td colspan="5"><h4 style= "color: #8A2908">Estudio Integral Pressacco & Asoc.</h4><td></tr><tr><td colspan="5"><h2>CONCLUSIÓN ORDEN DE TRABAJO N&ordm;:</h2></td><td colspan="2" bgcolor="#343434"><h2 align="center">'+req.params.id+'</h2></td></tr><tr style="margin: 0px; border: 1px solid #000000; padding: 0px;"></tr><tr><td>&nbsp;</td><td>Cliente:</td><td colspan= "2">'+cliente.nombre+'</td></tr><tr><td>&nbsp;</td><td>Fecha:</td><td colspan= "2">'+moment().format("ll")+'</td><td> &nbsp; </td><td  align="right" > Concluida por: </td><td>'+user.nombre+" "+user.apellido+'</td></tr><tr><td> &nbsp; </td><td> Hora: </td><td colspan= "2">'+moment().format("HH:mm")+'</td><td> &nbsp; </td><td  align="right"> Canal de comunicaci&oacute;n: </td><td>'+com+'</td></tr><tr style="margin: 0px;  border: 1px solid #000000; padding: 0px;"></tr><tr><td colspan= "2"><h5><ins> TÍTULO:</ins> <h5></td><td colspan= "5"><h5>'+ot.titulo+'<h5></td></tr><tr><td colspan= "2"><h6><ins> OBSERVACIONES:</ins><h6></td><td colspan= "5"><h6>'+req.body.observation+'<h6></td></tr><tr style="margin: 0px;  border: 1px solid #000000; padding: 0px;"></tr><tr><td colspan= "4"><h6><ins>*FECHA ESTIMADA DE CONCLUSIÓN:</ins></h6></td><td colspan= "3"><h6>'+moment(ot.fechaVencimiento).format("ll")+'</h6></td></tr><tr><td colspan= "4"><h6><ins>¿Tarea incluida en abono mensual?:</ins></h6></td><td colspan= "3"><h6>'+honorarios+'</h6></td></tr><tr><td colspan= "7"><font size=1>(*) condicionada a situaciones ajenas al Estudio </font></td>\
	</tr>\
	<tr style="margin: 0px;  border: 10px solid #8A2908; padding: 0px;"></tr>\
</table>\
<table style="background-color:gray; color:white; width:750 px; height:1px; margin:0px; padding:0px; border-collapse:collapse;" cellpadding="0">\
		<tr>\
			<td colspan="3" style="padding-top:20px;color:#fff;text-align:center;"><h3>ENCUESTA DE SATISFACCIÓN ÓRDENES DE TRABAJO</h3></td>\
		</tr>\
		<tr>\
			<td colspan="3" style="color:#fff;text-align:center"><h6>(Favor de responder y reenviar al Estudio)</h6></td>\
		</tr>\
		<tr>\
			<td width=680px style="padding:10px;font-size:85%">&iquest;Se le brind&oacute; lo que solicit&oacute;&#63;</td>\
	    <td width=30px style="border:1px solid #ababab">&nbsp;</td>\
    	<td width=40px style="font-size:85%">(Si/No)</td>\
		</tr>\
	  <tr>\
  	 	<td style="padding:10px;font-size:85%">&iquest;Le sirvi&oacute; para organizarse&#63;</td>\
  	 	<td style="border:1px solid #ababab">&nbsp;</td>\
  	 	<td style="font-size:85%">(Si/No)</td>\
	  </tr>\
  	<tr>\
	    <td style="padding:10px; border-bottom:1px solid #eee;font-size:85%">&iquest;Le brind&oacute; tranquilidad la confirmaci&oacute;n de recepci&oacute;n de su pedido en el Estudio y conocer la fecha de finalizaci&oacute;n&#63;</td>\
  	 	<td style="border:1px solid #ababab">&nbsp;</td>\
  	 	<td style="border-bottom:1px solid #eee;font-size:85%">(Si/No)</td>\
	  </tr>\
</table>\
<table style="background-color:gray; color:white; width:750 px; height:1px; margin:0px; padding:0px; border-collapse:collapse;" cellpadding="0">\
		<tr style="margin: 2px; border: 2px solid #fff; padding: 0px;"></tr>\
		<tr>\
			<td width=300px style="padding:10px;font-size:85%">El lenguaje utilizado fue:</td>\
	    <td width=70px style="border:1px solid #ababab">&nbsp;</td>\
   		<td width=380px style="font-size:75%">(Excelente / Muy bueno / Bueno / Regular / Malo / No corresponde)</td>\
		</tr>\
	  <tr>\
  	  <td style="padding:10px;font-size:85%">El plazo definido fue:</td>\
			<td style="border:1px solid #ababab">&nbsp;</td>\
   		<td style="font-size:75%">(Excelente / Muy bueno / Bueno / Regular / Malo / No corresponde)</td>\
	  </tr>\
  	<tr>\
	    <td style="padding:10px; border-bottom:1px solid #eee;font-size:85%">La atenci&oacute;n del personal del Estudio fue:</td>\
			<td style="border:1px solid #ababab">&nbsp;</td>\
   		<td style="border-bottom:1px solid #eee;font-size:75%">(Excelente / Muy bueno / Bueno / Regular / Malo / No corresponde)</td>\
	  </tr>\
		<tr style="margin: 2px; border: 2px solid #fff; padding: 0px;"></tr>\
		<tr><td  colspan="3" style="padding:10px;font-size:85%">Comentarios y sugerencias:</td></tr>\
		<tr><td style="padding:10px;font-size:85%"  height="150px"></td></tr>\
		<tr style="margin: 2px; border: 5px solid #fff; padding: 0px;"></tr>\
</table>\
</body>';
				          DB.Cliente.find({where: {id: ot.cliente_id}}).on('success', function(cliente){    
				            var mailOptions = {
				              from: "estudiopressacco@gmail.com",
				              to: cliente.email,
				              bcc: "estudiopressacco@gmail.com",
				              subject: "Estudio Integral Pressacco y Asoc. - Orden de Trabajo",
				              replyTo:  "estudiopressacco@gmail.com",
				              html: htmlText,
				              forceEmbeddedImages: true
/*											attachments: [
												{// file on disk as an attachment
							          	fileName: 'encuesta(OT'+req.params.id+').xls',
            							filePath: '/srv/pressacco/encuesta.xls', // stream this file
													contentType: 'binary'
        								}] */
				            	};
				            transport.sendMail(mailOptions, function(error, response) {
										console.log("MAIL ENVIADO A:"+mailOptions.to+" CON COPIA A: "+mailOptions.bcc)
				              transport.close();  
				            });
				          })
				        })
				      }
				    })         
				  })
				}
  		}else{
  			res.send(false);
  		}
  	})
  });
};

Ot.put = function(req, res, next) {
  DB.Ot.find({ where: {id: req.params.id} }).on('success', function(e) {
    if (e) {
      var ot = e;
          if(req.body.oc_id){
            if(util.isArray(req.body.oc_id)){
              req.body.oc_id.forEach(function(oc){
                if(oc != '' && oc !=' '){
                  DB.Oc.find({where:{id: oc}}).on('success', function(dbOc){
                    dbOc.updateAttributes({activa: 0, ot_id: ot.id})
                  })
                }                  
              })
            }else{
              if(req.body.oc_id != '' && req.body.oc_id !=' '){
                DB.Oc.find({where:{id: req.body.oc_id}}).on('success',function(dbOc){
                  dbOc.updateAttributes({activa: 0, ot_id: ot.id})
                })
              }                
            }     
          }      
      if(e.plan_id != req.body.plan_id){
        var q = "DELETE FROM otTarea WHERE ot_id = " + req.params.id;
        DB._.query(q, function(err, data) {
          DB.PlanTarea.findAll({where:{plan_id: req.body.plan_id}, include:[{model: DB.Tarea}]}).on('success',function(planT){
            if(planT){
              if(util.isArray(planT)){
                planT.forEach(function(t){
                  if(t.tarea){
                    DB.OtTarea.create({
                      posicion: t.tarea.posicion,
                      nombre: t.tarea.nombre,
                      descripcion: t.tarea.descripcion,
                      tiempoEstimado: t.tarea.tiempoEstimado,
                      area_id: t.tarea.area_id,
                      empleado_id: t.tarea.empleado_id,                  
                      ot_id: req.params.id,
                      fechaVencimiento: req.body.fechaVencimiento || moment().format('YYYY-MM-DD 15:00:00'),                       
                    })
                  }
                })        
              }else{
                if(t.tarea){
                  DB.OtTarea.create({
                    posicion: planT.tarea.posicion,
                    nombre: planT.tarea.nombre,
                    descripcion: planT.tarea.descripcion,
                    tiempoEstimado: planT.tarea.tiempoEstimado,
                    area_id: planT.tarea.area_id,
                    empleado_id: planT.tarea.empleado_id,                
                    ot_id: req.params.id,
                    fechaVencimiento: req.body.fechaVencimiento || moment().format('YYYY-MM-DD 15:00:00'), 
                  })
                }
              } 
            }         
          })
        })
      }
      var x = req.body.fechaVencimiento;
      req.body.fechaVencimiento=x[6]+x[7]+x[8]+x[9]+"-"+x[3]+x[4]+"-"+x[0]+x[1]+" 15:00:00";      
      req.body.notificarCliente == 0? req.body.notificarCliente = !1:req.body.notificarCliente = !0
      req.body.juridica == 0? req.body.juridica = !1:req.body.juridica = !0      
     // req.body.reservado == 0? req.body.reservado = !1:req.body.reservado = !0      
      e.updateAttributes(req.body).success(function(e) {
        res.send(true);
      });
    }else{res.send(false)}
  });
};

Ot.putie = function(req, res, next) {
  DB.Ot.find({ where: {id: req.params.id} }).on('success', function(e) {
    if (e) {
      if(req.body.oc_id){
        if(util.isArray(req.body.oc_id)){
          req.body.oc_id.forEach(function(oc){
            DB.Oc.find({where:{id: oc}}).on('success', function(dbOc){
              dbOc.updateAttributes({activa: 0, ot_id: e.id})
            })
          })
        }else{
          DB.Oc.find({where:{id: req.body.oc_id}}).on('success',function(dbOc){
            dbOc.updateAttributes({activa: 0, ot_id: e.id})
          })
        }     
      }      
      //req.body.reservado == 0? req.body.reservado = !1:req.body.reservado = !0
      e.updateAttributes(req.body).success(function() {
        res.send(true);
      });
    }else{res.send(false)}
  });
};

Ot.delete = function(req, res, next) {
  DB.Ot.destroy({ id: req.params.id }).on('success',function(){res.send(true)});
};

Ot.reprogramar = function(req, res, next){
  DB.Ot.find({where: {id: req.params.id}}).on('success', function(ot){
  	DB.OtTarea.max('fechaVencimiento', {where: {ot_id: req.params.id}}).on('success', function(otMax){
  	 if(moment(otMax.fechaVencimiento).format("YYYYMMDD")<moment(req.body.fechaVto).format("YYYYMMDD")){
      var vto = moment(ot.fechaVencimiento).format("YYYY/MM/DD")? moment(ot.fechaVencimiento).format("YYYY/MM/DD") : "Sin Vencimiento anterior";
			ot.updateAttributes({
			  fechaVencimiento: req.body.fechaVto,
			  descripcion: ot.descripcion + " Reprogramada "+moment().format("YYYY/MM/DD")+ " vto anterior: "+vto + req.body.observation
			}).on('success', function(ot){
			  res.send(true);
			  //preparo todo para enviar un mail
			  var transport = nodemailer.createTransport("SMTP", {
			    auth: {
			      user: "estudiopressacco@gmail.com",
			      pass: "EeCc&689Gmail"
			    }
			  });
			  if(!ot.reservado){
			    moment.lang("es");
			    DB.Empleado.find({where: {id: req.session.empleado_id}}).on('success', function(empleado){
			      DB.Cliente.find({where: {id: ot.cliente_id}}).on('success', function(cliente){
			        var com;
			        switch(ot.comunicacion_id) { 
			         case 1:	com="Teléfono"; break; 
			         case 2:	com="Celular"; break;
			         case 3:	com="Radio"; break; 
			         case 4:	com="E-Mail"; break; 
			         case 5:	com="Personal"; break;    
			         default:		com="Indefinido"; 
			        }
			        var honorarios
			        ot.honorarios==1?honorarios="NO":honorarios="SI";
			        var htmlText= '\
			      <style>body{background-color:gray; color: white;}</style><body><table style="background-color:gray; color: white; width: 750 px; height: 1px; margin: 0px; padding: 0px; border-collapse: collapse;" cellpadding="0"><tr><td rowspan="2"><img src="/srv/pressacco/public/images/logo_estudio.png" height="90" width="90" /><td><td colspan="5"><h4 style= "color: #8A2908">Estudio Integral Pressacco & Asoc.</h4><td></tr><tr><td colspan="5"><h2>REPROGRAMACIÓN ORDEN DE TRABAJO N&ordm;:</h2></td><td colspan="2" bgcolor="#343434"><h2 align="center">'+req.params.id+'</h2></td></tr><tr style="margin: 0px; border: 1px solid #000000; padding: 0px;"></tr><tr><td>&nbsp;</td><td>Cliente:</td><td colspan= "2">'+cliente.nombre+'</td></tr><tr><td>&nbsp;</td><td>Fecha:</td><td colspan= "2">'+moment().format("ll")+'</td><td> &nbsp; </td><td  align="right" > Reprogramado por: </td><td>'+empleado.nombre+" "+empleado.apellido+'</td></tr><tr><td> &nbsp; </td><td> Hora: </td><td colspan= "2">'+moment().format("HH:mm")+'</td><td> &nbsp; </td><td  align="right"> Canal de comunicaci&oacute;n: </td><td>'+com+'</td></tr><tr style="margin: 0px;  border: 1px solid #000000; padding: 0px;"></tr><tr><td colspan= "2"><h5><ins> TÍTULO:</ins> <h5></td><td colspan= "5"><h5>'+ot.titulo+'<h5></td></tr><tr><td colspan= "2"><h6><ins> MOTIVO REPROGRAMACION:</ins><h6></td><td colspan= "5"><h6>'+req.body.observation+'<h6></td></tr><tr style="margin: 0px;  border: 1px solid #000000; padding: 0px;"></tr><tr><td colspan= "4"><h6><ins>*FECHA ESTIMADA DE CONCLUSIÓN:</ins></h6></td><td colspan= "3"><h6>'+moment(ot.fechaVencimiento).format("ll")+'</h6></td></tr><tr><td colspan= "4"><h6><ins>¿Tarea incluida en abono mensual?:</ins></h6></td><td colspan= "3"><h6>'+honorarios+'</h6></td></tr><tr><td colspan= "7"><font size=1>(*) condicionada a situaciones ajenas al Estudio </font></td></table></body>';
			        var mailOptions = {
			          from: "estudiopressacco@gmail.com",
			          to: cliente.email,
			          bcc: "estudiopressacco@gmail.com",
			          subject: "Estudio Integral Pressacco y Asoc. - Orden de Trabajo",
			          replyTo:  "estudiopressacco@gmail.com",
			          html: htmlText,
			          forceEmbeddedImages: true
			        };
			        transport.sendMail(mailOptions, function(error, response) {
			          console.log("MAIL ENVIADO A:"+mailOptions.to+" CON COPIA A: "+mailOptions.bcc)
			          transport.close();  
			        });
			      })
			    })
			  }
			})
  	 }else{
  	 	res.send(false);
  	 }
  	})
  })
};

module.exports = Ot;
