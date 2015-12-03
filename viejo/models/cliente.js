module.exports = function(sequelize, DataTypes) {
  return sequelize.define('cliente', {
    clasificacion_id: DataTypes.INTEGER,
    comunicacion_id: DataTypes.INTEGER,
    actividad_id: DataTypes.INTEGER,
    catedral: DataTypes.STRING,
    cuit: DataTypes.STRING,
    nombre: DataTypes.STRING,
    direccion: DataTypes.STRING,    
    telefono: DataTypes.STRING,
    celular: DataTypes.STRING,
    email: DataTypes.STRING,
    radio: DataTypes.STRING,
    empleado: DataTypes.INTEGER,
    negocio: DataTypes.INTEGER,    
    contacto: DataTypes.STRING,
    observaciones: DataTypes.STRING,
    cliente_id: DataTypes.INTEGER,
    baja: DataTypes.INTEGER,
  }, {tableName: 'cliente'});
};

