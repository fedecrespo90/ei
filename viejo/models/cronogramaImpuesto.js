module.exports = function(sequelize, DataTypes) {
  return sequelize.define('cronogramaImpuesto', {
  	asignado: DataTypes.INTEGER,
    vtoAviso: DataTypes.DATE,
    vtoAsignacion: DataTypes.DATE,
    vtoRecepcion: DataTypes.DATE,
    vtoImpuesto: DataTypes.DATE,
  }, {tableName: 'cronogramaImpuesto'});
};
