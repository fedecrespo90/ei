var _ = require('underscore')
  , fs   = require('fs');
module.exports = function() {
var mysql = require('mysql')
  , mysqlqueue = require('mysql-queues')
  , Sequelize = require('sequelize')
  , sequelize = new Sequelize('pressacco', 'root', 'Emc#362', {
      dialect: "mysql",
      port:    3306,
      logging: true,
      define: { timestamps: true, paranoid: true, underscored: true }
    })

sequelize
  .authenticate()
  .complete(function(err) {
    if (!!err) {
      console.log('Unable to connect to the database: ', err)
    } else {
      console.log('Connection has been established successfully.')
    }
  })

Number.prototype.toMoney = function(places, symbol, thousand, decimal) {
	places = !isNaN(places = Math.abs(places)) ? places : 2;
	symbol = symbol !== undefined ? symbol : "";
	thousand = thousand || ".";
	decimal = decimal || ",";
	var number = this, 
	    negative = number < 0 ? "-" : "",
	    i = parseInt(number = Math.abs(+number || 0).toFixed(places), 10) + "",
	    j = (j = i.length) > 3 ? j % 3 : 0;
	return symbol + negative + (j ? i.substr(0, j) + thousand : "") + i.substr(j).replace(/(\d{3})(?=\d)/g, "$1" + thousand) + (places ? decimal + Math.abs(number - i).toFixed(places).slice(2) : "");
}; 

var DB = {
    _:  mysql.createConnection({
      user: 'root',
      password: 'Emc#362',
      database: 'pressacco',
   //   logging: false
}),
    whereID: function(id) {
      return { where: ["id = ? AND deleted_at IS NULL", id] };
    }
};

  var modelFiles = fs.readdirSync(__dirname + '/models')
  var model, Model;

  modelFiles.forEach(function(val, index, array) {
    model = val.split('.')[0];
    Model = model.charAt(0).toUpperCase() + model.slice(1);
    DB[Model] = sequelize.import(__dirname + '/models/' + model + '.js');
  });
//Relaciones
//Actividad
//Area
//Autorizacion
  DB.Autorizacion.belongsTo(DB.Empleado)
  DB.Autorizacion.belongsTo(DB.Cliente)
//Banco
//Caja
//Clasificacion
//Cierre
//Concepto
//Clave
//Cliente
  DB.Cliente.hasMany(DB.ClienteRubro)
  DB.Cliente.belongsTo(DB.Clasificacion)
  DB.Cliente.belongsTo(DB.Comunicacion)
  DB.Cliente.belongsTo(DB.Cierre)
  DB.Cliente.belongsTo(DB.Actividad)
  DB.Cliente.hasOne(DB.ClienteCuentaCorriente)
//ClienteClave
  DB.ClienteClave.belongsTo(DB.Cliente)
  DB.ClienteClave.belongsTo(DB.Clave)
//ClienteCuentaCorriente
  DB.ClienteCuentaCorriente.belongsTo(DB.CuentaCorriente)
  DB.ClienteCuentaCorriente.belongsTo(DB.Cliente)
//ClienteDocumentacion
  DB.ClienteDocumentacion.belongsTo(DB.Documentacion)
  DB.ClienteDocumentacion.belongsTo(DB.Cliente)
  DB.ClienteDocumentacion.belongsTo(DB.Recibo)
//ClienteImpuesto
  DB.ClienteImpuesto.belongsTo(DB.Rubro)
  DB.ClienteImpuesto.belongsTo(DB.Cliente)
  DB.ClienteImpuesto.belongsTo(DB.Impuesto)
//ClienteRubro
  DB.ClienteRubro.belongsTo(DB.Rubro)
  DB.ClienteRubro.belongsTo(DB.Cliente)
//Cronograma
  DB.Cronograma.hasMany(DB.CronogramaImpuesto)
//CronogramaImpuesto
  DB.CronogramaImpuesto.belongsTo(DB.Impuesto)
  DB.CronogramaImpuesto.belongsTo(DB.Cronograma)  
//CuentaCorriente
  DB.CuentaCorriente.hasOne(DB.ClienteCuentaCorriente)
//DetallePago
  DB.DetallePago.belongsTo(DB.Vencimiento)
  DB.DetallePago.belongsTo(DB.ModoPago)
  DB.DetallePago.belongsTo(DB.Recibo)
//Empleado
//GrupoImpuesto
  DB.GrupoImpuesto.belongsTo(DB.Empleado)
  DB.GrupoImpuesto.belongsTo(DB.Banco)
  DB.GrupoImpuesto.belongsTo(DB.Recibo)
//Impuesto
  DB.Impuesto.hasMany(DB.ImpuestoBanco)
//ImpuestoBanco
  DB.ImpuestoBanco.belongsTo(DB.Impuesto)
  DB.ImpuestoBanco.belongsTo(DB.Banco)
//ImpuestoMonto
  DB.ImpuestoMonto.belongsTo(DB.Impuesto)
  DB.ImpuestoMonto.belongsTo(DB.Monto)
//ImpuestoRubro
  DB.ImpuestoRubro.belongsTo(DB.Impuesto)
  DB.ImpuestoRubro.belongsTo(DB.Rubro)
//ModoPago
//Monto
//Movimiento
  DB.Movimiento.belongsTo(DB.DetallePago)
  DB.Movimiento.belongsTo(DB.Vencimiento)  
  DB.Movimiento.belongsTo(DB.ClienteCuentaCorriente)
//MovimientoCaja
  DB.MovimientoCaja.belongsTo(DB.Caja)
  DB.MovimientoCaja.belongsTo(DB.Recibo)  
//Recibo
//Novedades
  DB.Novedades.belongsTo(DB.Area)
  DB.Novedades.belongsTo(DB.Empleado)
//Rol
//Rubro
//Usuario
  DB.Usuario.belongsTo(DB.Empleado)
  DB.Usuario.belongsTo(DB.Area)
  DB.Usuario.belongsTo(DB.Rol)
//Vencimiento
  DB.Vencimiento.belongsTo(DB.Cliente)
  DB.Vencimiento.belongsTo(DB.ClienteImpuesto)  
  DB.Vencimiento.belongsTo(DB.Cronograma)  
  DB.Vencimiento.belongsTo(DB.CronogramaImpuesto)    
  DB.Vencimiento.belongsTo(DB.Impuesto)
  DB.Vencimiento.belongsTo(DB.Rubro)
  DB.Vencimiento.belongsTo(DB.GrupoImpuesto)
//VencimientoMonto
  DB.VencimientoMonto.belongsTo(DB.Vencimiento)
  DB.VencimientoMonto.belongsTo(DB.Monto)
//Ot
  DB.Ot.belongsTo(DB.Cliente)  
  DB.Ot.belongsTo(DB.Comunicacion)    
  DB.Ot.belongsTo(DB.Plan)
  DB.Ot.hasMany(DB.OtTarea)  
  DB.Ot.hasMany(DB.Oc)
  DB.Ot.belongsTo(DB.Usuario)
    //  DB.Ot.hasMany(DB.OtTarea)
//OC
  DB.Oc.belongsTo(DB.Cliente)
  DB.Oc.belongsTo(DB.Comunicacion)
  DB.Oc.belongsTo(DB.Empleado)
  
//OtTarea  
  DB.OtTarea.belongsTo(DB.Area)
  DB.OtTarea.belongsTo(DB.Empleado)  
//  DB.OtTarea.belongsTo(DB.Usuario)
  DB.OtTarea.belongsTo(DB.Ot) 
//OtTareaResource  
  DB.OtTareaResource.belongsTo(DB.OtTarea)
  DB.OtTareaResource.belongsTo(DB.Empleado)  
//Plan
  DB.Plan.hasMany(DB.PlanTarea)
//PlanTarea
  DB.PlanTarea.belongsTo(DB.Plan)
  DB.PlanTarea.belongsTo(DB.Tarea)
  DB.OtTareaResource.belongsTo(DB.Empleado)    
//Tarea  
  DB.Tarea.belongsTo(DB.Area)
  DB.Tarea.belongsTo(DB.Empleado)  
  return DB;
};
