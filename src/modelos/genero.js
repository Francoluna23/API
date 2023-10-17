const { DataTypes } = require('sequelize');
const sequelize = require('../conexion/connection');

const Genero = sequelize.define('Genero', {
    Genero_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    Nombre: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, {
    tableName: 'Genero',
    timestamps: false,
});

module.exports = Genero;
