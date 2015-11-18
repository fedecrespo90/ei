module.exports = function(sequelize, DataTypes) {
  return sequelize.define('otTareaResource', {
  	empleado_horas:	DataTypes.INTEGER,
  	empleado_minutos: DataTypes.INTEGER,
  }, {tableName: 'otTareaResource'});
};
