module.exports = function(sequelize, DataTypes) {
  return sequelize.define('rol', {
    nombre: DataTypes.STRING,
  },{ tableName: 'rol'});
};
