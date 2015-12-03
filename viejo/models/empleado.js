module.exports = function(sequelize, DataTypes) {
  return sequelize.define('empleado', {
    nombre: DataTypes.STRING,
    apellido: DataTypes.STRING,
    dni: DataTypes.STRING,
    telefono: DataTypes.STRING,
    mail: DataTypes.STRING,
    legajo: DataTypes.STRING,
    pc: DataTypes.INTEGER,
  }, {tableName: 'empleado'},{enableForeignKeyConstraints: true});
};
