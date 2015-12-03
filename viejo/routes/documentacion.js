var DB, Everyone
  , moment= require('moment');
var Documentacion = function(db, everyone) {
  DB = db;
  Everyone = everyone;

  return Documentacion;
};

Documentacion.get = function(req, res, next) {
  DB.ClienteDocumentacion.findAll(
          {where: {cliente_id: req.params.cliente_id},
          include: [{model: DB.Documentacion},{model: DB.Recibo}]
  }).on('success', function(a){
    var msg= [];
    a.forEach(function(d){
      msg.push({
        documentacionNombre: d.documentacion.nombre,
        recepcion: moment(d.created_at).format('DD/MM/YYYY'),
        id: d.id,
        cc_id: d.id,        
        cliente_id: d.cliente_id,
        reciboNro: d.recibo.d
      })
    })
    res.send(msg)  
  })
};

Documentacion.post = function(req, res, next){
  DB.Recibo.max('d').on('success',function(maximo){
    if(isNaN(maximo)){maximo=1}else{maximo++}
    DB.Cliente.find({where:{ id: req.body.cliente_id}}).on('success', function(cli){
      DB.Recibo.create({
        d: maximo,
        concepto: req.body.iedoc_id+" de Documentación <br />"+req.body.documentacionNombre,
        receptor: cli.nombre
      }).on('success', function(rec){
        DB.Documentacion.create({nombre: req.body.iedoc_id+" de Documentacion: "+ req.body.documentacionNombre }).on('success', function(a){
          DB.ClienteDocumentacion.create({
            cliente_id: req.body.cliente_id,
            documentacion_id: a.id, 
            recibo_id: rec.id
          }).on('success', function(){
            DB.Usuario.find({where:{id: req.session.usuario_id}, include:[{model: DB.Empleado}]}).on('success', function(us){
              res.send({
                operador: us.empleado.nombre+' '+us.empleado.apellido,
                hora: moment(rec.updated_at).format("DD/MM/YYYY  HH:mm"),
                nro: rec.d,
                concepto: rec.concepto,
                receptor: rec.receptor
              });
            })
          })
        })
      })          
    })
  })
};

Documentacion.put = function(req, res, next) {

};

module.exports = Documentacion;
