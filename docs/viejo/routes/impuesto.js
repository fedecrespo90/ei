var DB, Everyone  
  , moment= require('moment')
  , util = require('util')
  , async = require('async');

var Impuesto = function(db, everyone) {
  DB = db;
  Everyone = everyone;
  return Impuesto;
};

Impuesto.get = function(req, res, next) {
  DB.Impuesto.findAll({order: 'nombre ASC'}).on('success', function(imp) {
    var consultas=[]
    imp.forEach(function(p){
      consultas.push(function(fn){
        var b=[]
        DB.ImpuestoBanco.findAll({where:{impuesto_id: p.id}}).on('success',function(pib){
          pib.forEach(function(ib){
            b.push(ib.banco_id)
          })
          fn(null, {
            id: p.id,
            fijo: p.fijo,
            nombre: p.nombre,
            nombreInterno: p.nombreInterno,
            observacion: p.observacion,
            monto0: p.monto0,
            monto1: p.monto1, 
            monto2: p.monto2,
            monto3: p.monto3,
            banco_id: b.toString(),
          })      
        })
      })
    })  
    async.series(consultas, function(err, results) {
      res.send(results);
    });  
  });
};

Impuesto.filtrando = function(req, res, next) {
  DB.CronogramaImpuesto.findAll({where: {asignado: 0, cronograma_id: req.params.cronograma_id}, include: [{model: DB.Impuesto}], order: "`impuesto.nombre`"}).on('success', function(ci){
    var msg=[];
    ci.forEach(function(c){
      msg.push({
        id: c.impuesto.id,
        nombre: c.impuesto.nombre
      })
    })
    res.send(msg)
  })
};

Impuesto.post = function(req, res, next) {
  var p=req.body
  p.monto0= p.monto0 == ''? p.monto0=0.00:parseFloat(p.monto0.replace(",","."))  
  p.monto1= p.monto1 == ''? p.monto1=0.00:parseFloat(p.monto1.replace(",","."))
  p.monto2= p.monto2 == ''? p.monto2=0.00:parseFloat(p.monto2.replace(",","."))
  p.monto3= p.monto3 == ''? p.monto3=0.00:parseFloat(p.monto3.replace(",","."))
  DB.Impuesto.find({ where: {nombre: p.nombre}}).on('success', function(e) {
    if(!e){
      DB.Impuesto.create({
        fijo: p.fijo,
        nombre: p.nombre,
        nombreInterno: p.nombreInterno,
        observacion: p.observacion,
        monto0: p.monto0, 
        monto1: p.monto1, 
        monto2: p.monto2,
        monto3: p.monto3
      }).on('success', function(a){
        if (util.isArray(p.banco_id)) {      
          p.banco_id.forEach(function(id){
            DB.ImpuestoBanco.create({
              impuesto_id: a.id,
              banco_id: id
            })   
          })
        }else{
          DB.ImpuestoBanco.create({
            impuesto_id: a.id,
            banco_id: p.banco_id
          })          
        }
        res.send(true)
      });
    }else{
      res.send(false);
    }  
  })
};

Impuesto.put = function(req, res, next) {
  var p=req.body
  p.monto0= p.monto0 == ''? p.monto0=0:parseFloat(p.monto0.replace(",","."))  
  p.monto1= p.monto1 == ''? p.monto1=0:parseFloat(p.monto1.replace(",","."))
  p.monto2= p.monto2 == ''? p.monto2=0:parseFloat(p.monto2.replace(",","."));
  p.monto3= p.monto3 == ''? p.monto3=0:parseFloat(p.monto3.replace(",","."));
  DB.Impuesto.find({ where: {id: req.params.id} }).on('success', function(e) {
    if (e) {
      e.updateAttributes({
        fijo: p.fijo,
        nombre: p.nombre,
        nombreInterno: p.nombreInterno,
        observacion: p.observacion,
        monto0: p.monto0,         
        monto1: p.monto1, 
        monto2: p.monto2,
        monto3: p.monto3
      }).success(function(a) {
        DB.ImpuestoBanco.findAll({where:{impuesto_id: a.id}}).on('success',function(bancos){
            bancos.forEach(function(b){b.destroy()})
        })
        if (util.isArray(p.banco_id)) {      
          p.banco_id.forEach(function(id){
            DB.ImpuestoBanco.create({
              impuesto_id: a.id,
              banco_id: id
            })   
          })
        }else{
          DB.ImpuestoBanco.create({
            impuesto_id: a.id,
            banco_id: p.banco_id
          })          
        }        
        res.send(true);
      });
    }else{
      res.send(false);
    }
    
  });
};

Impuesto.delete = function(req, res, next) {
  DB.Impuesto.destroy({ id: req.params.id 
  }).on('success',function(){res.send(true)});
};

Impuesto.variable = function(req, res, next) {
  DB.Impuesto.findAll({order: "nombre ASC", where: {fijo: 0}
  }).on('success',function(data){
    var msg=[]
    data.forEach(function(d){
      if(d.nombre.search("Sind")){
        msg.push({
         id: d.id,
         nombre: d.nombre,
         nombreInterno: d.nombreInterno,
         observacion: d.observacion,
         fijo: d.fijo,
         monto0: d.monto0,
         monto1: d.monto1,
         monto2: d.monto2,
         monto3: d.monto3 
        })
      }
    })
    res.send(msg)    
//    res.send(data)
  });
};
module.exports = Impuesto;