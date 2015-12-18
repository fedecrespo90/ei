module.exports = function(sequelize, DataTypes) {
  return sequelize.define('clasificacion', {
    nombre: DataTypes.STRING,
    observacion: DataTypes.STRING,    
  }, {tableName: 'clasificacion'});
};
