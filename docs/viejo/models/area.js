module.exports = function(sequelize, DataTypes) {
  return sequelize.define('area', {
    nombre: DataTypes.STRING,
    observacion: DataTypes.STRING,    
  }, {tableName: 'area'});
};
