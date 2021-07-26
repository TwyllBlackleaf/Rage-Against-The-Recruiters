const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection.js');

class JobDetails extends Model { }

JobDetails.init(
    {
        // define columns
        jobDetailsID_pk: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        recruiterID_fk: {
            type: DataTypes.INTEGER,
            allowNull: true,
            foreignKey: true
        },
        jobQuestionsID_fk: {
            type: DataTypes.INTEGER,
            allowNull: true,
            foreignKey: true
        },
        jobClassification: {
            type: DataTypes.STRING(20),
            allowNull: true
        },
        jobTitle: {
            type: DataTypes.STRING(20),
            allowNull: true
        },
        jobDescription: {
            type: DataTypes.TEXT('medium'),
            allowNull: true
        },
        baseSalary: {
            type: DataTypes.DECIMAL(19, 4),
            allowNull: true
        },
        bonusFlat: {
            type: DataTypes.DECIMAL(19, 4),
            allowNull: true
        },
        bonusPercentage: {
            type: DataTypes.DECIMAL(5, 2),
            allowNull: true
        },
        retirementPlanAvail: {
            type: DataTypes.TINYINT,
            allowNull: true
        },
        employerMatchingFlat: {
            type: DataTypes.DECIMAL(10, 4),
            allowNull: true
        },
        employerMatchingPercentage: {
            type: DataTypes.DECIMAL(5, 2),
            allowNull: true
        },
        paidVacationDays: {
            type: DataTypes.INTEGER,
            allowNull: true
        },
        paidSickDays: {
            type: DataTypes.INTEGER,
            allowNull: true
        },
        paidHolidays: {
            type: DataTypes.INTEGER,
            allowNull: true
        },
        medicalCoverageAvail: {
            type: DataTypes.TINYINT,
            allowNull: true
        },
        familyCoverageAvail: {
            type: DataTypes.TINYINT,
            allowNull: true
        },
        medicalCoverageEmployerPercentage: {
            type: DataTypes.DECIMAL(10, 4),
            allowNull: true
        },
        dentalCoverageAvail: {
            type: DataTypes.TINYINT,
            allowNull: true
        },
        visionCoverageAvail: {
            type: DataTypes.TINYINT,
            allowNull: true
        },
        lifeInsuranceAvail: {
            type: DataTypes.TINYINT,
            allowNull: true
        },
        spouseLifeInsuranceAvail: {
            type: DataTypes.TINYINT,
            allowNull: true
        },
        addBenefitsEmployerPercentage: {
            type: DataTypes.DECIMAL(10, 4),
            allowNull: true
        }




    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'jobDetails',
    }
);

module.exports = JobDetails;