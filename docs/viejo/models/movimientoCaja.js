module.exports = function(sequelize, DataTypes) {
  return sequelize.define('movimientoCaja', {
    ingreso: DataTypes.INTEGER,
//    recibo_id: DataTypes.INTEGER,
    monto_total: DataTypes.DECIMAL(10,2),
    monto: DataTypes.DECIMAL(10,2),
    observacion: DataTypes.STRING,
    concepto: DataTypes.STRING,
    subConcepto: DataTypes.STRING,
    rSubConcepto: DataTypes.STRING,
    chequeado: DataTypes.INTEGER,
    recibido: DataTypes.DATE,
  },{ tableName: 'movimientoCaja'});
};
