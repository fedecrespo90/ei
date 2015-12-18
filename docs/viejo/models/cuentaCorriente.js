module.exports = function(sequelize, DataTypes) {
  return sequelize.define('cuentaCorriente', {
    observacion: DataTypes.STRING,
    monto: DataTypes.STRING,
    montoTramite: DataTypes.STRING,
  },{ tableName: 'cuentaCorriente'});
};
