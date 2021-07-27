const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection.js');

class Questions extends Model { }

Questions.init(
    {
        // define columns
        questionid_pk: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        question_category_fk: {
            type: DataTypes.INTEGER,
            allowNull: true,
            foreignKey: true
        },
        answers_fk: {
            type: DataTypes.INTEGER,
            allowNull: true,
            foreignKey: true
        },
        question_type: {
            type: DataTypes.STRING(20),
            allowNull: true
        },
        is_deal_breaker: {
            type: DataTypes.TINYINT,
            allowNull: false,
            defaultValue: 0
        },
        question_text: {
            type: DataTypes.STRING(100),
            allowNull: true
        },
        question_base_score: {
            type: DataTypes.DECIMAL(4, 2),
            allowNull: false,
            defaultValue: 10.00
        },
        sort_order: {
            type: DataTypes.INTEGER,
            allowNull: true
        }


    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'Questions',
    }
);

module.exports = Questions;