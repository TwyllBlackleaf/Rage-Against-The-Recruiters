const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection.js');

class Answers extends Model { }

Answers.init(
    {
        // define columns
        answersid_pk: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        answer_templateid_fk: {
            type: DataTypes.INTEGER,
            allowNull: true,
            foreignKey: true
        },
        answer_questionid_fk: {
            type: DataTypes.INTEGER,
            allowNull: true
        },
        answer_score_modifier: {
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