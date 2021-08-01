
const sequelize = require('../config/connection');
const { Scorecard } = require('../models');

const scorecardData = [

    {
        //Scorecard Job 1
        userid_fk: 1,
        recruiterid_fk: 3,
        job_detailsid_fk: 1,
        opportunity_score:125,
        maximum_score_possible: 153,
        answer_deductions:28,
        evaluation_dt: '08-01-2021'
      }



    
];

const seedScorecard = () => Scorecard.bulkCreate(scorecardData, {individualHooks: true});

module.exports = seedScorecard;