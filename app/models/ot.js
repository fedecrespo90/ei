module.exports = function(sequelize, DataTypes) {
  return sequelize.define('ot', {
    estado: DataTypes.INTEGER,
    numero: DataTypes.INTEGER,
    fechaVencimiento: DataTypes.DATE,
    conclude_at: DataTypes.DATE,    
    notificarCliente: DataTypes.BOOLEAN,
    honorarios: DataTypes.INTEGER,
    prioridad: DataTypes.INTEGER,
    coordinador: DataTypes.BOOLEAN, 
    juridica: DataTypes.BOOLEAN,     
    reservado: DataTypes.INTEGER,     
    titulo: DataTypes.STRING,    
    descripcion: DataTypes.STRING,
    conclusion: DataTypes.STRING,
  }, {tableName: 'ot'});
};
