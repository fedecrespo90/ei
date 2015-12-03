var DB, Everyone
  , async = require('async')
  , util = require('util')
  , moment = require('moment')
;
var Cliente = function(db, everyone) {
  DB = db;
  Everyone = everyone;

  return Cliente;
};

Cliente.get = function(req, res, next) {
  if(req.session.rol_id > 2){
    DB.ClienteCuentaCorriente.findAll({
      include:
        [{model: DB.CuentaCorriente, as: 'cuentaCorriente'},
         {model: DB.Cliente, as: 'cliente', where: {baja: 0},
           include:   
             [{model: DB.ClienteRubro},
              {model: DB.Clasificacion, as: 'clasificacion'}, 
              {model: DB.Comunicacion, as: 'comunicacion'}, 
              {model: DB.Actividad, as: 'actividad'}]  
        }]
    }).on('success', function(cuentas){
      var consultas=[];
      cuentas.forEach(function(cuenta){
        consultas.push(function(fn){
	        DB.ClienteCuentaCorriente.find({where:{principal:1, cuenta_corriente_id: cuenta.cuentaCorriente.id}}).on('success', function(pri){
	          var com, cliRu='';
	        	if(cuenta.cliente.clienteRubroes){
          	  cuenta.cliente.clienteRubroes.forEach(function(d){
            	  cliRu+=d.rubro_id+','
          	  })
  		      }
	          switch(cuenta.cliente.comunicacion.nombre) { 
	               case "Teléfono":	com="Teléfono: "+cuenta.cliente.telefono; break; 
	               case "Celular":	com="Celular: "+cuenta.cliente.celular; break;
	               case "Radio":	  com="Radio: "+cuenta.cliente.radio; break; 
	               case "Email":	  com="E-Mail: "+cuenta.cliente.email; break; 
	               default:		      com="Indefinido"; 
	          }
	           fn(null, { 
	             id: cuenta.cliente.id,
	             clienteCuentaCorriente_id: cuenta.id,
	             cuentaCorriente_id: cuenta.cuentaCorriente.id,
	             clasificacion_id: cuenta.cliente.clasificacion_id,
	             clasificacion: cuenta.cliente.clasificacion.nombre,
	             comunicacion_id: cuenta.cliente.comunicacion_id,
               cierre_id: cuenta.cliente.cierre_id,
	             comunicacion: com,
	             actividad_id: cuenta.cliente.actividad_id,
	             actividad: cuenta.cliente.actividad.nombre,
	             catedral: cuenta.cliente.catedral,
	             cuit: cuenta.cliente.cuit,
	             nombre: cuenta.cliente.nombre,
	             direccion: cuenta.cliente.direccion,
	             telefono: cuenta.cliente.telefono,
	             celular: cuenta.cliente.celular,
	             email: cuenta.cliente.email,
	             radio: cuenta.cliente.radio,
	             empleado: cuenta.cliente.empleado,
	             negocio: cuenta.cliente.negocio,		       
	             contacto: cuenta.cliente.contacto,
	             observaciones: cuenta.cliente.observaciones,
	             monto: cuenta.cuentaCorriente.monto.toMoney(),
	             montoTramite: cuenta.cuentaCorriente.montoTramite.toMoney(),
	             cliente_id: pri.cliente_id,
	             rubro_id: cliRu
	           })
	        })
	      })
      })
      async.series(consultas, function(err, results){
        res.send(results);      
      })
    })
  }else{
   DB.ClienteCuentaCorriente.findAll({
    where: {id: {ne: 200}},
    include:
      [{model: DB.CuentaCorriente, as: 'cuentaCorriente'},
       {model: DB.Cliente, as: 'cliente', where: {baja: 0},
         include: 
           [{model: DB.ClienteRubro},
            {model: DB.Clasificacion, as: 'clasificacion'}, 
            {model: DB.Comunicacion, as: 'comunicacion'}, 
            {model: DB.Actividad, as: 'actividad'}]
       } 
      ]
    }).on('success', function(cuentas){
        var consultas=[];
	      cuentas.forEach(function(cuenta){
          consultas.push(function(fn){
		        DB.ClienteCuentaCorriente.find({where:{principal:1, cuenta_corriente_id: cuenta.cuentaCorriente.id}}).on('success', function(pri){
		          var com, cliRu='';
		        	if(cuenta.cliente.clienteRubroes){
	          	  cuenta.cliente.clienteRubroes.forEach(function(d){
	            	  cliRu+=d.rubro_id+','
	          	  })
    		      }
		          switch(cuenta.cliente.comunicacion.nombre) { 
		               case "Teléfono":	com="Teléfono: "+cuenta.cliente.telefono; break; 
		               case "Celular":	com="Celular: "+cuenta.cliente.celular; break;
		               case "Radio":	  com="Radio: "+cuenta.cliente.radio; break; 
		               case "Email":	  com="E-Mail: "+cuenta.cliente.email; break; 
		               default:		      com="Indefinido"; 
		          }
		          fn(null, {
		           id: cuenta.cliente.id,
		           clienteCuentaCorriente_id: cuenta.id,
		           cuentaCorriente_id: cuenta.cuentaCorriente.id,
		           clasificacion_id: cuenta.cliente.clasificacion_id,
		           clasificacion: cuenta.cliente.clasificacion.nombre,
		           comunicacion_id: cuenta.cliente.comunicacion_id,
               cierre_id: cuenta.cliente.cierre_id,
		           comunicacion: com,
		           actividad_id: cuenta.cliente.actividad_id,
		           actividad: cuenta.cliente.actividad.nombre,
		           catedral: cuenta.cliente.catedral,
		           cuit: cuenta.cliente.cuit,
		           nombre: cuenta.cliente.nombre,
		           direccion: cuenta.cliente.direccion,
		           telefono: cuenta.cliente.telefono,
		           celular: cuenta.cliente.celular,
		           email: cuenta.cliente.email,
		           radio: cuenta.cliente.radio,
		           empleado: cuenta.cliente.empleado,
		           negocio: cuenta.cliente.negocio,		       
		           contacto: cuenta.cliente.contacto,
		           observaciones: cuenta.cliente.observaciones,
		           monto: cuenta.cuentaCorriente.monto.toMoney(),
		           montoTramite: cuenta.cuentaCorriente.montoTramite.toMoney(),
		           cliente_id: pri.cliente_id,
		           rubro_id: cliRu
		         })
		        })
		      })
        })
        async.series(consultas, function(err, results){
          res.send(results);      
        })
    })
  }
};


