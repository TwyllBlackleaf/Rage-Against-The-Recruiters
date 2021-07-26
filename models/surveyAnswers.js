const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection.js');

class surveryAnswers extends Model { }

surveryAnswers.init(
    {
        // define columns
        surveyAnswers_pk: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        questionsID_fk: {
            type: DataTypes.INTEGER,
            allowNull: true,
            foreignKey: true
        },
        jobDetailsID_fk: {
            type: DataTypes.INTEGER,
            allowNull: true,
            foreignKey: true
        },
        answer: {
            type: DataTypes.STRING(50),
            allowNull: true
        },
        answerScore: {
            type: DataTypes.DECIMAL(10, 2),
            allowNull: true
        }

    },

    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'surveryAnswers',
    }
);

module.exports = surveryAnswers;