module.exports = function(sequelize, DataTypes) {
  return sequelize.define('clave', {
    nombre: DataTypes.STRING,
    pagina: DataTypes.STRING,
    descripcion: DataTypes.STRING,
  }, {tableName: 'clave'});
};

