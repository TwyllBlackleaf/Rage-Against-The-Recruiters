const sequelize = require('../config/connection');
const { QuestionCategories} = require('../models');

const categoryData = [
  {
    category:'Compensation',
    category_rank:9
  },
  {
    category:'Benefits',
    category_rank:8
  },
  {
    category:'Workplace Environment',
    category_rank:7
  },
  {
    category:'Perks',
    category_rank:6
  },
  {
    category:'Location',
    category_rank:5
  },
  {
    category:'Travel',
    category_rank:4
  },
  {
    category:'Citizenship',
    category_rank:3
  }
];

const seedQuestionCategories = () => QuestionCategories.bulkCreate(categoryData, {individualHooks: true});

module.exports = seedQuestionCategories;
