const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection.js');

class Answers extends Model { }

Answers.init(
    {
        // define columns
        answersID_pk: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        answerTemplateID_fk: {
            type: DataTypes.INTEGER,
            allowNull: true,
            foreignKey: true
        },
        answerQuestionID_fk: {
            type: DataTypes.INTEGER,
            allowNull: true
        },
        answerScoreModifier: {
            type: DataTypes.DECIMAL(5, 2),
            allowNull: false,
            defaultValue: 0.00
        }

    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'Answers',
    }
);

module.exports = Answers;