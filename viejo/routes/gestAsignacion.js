var DB, Everyone
  , moment = require('moment')
  , GestAsignacion = function(db, everyone) {
  DB = db;
  Everyone = everyone;

  return GestAsignacion;
};
  
GestAsignacion.get = function(req, res, next) {
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

GestAsignacion.post = function(req, res, next) {
  DB.ClienteImpuesto.findAll({where:{impuesto_id: req.body.impuesto_id}, include: [{model: DB.Impuesto}]}).on('success', function(cliImp){
  if(cliImp.length > 0){
    if(cliImp[0].impuesto.fijo == 1){
      var monto0, monto1, monto2, monto3;
      var binario = Array();
      res.send(true)
      DB.CronogramaImpuesto.find({where:{impuesto_id: req.body.impuesto_id, cronograma_id: req.body.cronograma_id}}).on('success',function(cronoImp){
        cronoImp.updateAttributes({asignado: 1})
        if(cliImp.length == 1){
          var ci = cliImp[0]
          if(ci.paga == 0 ||  ci.paga == 1)
            binario = "1111";
          else{
            binario = ci.paga.toString(2)
          }
	        console.log("Cliente paga "+ binario)
          if(binario.length == 3)
            binario ="0"+binario
          if(binario.length == 2)
            binario="00"+binario
          if(binario.length == 1)                     
            binario="000"+binario
      	  monto0=0;
      	  monto1=0;
      	  monto2=0;
      	  monto3=0;
          if(binario[0]==1)
            monto0 = ci.impuesto.monto0
          if(binario[1]==1)
            monto1 = ci.impuesto.monto1
          if(binario[2]==1)
            monto2 = ci.impuesto.monto2
          if(binario[3]==1)
          //MULTIPLICAR POR LA CANTIDAD DE AFILIADOS QUE VA A ESTAR EN LA DDBB
            monto3 = ci.adherentes*ci.impuesto.monto3
	        console.log("Monto="+monto0+"Monto1="+monto1+"monto2="+monto2+"monto3="+monto3)
          asignar(req.body.cronograma_id, ci.id, ci.cliente_id, ci.impuesto_id, cronoImp.id, monto0, monto1, monto2, monto3)
        }else{//length!=1
          cliImp.forEach(function(ci){
            if(ci.paga == 0 || ci.paga == 1)
              binario = "1111";
            else{
              binario = ci.paga.toString(2)
              if(binario.length == 3)
                binario ="0"+binario
              if(binario.length == 2)
                binario="00"+binario
              if(binario.length == 1)                     
                binario="000"+binario
            }
      	    console.log("Entro por aca");
      	    console.log(ci.cliente_id);
      	    console.log("PAGA"+binario);
      	    monto0=0;
      	    monto1=0;
      	    monto2=0;
      	    monto3=0;
            if(binario[0]==1)
              monto0 = ci.impuesto.monto0
            if(binario[1]==1)
              monto1 = ci.impuesto.monto1
            if(binario[2]==1)
              monto2 = ci.impuesto.monto2
            if(binario[3]==1)
              monto3 = ci.adherentes*ci.impuesto.monto3
	          console.log("Monto0"+monto0+"MONTO1"+monto1+"MONTO2"+monto2+"MONTO3"+monto3);
            asignar(req.body.cronograma_id, ci.id, ci.cliente_id, ci.impuesto_id,cronoImp.id, monto0, monto1, monto2, monto3)
          })
        }
      })
    }else{// IMPUESTOS VARIABLES!
      DB.Vencimiento.findAll({where: {adeudado: !1, cronograma_id: req.body.cronograma_id, impuesto_id: req.body.impuesto_id} }).on('success', function(v){
        if((v.length < cliImp.length) && (req.body.impuesto_id != 2 ))
          res.send(false) 
        else{
          res.send(true)
          DB.CronogramaImpuesto.find({where:{impuesto_id: req.body.impuesto_id, cronograma_id: req.body.cronograma_id}}).on('success',function(cronoImp){
            cronoImp.updateAttributes({asignado: 1})
          })
          if(v.length == 1)
            v[0].updateAttributes({adeudado: !0})
          v.forEach(function(ven){
            ven.updateAttributes({adeudado: !0})
          })
        }
      })
    }
  }else{
    res.send(true)
    DB.CronogramaImpuesto.find({where:{impuesto_id: req.body.impuesto_id, cronograma_id: req.body.cronograma_id}}).on('success',function(cronoImp){
      cronoImp.updateAttributes({asignado: 1})
    })    
  }
  })    
};

//(req.body.cronograma_id, ci.id, ci.cliente_id, ci.impuesto_id,  )
asignar = function(crono_id, cliImp_id, cli_id, imp_id, cronoImp, monto0, monto1, monto2, monto3){
  console.log("1111111111111111111111111111111111111111111111111111111111111111111111111111"+cronoImp)
  DB.Vencimiento.find({
    where: {
      cronograma_id: crono_id,
      cliente_id: cli_id,
      impuesto_id: imp_id,            
    }
  }).on('success',function(e){
    if(!e){
      DB.Vencimiento.create({
        cliente_impuesto_id: cliImp_id,
        cronograma_id: crono_id,
        cliente_id: cli_id,
        impuesto_id: imp_id,
        cronograma_impuesto_id: cronoImp,
        adeudado: !0,
        monto0: monto0 || 0.00,
        monto1: monto1 || 0.00,
        monto2: monto2 || 0.00,
        monto3: monto3 || 0.00,
        monto4: 0.00,
      })
    }
  }) 
};
module.exports = GestAsignacion;
