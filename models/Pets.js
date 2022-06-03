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
            type: DataTypes.DECIMAL,
            allowNull: false,
        },
        walk_day: {
            type: DataTypes.STRING,
            allowNull: false,
        }
    }, {
        //any other model options?
    }
);

module.exports = Pets