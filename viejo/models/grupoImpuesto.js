module.exports = function(sequelize, DataTypes) {
  return sequelize.define('grupoImpuesto', {
    enviado: DataTypes.BOOLEAN,
    pagado: DataTypes.BOOLEAN,
    total: DataTypes.DECIMAL,
    diaDePago: DataTypes.DATE,
  },{ tableName: 'grupoImpuesto'});
};
