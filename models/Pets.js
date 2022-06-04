const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Pets extends Model {}

Pets.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        dog_name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        dog_age: {
            //is DECIMAL correct?
            type: DataTypes.DECIMAL,
            allowNull: false,
        },
        breed: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        walk_time: {
            //24 hour calender, one hour walk for very dog an input the time as an integer 1-24
            type: DataTypes.DECIMAL,
            allowNull: false,
        },
        walk_day: {
            type: DataTypes.STRING,
            allowNull: false,
        }
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'pets',
    }
);

module.exports = Pets