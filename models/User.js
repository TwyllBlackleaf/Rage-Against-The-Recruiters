const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');
const bcrypt = require ('bcrypt');

class User extends Model {
    checkPassword(loginPw) {
        return bcrypt.compareSync(loginPw, this.password);
    }
}

User.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        username: {
            type: DataTypes.STRING,
            allowNull: false
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: {
                args: true,
                msg: 'Email address already in use!'
            },
            validate: {
                isEmail: true
            }
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [8]
            }
        },
        userType: {
            type: DataTypes.STRING(30),
            allowNull: false,
            foreignKey: true,
            defaultValue: 'Recruiter'
        },
    },
    {
        hooks: {
            async beforeCreate(newPwData) {
                newPwData.password = await bcrypt.hash(newPwData.password, 10);
                return newPwData;
            },
            async beforeUpdate(updatedPwData) {
                updatedPwData.password = await bcrypt.hash(updatedPwData.password, 10);
                return updatedPwData;
            }
        },
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'user'
    }
);

module.exports = User;