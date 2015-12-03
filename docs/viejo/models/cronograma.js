module.exports = function(sequelize, DataTypes) {
  return sequelize.define('cronograma', {
    año: DataTypes.STRING,
    mes: DataTypes.STRING,
    auditado: DataTypes.BOOLEAN,
  }, {tableName: 'cronograma'});
};
