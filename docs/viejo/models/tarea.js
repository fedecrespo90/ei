module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tarea', {
    nombre: DataTypes.STRING,
    posicion: DataTypes.STRING,
    descripcion: DataTypes.STRING,
    tiempoEstimado: DataTypes.STRING,
  }, {tableName: 'tarea'});
};
