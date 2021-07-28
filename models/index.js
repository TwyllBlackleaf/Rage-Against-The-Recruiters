const User = require('./User');
const UserInfo = require('./UserInfo');
const Scorecard = require('./Scorecard');
const Questions = require('./Questions');
const JobQuestions = require('./JobQuestions');
const JobDetails = require('./JobDetails');
const AnswerTemplate = require('./AnswerTemplate');
const Answers = require('./Answers');
const surveyAnswers = require('./surveyAnswers');
const QuestionCategories = require('./QuestionCategories');

// create associations

JobDetails.belongsToMany(Questions, {
    through: JobQuestions,
    as: 'job_detailsid_fk',
    onDelete: 'SET NULL'
});
Questions.hasMany(JobDetails{
    foreignKey: 'job_detailsid_fk' 
})
UserInfo.belongsToMany(Questions, {
    through: JobQuestions,
    as: 'userid_fk',
    onDelete: 'SET NULL'
});
Questions.hasMany(UserInfo {
    foreignKey: 'userid_fk' 
})

User.belongsTo(UserInfo, {
    foreignKey: 'user_fk'
});

JobDetails.belongsToMany(surveyAnswers,{
    foreignKey: 'job_detailsid_fk'
})
surveyAnswers.hasMany(JobDetails, {
    foreignKey: 'job_detailsid_fk',
    onDelete: 'SET NULL'
});


Questions.belongsToMany(surveyAnswers, {
    foreignKey: 'questionid_fk',
    onDelete: 'SET NULL'
});
surveyAnswers.hasMany(Questions,{
    foreignKey: 'questionid_fk'
});

AnswerTemplate.belongsToMany(Answers, {
    foreignKey: 'answer_templateid_fk',
    onDelete: 'SET NULL'
});
Answers.hasMany(AnswerTemplate,{
    foreignKey: 'answer_templateid_fk'
})

Questions.belongsToMany(Answers, {
    foreignKey: 'answers_fk',
    onDelete: 'SET NULL'
});
Answers.hasMany(Questions,{
    foreignKey: 'answers_fk'
})

Questions.belongsToMany(QuestionCategories, {
    foreignKey: 'question_category_fk',
    onDelete: 'SET NULL'
});
QuestionCategories.hasMany(Questions, {
    foreignKey: 'question_category_fk'
});

Scorecard.belongsToMany(UserInfo, {
    foreignKey: 'userid_fk',
    onDelete: 'SET NULL'
});
UserInfo.hasMany(Scorecard, {
    foreignKey: 'userid_fk'
})

Scorecard.belongsTo(JobDetails, {
    foreignKey: 'job_detailsid_fk',
    onDelete: 'SET NULL'
});
UserInfo.hasOne(Scorecard, {
    foreignKey: 'job_detailsid_fk'
})









module.exports = {
    User,
    Scorecard,
    Questions,
    JobQuestions,
    JobDetails,
    AnswerTemplate,
    Answers,
    surveyAnswers,
    QuestionCategories,
    UserInfo
};