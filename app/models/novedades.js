module.exports = function(sequelize, DataTypes) {
  return sequelize.define('novedades', {
    descripcion: DataTypes.STRING,
    novedad: DataTypes.STRING,
    activa: DataTypes.BOOLEAN,
  }, {tableName: 'novedades'});
};

