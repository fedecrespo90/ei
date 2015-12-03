module.exports = function(sequelize, DataTypes) {
  return sequelize.define('impuesto', {
    fijo: DataTypes.INTEGER,
    nombre: DataTypes.STRING,    
    nombreInterno: DataTypes.STRING,        
    observacion: DataTypes.STRING, 
    monto0: DataTypes.DECIMAL(10,2),     
    monto1: DataTypes.DECIMAL(10,2), 
    monto2: DataTypes.DECIMAL(10,2),
    monto3: DataTypes.DECIMAL(10,2),
  }, {tableName: 'impuesto'});
};
