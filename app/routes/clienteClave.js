var DB, Everyone
  , moment= require('moment');

var ClienteClave = function(db, everyone) {
  DB = db;
  Everyone = everyone;
  return ClienteClave;
};

ClienteClave.get = function(req, res, next) {
 DB.ClienteCuentaCorriente.findAll({
    where: {id: {ne: 200}},
    include:[{model: DB.Cliente, as: 'cliente',
            include:
              [
               {model: DB.Comunicacion, as: 'comunicacion'}
              ]
            }
    ]
  }).on('success', function(cuentas){
      var msg=[];
	    cuentas.forEach(function(cuenta){
		      var com;
		      switch (cuenta.cliente.comunicacion.nombre) {
		           case "Teléfono":	com= "Teléfono: " + cuenta.cliente.telefono; break;
		           case "Celular":	com= "Celular: "  + cuenta.cliente.celular; break;
		           case "Radio":	  com= "Radio: "    + cuenta.cliente.radio; break;
		           case "Email":	  com= "E-Mail: "   + cuenta.cliente.email; break;
		           default:		      com= "Indefinido" ;
		      }
		      msg.push({
		       id: cuenta.cliente.id,
		       comunicacion: com,
		       catedral: cuenta.cliente.catedral,
		       cuit: cuenta.cliente.cuit,
		       nombre: cuenta.cliente.nombre,
		       contacto: cuenta.cliente.contacto,
		     })
      })
      res.send(msg);
  })
}

ClienteClave.byCliente = function(req, res, next) {
  DB.Clave.findAll({order: 'nombre ASC'}).on('success', function(cla) {
    DB.ClienteClave.findAll({where: {cliente_id: req.params.cliente_id}}).on('success', function(cliClave){
      DB.Cliente.find({where: {id: req.params.cliente_id}}).on('success', function(cliente){
        var msg = []
        cla.forEach(function(clave){
          var pass=''
            , clienteClaveID=-1;
          cliClave.forEach(function(c){
            if(c.clave_id == clave.id){
              pass=c.pass;
              clienteClaveID=c.id
            }
          })
          msg.push({
            idClienteClave: clienteClaveID,
            idCliente: req.params.cliente_id,
            idClave: clave.id,
            nombre: clave.nombre, ////
            pass: pass,
            cuit: cliente.cuit,
          })
        })
        res.send(msg);
      })
    })
  });
};

ClienteClave.delete = function(req, res, next) {
  DB.ClienteImpuesto.destroy({ id: req.params.id }).on('success',function(){res.send(true)});
};

ClienteClave.post = function(req, res, next) {
  var o = req.body
  for (var p in o ) {
    var clienteClave_id = p.split("::")[0]
    var clave_id = p.split("::")[1]
    var pass = o[p]//req.params.pass
    a(clienteClave_id, clave_id,pass, req.params.id)
  }
res.send(true)
};

//SACO ESTA COND PARA EL BUG 8
function a (clienteClave_id, clave_id, pass, id){
  //if((clienteClave_id == -1)&&(pass != '')){
    DB.ClienteClave.create({
      cliente_id: id,
      clave_id: clave_id,
      pass: pass //1616
    })
  //}else{
    /*if(clienteClave_id !=-1 ){
      DB.ClienteClave.find({where: " id = "+clienteClave_id+' AND pass <>  "'+pass+'"  ' }).on('success',function(cc){
        console.log(cc)
        var as = pass;
        if(cc){
          cc.updateAttributes({pass: as})//1717
        }
      })
    }
  //}*/
}
module.exports = ClienteClave;
