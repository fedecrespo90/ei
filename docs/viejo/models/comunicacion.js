module.exports = function(sequelize, DataTypes) {
  return sequelize.define('comunicacion', {
    nombre: DataTypes.STRING,
  }, {tableName: 'comunicacion'});
};
