const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Clients extends Model { }

Clients.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        //one for first name one for last?
        // possibly add special directions category for anything specific to each dog?
        first_name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        last_name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        address: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        phone: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        petname: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        //breed: {
        //    type: DataTypes.STRING,
        //    allowNull: false,
        //},
        
        //special_dir: {
        //    type: DataTypes.STRING,
        //    allowNull: false,
        //}
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'clients',
    }
);

module.exports = Clients