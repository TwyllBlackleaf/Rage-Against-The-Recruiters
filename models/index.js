const User = require('./User');
const UserInfo = require('./UserInfo');
const Scorecard = require('./Scorecard');
const Questions = require('./Questions');
const JobQuestions = require('./JobQuestions');
const JobDetails = require('./JobDetails');
const AnswerTemplate = require('./AnswerTemplate');
const Answers = require('./Answers');
const surveryAnswers = require('./surveyAnswers');
const QuestionCategories = require('./QuestionCategories');

// create associations

JobDetails.belongsToMany(Questions, {
    through: JobQuestions,
    as: 'jobDetailsID_fk',
    onDelete: 'SET NULL'
});
User.belongsTo(UserInfo, {
    foreignKey: user_fk
});
surveryAnswers.belongsTo(JobDetails, {
    foreignKey: 'jobDetailsID_fk',
    onDelete: 'SET NULL'
});
Questions.belongsToMany(surveryAnswers, {
    foreignKey: 'questionID_fk'
})
AnswerTemplate.belongsToMany(Answers, {
    foreignKey: 'answerTemplateID_fk',
    onDelete: 'SET NULL'
});
Questions.belongsToMany(Answers, {
    foreignKey: 'answers_fk',
    onDelete: 'SET NULL'
});
QuestionCategories.belongsTo(Questions, {
    foreignKey: 'questionCategory_fk',
    onDelete: 'SET NULL'
});
Scorecard.belongsTo(JobDetails, {
    foreignKey: 'jobDetailsID_fk'
});










module.exports = {
    User,
    Scorecard,
    Questions,
    JobQuestions,
    JobDetails,
    AnswerTemplate,
    Answers,
    surveryAnswers,
    QuestionCategories,
    UserInfo
};