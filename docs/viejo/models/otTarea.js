module.exports = function(sequelize, DataTypes) {
  return sequelize.define('otTarea', {
    completa: DataTypes.INTEGER, 
    fechaCompleta: DataTypes.DATE,   
    fechaVencimiento: DataTypes.DATE,       
    posicion: DataTypes.INTEGER,
  	nombre:	DataTypes.STRING,
    descripcion: DataTypes.STRING,
    observacion: DataTypes.STRING,    
    retrabajo: DataTypes.INTEGER,
    tiempoEstimado: DataTypes.STRING,
    tiempoInsumido: DataTypes.STRING,
    conclusion: DataTypes.STRING,
  }, {tableName: 'otTarea'});
};
