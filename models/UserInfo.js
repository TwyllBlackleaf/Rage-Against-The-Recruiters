const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection.js');

class UserInfo extends Model { }

UserInfo.init(
    {
        // define columns
        userID_pk: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        user_fk: {
            type: DataTypes.INTEGER,
            allowNull: true,
            foreignKey:true
        },
        userType: {
            type: DataTypes.STRING(30),
            allowNull: false,
            foreignKey: true,
            defaultValue: 'Recruiter'
        },
        first_name: {
            type: DataTypes.STRING(20),
            allowNull: true
        },
        email: {
            type: DataTypes.STRING(50),
            allowNull: false
        },
        phone: {
            type: DataTypes.STRING(15),
            allowNull: true
        },
        preferredLocation: {
            type: DataTypes.STRING(25),
            allowNull: true
        },
        userURL: {
            type: DataTypes.STRING(50),
            allowNull: true
        },
        company: {
            type: DataTypes.STRING(50),
            allowNull: true
        },
        facebook: {
            type: DataTypes.STRING(50),
            allowNull: true
        },
        twitter: {
            type: DataTypes.STRING(50),
            allowNull: true
        },
        linkedin: {
            type: DataTypes.STRING(50),
            allowNull: true
        },
        active: {
            type: DataTypes.TINYINT,
            allowNull: true,
            defaultValue: true
        },
        verified: {
            type: DataTypes.TINYINT,
            allowNull: true,
            defaultValue: false
        },
        want1: {
            type: DataTypes.STRING(45),
            allowNull: true
        },
        want2: {
            type: DataTypes.STRING(45),
            allowNull: true
        },
        want3: {
            type: DataTypes.STRING(45),
            allowNull: true
        },
        avoid1: {
            type: DataTypes.STRING(45),
            allowNull: true
        },
        avoid2: {
            type: DataTypes.STRING(45),
            allowNull: true
        },
        avoid3: {
            type: DataTypes.STRING(45),
            allowNull: true
        },


    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'UserInfo',
    }
);

module.exports = UserInfo;