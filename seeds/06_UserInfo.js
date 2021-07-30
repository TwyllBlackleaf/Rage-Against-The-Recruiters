
const sequelize = require('../config/connection');
const { UserInfo } = require('../models');

const userinfoData = [

    {
        //UserInfo 1
        user_fk: 1,
        user_type: 'Talent',
        first_name: 'Donna', 
        last_name: 'Developer',
        email: 'donnadev@mail.com',
        phone: '212-555-1234',
        preferred_location: 'New York City',
        user_url: 'www.codemonkey.com',
        company: 'CodeMonkey',
        facebook: 'donnaD@facebook',
        twitter: '@donnaDevMonkey',
        linkedin: 'donnaDev@linkedin.com',
        active: 1,
        verified: 0,
        want1: 'Corner Office',
        want2: 'Pet Friendly',
        want3: 'Close To Coffee',
        avoid1: 'Meetings',
        avoid2: 'Company Outings',
        avoid3: 'Bad Office Coffee'
      },
      {
        //UserInfo 2
        user_fk: 1,
        user_type: 'Talent',
        first_name: 'Kolby', 
        last_name: 'Coder',
        email: 'kakakacolby@gmail.net',
        phone: '808-808-0987',
        preferred_location: 'Wailea Point',
        user_url: 'www.surferdude.net',
        company: 'SurfNSoftware',
        facebook: 'kcolby@facebook',
        twitter: '@kakakacolby',
        linkedin: 'kakakacolby@linkedin.com',
        active: 1,
        verified: 0,
        want1: 'Cool Buzz',
        want2: 'Tasty Waves',
        want3: 'Flexible Hours',
        avoid1: 'Cubicles',
        avoid2: 'Dress Codes',
        avoid3: 'Daily Standup Meetings'
      },
      {
        //UserInfo 3
        user_fk: 1,
        user_type: 'Recruiter',
        first_name: 'Robbie', 
        last_name: 'Recruiter',
        email: 'rrecruiter@hirepeople.com',
        phone: '615-321-3210',
        preferred_location: 'Nashville',
        user_url: 'www.hirepeople.com',
        company: 'HirePeople',
        facebook: 'rrHirePeople@facebook',
        twitter: '@rrHirePeople',
        linkedin: 'rrecruiter@linkedin.com',
        active: 1,
        verified: 0,
        want1: ' ',
        want2: ' ',
        want3: ' ',
        avoid1: ' ',
        avoid2: ' ',
        avoid3: ' '
      },
      {
        //UserInfo 4
        user_fk: 1,
        user_type: 'Recruiter',
        first_name: 'Alice', 
        last_name: 'Cooper',
        email: 'alicecooper@madman.com',
        phone: '555-123-4567',
        preferred_location: 'Norflok',
        user_url: 'www.madman.com',
        company: 'MadMan',
        facebook: 'alicecooper@facebook',
        twitter: '@alicecooper',
        linkedin: 'alicecooper@linkedin.com',
        active: 1,
        verified: 0,
        want1: ' ',
        want2: ' ',
        want3: ' ',
        avoid1: ' ',
        avoid2: ' ',
        avoid3: ' '
      }

];

const seedUserInfo = () => UserInfo.bulkCreate(userinfoData, {individualHooks: true});

module.exports = seedUserInfo;