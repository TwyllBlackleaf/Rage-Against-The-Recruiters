
const sequelize = require('../config/connection');
const { JobDetails } = require('../models');

const jobDetailsData = [


    {
        //Job Details 1
        recruiterid_fk: 3,
        job_questions_fk: 1,
        job_classification: 'Full Time Employee',
        company: 'Mega Commerce',
        job_title: 'Jr Developer',
        job_description: 'Mega Commerce is a one-of-a-kind retail platform that sits at the intersection of content and commerce. As one of the fastest growing bootstrapped companies in the Midwest, we are looking for more of the core team to help us scale. We connect trusted editorial content written by experts with online retailers to drive consumer engagement and conversion. Our innovations help Consumers win in their online shopping journey. When Consumers win... retailers, publishers, and brands win too.We are currently looking to build out a development team that is super adaptable to develop, manage, and maintain a wide range of internal and external facing software applications.Our scale is big. Our vision is bigger. If you want to grow with a tight-knit team in a fast-paced environment that is disrupting the way the world shops online then we have the opportunity for you.',
        base_salary: 57500,
        bonus_flat: 3500,
        bonus_percentage: 0,
        retirement_plan_avail: 1,
        employer_matching_flat: 2000,
        employer_matching_percentage: 0,
        paid_vacation_days: 8,
        paid_sick_days: 5,
        paid_holidays: 6,
        medical_coverage_avail: 1,
        family_coverage_avail: 0,
        medical_coverage_employer_percentage: 80,
        dental_coverage_avail: 1,
        vision_coverage_avail: 0,
        life_insurance_avail: 0,
        spouse_life_insurance_avail: 0,
        add_benefits_employer_percentage:0
      },
      {
        //Job Details 2
        recruiterid_fk: 4,
        job_questions_fk: 1,
        job_classification: 'Contract to Hire',
        company: 'Rimaya Health',
        job_title: 'QA Analyst',
        job_description: 'Summary - Are you passionate about working in a company that serves a meaningful purpose? Do you love releasing high-quality products? Want to work with modern technology in the cloud? We are excited to talk to you! Rimaya Healthcare Technologies, owner and creator of TargetedHealth, is looking for a QA Automation Test Engineer to join us on this journey and be a core member of the team. This position will impact a rapidly growing organization. We offer great compensation, benefits and work with a great team! Position does not qualify for work visa sponsorship.',
        base_salary: 67500,
        bonus_flat: 2225,
        bonus_percentage: 0,
        retirement_plan_avail: 1,
        employer_matching_flat: 0,
        employer_matching_percentage: 85,
        paid_vacation_days: 10,
        paid_sick_days: 3,
        paid_holidays: 5,
        medical_coverage_avail: 1,
        family_coverage_avail: 1,
        medical_coverage_employer_percentage: 90,
        dental_coverage_avail: 1,
        vision_coverage_avail: 0,
        life_insurance_avail: 1,
        spouse_life_insurance_avail: 1,
        add_benefits_employer_percentage: 75
      }

];

const seedJobDetails = () => JobDetails.bulkCreate(jobDetailsData, {individualHooks: true});

module.exports = seedJobDetails;