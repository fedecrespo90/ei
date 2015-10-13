module.exports = function(sequelize, DataTypes) {
  return sequelize.define('usuario', {
    usuario: DataTypes.STRING,
    pass: DataTypes.STRING,
  }, {tableName: 'usuario'});
};
