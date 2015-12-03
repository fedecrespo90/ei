var DB, Everyone, 
    moment= require('moment');

var Deuda = function(db, everyone) {
  DB = db;
  Everyone = everyone;
  return Deuda;
};

Deuda.get = function(req, res, next) {
  DB.ClienteCuentaCorriente.findAll({
      where: {id: {ne: 200}},
      include: [{model: DB.Cliente,
                        include: [{
                          model: DB.Actividad
                        }]
                }]
  }).on('success', function(a) {
  	var msg= [];
  	a.forEach(function(cc){
  	  var com;
	  switch (cc.cliente.comunicacion_id) { 
	          case 1:	com="Teléfono: "+cc.cliente.telefono; break; 
	          case 2:	com="Celular: "+cc.cliente.celular; break;
	          case 3:	com="Radio: "+cc.cliente.radio; break; 
	          case 4:	com="E-Mail: "+cc.cliente.email; break; 
	          default:com="Indefinido"; 
	  }
  	  msg.push({
  	    id: cc.id,
  	    clienteNombre: cc.cliente.nombre,
  	    cliente_id: cc.cliente_id,
  	    clienteComunicacion: com,
  	    clienteActividad: cc.cliente.actividad.nombre
  	  })
  	})
  res.send(msg);
  });
};

Deuda.byCliente = function(req, res, next){
  DB.Vencimiento.findAll({
    where: {'cliente_id': req.params.id, pagado: 0, adeudado: 1},
    include: [
      {model: DB.Impuesto, as: "impuesto"},
      {model: DB.Cronograma, as:"cronograma"},
      {model: DB.CronogramaImpuesto, as: "cronogramaImpuesto"}
    ]
  }).on('success', function(a) {
    var msg= [];
  	a.forEach(function(d){ 
    	var variable = "Sin Liquidar"
  	  if(d.cronogramaImpuesto){
    	  variable = moment(d.cronogramaImpuesto.vtoImpuesto).format("DD/MM/YYYY")
        var v = d.cronograma.mes +"/"+d.cronograma.año    	
        if(/Monotributo/.test(d.impuesto.nombre) || /Plan Mis Facilidades AFIP/.test(d.impuesto.nombre) || /Plan de Pagos ARBA/.test(d.impuesto.nombre) ){
          var edit= v.split("/")
          if(edit[0]!="12")
            edit[0]=parseInt(edit[0])+1
          else{
            edit[0]="1"
            edit[1]= parseInt(edit[1])+1
          }
          v=edit.join("/")
        }   
        if(d.anticipo<12 && 0<d.anticipo)
          d.impuesto.nombre+=" - Anticipo "+d.anticipo;
        var tot = parseFloat(d.monto0) +parseFloat(d.monto1) +parseFloat(d.monto2)+parseFloat(d.monto3)+parseFloat(d.monto4)
    	  msg.push({
    	    id: d.id,
    	    anticipo: d.anticipo,
    	    cliente_id: d.cliente_id,
    	    impuesto_id: d.impuesto_id,
    	    vencimiento: variable,
    	    impuestoNombre: d.impuesto.nombre,
    	    liquida: d.liquida,
          monto0: d.monto0,
          monto1: d.monto1,
          monto2: d.monto2,
          monto3: d.monto3,
          monto4: d.monto4,
          montoTotal: tot.toMoney(),
          cronograma_id: d.cronograma_id,
          cronograma: v
    	  })
	    }
  	})
    res.send(msg);
  });
};

module.exports = Deuda;
