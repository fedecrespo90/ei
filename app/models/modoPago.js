module.exports = function(sequelize, DataTypes) {
  return sequelize.define('modoPago', {
    monto: DataTypes.STRING,
    detalle: DataTypes.STRING,
  }, {tableName: 'modoPago'});
};
