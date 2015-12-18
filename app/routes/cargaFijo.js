var DB, Everyone
  , moment= require('moment');

var CargaFijo = function(db, everyone) {
  DB = db;
  Everyone = everyone;
  return CargaFijo;
};

CargaFijo.get = function(req, res, next) {
  DB.Impuesto.findAll({
        where:{fijo:1}
  }).on('success', function(imp) {
      res.send(imp);
  });
};

CargaFijo.post = function(req, res, next) {
  req.body.monto0= req.body.monto0 == ''? req.body.monto0=0:parseFloat(req.body.monto0.replace(",","."));
  req.body.monto1= req.body.monto1 == ''? req.body.monto1=0:parseFloat(req.body.monto1.replace(",","."));
  req.body.monto2= req.body.monto2 == ''? req.body.monto2=0:parseFloat(req.body.monto2.replace(",","."));
  req.body.monto3= req.body.monto3 == ''? req.body.monto3=0:parseFloat(req.body.monto3.replace(",","."));
  DB.Impuesto.find({ where: {
          nombre: req.body.nombre,
          }
  }).on('success', function(e) {
    if(!e){
      DB.Impuesto.create(req.body
      ).on('success', function(a){res.send(true)});
    }
  })
};

CargaFijo.put = function(req, res, next) {
  req.body.monto0= req.body.monto0 == ''? req.body.monto0=0:parseFloat(req.body.monto0.replace(",","."));
  req.body.monto1= req.body.monto1 == ''? req.body.monto1=0:parseFloat(req.body.monto1.replace(",","."));
  req.body.monto2= req.body.monto2 == ''? req.body.monto2=0:parseFloat(req.body.monto2.replace(",","."));
  req.body.monto3= req.body.monto3 == ''? req.body.monto3=0:parseFloat(req.body.monto3.replace(",","."));
  DB.Impuesto.find({where: {id: req.params.id}}).on('success', function(imp){
    imp.updateAttributes({monto1: req.body.monto1, monto2: req.body.monto2, monto3: req.body.monto3, monto0: req.body.monto0}).on('success', function (){
      res.send(true)
    })
  })
};

CargaFijo.delete = function(req, res, next) {
  DB.Impuesto.destroy({ id: req.params.id
  }).on('success',function(){res.send(true)});
};

module.exports = CargaFijo;
