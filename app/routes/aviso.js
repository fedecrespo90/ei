var DB, Everyone
  , moment = require('moment')
  , Aviso = function(db, everyone) {
  DB = db;
  Everyone = everyone;

  return Aviso;
};

Aviso.get = function(req, res, next) {
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

Aviso.post = function(req, res, next) {
  DB.Cronograma.find({ where: {
          año: req.body.año,
          mes: req.body.mes
          }
  }).on('success', function(e) {
    if(!e){
      DB.Cronograma.create(req.body).on('success', function(cronograma){
        DB.Impuesto.findAll().on('success', function(imp){
          imp.forEach(function(i){
            if(req.body[i.nombre] != ''){
              var t=req.body[i.nombre];
              req.body[i.nombre]=t[3]+t[4]+t[5]+t[0]+t[1]+t[2]+t[6]+t[7]+t[8]+t[9]+" 12:00:00";
              DB.CronogramaImpuesto.create({
                cronograma_id: cronograma.id,
                impuesto_id: i.id,
                vtoAviso: moment(req.body[i.nombre]).format('YYYY-MM-DD HH:MM:SS') 
              })
            }
          })
          res.send(true);
        })
      })
    }else{
      e.updateAttributes({mes: req.body.mes, año:req.body.año}).success(function(crono){
        DB.Impuesto.findAll().on('success', function(imp){
          imp.forEach(function(i){
            if(req.body[i.nombre] != ''){
              var t=req.body[i.nombre];
              req.body[i.nombre]=t[3]+t[4]+t[5]+t[0]+t[1]+t[2]+t[6]+t[7]+t[8]+t[9]+" 12:00:00";
              DB.CronogramaImpuesto.find({where:{impuesto_id:i.id, cronograma_id:crono.id}}).on('success', function(cronoImpuesto){
                if(cronoImpuesto){
                    cronoImpuesto.updateAttributes({vtoAviso: req.body[i.nombre]}).success(function(){res.send(true)})                  
                }else{
                  DB.CronogramaImpuesto.create({cronograma_id: crono.id, impuesto_id: i.id, vtoAviso: moment(req.body[i.nombre]).format('YYYY-MM-DD HH:MM:SS') }).on('success', function(){res.send(true)})
                }              
              })                
            }
          })
        })
      })    
    }
  })
};

Aviso.put = function(req, res, next) {
  DB.Cronograma.find({ where: {id: req.params.id}
  }).on('success', function(e) {
    if(e){
      e.updateAttributes({mes: req.body.mes, año:req.body.año}).success(function(crono){
        DB.Impuesto.findAll().on('success', function(imp){
          imp.forEach(function(i){
            if(req.body[i.nombre] != ''){
              var t=req.body[i.nombre];
              req.body[i.nombre]=t[3]+t[4]+t[5]+t[0]+t[1]+t[2]+t[6]+t[7]+t[8]+t[9]+" 12:00:00";
              DB.CronogramaImpuesto.find({where:{impuesto_id:i.id, cronograma_id:crono.id}}).on('success', function(cronoImpuesto){
                if(cronoImpuesto){
                    cronoImpuesto.updateAttributes({vtoAviso: req.body[i.nombre]}).success(function(){res.send(true)})                  
                }else{
                  DB.CronogramaImpuesto.create({cronograma_id: crono.id, impuesto_id: i.id, vtoAviso: moment(req.body[i.nombre]).format('YYYY-MM-DD HH:MM:SS') }).on('success', function(){res.send(true)})
                }               
              })
            }
          })
        })
      })
    }
  })  
};

Aviso.delete = function(req, res, next) {
  DB.Cronograma.destroy({ id: req.params.id }).on('success',function(){res.send(true)});
};

module.exports = Aviso;
