const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection.js');

class surveryAnswers extends Model { }

surveyAnswers.init(
    {
        // define columns
        survey_answers_pk: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        questionsid_fk: {
            type: DataTypes.INTEGER,
            allowNull: true,
            foreignKey: true
        },
        job_detailsid_fk: {
            type: DataTypes.INTEGER,
            allowNull: true,
            foreignKey: true
        },
        answer: {
            type: DataTypes.STRING(50),
            allowNull: true
        },
        answer_score: {
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