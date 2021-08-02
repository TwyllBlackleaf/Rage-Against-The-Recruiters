
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
        answer: 'False',
        answer_score: 6.00
      },
      {
        //Job Questions 1
        questionsid_fk: 7,
        job_detailsid_fk: 1,
        userid_fk: 3,
        answer: 'False',
        answer_score: 3.75
      },
      {
        //Job Questions 1
        questionsid_fk: 8,
        job_detailsid_fk: 1,
        userid_fk: 3,
        answer: 'False',
        answer_score: 2.75
      },
      {
        //Job Questions 1
        questionsid_fk: 9,
        job_detailsid_fk: 1,
        userid_fk: 3,
        answer: '9',
        answer_score: 10
      },
      {
        //Job Questions 1
        questionsid_fk: 10,
        job_detailsid_fk: 1,
        userid_fk: 3,
        answer: '4',
        answer_score: 10.00
      },
      {
        //Job Questions 1
        questionsid_fk: 11,
        job_detailsid_fk: 1,
        userid_fk: 3,
        answer: '6',
        answer_score: 10.00
      },
      {
        //Job Questions 1
        questionsid_fk: 12,
        job_detailsid_fk: 1,
        userid_fk: 3,
        answer: 'True',
        answer_score: 7.50
      },
      {
        //Job Questions 1
        questionsid_fk: 14,
        job_detailsid_fk: 1,
        userid_fk: 3,
        answer: 'False',
        answer_score: 3.75
      },
      {
        //Job Questions 1
        questionsid_fk: 15,
        job_detailsid_fk: 1,
        userid_fk: 3,
        answer: '10',
        answer_score: 10.00
      },
      {
        //Job Questions 1
        questionsid_fk: 16,
        job_detailsid_fk: 1,
        userid_fk: 3,
        answer: 'True',
        answer_score: 3.75
      },
      {
        //Job Questions 1
        questionsid_fk: 16,
        job_detailsid_fk: 1,
        userid_fk: 3,
        answer: 'False',
        answer_score: 7.5
      }
    
];

const seedSurveyAnswers = () => surveyAnswers.bulkCreate(surveyAnswersData, {individualHooks: true});

module.exports = seedSurveyAnswers;