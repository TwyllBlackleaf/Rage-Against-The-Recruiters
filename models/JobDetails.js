const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection.js');

class JobDetails extends Model { }

JobDetails.init(
    {
        // define columns
        job_detailsid_pk: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        recruiterid_fk: {
            type: DataTypes.INTEGER,
            allowNull: true,
            foreignKey: true
        },
        job_questionsid_fk: {
            type: DataTypes.INTEGER,
            allowNull: true,
            foreignKey: true
        },
        job_classification: {
            type: DataTypes.STRING(20),
            allowNull: true
        },
        job_title: {
            type: DataTypes.STRING(20),
            allowNull: true
        },
        job_description: {
            type: DataTypes.TEXT('medium'),
            allowNull: true
        },
        base_salary: {
            type: DataTypes.DECIMAL(19, 4),
            allowNull: true
        },
        bonus_flat: {
            type: DataTypes.DECIMAL(19, 4),
            allowNull: true
        },
        bonus_percentage: {
            type: DataTypes.DECIMAL(5, 2),
            allowNull: true
        },
        retirement_plan_avail: {
            type: DataTypes.TINYINT,
            allowNull: true
        },
        employer_matching_flat: {
            type: DataTypes.DECIMAL(10, 4),
            allowNull: true
        },
        employer_matching_percentage: {
            type: DataTypes.DECIMAL(5, 2),
            allowNull: true
        },
        paid_vacation_days: {
            type: DataTypes.INTEGER,
            allowNull: true
        },
        paid_sick_days: {
            type: DataTypes.INTEGER,
            allowNull: true
        },
        paid_holidays: {
            type: DataTypes.INTEGER,
            allowNull: true
        },
        medical_coverage_avail: {
            type: DataTypes.TINYINT,
            allowNull: true
        },
        family_coverage_avail: {
            type: DataTypes.TINYINT,
            allowNull: true
        },
        medical_coverage_employer_percentage: {
            type: DataTypes.DECIMAL(10, 4),
            allowNull: true
        },
        dental_coverage_avail: {
            type: DataTypes.TINYINT,
            allowNull: true
        },
        vision_coverage_avail: {
            type: DataTypes.TINYINT,
            allowNull: true
        },
        life_insurance_avail: {
            type: DataTypes.TINYINT,
            allowNull: true
        },
        spouse_life_insurance_avail: {
            type: DataTypes.TINYINT,
            allowNull: true
        },
        add_benefits_employer_percentage: {
            type: DataTypes.DECIMAL(10, 4),
            allowNull: true
        }




    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'JobDetails',
    }
);

module.exports = JobDetails;