var DB, Everyone
  , moment= require('moment')
  , nodemailer = require('nodemailer')
  , util = require('util');

var Oc = function(db, everyone) {
  DB = db;
  Everyone = everyone;

  return Oc;
};

Oc.get = function(req, res, next) {
  DB.Oc.findAll({order:'fechaVencimiento DESC' , include:[{model: DB.Cliente}]}).on('success', function(a) {
    var msg = []
    a.forEach(function(b){
      msg.push({
        id: b.id,
        numero: b.numero,
        cliente_id: b.cliente_id,
        clienteNombre: b.cliente.nombre,
        fechaVencimiento: moment(b.fechaVencimiento).format("DD/MM/YYYY")=='Invalid date'?" ":moment(b.fechaVencimiento).format("DD/MM/YYYY"),
        titulo: b.titulo,
        consulta: b.consulta,
        solucion: b.solucion,
        comunicacion_id: b.comunicacion_id,
        notificarCliente: b.notificarCliente? 1 : 0,
        empleado_id: b.empleado_id,
        activa: b.activa,
        ot_id: b.ot_id,
      })
    })
    res.send(msg)
  });
};

Oc.numero = function(req, res, next) {
  DB.Oc.max('numero').on('success',function(maximo){
    if(isNaN(maximo)){
      maximo=1
    }else{
      maximo=maximo+1
    }
    res.send({maxi:maximo})
  })
};

Oc.post = function(req, res, next) {
  DB.Oc.find({ where: {
          cliente_id: req.body.cliente_id,
          titulo: req.body.titulo,
          fechaVencimiento: req.body.fechaVencimiento
          }
  }).on('success', function(e) {
    if(!e){
      DB.Oc.max('numero').on('success',function(numero){
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
        req.body['numero']=numero;
        if(req.body.fechaVencimiento){
          var x = req.body.fechaVencimiento;
          req.body.fechaVencimiento =  x[6]+x[7]+x[8]+x[9]+"-"+x[3]+x[4]+"-"+x[0]+x[1]+" 15:00:00";
        }else req.body.fechaVencimiento = moment().format("YYYY-MM-DD 15: 00")
        res.send(true)
        if(req.body.notificarCliente==1){
          req.body.notificarCliente = !0
          moment.lang("es");
          var transport = nodemailer.createTransport("SMTP", {
            auth: {
              user: "edu0221@hotmail.com",//"estudiopressacco@gmail.com",
              pass: "Edu#1766Outlook"//"EeCc&689Gmail"
            }
          });
          DB.Cliente.find({where: {id: req.body.cliente_id}}).on('success', function(cliente){
            DB.Empleado.find({where: {id: req.session.empleado_id}}).on('success', function(user){
            DB.Novedades.create({
              novedad: "Se creó la Ot Nro "+numero,
              descripcion: "Creada por "+user.nombre+" "+user.apellido+" para el cliente "+cliente.nombre,
              area_id: req.body.area_id||999,
              empleado_id: req.body.empleado_id,
            })
              var com;
              switch(req.body.comunicacion_id) {
               case "1":	com="Teléfono"; break;
               case "2":	com="Celular"; break;
               case "3":	com="Radio"; break;
               case "4":	com="E-Mail"; break;
               case "5": com="Personal";break;
               default:		com="Indefinido";
              }
              moment.lang("es");
              var rta;
               if(req.body.solucion!='')
                rta="Respuesta: "+req.body.solucion+"</H2>"
               else
                rta="Le enviaremos la respuesta</H2>";
              var htmlText= '\
                <style>body{background-color:#829C8B; color: white;}</style><body><table style="background-color:#829C8B; color: white; width: 750 px; height: 1px; margin: 0px; padding: 0px; border-collapse: collapse;" cellpadding="0"><tr><td rowspan="2"><img src="/srv/pressacco/public/images/logo_estudio.png" height="90" width="90" /><td><td colspan="5"><h4 style= "color: #8A2908">Estudio Integral Pressacco & Asoc.</h4><td></tr><tr><td colspan="5"><h2>NOTIFICACION ORDEN DE CONSULTA N&ordm;:</h2></td><td colspan="2" bgcolor="#6E6E6E"><h2 align="center">'+numero+'</h2></td></tr><tr style="margin: 0px; border: 1px solid #000000; padding: 0px;"></tr><tr><td>&nbsp;</td><td>Cliente:</td><td colspan= "2">'+cliente.nombre+'</td></tr><tr><td>&nbsp;</td><td>Fecha:</td><td colspan= "2">'+moment().format("ll")+'</td><td> &nbsp; </td><td  align="right" > Respondido por: </td><td>'+user.nombre+" "+user.apellido+'</td></tr><tr><td> &nbsp; </td><td> Hora: </td><td colspan= "2">'+moment().format("HH:mm")+'</td><td> &nbsp; </td><td  align="right"> Canal de comunicaci&oacute;n: </td><td>'+com+'</td></tr><tr style="margin: 0px;  border: 1px solid #000000; padding: 0px;"></tr><tr><td colspan= "2"><h5><ins> TITULO:</ins> <h5></td><td colspan= "5"><h5>'+req.body.titulo+'<h5></td></tr><tr><td colspan= "2"><h6><ins>CONSULTA:</ins><h6></td><td colspan= "5"><h6>'+req.body.consulta+'<h6></td></tr><tr><td colspan= "2"><h6><ins>RESPUESTA:</ins><h6></td><td colspan= "5"><h6>'+rta+'<h6></td></tr></tr></table></body>';
              var mailOptions = {
                from: "edu0221@hotmail.com",//"estudiopressacco@gmail.com",
                to: "edu0221@hotmail.com",//cliente.email,
                bcc: "edu0221@hotmail.com",//"estudiopressacco@gmail.com",
                subject: "Estudio Integral Pressacco y Asoc. - Orden de Consulta",
                replyTo:  "edu0221@hotmail.com",//"estudiopressacco@gmail.com",
                html: htmlText,
                forceEmbeddedImages: true
              };
              transport.sendMail(mailOptions, function(error, response) {
                console.log("MAIL ENVIADO A:"+mailOptions.to+" CON COPIA A: "+mailOptions.bcc)
              });
            })
          })
        }else
          req.body.notificarCliente = !1
        DB.Oc.create(req.body)
      })
    }else
      res.send(false)
  })
};

