const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection.js');

class QuestionCategories extends Model { }

QuestionCategories.init(
    {
        // define columns
        categoryID_pk: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        category: {
            type: DataTypes.STRING(25),
            allowNull: false
        },
        categoryRank: {
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: 0
        }

    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'QuestionCategories',
    }
);

module.exports = QuestionCategories;