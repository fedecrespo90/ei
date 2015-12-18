module.exports = function(sequelize, DataTypes) {
  return sequelize.define('cierresCaja', {
    fechaCierre: DataTypes.DATE,
    empleado_id: DataTypes.INTEGER,
    montoCheques: DataTypes.DECIMAL(10,2),
    montoEfectivo: DataTypes.DECIMAL(10,2),
    montoCaja: DataTypes.DECIMAL(10,2),
    montoPagos: DataTypes.DECIMAL(10,2),
    montoCtaCliente: DataTypes.DECIMAL(10,2),
    montoTotal: DataTypes.DECIMAL(10,2),
    primerReciboE: DataTypes.INTEGER,
    ultimoReciboE: DataTypes.INTEGER,
    primerReciboH: DataTypes.INTEGER,
    ultimoReciboH: DataTypes.INTEGER,
  },{ tableName: 'cierresCaja'});
};
