
const sequelize = require('../config/connection');
const { JobQuestions } = require('../models');

const jobQuestionsData = [


    {
        //Job Questions 1
        job_details_fk: 1,
        questionsid_fk: 1,
        userid_fk: 1
      },
      {
        //Job Questions 1
        job_details_fk: 1,
        questionsid_fk: 2,
        userid_fk: 1
      },
      {
        //Job Questions 1
        job_details_fk: 1,
        questionsid_fk: 3,
        userid_fk: 1
      },
      {
        //Job Questions 1
        job_details_fk: 1,
        questionsid_fk: 4,
        userid_fk: 1
      },
      {
        //Job Questions 1
        job_details_fk: 1,
        questionsid_fk: 5,
        userid_fk: 1
      },
      {
        //Job Questions 1
        job_details_fk: 1,
        questionsid_fk: 6,
        userid_fk: 1
      },
      {
        //Job Questions 1
        job_details_fk: 1,
        questionsid_fk: 7,
        userid_fk: 1
      },
      {
        //Job Questions 1
        job_details_fk: 1,
        questionsid_fk: 8,
        userid_fk: 1
      },
      {
        //Job Questions 1
        job_details_fk: 1,
        questionsid_fk: 9,
        userid_fk: 1
      },
      {
        //Job Questions 1
        job_details_fk: 1,
        questionsid_fk: 10,
        userid_fk: 1
      },
      {
        //Job Questions 1
        job_details_fk: 1,
        questionsid_fk: 11,
        userid_fk: 1
      },
      {
        //Job Questions 1
        job_details_fk: 1,
        questionsid_fk: 12,
        userid_fk: 1
      },
      {
        //Job Questions 1
        job_details_fk: 1,
        questionsid_fk: 13,
        userid_fk: 1
      },
      {
        //Job Questions 1
        job_details_fk: 1,
        questionsid_fk: 14,
        userid_fk: 1
      },
      {
        //Job Questions 1
        job_details_fk: 1,
        questionsid_fk: 15,
        userid_fk: 1
      },
      {
        //Job Questions 1
        job_details_fk: 1,
        questionsid_fk: 16,
        userid_fk: 1
      },
      {
        //Job Questions 1
        job_details_fk: 1,
        questionsid_fk: 17,
        userid_fk: 1
      }

];

const seedJobQuestions = () => JobQuestions.bulkCreate(jobQuestionsData, {individualHooks: true});

module.exports = seedJobQuestions;