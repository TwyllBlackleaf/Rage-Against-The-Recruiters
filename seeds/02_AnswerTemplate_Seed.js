const sequelize = require('../config/connection');
const { AnswerTemplate} = require('../models');

const answerTemplateData = [
    {
      //Answer 1
        answer_type: 'integer',
        is_deal_breaker:1,
        //answer_integer: ,
        answer_integer_max:1000000,
        answer_integer_min:40000
        //answer_decimal:
        //answer_text:
        //answer_boolean:
        //answer_date:
        //sort_order: 
    },
  
    {
      //Answer 2
        answer_type: 'integer',
        is_deal_breaker:0,
        //answer_integer:
        answer_integer_max: 100000,
        answer_integer_min:0
        //answer_decimal:
        //answer_text:
        //answer_boolean:
        //answer_date:
        //sort_order:
  },
    {
      //Answer 3 - true
        answer_type: 'boolean',
        is_deal_breaker:0,
        //answer_integer:
        //answer_integer_max:
        //answer_integer_min:
        //answer_decimal:
        //answer_text:
        answer_boolean:1
        //answer_date:
        //sort_order:
  },
  {
      //Answer 3 - false
    answer_type: 'boolean',
    is_deal_breaker:0,
    //answer_integer:
    //answer_integer_max:
    //answer_integer_min:
    //answer_decimal:
    //answer_text:
    answer_boolean:0
    //answer_date:
    //sort_order:
},
    {
      //Answer 4
        answer_type: 'decimal',
        is_deal_breaker:0
      //  answer_integer:
      //  answer_integer_max:
      //  answer_integer_min:
      //  answer_decimal:
      //  answer_text:
      //  answer_boolean:
      //  answer_date:
      //  sort_order:
  },
  
    {
      //Answer 5 - true
        answer_type: 'boolean',
        is_deal_breaker:0,
      //  answer_integer:
      //  answer_integer_max:
      //  answer_integer_min:
      //  answer_decimal:
      //  answer_text:
        answer_boolean:1
      //  answer_date:
      //  sort_order:
  },
  
    {
      //Answer 5 - false (deal breaker)
        answer_type: 'boolean',
        is_deal_breaker:1,
      //  answer_integer:
      //  answer_integer_max:
      //  answer_integer_min:
      //  answer_decimal:
      //  answer_text:
        answer_boolean:0
      //  answer_date:
      //  sort_order:
  },
  
    {
      //Answer 6 - true
        answer_type: 'boolean',
        is_deal_breaker:0,
      //  answer_integer:
      //  answer_integer_max:
      //  answer_integer_min:
      //  answer_decimal:
      //  answer_text:
        answer_boolean:1
      //  answer_date:
      //  sort_order:
  },
    
  {
    //Answer 6 - false (deal breaker)
      answer_type: 'boolean',
      is_deal_breaker:1,
    //  answer_integer:
    //  answer_integer_max:
    //  answer_integer_min:
    //  answer_decimal:
    //  answer_text:
      answer_boolean:0
    //  answer_date:
    //  sort_order:
},
 
{
  //Answer 7 - true
    answer_type: 'boolean',
    is_deal_breaker:0,
  //  answer_integer:
  //  answer_integer_max:
  //  answer_integer_min:
  //  answer_decimal:
  //  answer_text:
    answer_boolean:1
  //  answer_date:
  //  sort_order:
},

{
//Answer 7 - false 
  answer_type: 'boolean',
  is_deal_breaker:0,
//  answer_integer:
//  answer_integer_max:
//  answer_integer_min:
//  answer_decimal:
//  answer_text:
  answer_boolean:0
//  answer_date:
//  sort_order:
},
 
{
  //Answer 8 - true
    answer_type: 'boolean',
    is_deal_breaker:0,
  //  answer_integer:
  //  answer_integer_max:
  //  answer_integer_min:
  //  answer_decimal:
  //  answer_text:
    answer_boolean:1
  //  answer_date:
  //  sort_order:
},

{
//Answer 8 - false (deal breaker)
  answer_type: 'boolean',
  is_deal_breaker:1,
//  answer_integer:
//  answer_integer_max:
//  answer_integer_min:
//  answer_decimal:
//  answer_text:
  answer_boolean:0
//  answer_date:
//  sort_order:
},
{
  //Answer 9 - (dealbreaker)
    answer_type: 'integer',
    is_deal_breaker:1,
  //  answer_integer:
    answer_integer_max:100,
    answer_integer_min:5
  //  answer_decimal:
  //  answer_text:
  //  answer_boolean:1
  //  answer_date:
  //  sort_order:
},
{
  //Answer 10
    answer_type: 'integer',
    is_deal_breaker:0,
  //  answer_integer:
    answer_integer_max:100,
    answer_integer_min:5
  //  answer_decimal:
  //  answer_text:
  //  answer_boolean:1
  //  answer_date:
  //  sort_order:
},
{
  //Answer 11
    answer_type: 'integer',
    is_deal_breaker:0,
  //  answer_integer:
    answer_integer_max:100,
    answer_integer_min:2
  //  answer_decimal:
  //  answer_text:
  //  answer_boolean:1
  //  answer_date:
  //  sort_order:
},
{
  //Answer 12 - true
    answer_type: 'boolean',
    is_deal_breaker:0,
  //  answer_integer:
  //  answer_integer_max:
  //  answer_integer_min:
  //  answer_decimal:
  //  answer_text:
    answer_boolean:1
  //  answer_date:
  //  sort_order:
},

{
//Answer 12 - false 
  answer_type: 'boolean',
  is_deal_breaker:0,
//  answer_integer:
//  answer_integer_max:
//  answer_integer_min:
//  answer_decimal:
//  answer_text:
  answer_boolean:0
//  answer_date:
//  sort_order:
},
{
  //Answer 13 - true
    answer_type: 'boolean',
    is_deal_breaker:0,
  //  answer_integer:
  //  answer_integer_max:
  //  answer_integer_min:
  //  answer_decimal:
  //  answer_text:
    answer_boolean:1
  //  answer_date:
  //  sort_order:
},

{
//Answer 13 - false 
  answer_type: 'boolean',
  is_deal_breaker:0,
//  answer_integer:
//  answer_integer_max:
//  answer_integer_min:
//  answer_decimal:
//  answer_text:
  answer_boolean:0
//  answer_date:
//  sort_order:
},
{
  //Answer 14 - (dealbreaker)
    answer_type: 'integer',
    is_deal_breaker:1,
  //  answer_integer:
    answer_integer_max:50,
    answer_integer_min:0
  //  answer_decimal:
  //  answer_text:
  //  answer_boolean:1
  //  answer_date:
  //  sort_order:
},
{
  //Answer 15 - (dealbreaker)
    answer_type: 'integer',
    is_deal_breaker:1,
  //  answer_integer:
    answer_integer_max:50,
    answer_integer_min:0
  //  answer_decimal:
  //  answer_text:
  //  answer_boolean:1
  //  answer_date:
  //  sort_order:
},
{
  //Answer 16 - true
    answer_type: 'boolean',
    is_deal_breaker:0,
  //  answer_integer:
  //  answer_integer_max:
  //  answer_integer_min:
  //  answer_decimal:
  //  answer_text:
    answer_boolean:1
  //  answer_date:
  //  sort_order:
},

{
//Answer 16 - false 
  answer_type: 'boolean',
  is_deal_breaker:0,
//  answer_integer:
//  answer_integer_max:
//  answer_integer_min:
//  answer_decimal:
//  answer_text:
  answer_boolean:0
//  answer_date:
//  sort_order:
},
{
  //Answer 17 - true
    answer_type: 'boolean',
    is_deal_breaker:0,
  //  answer_integer:
  //  answer_integer_max:
  //  answer_integer_min:
  //  answer_decimal:
  //  answer_text:
    answer_boolean:1
  //  answer_date:
  //  sort_order:
},

{
//Answer 17 - false 
  answer_type: 'boolean',
  is_deal_breaker:0,
//  answer_integer:
//  answer_integer_max:
//  answer_integer_min:
//  answer_decimal:
//  answer_text:
  answer_boolean:0
//  answer_date:
//  sort_order:
}
];

const seedAnswerTemplate = () => AnswerTemplate.bulkCreate(answerTemplateData, {individualHooks: true});

module.exports = seedAnswerTemplate;
