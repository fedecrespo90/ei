module.exports = function(sequelize, DataTypes) {
  return sequelize.define('clienteDocumentacion', {
    archivado: DataTypes.BOOLEAN,
  }, {tableName: 'clienteDocumentacion'});
};
