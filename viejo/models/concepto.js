module.exports = function(sequelize, DataTypes) {
  return sequelize.define('concepto', {
    nombre: DataTypes.STRING,
    sub: DataTypes.INTEGER,    
  }, {tableName: 'concepto'});
};
