module.exports = function(sequelize, DataTypes) {
  return sequelize.define('monto', {
    monto: DataTypes.STRING,
  }, {tableName: 'monto'});
};
