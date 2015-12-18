var DB, Everyone
  , moment= require('moment')
  , nodemailer = require('nodemailer')    
  , util = require('util');

var Oc = function(db, everyone) {
  DB = db;
  Everyone = everyone;

  return Oc;
};

Oc.byId = function(req, res, next) {
  DB.Oc.find({where:{id:req.params.id}}).on('success',function(oc){
    res.send(oc)
  })
};

Oc.byCliente = function(req, res, next) {
  DB.Oc.find({where:{id:req.params.cliente_id}}).on('success',function(ocs){
    if(ocs){
      if(util.isArray(ocs)){
        var msg= [];
        ocs.forEach(function(oc){
          msg.push({nombre:oc.titulo, id: oc.id})
     //     msg+=","+oc.titulo;
        })
        res.send(msg)
      }else{
        res.send({ nombre:ocs.titulo, id: ocs.id})
      }
    }
  })
};

Oc.get = function(req, res, next) {
  DB.Oc.findAll({order:'fechaVencimiento DESC' , include:[{model: DB.Cliente}, {model: DB.Empleado}], where: {solucion : ''}}).on('success', function(a) {
    var msg = []
    a.forEach(function(b){
      var empleado="Sin Empleado";
      if(b.empleado)
	      empleado=b.empleado.nombre+" "+b.empleado.apellido;
      msg.push({
        id: b.id,
        nombre: b.numero+"_"+b.titulo, 
        numero: b.numero,
        cliente_id: b.cliente_id,
        clienteNombre: b.cliente.nombre,
        empleadoNombre: empleado,
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

Oc.getActiva = function(req, res, next) {
  DB.Oc.findAll({where: {activa: 1}, include: [{model: DB.Cliente}]}).on('success', function(a) {
    var msg = []
    a.forEach(function(b){
      msg.push({
        id: b.id,
        nombre: b.cliente.id+"-"+b.titulo+"-Nº"+b.numero,
      })
    })
    res.send(msg)
  });
};

Oc.put = function(req, res, next) {
  res.send(true)      
  if(req.body.notificarCliente==1){
    req.body.notificarCliente = !0
    var transport = nodemailer.createTransport("SMTP", {
      auth: {
        user: "estudiopressacco@gmail.com",
        pass: "EeCc&689Gmail"
      }
    });     
    DB.Cliente.find({where: {id: req.body.cliente_id}}).on('success', function(cliente){
      DB.Empleado.find({where: {id: req.session.empleado_id}}).on('success', function(user){   
        DB.Oc.find({where: {id: req.params.id}}).on('success',function(ocSend){    
          var com;
          switch(ocSend.comunicacion_id) { 
           case 1:	com="Teléfono"; break; 
           case 2:	com="Celular"; break;
           case 3:	com="Radio"; break; 
           case 4:	com="E-Mail"; break; 
           case 5: com="Personal";break;
           default:		com="Indefinido"; 
          }
          moment.lang("es");
          var rta;
           if(req.body.solucion!='')
            rta=req.body.solucion;
           else
            rta="Le enviaremos la respuesta"; 
          var htmlText= '\
                <style>body{background-color:#829C8B; color: white;}</style><body><table style="background-color:#829C8B; color: white; width: 750 px; height: 1px; margin: 0px; padding: 0px; border-collapse: collapse;" cellpadding="0"><tr><td rowspan="2"><img src="/srv/pressacco/public/images/logo_estudio.png" height="90" width="90" /><td><td colspan="5"><h4 style= "color: #8A2908">Estudio Integral Pressacco & Asoc.</h4><td></tr><tr><td colspan="5"><h2>NOTIFICACION ORDEN DE CONSULTA N&ordm;:</h2></td><td colspan="2" bgcolor="#6E6E6E"><h2 align="center">'+ocSend.numero+'</h2></td></tr><tr style="margin: 0px; border: 1px solid #000000; padding: 0px;"></tr><tr><td>&nbsp;</td><td>Cliente:</td><td colspan= "2">'+cliente.nombre+'</td></tr><tr><td>&nbsp;</td><td>Fecha:</td><td colspan= "2">'+moment().format("ll")+'</td><td> &nbsp; </td><td  align="right" > Respondido por: </td><td>'+user.nombre+" "+user.apellido+'</td></tr><tr><td> &nbsp; </td><td> Hora: </td><td colspan= "2">'+moment().format("HH:mm")+'</td><td> &nbsp; </td><td  align="right"> Canal de comunicaci&oacute;n: </td><td>'+com+'</td></tr><tr style="margin: 0px;  border: 1px solid #000000; padding: 0px;"></tr><tr><td colspan= "2"><h5><ins> TITULO:</ins> <h5></td><td colspan= "5"><h5>'+ocSend.titulo+'<h5></td></tr><tr><td colspan= "2"><h6><ins>CONSULTA:</ins><h6></td><td colspan= "5"><h6>'+ocSend.consulta+'<h6></td></tr><tr><td colspan= "2"><h6><ins>RESPUESTA:</ins><h6></td><td colspan= "5"><h6>'+rta+'<h6></td></tr></tr></table></body>';         
          var mailOptions = {
            from: "estudiopressacco@gmail.com",
            to: cliente.email,
            bcc: "estudiopressacco@gmail.com",
            subject: "Estudio Integral Pressacco y Asoc. - Orden de Consulta",
            replyTo:  "estudiopressacco@gmail.com",
            html: htmlText,
            forceEmbeddedImages: true
          };  
          transport.sendMail(mailOptions, function(error, response) {
            console.log("MAIL ENVIADO A:"+mailOptions.to+" CON COPIA A: "+mailOptions.bcc)
          });
         })
      })
    })
  }else
    req.body.notificarCliente = !1
  DB.Oc.find({where: {id: req.params.id}}).on('success',function(oc){
    if(oc){
      oc.updateAttributes({solucion: req.body.solucion, notificarCliente: req.body.notificarCliente})
    }else{
      res.send(false)
    }
  })
};
module.exports = Oc;
