const { DataTypes } = require('sequelize');
const sequelize = require('../conexion/connection');

const CatalogoGenero = sequelize.define('CatalogoGenero', {
    Catalogo_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
    },
    Genero_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
    }
}, {
    tableName: 'CatalogoGenero',
    timestamps: false,
});

module.exports = CatalogoGenero;
