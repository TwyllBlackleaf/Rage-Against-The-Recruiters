const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection.js');

class Scorecard extends Model { }

Scorecard.init(
    {
        // define columns
        scorecardID_pk: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        recruiterID_fk: {
            type: DataTypes.INTEGER,
            allowNull: true,
            foreignKey: true
        },
        jobDetailsID_fk: {
            type: DataTypes.INTEGER,
            allowNull: true,
            foreignKey: true
        },
        opportunityScore: {
            type: DataTypes.DECIMAL,
            allowNull: true
        },
        maximumScorePossible: {
            type: DataTypes.DECIMAL,
            allowNull: true
        },
        answerDeductions: {
            type: DataTypes.DECIMAL,
            allowNull: true
        },
        evaluationDT: {
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











