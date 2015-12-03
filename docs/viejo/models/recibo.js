module.exports = function(sequelize, DataTypes) {
  return sequelize.define('recibo', {
    c: DataTypes.INTEGER,
    d: DataTypes.INTEGER,
    e: DataTypes.INTEGER,
    f: DataTypes.INTEGER,
    g: DataTypes.INTEGER,
    h: DataTypes.INTEGER,
    concepto: DataTypes.STRING,
    receptor: DataTypes.STRING,
  },{ tableName: 'recibo'});
};
