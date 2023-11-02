const { Model, DataTypes } = require('sequelize');

const sequelize = require('***');

class trips extends Model {}

trips.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        trip_budget: {
            type: DataTypes.DECIMAL (10, 2),
            allowNull: false,
            validate: {
                isDecimal: true
            }
        },
        traveler_amount: {
            type: DataTypes.DECIMAL (10, 2),
            allowNull: false,
            validate: {
                isDecimal: true
            }
        },
        traveler_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'traveler',
                key: 'id'
            }
        },
        location_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'location',
                key: 'id'
            }
        }
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'trips',
      }
);

module.exports = traveler