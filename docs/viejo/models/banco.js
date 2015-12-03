module.exports = function(sequelize, DataTypes) {
  return sequelize.define('banco', {
    nombre: DataTypes.STRING,
    rangoHorario: DataTypes.STRING,
    direccion: DataTypes.STRING,
    puntaje: DataTypes.STRING,
  }, {tableName: 'banco'});
};
