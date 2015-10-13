module.exports = function(sequelize, DataTypes) {
  return sequelize.define('actividad', {
    nombre: DataTypes.STRING,
    observacion: DataTypes.STRING,
    idFormularioAfip: DataTypes.INTEGER,
  }, {tableName: 'actividad'});
};