Cliente.getAll = function(req, res, next) {
  if(req.session.rol_id > 2){
    DB.ClienteCuentaCorriente.findAll({
      include:
        [{model: DB.CuentaCorriente, as: 'cuentaCorriente'},
         {model: DB.Cliente, as: 'cliente', where: {baja: 0},
           include:   
             [{model: DB.ClienteRubro},
              {model: DB.Clasificacion, as: 'clasificacion'}, 
              {model: DB.Comunicacion, as: 'comunicacion'}, 
              {model: DB.Actividad, as: 'actividad'}]  
        }]
    }).on('success', function(cuentas){
      var consultas=[];
      cuentas.forEach(function(cuenta){
        consultas.push(function(fn){
          DB.ClienteCuentaCorriente.find({where:{principal:1, cuenta_corriente_id: cuenta.cuentaCorriente.id}}).on('success', function(pri){
            var com, cliRu='';
            if(cuenta.cliente.clienteRubroes){
              cuenta.cliente.clienteRubroes.forEach(function(d){
                cliRu+=d.rubro_id+','
              })
            }
            switch(cuenta.cliente.comunicacion.nombre) { 
                 case "Teléfono": com="Teléfono: "+cuenta.cliente.telefono; break; 
                 case "Celular":  com="Celular: "+cuenta.cliente.celular; break;
                 case "Radio":    com="Radio: "+cuenta.cliente.radio; break; 
                 case "Email":    com="E-Mail: "+cuenta.cliente.email; break; 
                 default:         com="Indefinido"; 
            }
             fn(null, { 
               id: cuenta.cliente.id,
               clienteCuentaCorriente_id: cuenta.id,
               cuentaCorriente_id: cuenta.cuentaCorriente.id,
               clasificacion_id: cuenta.cliente.clasificacion_id,
               clasificacion: cuenta.cliente.clasificacion.nombre,
               comunicacion_id: cuenta.cliente.comunicacion_id,
               cierre_id: cuenta.cliente.cierre_id,
               comunicacion: com,
               actividad_id: cuenta.cliente.actividad_id,
               actividad: cuenta.cliente.actividad.nombre,
               catedral: cuenta.cliente.catedral,
               cuit: cuenta.cliente.cuit,
               nombre: cuenta.cliente.nombre,
               direccion: cuenta.cliente.direccion,
               telefono: cuenta.cliente.telefono,
               celular: cuenta.cliente.celular,
               email: cuenta.cliente.email,
               radio: cuenta.cliente.radio,
               empleado: cuenta.cliente.empleado,
               negocio: cuenta.cliente.negocio,          
               contacto: cuenta.cliente.contacto,
               observaciones: cuenta.cliente.observaciones,
               monto: cuenta.cuentaCorriente.monto.toMoney(),
               montoTramite: cuenta.cuentaCorriente.montoTramite.toMoney(),
               cliente_id: pri.cliente_id,
               rubro_id: cliRu
             })
          })
        })
      })
      async.series(consultas, function(err, results){
        res.send(results);      
      })
    })
  }else{
   DB.ClienteCuentaCorriente.findAll({
    where: {id: {ne: 200}},
    include:
      [{model: DB.CuentaCorriente, as: 'cuentaCorriente'},
       {model: DB.Cliente, as: 'cliente', where: {baja: 0},
         include: 
           [{model: DB.ClienteRubro},
            {model: DB.Clasificacion, as: 'clasificacion'}, 
            {model: DB.Comunicacion, as: 'comunicacion'}, 
            {model: DB.Actividad, as: 'actividad'}]
       } 
      ]
    }).on('success', function(cuentas){
        var consultas=[];
        cuentas.forEach(function(cuenta){
          consultas.push(function(fn){
            DB.ClienteCuentaCorriente.find({where:{principal:1, cuenta_corriente_id: cuenta.cuentaCorriente.id}}).on('success', function(pri){
              var com, cliRu='';
              if(cuenta.cliente.clienteRubroes){
                cuenta.cliente.clienteRubroes.forEach(function(d){
                  cliRu+=d.rubro_id+','
                })
              }
              switch(cuenta.cliente.comunicacion.nombre) { 
                   case "Teléfono": com="Teléfono: "+cuenta.cliente.telefono; break; 
                   case "Celular":  com="Celular: "+cuenta.cliente.celular; break;
                   case "Radio":    com="Radio: "+cuenta.cliente.radio; break; 
                   case "Email":    com="E-Mail: "+cuenta.cliente.email; break; 
                   default:         com="Indefinido"; 
              }
              fn(null, {
               id: cuenta.cliente.id,
               clienteCuentaCorriente_id: cuenta.id,
               cuentaCorriente_id: cuenta.cuentaCorriente.id,
               clasificacion_id: cuenta.cliente.clasificacion_id,
               clasificacion: cuenta.cliente.clasificacion.nombre,
               comunicacion_id: cuenta.cliente.comunicacion_id,
               cierre_id: cuenta.cliente.cierre_id,
               comunicacion: com,
               actividad_id: cuenta.cliente.actividad_id,
               actividad: cuenta.cliente.actividad.nombre,
               catedral: cuenta.cliente.catedral,
               cuit: cuenta.cliente.cuit,
               nombre: cuenta.cliente.nombre,
               direccion: cuenta.cliente.direccion,
               telefono: cuenta.cliente.telefono,
               celular: cuenta.cliente.celular,
               email: cuenta.cliente.email,
               radio: cuenta.cliente.radio,
               empleado: cuenta.cliente.empleado,
               negocio: cuenta.cliente.negocio,          
               contacto: cuenta.cliente.contacto,
               observaciones: cuenta.cliente.observaciones,
               monto: cuenta.cuentaCorriente.monto.toMoney(),
               montoTramite: cuenta.cuentaCorriente.montoTramite.toMoney(),
               cliente_id: pri.cliente_id,
               rubro_id: cliRu
             })
            })
          })
        })
        async.series(consultas, function(err, results){
          res.send(results);      
        })
    })
  }
};



