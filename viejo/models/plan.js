module.exports = function(sequelize, DataTypes) {
  return sequelize.define('plan', {
    nombre: DataTypes.STRING,
    descripcion: DataTypes.STRING,
  }, {tableName: 'plan'});
};
