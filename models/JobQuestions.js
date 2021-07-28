const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection.js');

class JobQuestions extends Model { }

JobQuestions.init(
    {
        // define columns
        job_questionsid_pk: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true            
        },
        job_detailsid_fk: {
            type: DataTypes.INTEGER,
            allowNull: true,
            foreignKey: true,
            references: {model: 'JobDetails', key: 'job_detailsid_pk'}
        },
        questionsid_fk: {
            type: DataTypes.INTEGER,
            allowNull: true,
            foreignKey: true,
            references: {model: 'Questions', key: 'questionid_pk'}
        },
        userid_fk: {
            type: DataTypes.INTEGER,
            allowNull: true,
            foreignKey: true,
            references: {model: 'UserInfo', key: 'userid_pk'}
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