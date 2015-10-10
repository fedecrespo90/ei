module.exports = function(sequelize, DataTypes) {
  return sequelize.define('clienteClave', {
    pass: DataTypes.STRING,
  }, {tableName: 'clienteClave'});
};
