const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection.js');

class JobDetails extends Model { }

Scorecard.init(
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
            type: DataTypes.TEXT,
            allowNull: true
        },
        jobTitle: {
            type: DataTypes.TEXT,
            allowNull: true
        },
        jobDescription: {
            type: DataTypes.TEXT,
            allowNull: true
        },
        baseSalary: {
            type: DataTypes.DECIMAL,
            allowNull: true
        },
        bonusFlat: {
            type: DataTypes.DECIMAL,
            allowNull: true
        },
        bonusPercentage: {
            type: DataTypes.DECIMAL,
            allowNull: true
        },
        retirementPlanAvail: {
            type: DataTypes.TINYINT,
            allowNull: true
        },
        employerMatchingFlat: {
            type: DataTypes.DECIMAL,
            allowNull: true
        },
        employerMatchingPercentage: {
            type: DataTypes.DECIMAL,
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
            type: DataTypes.DECIMAL,
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
            type: DataTypes.DECIMAL,
            allowNull: true,
            primaryKey: true
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