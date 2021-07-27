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
User.belongsTo(UserInfo, {
    foreignKey: 'user_fk'
});
surveyAnswers.belongsTo(JobDetails, {
    foreignKey: 'job_detailsid_fk',
    onDelete: 'SET NULL'
});
Questions.belongsTo(surveyAnswers, {
    foreignKey: 'questionid_fk'
})
AnswerTemplate.belongsTo(Answers, {
    foreignKey: 'answer_templateid_fk',
    onDelete: 'SET NULL'
});
Questions.belongsTo(Answers, {
    foreignKey: 'answers_fk',
    onDelete: 'SET NULL'
});
QuestionCategories.belongsTo(Questions, {
    foreignKey: 'question_category_fk',
    onDelete: 'SET NULL'
});
Scorecard.belongsTo(JobDetails, {
    foreignKey: 'job_detailsid_fk'
});










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