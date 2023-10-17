const { DataTypes } = require('sequelize');
const sequelize = require('../conexion/connection');

const CatalogoReparto = sequelize.define('CatalogoReparto', {
    Catalogo_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
    },
    Actor_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
    }
}, {
    tableName: 'CatalogoReparto',
    timestamps: false,
});

module.exports = CatalogoReparto;
