
const sequelize = require('../config/connection');
const { surveyAnswers } = require('../models');

const surveyAnswersData = [

    {
        //Job Questions 1
        questionsid_fk: 1,
        job_detailsid_fk: 1,
        userid_fk: 3,
        answer: '57500',
        answer_score: 10.00
      },
      {
        //Job Questions 1
        questionsid_fk: 2,
        job_detailsid_fk: 1, 
        userid_fk: 3,
        answer:'3500',
        answer_score: 10.00
      },
      {
        //Job Questions 1
        questionsid_fk: 3,
        job_detailsid_fk: 1, 
        userid_fk: 3,
        answer: 'True',
        answer_score: 10.00
      },
      {
        //Job Questions 1
        questionsid_fk: 4,
        job_detailsid_fk: 1,
        userid_fk: 3,
        answer: '2000',
        answer_score: 10.00
      },
      {
        //Job Questions 1
        questionsid_fk: 5,
        job_detailsid_fk: 1,
        userid_fk: 3,
        answer: 'True',
        answer_score: 10.00
      },
      {
        //Job Questions 1
        questionsid_fk: 6,
        job_detailsid_fk: 1, 
        userid_fk: 3,
        answer: 'True',
        answer_score: 10.00
      }
    //   {
    //     //Job Questions 1
    //     questionsid_fk: 
    //     job_detailsid_fk: 
    //     userid_fk:
    //     answer:
    //     answer_score:
    //   },
 
    
];

const seedSurveyAnswers = () => surveyAnswers.bulkCreate(surveyAnswersData, {individualHooks: true});

module.exports = seedSurveyAnswers;