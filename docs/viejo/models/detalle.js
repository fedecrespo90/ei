module.exports = function(sequelize, DataTypes) {
  return sequelize.define('detalle', {
    ingreso: DataTypes.INTEGER,//1 o 0 (No Boolean)
    nombre: DataTypes.STRING,
  }, {tableName: 'detalle'});
};
