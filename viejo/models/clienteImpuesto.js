module.exports = function(sequelize, DataTypes) {
  return sequelize.define('clienteImpuesto', {
    paga: DataTypes.INTEGER,  
    adherentes: DataTypes.INTEGER,      
    detalle: DataTypes.STRING,      
  }, {tableName: 'clienteImpuesto'});
};
