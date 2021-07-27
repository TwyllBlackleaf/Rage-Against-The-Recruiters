const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection.js');

class Scorecard extends Model { }

Scorecard.init(
    {
        // define columns
        scorecardid_pk: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        recruiterid_fk: {
            type: DataTypes.INTEGER,
            allowNull: true,
            foreignKey: true
        },
        job_detailsid_fk: {
            type: DataTypes.INTEGER,
            allowNull: true,
            foreignKey: true
        },
        opportunity_score: {
            type: DataTypes.DECIMAL(10, 4),
            allowNull: true
        },
        maximum_score_possible: {
            type: DataTypes.DECIMAL(10, 4),
            allowNull: true
        },
        answer_deductions: {
            type: DataTypes.DECIMAL(10, 4),
            allowNull: true
        },
        evaluation_dt: {
            type: DataTypes.DATE,
            allowNull: true
        }


    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'scorecard',
    }
);

module.exports = Scorecard;











