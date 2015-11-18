module.exports = function(sequelize, DataTypes) {
  return sequelize.define('vencimiento', {
    archivado: DataTypes.BOOLEAN,
    adeudado: DataTypes.BOOLEAN,    
    avisado: DataTypes.BOOLEAN,
    pagado: DataTypes.INTEGER,
    descargado: DataTypes.INTEGER,    
    liquida: DataTypes.INTEGER,                    
    anticipo: DataTypes.INTEGER,                        
    monto0: DataTypes.DECIMAL(10,2),
    monto1: DataTypes.DECIMAL(10,2),
    monto2: DataTypes.DECIMAL(10,2),
    monto3: DataTypes.DECIMAL(10,2),
    monto4: DataTypes.DECIMAL(10,2),
  },{ tableName: 'vencimiento'});
};
