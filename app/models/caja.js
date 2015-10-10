module.exports = function(sequelize, DataTypes) {
  return sequelize.define('caja', {
    nombre: DataTypes.STRING,
    monto: DataTypes.DECIMAL(10,2),
  }, {tableName: 'caja'});
};
