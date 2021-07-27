const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection.js');

class AnswerTemplate extends Model { }

AnswerTemplate.init(
    {
        // define columns
        answerid_pk: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        answer_type: {
            type: DataTypes.STRING(20),
            allowNull: true
        },
        is_deal_breaker: {
            type: DataTypes.TINYINT,
            allowNull: false,
            defaultValue: 0
        },
        answer_integer: {
            type: DataTypes.INTEGER,
            allowNull: true
        },
        answer_integer_max: {
            type: DataTypes.INTEGER,
            allowNull: true
        },
        answer_integer_min: {
            type: DataTypes.INTEGER,
            allowNull: true
        },
        answer_decimal: {
            type: DataTypes.DECIMAL(19, 4),
            allowNull: true
        },
        answer_text: {
            type: DataTypes.STRING(50),
            allowNull: true
        },
        answer_boolean: {
            type: DataTypes.TINYINT,
            allowNull: true
        },
        answer_date: {
            type: DataTypes.DATE,
            allowNull: true
        },
        sort_order: {
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