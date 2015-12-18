module.exports = function(sequelize, DataTypes) {
  return sequelize.define('oc', {
    activa: DataTypes.INTEGER,
    numero: DataTypes.INTEGER,
    fechaVencimiento: DataTypes.DATE,
    titulo: DataTypes.STRING,    
    consulta: DataTypes.STRING,
    solucion: DataTypes.STRING,
    notificarCliente: DataTypes.BOOLEAN,    
  }, {tableName: 'oc'});
};
