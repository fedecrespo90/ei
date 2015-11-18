var DB, Everyone
  , moment = require('moment')
  , async = require('async')  
  , nodemailer = require('nodemailer')
  , sequelize = require('sequelize')
  , GestAvisoTest = function(db, everyone) {
  DB = db;
  Everyone = everyone;
  
 
  return GestAvisoTest;
};

GestAvisoTest.get = function(req, res, next) {
  DB.Cronograma.findAll({order: 'año DESC',
                         where: {auditado: false}
  }).on('success', function(crono) {
    var msg=[];
    crono.forEach(function(c){
      var mes
      switch (c.mes)  { 
         case 1 : mes= "Enero" ; break;
         case 2 : mes= "Febrero" ; break;
         case 3 : mes= "Marzo" ; break;
         case 4 : mes= "Abril" ; break;
         case 5 : mes= "Mayo" ; break;         
         case 6 : mes= "Junio" ; break;         
         case 7 : mes= "Julio" ; break;
         case 8 : mes= "Agosto" ; break;
         case 9 : mes= "Septiembre" ; break;
         case 10 : mes= "Octubre" ; break;
         case 11 : mes= "Noviembre" ; break;
         case 12 : mes= "Diciembre" ; break;         
         default : mes= "Indefinido" ;
      } 
      msg.push({
        id: c.id,
        mes: c.mes,
        año: c.año,
        nombreMes: mes
      })
    })
    res.send(msg)
  });
};
//Update 1
//INSERT INTO `clienteImpuesto` (`id`, `created_at`, `updated_at`, `deleted_at`, `rubro_id`, `cliente_id`, `impuesto_id`, `paga`, `adherentes`, `detalle`) VALUES(999999, '2014-07-30 09:07:28', '2014-07-30 09:07:30', '2014-07-30 09:07:30', 0, 999999, 999999, 0, 1, '  ')
GestAvisoTest.post = function(req, res, next) {
  res.send(true)
  DB.AsigPie.find({where: {id:1}}).on('success', function(asigPie){  
    //enviar mail a todos los clientes con rubro_id == req.params.rubro_id
    //tengo, cronograma y rubro a enviar.
    DB.Cliente.findAll({include:[{model: DB.ClienteRubro, where:{rubro_id: req.body.rubro_id, baja: 0}}]}).on('success', function(clientes){
      DB.Vencimiento.findAll({where:{ adeudado:1, pagado:0 }, 
        include:[{model:DB.ClienteImpuesto},{model:DB.Impuesto},{model: DB.CronogramaImpuesto, include:[{model: DB.Cronograma}]},
        {model: DB.Cliente, include: [{model: DB.ClienteRubro, where:{rubro_id:req.body.rubro_id }}]}],
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
      if(puedo){
        vencimientos.sort(function (a, b) {
          return (moment(a.cronogramaImpuesto.vtoImpuesto).format("YYYYMMDD") - moment(b.cronogramaImpuesto.vtoImpuesto).format("YYYYMMDD"))
        }) 
      }         
      // Tengo qe iterar, pero va a haber distintos clientes, (
      // por cada cliente tengo que juntar todos sus impuestos, y ir guardandolos en variables, cuando viene un cliente nuevo , agarro la lista de los impuesto que tiene este cliente y agrego a la lista de los impuesto de ese cliente y envio mail  ) 
        clientes.forEach(function(cliente){
          //tengo el cliente.cierre_id 
          //creo arreglo
          var arreglo=[] 
          var ids=[]         
          vencimientos.forEach(function(vencimiento){ 
          //BUSCO MATCH PARA CREAR EL MAIL
            if(cliente.id==vencimiento.cliente.id){
              if(vencimiento.adeudado!=1 && vencimiento.pagado!=0 && vencimiento.cronograma_id == req.body.cronograma_id)
                ids.push(vencimiento.impuesto_id);// vencimiento.clienteImpuesto.id
              else{
                //cargo un arreglo con todos los vencimientos del cliente  
                var monto = parseFloat(vencimiento.monto0)+parseFloat(vencimiento.monto1)+parseFloat(vencimiento.monto2)+parseFloat(vencimiento.monto3)+parseFloat(vencimiento.monto4); 
                if(vencimiento.cronogramaImpuesto){
                  var m="Sin Liquidar"
                  if(vencimiento.liquida)
                    m = monto//.toFixed(2)
                  //ids.push(vencimiento.impuesto_id);//vencimiento.clienteImpuesto.id
                  if(vencimiento.anticipo<12 && 0<vencimiento.anticipo)
                    vencimiento.impuesto.nombre +=" - Anticipo "+vencimiento.anticipo
                  arreglo.push({
                    impuesto: vencimiento.impuesto.nombre,//+" - "+vencimiento.clienteImpuesto.detalle,
                    cronograma: vencimiento.cronogramaImpuesto.cronograma.mes+ "/"+vencimiento.cronogramaImpuesto.cronograma.año,
                    fecha: (moment(vencimiento.cronogramaImpuesto.vtoImpuesto).format('DD/MM/YYYY')=='Invalid date')?"Sin Determinar":moment(vencimiento.cronogramaImpuesto.vtoImpuesto).format('DD/MM/YYYY'),
                    monto: m
                  })
                }
              }
            }
          })
          if(ids.length==0)
            ids=null;            
          DB.ClienteImpuesto.findAll({where: "impuesto_id NOT IN ("+ids+") AND clienteImpuesto.cliente_id ="+cliente.id, include:[{model: DB.Impuesto},{model: DB.Cliente}]}).on('success', function(imps){
            ids=null;
            var cons= "RTA"
            imps.forEach(function(i){
              if(i){
                cons+=" , "+i.impuesto.id;
                DB.CronogramaImpuesto.find({
                  where: {cronograma_id: req.body.cronograma_id, impuesto_id: i.impuesto.id},
                  include: [{model: DB.Cronograma}]
                }).on('success', function(ci){
  ////////////////////IMPUESTO/A/LAS/GANANCIAS//////////////////////////////
                  if(ci){
                    if(i.impuesto_id==2){
                      if(((12-i.cliente.cierre_id+ci.cronograma.mes)%12)==5){
                          DB.Vencimiento.find({where: {cliente_id: i.cliente_id, impuesto_id: i.impuesto_id, pagado: 1}}).on('success', function(e){
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
            //YA TENGO LOS IMPUESTOS QUE VOY A MANDAR POR MAIL CON TODOS SUS DATOS
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
            var sumatoria=0
            var contador=0   
            var aviso = false;       
            arreglo.forEach(function(imp){
              if(/studio/.test(imp.impuesto)){
                aviso=true;
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
                if((imp.monto=='A Determinar')|| (imp.monto=='Sin Liquidar'))
                  sumatoria += 0.00
                else 
                  sumatoria += parseFloat(imp.monto)
              }
            })
            if(aviso)
              htmlText+='<TR><TD HEIGHT=19 STYLE="border-top: none; border-bottom: none; border-left: 1px double #3c3c3c; border-right: none; padding-top: 0cm; padding-bottom: 0cm; padding-left: 0.05cm; padding-right: 0cm"><P><BR></P></TD><TD BGCOLOR="#ff99cc" STYLE="border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: 1px solid #3c3c3c; padding: 0.05cm"><P ALIGN=CENTER><FONT FACE="Bookman Old Style"></FONT></P></TD><TD COLSPAN=2 BGCOLOR="#ff99cc" STYLE="border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 1px solid #3c3c3c; border-right: none; padding-top: 0.05cm; padding-bottom: 0.05cm; padding-left: 0.05cm; padding-right: 0cm"><P ALIGN=LEFT><FONT FACE="Bookman Old Style">Total Pago en Estudio</FONT></P></TD><TD BGCOLOR="#ff99cc" STYLE="border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: none; border-right: none; padding: 0.05cm 0cm"><P><BR></P></TD><TD BGCOLOR="#ff99cc" STYLE="border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: none; border-right: none; padding: 0.05cm 0cm"><P><BR></P></TD><TD BGCOLOR="#ff99cc" STYLE="border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: none; border-right: 1px solid #000000; padding-top: 0.05cm; padding-bottom: 0.05cm; padding-left: 0cm; padding-right: 0.05cm"><P>'+sumatoria.toMoney()+'<BR></P></TD></TR>'
            var sumatoria2=0
            aviso = false;       
            arreglo.forEach(function(imp){
              if(! /studio/.test(imp.impuesto)){
                aviso=true;
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
                if((imp.monto=='A Determinar')|| (imp.monto=='Sin Liquidar'))
                  sumatoria2 += 0.00
                else 
                  sumatoria2 += parseFloat(imp.monto)
              }
            })
            if(aviso)
              htmlText+='<TR><TD HEIGHT=19 STYLE="border-top: none; border-bottom: none; border-left: 1px double #3c3c3c; border-right: none; padding-top: 0cm; padding-bottom: 0cm; padding-left: 0.05cm; padding-right: 0cm"><P><BR></P></TD><TD BGCOLOR="#ff99cc" STYLE="border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: 1px solid #3c3c3c; padding: 0.05cm"><P ALIGN=CENTER><FONT FACE="Bookman Old Style"></FONT></P></TD><TD COLSPAN=2 BGCOLOR="#ff99cc" STYLE="border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 1px solid #3c3c3c; border-right: none; padding-top: 0.05cm; padding-bottom: 0.05cm; padding-left: 0.05cm; padding-right: 0cm"><P ALIGN=LEFT><FONT FACE="Bookman Old Style">Total Pago Cliente</FONT></P></TD><TD BGCOLOR="#ff99cc" STYLE="border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: none; border-right: none; padding: 0.05cm 0cm"><P><BR></P></TD><TD BGCOLOR="#ff99cc" STYLE="border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: none; border-right: none; padding: 0.05cm 0cm"><P><BR></P></TD><TD BGCOLOR="#ff99cc" STYLE="border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: none; border-right: 1px solid #000000; padding-top: 0.05cm; padding-bottom: 0.05cm; padding-left: 0cm; padding-right: 0.05cm"><P>'+sumatoria2.toMoney()+'<BR></P></TD></TR>'
              sumatoria+=parseFloat(sumatoria2);
              htmlText+='<TR><TD HEIGHT=19 STYLE="border-top: none; border-bottom: none; border-left: 1px double #3c3c3c; border-right: none; padding-top: 0cm; padding-bottom: 0cm; padding-left: 0.05cm; padding-right: 0cm"><P><BR></P></TD><TD BGCOLOR="#ff99cc" STYLE="border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: 1px solid #3c3c3c; padding: 0.05cm"><P ALIGN=CENTER><FONT FACE="Bookman Old Style"></FONT></P></TD><TD COLSPAN=2 BGCOLOR="#ff99cc" STYLE="border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 1px solid #3c3c3c; border-right: none; padding-top: 0.05cm; padding-bottom: 0.05cm; padding-left: 0.05cm; padding-right: 0cm"><P ALIGN=LEFT><FONT FACE="Bookman Old Style"><b>Gran Total</b></FONT></P></TD><TD BGCOLOR="#ff99cc" STYLE="border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: none; border-right: none; padding: 0.05cm 0cm"><P><BR></P></TD><TD BGCOLOR="#ff99cc" STYLE="border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: none; border-right: none; padding: 0.05cm 0cm"><P><BR></P></TD><TD BGCOLOR="#ff99cc" STYLE="border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: none; border-right: 1px solid #000000; padding-top: 0.05cm; padding-bottom: 0.05cm; padding-left: 0cm; padding-right: 0.05cm"><P>'+sumatoria.toMoney()+'<BR></P></TD></TR></TABLE><br /><P><P>'+asigPie.observacion+'</P>'            
            var mailOptions = {
              from: "estudiopressacco@gmail.com",
              to: "2014estudiocontable@gmail.com",
              bcc: "estudiopressacco@gmail.com",
              subject: "MAILTEST - Estudio Integral Pressacco y Asoc. - Detalle de Vencimientos",
              replyTo:  "estudiopressacco@gmail.com",
              html: htmlText,
            };  
            setTimeout(function(){
              transport.sendMail(mailOptions, function(error, response) {
                if(error){
                  setTimeout(function(){
                    transport.sendMail(mailOptions, function(error, response) {
                      if(error){
                        setTimeout(function(){
                          transport.sendMail(mailOptions, function(error, response) {
                            if(error){
                              DB.Novedades.create({
                                novedad: "Error al enviar mail de Testeo al cliente "+cliente.nombre,
                                descripcion: "Debe concluirla",
                                empleado_id: 0,
                                area_id: 8,                  
                              })
                            }else{
                              console.log("MAIL ENVIADO A: "+mailOptions.to)
                            }
                          })
                        }, 1000) 
                      }else{
                        console.log("MAIL ENVIADO A: "+mailOptions.to)
                      }
                    })
                  }, 1000) 
                }else{
                  console.log("MAIL ENVIADO A: "+mailOptions.to)
                }
              });
            }, 5000)
          }, 4000) 
        })
      })
    })
  })
};
module.exports = GestAvisoTest;
