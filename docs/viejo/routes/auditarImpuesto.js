var DB, Everyone
  , moment = require('moment')
  , AuditarImpuesto = function(db, everyone) {
  DB = db;
  Everyone = everyone;

  return AuditarImpuesto;  
};

AuditarImpuesto.get = function(req, res, next) {
  DB.Cronograma.findAll({order: 'año DESC',
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
        nombreMes: mes,
        auditado: c.auditado? "Auditado" : "Sin Auditar" 
      })
    })
    res.send(msg)
  });
};

AuditarImpuesto.post = function(req, res, next) {
  DB.Cronograma.find({where: {id: req.params.id}}).on('success', function(c){
    if(c){
      c.updateAttributes({auditado: !0}).on('success', function(){
        DB.Cliente.findAll({where: {baja: 0}}).on('success',function(cli){
          cli.forEach(function(cl){
            DB.ClienteImpuesto.findAll({where: {cliente_id: cl.id},
                                        include:[{model: DB.Impuesto, as: 'impuesto'}]
            }).on('success', function(cliImp){
              cliImp.forEach(function(clIm){
                DB.Vencimiento.find({where: {cliente_id: cl.id, impuesto_id: clIm.impuesto_id, cronograma_id: c.id }}).on('success', function(v){
                  if(v){
                    v.updateAttributes({adeudado: !0}).on('success', function(){res.send(true)})
/*                }else{
                   var param= {
                                cronograma_id: c.id,
                                cliente_id: cl.id,
                                impuesto_id: clIm.impuesto_id,
                                monto1: clIm.impuesto.monto1 + clIm.impuesto.monto2 + clIm.impuesto.monto3,
                                adeudado: !0,
                                rubro: 1                             
                               };
                    DB.Vencimiento.create(param).on('success',function(){res.send(true)})
*/
                  }
                })
              })
            })
          })
        })
      })
    }
  })
};
module.exports = AuditarImpuesto;