Cliente.getNombre = function(req, res, next){
  DB.Cliente.findAll({where: {baja: 0}}).on('success', function(cl){
    var msg = []
    cl.forEach(function(c){
      msg.push({
        id: c.id,
        nombre: c.nombre+" ID:"+c.id
      })
    })
    res.send(msg)
  })
}

Cliente.conCuenta = function(req, res, next){
 DB.ClienteCuentaCorriente.findAll({
    where: {principal: 1},
    include:[{model: DB.Cliente, as: 'cliente', where: {baja:0}}]
  }).on('success', function(cuentas){
    var msg=[];
    cuentas.forEach(function(cuenta){
      var com;
      msg.push({ 
       id: cuenta.cliente.id,
       nombre: cuenta.cliente.nombre,
     })
    })
    res.send(msg);
  })
};

Cliente.post = function(req, res, next) {
  DB.Cliente.find({ where: {
    nombre: req.body.nombre,
    clasificacion_id: req.body.clasificacion_id,
    actividad_id: req.body.actividad_id,
    comunicacion_id: req.body.comunicacion_id,
    cierre_id: req.body.cierre_id,
    empleado: req.body.empleado,
    }
  }).on('success', function(e) {
    if(!e){
      var r= req.body;
      if(r.cliente_id == ''){
        DB.Cliente.create({
          actividad_id: r.actividad_id,
          clasificacion_id: r.clasificacion_id,
          cierre_id: r.cierre_id,
          comunicacion_id: r.comunicacion_id,
          catedral: r.catedral,
          cuit: r.cuit,
          direccion: r.direccion,
          nombre: r.nombre,
          telefono: r.telefono,
          celular: r.celular,
          email: r.email,
          radio: r.radio,
          empleado: r.empleado,
          contacto: r.contacto,
          observaciones: r.observaciones
        }).on('success', function(cliente){ 
          DB.CuentaCorriente.create({
            monto: req.body.monto || 0,
            montoTramite: req.body.montoTramite || 0
          }).on('success', function(cuenta){
             DB.ClienteCuentaCorriente.create({
                principal: 1,
                cuenta_corriente_id: cuenta.id,
                cliente_id:cliente.id
             }).on('success', function(){
               if(req.body.rubro_id){
                if (util.isArray(req.body.rubro_id)) {      
                 req.body.rubro_id.forEach(function(rr){
                   if(rr!=''){
                    DB.ClienteRubro.find({where:{cliente_id: req.params.id, rubro_id: rr}}).on('success',function(r){
                      if(!r){
                        DB.ClienteRubro.create({
                          cliente_id:cliente.id,
                          rubro_id: rr
                        })
                      }
                    })
                   }
                 })
                }else{
                   var rr = req.body.rubro_id;
                   if(rr!=''){
                    DB.ClienteRubro.find({where:{cliente_id: req.params.id, rubro_id: rr}}).on('success',function(r){
                      if(!r){
                        DB.ClienteRubro.create({
                          cliente_id:cliente.id,
                          rubro_id: rr
                        })
                      }
                    })   
                   }             
                }
               }
               res.send(true)
             })
          });
        })
      }else{
        DB.Cliente.create({
          actividad_id: r.actividad_id,
          clasificacion_id: r.clasificacion_id,
          cierre_id: r.cierre_id,
          comunicacion_id: r.comunicacion_id,
          catedral: r.catedral,
          cuit: r.cuit,
          nombre: r.nombre,
          direccion: r.direccion,
          telefono: r.telefono,
          celular: r.celular,
          email: r.email,
          radio: r.radio,
          empleado: r.empleado,
          contacto: r.contacto,
          observaciones: r.observaciones
        }).on('success', function(cliente){ 
          DB.ClienteCuentaCorriente.find({
            where: {cliente_id: r.cliente_id,
                    principal: 1
                   }
          }).on('success', function (ccc){
            DB.ClienteCuentaCorriente.create({
              principal:0,
              cuenta_corriente_id: ccc.cuenta_corriente_id,
              cliente_id: cliente.id
            }).on('success', function(){
              if(req.body.rubro_id){
                req.body.rubro_id.forEach(function(rr){
                  if(rr!=''){  
                    DB.ClienteRubro.find({where:{cliente_id: req.parmas.id, rubro_id: rr}}).on('success',function(r){
                      if(!r){
                        DB.ClienteRubro.create({
                          cliente_id:cliente.id,
                          rubro_id: rr
                        })
                      }
                    })
                  }
                })
              }
              res.send(true)
            })
          })
        })
      }
    }
  })  
};

