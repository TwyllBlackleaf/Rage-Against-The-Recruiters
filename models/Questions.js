const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection.js');

class Questions extends Model { }

Questions.init(
    {
        // define columns
        questionID_pk: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        questionCategory_fk: {
            type: DataTypes.INTEGER,
            allowNull: true,
            foreignKey: true
        },
        answers_fk: {
            type: DataTypes.INTEGER,
            allowNull: true,
            foreignKey: true
        },
        questionType: {
            type: DataTypes.TEXT,
            allowNull: true
        },
        questionText: {
            type: DataTypes.TEXT,
            allowNull: true
        },
        questionBaseScore: {
            type: DataTypes.DECIMAL,
            allowNull: false,
        },
        sortOrder: {
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