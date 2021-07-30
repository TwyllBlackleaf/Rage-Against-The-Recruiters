
const sequelize = require('../config/connection');
const { User } = require('../models');

const userData = [


    {
        //User 1
        username: 'donnadev',
        email: 'donnadev@mail.com',
        password: 'donnadev', 
        user_type: 'Talent'
      },
      {
        //User 2
        username: 'kolbycoder',
        email: 'kakakacolby@gmail.net',
        password: 'kolbycoder', 
        user_type: 'Talent'
      },
      {
        //User 3 - Recruiter
        username: 'hirepeople',
        email: 'rrecruiter@hirepeople.com',
        password: 'hirepeople', 
        user_type: 'Recruiter'
      },
      {
        //User 4 - Recruiter
        username: 'alicecooper',
        email: 'alicecooper@madman.com',
        password: 'alicecooper', 
        user_type: 'Recruiter'
      }

];

const seedUser = () => User.bulkCreate(userData, {individualHooks: true});

module.exports = seedUser;