module.exports = function(sequelize, DataTypes) {
  return sequelize.define('cierre', {
    nombre: DataTypes.STRING,
  }, {tableName: 'cierre'});
};
