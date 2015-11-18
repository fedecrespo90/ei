var DB, Everyone
  , moment = require('moment')
  , async = require('async')  
  , nodemailer = require('nodemailer')
  , sequelize = require('sequelize')
  , GestAvisoPersonal = function(db, everyone) {
  DB = db;
  Everyone = everyone;
  return GestAvisoPersonal;
}; 


GestAvisoPersonal.post = function(req, res, next) {
  res.send(true)
  var objeto = []
  //enviar mail al cliente
  DB.AsigPie.find({where:{ id:1}}).on('success', function(asigPie){  
    var cliente= req.body.cliente;
    DB.Vencimiento.findAll({where:{ pagado:0, adeudado:1, "vencimiento.cliente_id": req.body.cliente_id }, 
      include:[{model: DB.ClienteImpuesto},{model:DB.Impuesto},{model: DB.CronogramaImpuesto, include:[{model: DB.Cronograma}]},{model: DB.Cliente}],
      order: "`cronogramaImpuesto`.`vtoImpuesto` ASC"
    }).on('success', function(vencimientos){
      var puedo = true;
      vencimientos.forEach(function(v){
        if(v.cronogramaImpuesto){
          if(!v.cronogramaImpuesto.vtoImpuesto)
            puedo=false;
        }else{
          puedo=false;
        }
      })
      if(puedo)
        vencimientos.sort(function (a, b) {
          return (moment(a.cronogramaImpuesto.vtoImpuesto).format("YYYYMMDD") - moment(b.cronogramaImpuesto.vtoImpuesto).format("YYYYMMDD"))
        }) 
      //creo arreglo
      var arreglo=[] 
        var ids=[]  
        vencimientos.forEach(function(vencimiento){ 
        if(vencimiento.adeudado==1 && vencimiento.pagado==0){ 
          //cargo un arreglo con todos los vencimientos del cliente  
          var monto = parseFloat(vencimiento.monto0)+parseFloat(vencimiento.monto1)+parseFloat(vencimiento.monto2)+parseFloat(vencimiento.monto3)+parseFloat(vencimiento.monto4); 
          if(vencimiento.cronogramaImpuesto){
            var m="Sin Liquidar"
            if(vencimiento.liquida)
              m = monto//.toFixed(2)
              //MARCELOMMMMM
            var matchs = parseInt(moment().format("MM")) - 1
            if( matchs == vencimiento.cronogramaImpuesto.cronograma.mes)
              ids.push(vencimiento.impuesto_id);
            if(vencimiento.anticipo<12 && 0<vencimiento.anticipo)
              vencimiento.impuesto.nombre += " - Anticipo "+vencimiento.anticipo
            if(objeto.length == 0){
              objeto.push({
                id:  vencimiento.cronogramaImpuesto.cronograma.id,
                mes: vencimiento.cronogramaImpuesto.cronograma.mes,
                año: vencimiento.cronogramaImpuesto.cronograma.año,
              })
            }else{
              if(vencimiento.cronogramaImpuesto.cronograma.año >= objeto[0].año)
                if(vencimiento.cronogramaImpuesto.cronograma.mes >= objeto[0].mes){
                  objeto[0].id= vencimiento.cronogramaImpuesto.cronograma.id;
                  objeto[0].mes= vencimiento.cronogramaImpuesto.cronograma.mes;
                  objeto[0].año= vencimiento.cronogramaImpuesto.cronograma.año;
                }
            }
            arreglo.push({
              impuesto: vencimiento.impuesto.nombre,//+" - "+vencimiento.clienteImpuesto.detalle,
              cronograma: vencimiento.cronogramaImpuesto.cronograma.mes+ "/"+vencimiento.cronogramaImpuesto.cronograma.año,
              fecha: (moment(vencimiento.cronogramaImpuesto.vtoImpuesto).format('DD/MM/YYYY')=='Invalid date')?"Sin Determinar":moment(vencimiento.cronogramaImpuesto.vtoImpuesto).format('DD/MM/YYYY'),
              monto: m
            })
          }
        }else{
          ids.push(vencimiento.impuesto_id);
        }
      })
      if(ids.length==0)
        ids=null;  
      DB.ClienteImpuesto.findAll({where: "impuesto_id NOT IN ("+ids+") AND clienteImpuesto.cliente_id ="+req.body.cliente_id, include:[{model: DB.Impuesto},{model: DB.Cliente}]}).on('success', function(imps){
        ids=null;
        ///TENGO TODOS LOS IMPUESTOS DEL CLIENTE QUE NO SE HAN CARGADO AÚN
        imps.forEach(function(i){
          if(i){
            DB.CronogramaImpuesto.find({
              where: {cronograma_id: objeto[0].id, impuesto_id: i.impuesto_id},
              include: [{model: DB.Cronograma}]
            }).on('success', function(ci){
              if(ci){
                if(i.impuesto_id==2){
                  if(((12-i.cliente.cierre_id+ci.cronograma.mes)%12)==5){
                    DB.Vencimiento.find({where: {cliente_id: i.cliente_id, impuesto_id: i.impuesto_id, pagado: 1, cronograma_id: ci.cronograma.id}}).on('success', function(e){
                      if(!e){
                        arreglo.push({
                          impuesto: i.impuesto.nombre+" - "+ i.detalle,
                          cronograma: ci.cronograma.mes+ "/"+ci.cronograma.año,
                          fecha: (moment(ci.vtoImpuesto).format('DD/MM/YYYY')== 'Invalid date') ?"Sin Determinar":moment(ci.vtoImpuesto).format('DD/MM/YYYY'),
                          monto:"A Determinar"
                        })
                      }
                    })              
                  }
                }else{
                  //impuesto!=2
                  var cumple = true;
                  arreglo.forEach(function(ar){
                    if((ar.impuesto==i.impuesto.nombre)&&(ar.cronograma==ci.cronograma.mes+ "/"+ci.cronograma.año))
                      cumple=false
                  })
                  if(cumple){
                    DB.Vencimiento.find({where: {cliente_id: i.cliente_id, impuesto_id: i.impuesto_id, pagado: 1, cronograma_id: ci.cronograma.id}}).on('success', function(e){
                      if(!e){
                        arreglo.push({
                          impuesto: i.impuesto.nombre+" - "+ i.detalle,
                          cronograma: ci.cronograma.mes+ "/"+ci.cronograma.año,
                          fecha: (moment(ci.vtoImpuesto).format('DD/MM/YYYY')== 'Invalid date') ?"Sin Determinar":moment(ci.vtoImpuesto).format('DD/MM/YYYY'),
                          monto:"A Determinar"
                        })
                      }
                    })
                  }
                }
              }
          })
        }
        })
      })   
      ids=null;
      setTimeout(function(){
        var transport = nodemailer.createTransport("SMTP", {
          auth: {
            user: "estudiopressacco@gmail.com",
            pass: "EeCc&689Gmail"
          }
        });        
        var rta, corriente=moment().format("MM")
        switch(corriente) {
            case "01":
                rta="ENERO";
                break;
            case "02":
                rta="FEBRERO";
                break;
            case "03":
                rta="MARZO";
                break;
            case "04":
                rta="ABRIL";
                break;
            case "05":
                rta="MAYO";
                break;
            case "06":
                rta="JUNIO";
                break;
            case "07":
                rta="JULIO";
                break;
            case "08":
                rta="AGOSTO";
                break;
            case "09":
                rta="SEPTIEMBRE";
                break;
            case "10":
                rta="OCTUBRE";
                break;
            case "11":
                rta="NOVIEMBRE";
                break;
            case "12":
                rta="DICIEMBRE";
                break;
        }
        var htmlText='<HTML><HEAD><META HTTP-EQUIV="CONTENT-TYPE" CONTENT="text/html; charset=utf-8"><TITLE></TITLE></HEAD><BODY LANG="es-AR" DIR="LTR"><P><BR><BR></P><TABLE COLS=6 WIDTH=100% CELLPADDING=2 CELLSPACING=0><COL WIDTH=28><COL WIDTH=102><COL WIDTH=101><COL WIDTH=88><COL WIDTH=185><COL WIDTH=111><TR><TD HEIGHT=19 STYLE="border-top: 1px double #3c3c3c; border-bottom: none; border-left: 1px double #3c3c3c; border-right: none; padding-top: 0.05cm; padding-bottom: 0cm; padding-left: 0.05cm; padding-right: 0cm"><P><BR></P></TD><TD STYLE="border-top: 1px double #3c3c3c; border-bottom: none; border-left: none; border-right: none; padding-top: 0.05cm; padding-bottom: 0cm; padding-left: 0cm; padding-right: 0cm"><P><BR></P></TD><TD STYLE="border-top: 1px double #3c3c3c; border-bottom: none; border-left: none; border-right: none; padding-top: 0.05cm; padding-bottom: 0cm; padding-left: 0cm; padding-right: 0cm"><P><BR></P></TD><TD STYLE="border-top: 1px double #3c3c3c; border-bottom: none; border-left: none; border-right: none; padding-top: 0.05cm; padding-bottom: 0cm; padding-left: 0cm; padding-right: 0cm"><P><BR></P></TD><TD STYLE="border-top: 1px double #3c3c3c; border-bottom: none; border-left: none; border-right: none; padding-top: 0.05cm; padding-bottom: 0cm; padding-left: 0cm; padding-right: 0cm"><P><BR></P></TD><TD STYLE="border-top: 1px double #3c3c3c; border-bottom: none; border-left: none; border-right: none; padding-top: 0.05cm; padding-bottom: 0cm; padding-left: 0cm; padding-right: 0cm" SDNUM="11274;0;#.##0,00 &quot;$&quot;;-#.##0,00 &quot;$&quot;"><P><BR></P></TD></TR><TR><TD HEIGHT=22 STYLE="border-top: none; border-bottom: none; border-left: 1px double #3c3c3c; border-right: none; padding-top: 0cm; padding-bottom: 0cm; padding-left: 0.05cm; padding-right: 0cm"><P><BR></P></TD><TD COLSPAN=4 STYLE="border: none; padding: 0cm"><P ALIGN=LEFT><FONT COLOR="#993300"><FONT FACE="Bauhaus 93"><FONT SIZE=3>Estudio Integral Pressacco &amp; Asoc.</FONT></FONT></FONT></P></TD><TD STYLE="border: none; padding: 0cm"><P><BR></P></TD><TD STYLE="border: none; padding: 0cm">	<P ALIGN=CENTER><FONT FACE="AvantGarde Bk BT"><FONT SIZE=1></FONT></FONT></P></TD></TR><TR><TD HEIGHT=35 STYLE="border-top: none; border-bottom: none; border-left: 1px double #3c3c3c; border-right: none; padding-top: 0cm; padding-bottom: 0cm; padding-left: 0.05cm; padding-right: 0cm"><P><BR></P></TD><TD VALIGN=TOP BGCOLOR="#969696" STYLE="border: none; padding: 0cm"><P ALIGN=LEFT><FONT FACE="Bookman Old Style"><B>CLIENTE :</B></FONT></P></TD><TD COLSPAN= 3 BGCOLOR="#969696" STYLE="border: none; padding: 0cm"><P ALIGN=LEFT><FONT FACE="Benguiat Bk BT"><FONT SIZE=5><B>'+cliente.nombre+'</B></FONT></FONT></P></TD><TD BGCOLOR="#969696" STYLE="border: none; padding: 0cm"><P><BR></P></TD><TD BGCOLOR="#969696" STYLE="border: none; padding: 0cm" SDNUM="11274;0;D-MMM-AA"><P>'+moment().format("DD/MM/YYYYY")+'<BR>	</P></TD></TR><TR><TD HEIGHT=19 STYLE="border-top: none; border-bottom: none; border-left: 1px double #3c3c3c; border-right: none; padding-top: 0cm; padding-bottom: 0cm; padding-left: 0.05cm; padding-right: 0cm"><P><BR></P></TD><TD STYLE="border: none; padding: 0cm"><P><BR></P></TD><TD STYLE="border: none; padding: 0cm"><P><BR></P></TD><TD STYLE="border: none; padding: 0cm"><P><BR></P></TD><TD STYLE="border: none; padding: 0cm"><P><BR></P></TD><TD STYLE="border: none; padding: 0cm" SDNUM="11274;0;#.##0,00 &quot;$&quot;;-#.##0,00 &quot;$&quot;"><P><BR></P></TD></TR><TR><TD HEIGHT=25 STYLE="border-top: none; border-bottom: none; border-left: 1px double #3c3c3c; border-right: none; padding-top: 0cm; padding-bottom: 0cm; padding-left: 0.05cm; padding-right: 0cm"><P><BR></P></TD><TD STYLE="border: none; padding: 0cm"><P><BR></P></TD><TD STYLE="border: none; padding: 0cm"><P><BR></P></TD><TD COLSPAN=3 STYLE="border: none; padding: 0cm"><P ALIGN=RIGHT><FONT FACE="Bookman Old Style">VENCIMIENTOS DEL MES DE '+rta+' </FONT></P></TD><TD COLSPAN=2 STYLE="border: none; padding: 0cm" SDNUM="11274;0;MMMM-AA"><P><BR></P></TD></TR><TR><TD HEIGHT=19 STYLE="border-top: none; border-bottom: none; border-left: 1px double #3c3c3c; border-right: none; padding-top: 0cm; padding-bottom: 0cm; padding-left: 0.05cm; padding-right: 0cm"><P><BR></P></TD><TD STYLE="border: none; padding: 0cm"><P><BR></P></TD><TD STYLE="border: none; padding: 0cm"><P><BR></P></TD><TD STYLE="border: none; padding: 0cm">	<P><BR></P></TD><TD STYLE="border: none; padding: 0cm"><P><BR></P></TD><TD STYLE="border: none; padding: 0cm" SDNUM="11274;0;#.##0,00 &quot;$&quot;;-#.##0,00 &quot;$&quot;"><P><BR></P></TD></TR><TR><TD HEIGHT=19 STYLE="border-top: none; border-bottom: none; border-left: 1px double #3c3c3c; border-right: none; padding-top: 0cm; padding-bottom: 0cm; padding-left: 0.05cm; padding-right: 0cm"><P><BR></P></TD><TD BGCOLOR="#ff99cc" STYLE="border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: 1px solid #3c3c3c; padding: 0.05cm"><P ALIGN=CENTER><FONT FACE="Bookman Old Style">VENCIMIENTO</FONT></P></TD><TD COLSPAN=4 BGCOLOR="#ff99cc" STYLE="border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 1px solid #3c3c3c; border-right: 1px solid #3c3c3c; padding: 0.05cm"><P ALIGN=CENTER><FONT FACE="Bookman Old Style">PERIODO - IMPUESTO</FONT></P></TD><TD BGCOLOR="#ff99cc" STYLE="border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 1px solid #3c3c3c; border-right: 1px solid #000000; padding: 0.05cm"><P ALIGN=CENTER><FONT FACE="Bookman Old Style">IMPORTE</FONT></TD>'
  ///////////////////////////////////////////////////////////
        var sumatoria=0
        var contador=0   
        var aviso = false;
        arreglo.forEach(function(imp){
          if(/studio/.test(imp.impuesto)){
            aviso = true;
            if(/Monotributo/.test(imp.impuesto) || /Plan Mis Facilidades AFIP/.test(imp.impuesto) || /Plan de Pagos ARBA/.test(imp.impuesto) ){
              var edit= imp.cronograma.split("/")
              if(edit[0]!="12")
                edit[0]=parseInt(edit[0])+1
              else{
                edit[0]="1"
                edit[1]= parseInt(edit[1])+1
              }
              imp.cronograma=edit.join("/")
            }
            if(! isNaN(imp.monto))
              var i=imp.monto.toMoney()
            else
              i = imp.monto               
            htmlText+='<TR><TD HEIGHT=19 STYLE="border-top: none; border-bottom: none; border-left: 1px double #3c3c3c; border-right: none; padding-top: 0cm; padding-bottom: 0cm; padding-left: 0.05cm; padding-right: 0cm"><TD BGCOLOR="#ff99cc" STYLE="border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: 1px solid #3c3c3c; padding: 0.05cm">	<P ALIGN=CENTER><FONT FACE="Bookman Old Style">'+imp.fecha+'</FONT></P></TD><TD COLSPAN=2 BGCOLOR="#ff99cc" STYLE="border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 1px solid #3c3c3c; border-right: none; padding-top: 0.05cm; padding-bottom: 0.05cm; padding-left: 0.05cm; padding-right: 0cm"><P ALIGN=CENTER>'+imp.cronograma+'</P></TD><TD COLSPAN=2 BGCOLOR="#ff99cc" STYLE=" border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: none; border-right: 1px solid #3c3c3c; padding-top: 0.05cm; padding-bottom: 0.05cm; padding-left: 0cm; padding-right: 0.05cm"><P ALIGN=LEFT><FONT FACE="Bookman Old Style">'+imp.impuesto+'</FONT></P></TD><TD BGCOLOR="#ff99cc" STYLE="border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 1px solid #3c3c3c; border-right: 1px solid #000000; padding: 0.05cm"><P ALIGN=RIGHT><FONT FACE="Bookman Old Style">'+i+'</FONT></P></TD>'
            contador ++;
            if((imp.monto=='A Determinar')||(imp.monto=='Sin Liquidar'))
              sumatoria += 0.00
            else 
              sumatoria += parseFloat(imp.monto)
          }
        })
        if(aviso)
          htmlText+='<TR><TD HEIGHT=19 STYLE="border-top: none; border-bottom: none; border-left: 1px double #3c3c3c; border-right: none; padding-top: 0cm; padding-bottom: 0cm; padding-left: 0.05cm; padding-right: 0cm"><P><BR></P></TD><TD BGCOLOR="#ff99cc" STYLE="border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: 1px solid #3c3c3c; padding: 0.05cm"><P ALIGN=CENTER><FONT FACE="Bookman Old Style"></FONT></P></TD><TD COLSPAN=2 BGCOLOR="#ff99cc" STYLE="border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 1px solid #3c3c3c; border-right: none; padding-top: 0.05cm; padding-bottom: 0.05cm; padding-left: 0.05cm; padding-right: 0cm"><P ALIGN=LEFT><FONT FACE="Bookman Old Style">Total Pago en Estudio</FONT></P></TD><TD BGCOLOR="#ff99cc" STYLE="border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: none; border-right: none; padding: 0.05cm 0cm"><P><BR></P></TD><TD BGCOLOR="#ff99cc" STYLE="border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: none; border-right: none; padding: 0.05cm 0cm"><P><BR></P></TD><TD BGCOLOR="#ff99cc" STYLE="border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: none; border-right: 1px solid #000000; padding-top: 0.05cm; padding-bottom: 0.05cm; padding-left: 0cm; padding-right: 0.05cm"><P>'+sumatoria.toMoney()+'<BR></P></TD></TR>';      
  ///////////////////////////////////////////////////////////
        var sumatoria2=0
        aviso=false;
        arreglo.forEach(function(imp){
          if(! /studio/.test(imp.impuesto)){
            aviso=true;
            if(/Monotributo/.test(imp.impuesto)){
              var edit= imp.cronograma.split("/")
              if(edit[0]!="12")
                edit[0]=parseInt(edit[0])+1
              else{
                edit[0]="1"
                edit[1]= parseInt(edit[1])+1
              }
              imp.cronograma=edit.join("/")
            }
            if(! isNaN(imp.monto))
              var i=imp.monto.toMoney()
            else
              i = imp.monto               
            htmlText+='<TR><TD HEIGHT=19 STYLE="border-top: none; border-bottom: none; border-left: 1px double #3c3c3c; border-right: none; padding-top: 0cm; padding-bottom: 0cm; padding-left: 0.05cm; padding-right: 0cm"><TD BGCOLOR="#ff99cc" STYLE="border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: 1px solid #3c3c3c; padding: 0.05cm">	<P ALIGN=CENTER><FONT FACE="Bookman Old Style">'+imp.fecha+'</FONT></P></TD><TD COLSPAN=2 BGCOLOR="#ff99cc" STYLE="border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 1px solid #3c3c3c; border-right: none; padding-top: 0.05cm; padding-bottom: 0.05cm; padding-left: 0.05cm; padding-right: 0cm"><P ALIGN=CENTER>'+imp.cronograma+'</P></TD><TD COLSPAN=2 BGCOLOR="#ff99cc" STYLE=" border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: none; border-right: 1px solid #3c3c3c; padding-top: 0.05cm; padding-bottom: 0.05cm; padding-left: 0cm; padding-right: 0.05cm"><P ALIGN=LEFT><FONT FACE="Bookman Old Style">'+imp.impuesto+'</FONT></P></TD><TD BGCOLOR="#ff99cc" STYLE="border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 1px solid #3c3c3c; border-right: 1px solid #000000; padding: 0.05cm"><P ALIGN=RIGHT><FONT FACE="Bookman Old Style">'+i+'</FONT></P></TD>'
            contador ++;
            if((imp.monto=='A Determinar')|| (imp.monto=='Sin Liquidar'))
              sumatoria2 += 0.00
            else 
              sumatoria2 += parseFloat(imp.monto)
          }
        })
        if(aviso)   
          htmlText+='<TR><TD HEIGHT=19 STYLE="border-top: none; border-bottom: none; border-left: 1px double #3c3c3c; border-right: none; padding-top: 0cm; padding-bottom: 0cm; padding-left: 0.05cm; padding-right: 0cm"><P><BR></P></TD><TD BGCOLOR="#ff99cc" STYLE="border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: 1px solid #3c3c3c; padding: 0.05cm"><P ALIGN=CENTER><FONT FACE="Bookman Old Style"></FONT></P></TD><TD COLSPAN=2 BGCOLOR="#ff99cc" STYLE="border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 1px solid #3c3c3c; border-right: none; padding-top: 0.05cm; padding-bottom: 0.05cm; padding-left: 0.05cm; padding-right: 0cm"><P ALIGN=LEFT><FONT FACE="Bookman Old Style">Total Pago Cliente</FONT></P></TD><TD BGCOLOR="#ff99cc" STYLE="border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: none; border-right: none; padding: 0.05cm 0cm"><P><BR></P></TD><TD BGCOLOR="#ff99cc" STYLE="border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: none; border-right: none; padding: 0.05cm 0cm"><P><BR></P></TD><TD BGCOLOR="#ff99cc" STYLE="border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: none; border-right: 1px solid #000000; padding-top: 0.05cm; padding-bottom: 0.05cm; padding-left: 0cm; padding-right: 0.05cm"><P>'+sumatoria2.toMoney()+'<BR></P></TD></TR>';
  //////////////////////////////////////////////////////////////////////////////////////////////////////////
        sumatoria+=parseFloat(sumatoria2);
        htmlText+='<TR><TD HEIGHT=19 STYLE="border-top: none; border-bottom: none; border-left: 1px double #3c3c3c; border-right: none; padding-top: 0cm; padding-bottom: 0cm; padding-left: 0.05cm; padding-right: 0cm"><P><BR></P></TD><TD BGCOLOR="#ff99cc" STYLE="border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: 1px solid #3c3c3c; padding: 0.05cm"><P ALIGN=CENTER><FONT FACE="Bookman Old Style"></FONT></P></TD><TD COLSPAN=2 BGCOLOR="#ff99cc" STYLE="border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 1px solid #3c3c3c; border-right: none; padding-top: 0.05cm; padding-bottom: 0.05cm; padding-left: 0.05cm; padding-right: 0cm"><P ALIGN=LEFT><FONT FACE="Bookman Old Style"><b>Gran Total</b></FONT></P></TD><TD BGCOLOR="#ff99cc" STYLE="border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: none; border-right: none; padding: 0.05cm 0cm"><P><BR></P></TD><TD BGCOLOR="#ff99cc" STYLE="border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: none; border-right: none; padding: 0.05cm 0cm"><P><BR></P></TD><TD BGCOLOR="#ff99cc" STYLE="border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: none; border-right: 1px solid #000000; padding-top: 0.05cm; padding-bottom: 0.05cm; padding-left: 0cm; padding-right: 0.05cm"><P>'+sumatoria.toMoney()+'<BR></P></TD></TR></TABLE><br /><P><P>'+asigPie.observacion+'</P>'
        var mailOptions = {
          from: "estudiopressacco@gmail.com",
          to: cliente.email,
          bcc: "estudiopressacco@gmail.com",
          subject: "Estudio Integral Pressacco y Asoc. - Detalle de Vencimientos",
          replyTo:  "estudiopressacco@gmail.com",
          html: htmlText,
          //attachments: {fileName: "Informes Pertinentes.js",filePath: "/srv/pressacco/db1231423132.js"}
        };  
        setTimeout(function(){    
          transport.sendMail(mailOptions, function(error, response) {
            if(error){
              DB.Novedades.create({
                novedad: "Error al enviar un mail al cliente"+cliente.nombre,
                descripcion: "Debe concluirla",
                empleado_id: 0,
                area_id: 8,                  
              })
            }else{
              console.log("MAIL ENVIADO A:"+mailOptions.to)
            }
          });
        },5000)
      }, 4000) 
    })
  })
};
module.exports = GestAvisoPersonal;
