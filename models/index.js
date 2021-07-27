const User = require('./User');
const Scorecard = require('./Scorecard');
const Questions = require('./Questions');
const JobQuestions = require('./JobQuestions');
const JobDetails = require('./JobDetails');
const AnswerTemplate = require('./AnswerTemplate');
const Answers = require('./Answers');
const surveryAnswers = require('./surveyAnswers');
const QuestionCategories = require('./QuestionCategories')

// create associations

JobDetails.belongsTo(JobQuestions, {
    foreignKey: 'jobDetailsID_fk'
});
Questions.belongsTo(JobQuestions, {
    foreignKey: 'questionsID_fk'
});
AnswerTemplate.belongsTo(Answers, {
    foreignKey: 'answerTemplateID_fk'
});
QuestionCategories.belongsTo(Questions, {
    foreignKey: 'questionCategory_fk'
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
    QuestionCategories
};