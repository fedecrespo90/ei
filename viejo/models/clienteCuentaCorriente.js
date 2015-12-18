module.exports = function(sequelize, DataTypes) {
  return sequelize.define('clienteCuentaCorriente', {
    principal: DataTypes.BOOLEAN,
  },{ tableName: 'clienteCuentaCorriente'});
};
