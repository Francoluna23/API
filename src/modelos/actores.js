const { DataTypes } = require('sequelize');
const sequelize = require('../conexion/connection');

const Actores = sequelize.define('Actores', {
    Actor_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    Nombre: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, {
    tableName: 'Actores',
    timestamps: false,
});

module.exports = Actores;
