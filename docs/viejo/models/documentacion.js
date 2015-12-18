module.exports = function(sequelize, DataTypes) {
  return sequelize.define('documentacion', {
    nombre: DataTypes.STRING,
  }, {tableName: 'documentacion'});
};
