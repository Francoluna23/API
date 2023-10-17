const { DataTypes } = require('sequelize');
const sequelize = require('../conexion/connection');

const Catalogo = sequelize.define('Catalogo', {
    Id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    Poster: {
        type: DataTypes.STRING,
        defaultValue: 'N/A'
    },
    Titulo: {
        type: DataTypes.STRING
    },
    Categoria_id: {
        type: DataTypes.INTEGER
    },
    Resumen: {
        type: DataTypes.TEXT
    },
    Temporadas: {
        type: DataTypes.STRING(10)
    },
    Trailer: {
        type: DataTypes.STRING,
        defaultValue: 'N/A'
    }
}, {
    tableName: 'Catalogo',
    timestamps: false,
});

module.exports = Catalogo;
