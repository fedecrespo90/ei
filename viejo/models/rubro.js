module.exports = function(sequelize, DataTypes) {
  return sequelize.define('rubro', {
    nombre: DataTypes.STRING,
    observacion: DataTypes.STRING,    
  },{ tableName: 'rubro'});
};
