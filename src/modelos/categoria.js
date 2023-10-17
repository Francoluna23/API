const { DataTypes } = require('sequelize');
const sequelize = require('../conexion/connection');

const Categorias = sequelize.define('Categorias', {
    Categoria_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    Nombre: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {
      tableName: 'Categorias',
      timestamps: false,
  });

  module.exports = Categorias;