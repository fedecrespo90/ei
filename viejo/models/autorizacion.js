module.exports = function(sequelize, DataTypes) {
  return sequelize.define('autorizacion', {
    descubierto: DataTypes.DECIMAL(10,2),
  }, {tableName: 'autorizacion'});
};
