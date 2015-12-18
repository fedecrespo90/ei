module.exports = function(sequelize, DataTypes) {
  return sequelize.define('movimiento', {
    tramite: DataTypes.BOOLEAN,
    monto: DataTypes.DECIMAL(10,2),
    observacion: DataTypes.STRING,      
    ingreso: DataTypes.BOOLEAN
  },{ tableName: 'movimiento'});
};
