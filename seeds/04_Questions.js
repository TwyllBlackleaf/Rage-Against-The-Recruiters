const sequelize = require('../config/connection');
const { Questions } = require('../models');

const questionsData = [

    {
        //Question 1
        question_category_fk: 1,
        answers_fk: 1,
        question_type: 'integer', 
        is_deal_breaker: 1,
        question_text: 'What is the yearly base salary?',
        question_base_score: 10.00,
        sort_order: 1
      },
      {
        //Question 2
        question_category_fk: 2,
        answers_fk: 2,
        question_type: 'integer',
        is_deal_breaker: 0,
        question_text: 'What is the approximate yearly bonus?',
        question_base_score: 10.00,
        sort_order: 1
      },
      {
        //Question 3
        question_category_fk: 2,
        answers_fk: 3,
        question_type: 'boolean',
        is_deal_breaker: 0,
        question_text: 'Is there a retirement plan?',
        question_base_score: 10.00,
        sort_order: 2
      },
      {
        //Question 4
        question_category_fk: 2,
        answers_fk: 4,
        question_type: 'decimal', 
        is_deal_breaker: 0,
        question_text: 'What amount of employer matching funds for retirement?',
        question_base_score: 10.00,
        sort_order: 3
      },
      {
        //Question 5
        question_category_fk: 2,
        answers_fk: 6,
        question_type: 'boolean',
        is_deal_breaker: 1,
        question_text: 'Do you provide medical insurance?',
        question_base_score: 10.00,
        sort_order: 4
      },
      {
        //Question 6
        question_category_fk: 4,
        answers_fk: 8,
        question_type: 'boolean', 
        is_deal_breaker: 1,
        question_text: 'Is family medical coverage available?',
        question_base_score: 10.00,
        sort_order: 1
      },
      {
        //Question 7
        question_category_fk: 4,
        answers_fk: 10,
        question_type: 'boolean',
        is_deal_breaker: 1,
        question_text: 'Vision coverage provided?',
        question_base_score: 7.50,
        sort_order: 2
      },
      {
        //Question 8
        question_category_fk: 4,
        answers_fk: 12,
        question_type: 'boolean',
        is_deal_breaker: 0,
        question_text: 'Dental coverage provided?',
        question_base_score: 5.50,
        sort_order: 3
      },
      {
        //Question 9
        question_category_fk: 3,
        answers_fk: 14,
        question_type: 'integer',
        is_deal_breaker: 1,
        question_text: 'Paid vacation days per year?',
        question_base_score: 10.00,
        sort_order: 1
      },
      {
        //Question 10
        question_category_fk: 3,
        answers_fk: 15,
        question_type: 'integer',
        is_deal_breaker: 0,
        question_text: 'Paid sick days per year?',
        question_base_score: 10.00,
        sort_order: 2
      },
      {
        //Question 11
        question_category_fk: 3,
        answers_fk: 16,
        question_type: 'integer',
        is_deal_breaker: 0,
        question_text: 'Paid holiday/personal days per year?',
        question_base_score: 10.00,
        sort_order: 3
      },
      {
        //Question 12
        question_category_fk: 4,
        answers_fk: 17,
        question_type: 'boolean',
        is_deal_breaker: 0,
        question_text: 'Is there life insurance provided?',
        question_base_score: 7.50,
        sort_order: 4
      },
      {
        //Question 13
        question_category_fk: 4,
        answers_fk: 19,
        question_type: 'boolean',
        is_deal_breaker: 0,
        question_text: 'Is there spouse or partner life insurance available?',
        question_base_score: 7.50,
        sort_order: 5
      },
      {
        //Question 14
        question_category_fk: 5,
        answers_fk: 21,
        question_type: 'integer',
        is_deal_breaker: 1,
        question_text: 'Within how many miles is this position from my location? Remote = 0',
        question_base_score: 10.00,
        sort_order: 1
      },
      {
        //Question 15
        question_category_fk: 6,
        answers_fk: 22,
        question_type: 'integer',
        is_deal_breaker: 1,
        question_text: 'What percentage of time will travel be required?',
        question_base_score: 10.00,
        sort_order:1
      },
      {
        //Question 16
        question_category_fk: 7,
        answers_fk: 23,
        question_type: 'boolean',
        is_deal_breaker: 0,
        question_text: 'Does this position require a security clearance?',
        question_base_score: 7.50,
        sort_order: 1
      },
      {
        //Question 17
        question_category_fk: 7,
        answers_fk: 25,
        question_type: 'boolean',
        is_deal_breaker: 0,
        question_text: 'Does your company sponser visa applicants?',
        question_base_score: 7.50,
        sort_order: 2
      }
      
];

const seedQuestions = () => Questions.bulkCreate(questionsData, {individualHooks: true});

module.exports = seedQuestions;