Cliente.put = function(req, res, next) {
	DB.Cliente.find({ where: {id: req.params.id} }).on('success', function(c) {
	  if(c){
	    c.updateAttributes(req.body).success(function() {
        var q = "DELETE FROM clienteRubro \
                WHERE cliente_id="+req.params.id;
        DB._.query(q, function(err, data) {
	        if(req.body.rubro_id!=''){                
            req.body.rubro_id.forEach(function(rr){
              if(rr!=''){
                DB.ClienteRubro.find({where:{cliente_id: req.params.id, rubro_id: rr}}).on('success',function(r){
                  if(!r){
                    DB.ClienteRubro.create({
                      cliente_id:req.params.id,
                      rubro_id: rr
                    })
                  }
                })
              }
            })
            res.send(true)
          }
          res.send(true)
        })
      })
    }else{
      res.send(false)
    }
	});
};

Cliente.delete = function(req, res, next){
  DB.Cliente.find({where: {id: req.params.id}}).on('success',function(cliente){
    var detalle =  "Baja el "+moment().format("YYYY/MM/DD");
    cliente.updateAttributes({email: "2014estudiocontable@gmail.com", contacto: cliente.contacto+"-"+detalle})
    var q = "DELETE FROM clienteImpuesto where cliente_id = "+req.params.id;
    DB._.query(q, function(err, data){ 
      var qu = "DELETE FROM clienteRubro where cliente_id = "+req.params.id;
      DB._.query(qu, function(err, data){ 
        res.send(true)
      })        
    })
  })
};

module.exports = Cliente;
