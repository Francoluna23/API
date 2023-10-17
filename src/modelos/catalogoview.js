const { DataTypes } = require('sequelize');
const sequelize = require('../conexion/connection');

const VistaCatalogoCompleto = sequelize.define('VistaCatalogoCompleto', {
  Catalogo_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
  },
  Poster: {
    type: DataTypes.STRING,
  },
  Titulo: {
    type: DataTypes.STRING,
  },
  Categoria: {
    type: DataTypes.STRING,
  },
  Resumen: {
    type: DataTypes.STRING,
  },
  Temporadas: {
    type: DataTypes.INTEGER,
  },
  Trailer: {
    type: DataTypes.STRING,
  },
  Actores: {
    type: DataTypes.STRING,
  },
  Generos: {
    type: DataTypes.STRING,
  },
}, {
  tableName: 'VistaCatalogoCompleto',
  timestamps: false,
});

module.exports = VistaCatalogoCompleto;
