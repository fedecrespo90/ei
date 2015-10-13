module.exports = function(sequelize, DataTypes) {
  return sequelize.define('asigPie', {
    observacion: DataTypes.STRING,
  }, {tableName: 'asigPie'});
};