Oc.put = function(req, res, next) {
  if(req.body.fechaVencimiento){
    var x = req.body.fechaVencimiento;
    req.body.fechaVencimiento =  x[6]+x[7]+x[8]+x[9]+"-"+x[3]+x[4]+"-"+x[0]+x[1]+" 15:00:00";
  }else req.body.fechaVencimiento = moment().format("YYYY-MM-DD 15: 00")
  res.send(true)
  if(req.body.notificarCliente==1){
    req.body.notificarCliente = !0
    var transport = nodemailer.createTransport("SMTP", {
      auth: {
        user: "edu0221@hotmail.com",//"estudiopressacco@gmail.com",
        pass: "Edu#1766Outlook"//"EeCc&689Gmail"
      }
    });
    DB.Cliente.find({where: {id: req.body.cliente_id}}).on('success', function(cliente){
      DB.Empleado.find({where: {id: req.body.empleado_id}}).on('success', function(user){
          DB.Oc.find({where: {id: req.params.id}}).on('success',function(oc){
          var com;
          switch(req.body.comunicacion_id) {
           case "1":	com="Teléfono"; break;
           case "2":	com="Celular"; break;
           case "3":	com="Radio"; break;
           case "4":	com="E-Mail"; break;
           case "5": com="Personal";break;
           default:		com="Indefinido";
          }
          moment.lang("es");
          var rta;
           if(req.body.solucion!='')
            rta="Respuesta: "+req.body.solucion+"</H2>"
           else
            rta="Le enviaremos la respuesta</H2>";
          console.log(req.body)
          var htmlText= '<style>body{background-color:#829C8B; color: white;}</style><body><table style="background-color:#829C8B; color: white; width: 750 px; height: 1px; margin: 0px; padding: 0px; border-collapse: collapse;" cellpadding="0"><tr><td rowspan="2"><img src="/srv/pressacco/public/images/logo_estudio.png" height="90" width="90" /><td><td colspan="5"><h4 style= "color: #8A2908">Estudio Integral Pressacco & Asoc.</h4><td></tr><tr><td colspan="5"><h2>NOTIFICACION ORDEN DE CONSULTA N&ordm;:</h2></td><td colspan="2" bgcolor="#6E6E6E"><h2 align="center">'+oc.numero+'</h2></td></tr><tr style="margin: 0px; border: 1px solid #000000; padding: 0px;"></tr><tr><td>&nbsp;</td><td>Cliente:</td><td colspan= "2">'+cliente.nombre+'</td></tr><tr><td>&nbsp;</td><td>Fecha:</td><td colspan= "2">'+moment().format("ll")+'</td><td> &nbsp; </td><td  align="right" > Respondido por: </td><td>'+user.nombre+" "+user.apellido+'</td></tr><tr><td> &nbsp; </td><td> Hora: </td><td colspan= "2">'+moment().format("HH:mm")+'</td><td> &nbsp; </td><td  align="right"> Canal de comunicaci&oacute;n: </td><td>'+com+'</td></tr><tr style="margin: 0px;  border: 1px solid #000000; padding: 0px;"></tr><tr><td colspan= "2"><h5><ins> TITULO:</ins> <h5></td><td colspan= "5"><h5>'+req.body.titulo+'<h5></td></tr><tr><td colspan= "2"><h6><ins>CONSULTA:</ins><h6></td><td colspan= "5"><h6>'+req.body.consulta+'<h6></td></tr><tr><td colspan= "2"><h6><ins>RESPUESTA:</ins><h6></td><td colspan= "5"><h6>'+rta+'<h6></td></tr></tr></table></body>';
          var mailOptions = {
            from: "edu0221@hotmail.com", //"estudiopressacco@gmail.com",
            to: "edu0221@hotmail.com", //cliente.email,
            bcc: "edu0221@hotmail.com", //"estudiopressacco@gmail.com",
            subject: "Estudio Integral Pressacco y Asoc. - Orden de Consulta",
            replyTo:  "edu0221@hotmail.com", //"estudiopressacco@gmail.com",
            html: htmlText,
            forceEmbeddedImages: true
          };
          console.log("ESTOY POR ACA")
          transport.sendMail(mailOptions, function(error, response) {
            if(error)
							console.log(console.log("MAIL ENVIADO A:"+mailOptions.to+" CON COPIA A: "+mailOptions.bcc))
          });
        })
      })
    })
  }else
    req.body.notificarCliente = !1
  DB.Oc.find({where: {id: req.params.id}}).on('success',function(oc){
    if(oc){
      oc.updateAttributes(req.body)
    }else{
      res.send(false)
    }
  })
};
module.exports = Oc;
