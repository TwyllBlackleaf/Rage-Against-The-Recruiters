const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection.js');

class AnswerTemplate extends Model { }

AnswerTemplate.init(
    {
        // define columns
        answerID_pk: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        answerType: {
            type: DataTypes.STRING(20),
            allowNull: true
        },
        isDealBreaker: {
            type: DataTypes.TINYINT,
            allowNull: false,
            defaultValue: 0
        },
        answerInteger: {
            type: DataTypes.INTEGER,
            allowNull: true
        },
        answerIntegerMax: {
            type: DataTypes.INTEGER,
            allowNull: true
        },
        answerIntegerMin: {
            type: DataTypes.INTEGER,
            allowNull: true
        },
        answerDecimal: {
            type: DataTypes.DECIMAL(19, 4),
            allowNull: true
        },
        answerText: {
            type: DataTypes.STRING(50),
            allowNull: true
        },
        answerBoolean: {
            type: DataTypes.TINYINT,
            allowNull: true
        },
        answerDate: {
            type: DataTypes.DATE,
            allowNull: true
        },
        sortOrder: {
            type: DataTypes.INTEGER,
            allowNull: true,
        }


    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'AnswerTemplate',
    }
);

module.exports = AnswerTemplate;