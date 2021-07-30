const sequelize = require('../config/connection');
const { Answers } = require('../models');

const answersData = [

    {
        //Answer 1
        answer_template_fk: 1,
        answer_questionid_fk: 1,
        answer_score_modifier: 1.00
      },
      {
        //Answer 2
        answer_template_fk: 2,
        answer_questionid_fk: 2,
        answer_score_modifier: 1.00
      },
      {
        //Answer 3 - true
        answer_template_fk: 3,
        answer_questionid_fk: 3,
        answer_score_modifier: 1.00
      },
      {
        //Answer 4 - false
        answer_template_fk: 4,
        answer_questionid_fk: 3,
        answer_score_modifier: 0.40
      },
      {
        //Answer 5
        answer_template_fk: 5,
        answer_questionid_fk: 4,
        answer_score_modifier: 1.00
      },
      {
        //Answer 6 - true
        answer_template_fk: 6,
        answer_questionid_fk: 5,
        answer_score_modifier: 1.00
      },
      {
        //Answer 7 - false
        answer_template_fk: 7,
        answer_questionid_fk: 5,
        answer_score_modifier: 0.30
      },
      {
        //Answer 8 - true
        answer_template_fk: 8,
        answer_questionid_fk: 6,
        answer_score_modifier: 1.00
      },
      {
        //Answer 9 - false
        answer_template_fk: 9,
        answer_questionid_fk: 6,
        answer_score_modifier: 0.30
      },
      {
        //Answer 10
        answer_template_fk: 10,
        answer_questionid_fk: 7,
        answer_score_modifier: 1.00
      },
      {
        //Answer 11
        answer_template_fk: 11,
        answer_questionid_fk: 7,
        answer_score_modifier: 0.06
      },
      {
        //Answer 12- true
        answer_template_fk: 12,
        answer_questionid_fk: 8,
        answer_score_modifier: 1.00
      },
      {
        //Answer 13 -false
        answer_template_fk: 13,
        answer_questionid_fk: 8,
        answer_score_modifier: 0.60
      },
      {
        //Answer 14
        answer_template_fk: 14,
        answer_questionid_fk: 9,
        answer_score_modifier: 1.00
      },
      {
        //Answer 15
        answer_template_fk: 15,
        answer_questionid_fk: 10,
        answer_score_modifier: 1.00
      },
      {
        //Answer 16
        answer_template_fk: 16,
        answer_questionid_fk: 11,
        answer_score_modifier: 1.00
      },
      {
        //Answer 17
        answer_template_fk: 17,
        answer_questionid_fk: 12,
        answer_score_modifier: 1.00
      },
      {
        //Answer 18
        answer_template_fk: 18,
        answer_questionid_fk: 12,
        answer_score_modifier: 0.6
      },
      {
        //Answer 19
        answer_template_fk: 19 ,
        answer_questionid_fk: 13,
        answer_score_modifier: 1.00
      },
      {
        //Answer 20
        answer_template_fk: 20,
        answer_questionid_fk: 13,
        answer_score_modifier: 0.60
      },
      {
        //Answer 21
        answer_template_fk: 21,
        answer_questionid_fk: 14,
        answer_score_modifier: 1.00
      },
      {
        //Answer 22
        answer_template_fk: 22,
        answer_questionid_fk: 15,
        answer_score_modifier: 1.00
      },
      {
        //Answer 23 - true
        answer_template_fk: 23,
        answer_questionid_fk: 16,
        answer_score_modifier: 1.00
      },
      {
        //Answer 24 - false
        answer_template_fk: 24,
        answer_questionid_fk: 16,
        answer_score_modifier: 0.60
      },
      {
        //Answer 25 - true
        answer_template_fk: 25,
        answer_questionid_fk: 17,
        answer_score_modifier: 1.00
      },
      {
        //Answer 26 - false
        answer_template_fk: 26,
        answer_questionid_fk: 17,
        answer_score_modifier: 0.6
      }
];

const seedAnswers = () => Answers.bulkCreate(answersData, {individualHooks: true});

module.exports = seedAnswers;