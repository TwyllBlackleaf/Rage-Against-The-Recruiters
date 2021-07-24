const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection.js');

class JobQuestions extends Model { }

JobQuestions.init(
    {
        // define columns
        JobQuestionsID_pk: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        jobDetailsID_fk: {
            type: DataTypes.INTEGER,
            allowNull: true,
            foreignKey: true
        },
        questionsID_fk: {
            type: DataTypes.INTEGER,
            allowNull: true
        }

    },

    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'JobQuestions',
    }
);

module.exports = JobQuestions;