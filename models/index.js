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
    foreignKey: 'questionsid_fk',
    onDelete: 'SET NULL'
});
Questions.belongsToMany(JobDetails, {
    through: JobQuestions,
    foreignKey: 'questionsid_fk' 
});

    // JobDetails.hasMany(JobQuestions, {foreignKey: 'job_questionsid_fk', sourceKey: 'job_questionsid_pk'});
    // JobQuestions.belongsTo(JobDetails, {foreignKey: 'job_detailsid_fk', targetKey: 'job_detailsid_pk'});

    // Questions.belongsTo(JobQuestions, {foreignKey: 'job_questionsid_fk', sourceKey: 'job_questionsid_pk'});
    // JobQuestions.hasMany(Questions, {foreignKey: 'job_detailsid_fk', targetKey: 'job_detailsid_pk'});


UserInfo.belongsToMany(Questions, {
    through: JobQuestions,
    as: 'userid_fk',
    onDelete: 'SET NULL'
});
Questions.hasMany(UserInfo, {
    foreignKey: 'userid_fk' 
});

User.belongsTo(UserInfo, {
    foreignKey: 'user_fk',
    onDelete: 'SET NULL'
});
UserInfo.hasOne(User,{
       foreignKey: 'user_fk'    
});

JobDetails.hasMany(surveyAnswers,{
    foreignKey: 'job_detailsid_fk'
})
surveyAnswers.belongsTo(JobDetails, {
    foreignKey: 'job_detailsid_fk',
    onDelete: 'SET NULL'
});


Questions.hasMany(surveyAnswers, {
    foreignKey: 'questionsid_fk',
    onDelete: 'SET NULL'
});
surveyAnswers.belongsTo(Questions,{
    foreignKey: 'questionsid_fk'
});

AnswerTemplate.belongsTo(Answers, {
    foreignKey: 'answer_templateid_fk',
    onDelete: 'SET NULL'
});
Answers.hasMany(AnswerTemplate,{
    foreignKey: 'answer_templateid_fk'
})

Questions.belongsTo(Answers, {
    foreignKey: 'answers_fk',
    onDelete: 'SET NULL'
});
Answers.hasMany(Questions,{
    foreignKey: 'answers_fk'
})

Questions.belongsTo(QuestionCategories, {
    foreignKey: 'question_category_fk',
    onDelete: 'SET NULL'
});
QuestionCategories.hasMany(Questions, {
    foreignKey: 'question_category_fk'
});

Scorecard.belongsTo(UserInfo, {
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