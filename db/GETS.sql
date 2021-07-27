/* User Info */

-- Get All Active User Info
select * from userinfo 
where active = 1;

-- Get All Active Developers
select * from userinfo 
where userType = 'Developer' 
and active = 1;

-- Get All Active Recruiters
select * from userinfo 
where userType = 'Recruiter' 
and active = 1;

-- Get UserInfo by id
select * from userinfo 
where userID = ?;

-- Get UserInfo by First Name
select * from userinfo 
where first_name LIKE ?;

-- Get UserInfo by Last Name
select * from userinfo 
where last_name LIKE ?;

-- Get UserInfo by First or Last Name
select * from userinfo 
where (first_name like ?) 
OR (last_name like ?);

-- Get UserID from UserInfo by First AND Last Name
select userID_pk from userinfo 
where (first_name like ?) 
AND (last_name like ?);

-- Get UserID from UserInfo by email
select userID_pk from userinfo 
where email LIKE ?;

--Get UserInfo by email
select * from userinfo 
where email LIKE ?;

-- Get Max UserID_pk value
select max(userID_pk) from userinfo;

/* Job Details */

-- Get All Job Details
select * from jobdetails;

-- Get Job Details by id
select * from jobdetails 
where jobDetailsID_pk = ?;

-- Get Job Details by Recruiter id
select * from jobdetails 
where recruiterID_fk = ?;

-- Get Job Details by Job Title
select * from jobdetails 
where jobTitle LIKE ?;

-- Get Job Details with ScoreCard
select jd.*, sc.* from jobdetails jd, scorecard sc 
where jd.jobDetailsID_pk = sc.jobDetailsID_fk;

-- Get Job Details with Survey Answers
select jd.*, sa.* from jobdetails jd, surveyanswers sa 
where jd.jobDetailsID_pk = sa.jobDetailsID_fk;

-- Get Job Details with Survey Answers and ScoreCard
select jd.*, sa.*, sc.* from jobdetails jd, surveyanswers sa, scorecard sc 
where (jd.jobDetailsID_pk = sa.jobDetailsID_fk) 
and (jobDetailsID_pk = sc.jobDetailsID_fk);

-- Get Job Details with Questions and Answers
select jd.*, jq.*, q.*, qc.*, a.*, atmp.* from jobdetails jd, jobquestions jq, questions q, questioncategories qc, answers a, answertemplate atmp 
where (jd.jobDetailsID_pk = jq.jobDetailsID_fk)
and (jq.questionsID_fk = q.questionID_pk)
and (qc.categoryID_pk = q.questioncategory_fk)
and (q.answers_fk = a.answersid_pk)
and (a.answerTemplateID_fk = atmp.answerID_pk);

-- Get MAX Job Details value
select max(jobDetailsID_pk) from jobdetails;

/* User Authentication */

-- Get All User Authentication 
select * from userauthentication;

-- Get All User Authentication for userID
select * from userauthentication
where userID_pk = ?;

-- Get Max User Authentication ID value
select max(userauthentication_pk) from userauthentication;

/* Questions */

-- Get All Questions
select * from questions;

-- Get All Questions with Categories
select q.*, qc.* from questions q, questioncategories qc
where q.questionCategory_fk = qc.categoryID_pk;

-- Get Question by ID and Answers
select q.*, a.*, atmp.* from questions q, answers a, answertemplate atmp
where (q.answers_fk = a.answersID_pk)
and (a.answerTemplateID_fk = atmp.answerID_pk)
and q.questionID_pk = ?;

-- Get Question by Category and Answers
select q.*, qc.*, a.*, atmp.* from questions q, questioncategories qc, answers a, answertemplate atmp
where (q.answers_fk = a.answersID_pk)
and (a.answerTemplateID_fk = atmp.answerID_pk)
and (q.questionCategory_fk = qc.categoryID_pk)
and qc.category LIKE ?;

-- Get max QuestionID value
select max(questionID_pk) from questions;

/* Other GET max values  */

-- Get max Question Categories id value
select max(categoryID_pk) from questioncategories;

-- Get max Answers id value 
select max(answersID_pk) from answers;

-- Get max AnswerTemplate id value 
select max(answerID_pk) from answertemplate;

-- Get max scorecard id value
select max(scorecardID_pk) from scorecard;

-- Get max Survey Answers id value
select max(surveyAnswers_pk) from surveyanswers;
