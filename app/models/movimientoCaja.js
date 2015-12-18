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
    //Agregados:
    cierreCaja_id: DataTypes.INTEGER,
    montoEfectivo: DataTypes.DECIMAL(10,2),
    montoCheque: DataTypes.DECIMAL(10,2),
    nombreBanco: DataTypes.STRING,
    numeroCheque: DataTypes.INTEGER,
    titularCheque: DataTypes.STRING,
    fechaEmision: DataTypes.DATE,
    fechaCobro: DataTypes.DATE,
  },{ tableName: 'movimientoCaja'});
};
