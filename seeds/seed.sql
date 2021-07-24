  
  /* User Info Seed Data  */
INSERT INTO userinfo
  (userType,first_name,last_name,email,phone,
  userURL,company,facebook,twitter,linkedin,active,verified,
  want1,want2,want3,avoid1,avoid2,avoid3) 
  VALUES('Developer','Diane','Developer','dianedev@mail.com','555-666-7890',
  'diane@godaddy.com','Self Employed','dianedev@facebook','@dianedev','dianedev@linkedin.com',1,0,
  'Flexibility','Telecommute','javaScript','Long Commutes','Crunch Times','Unpaid overtime');

INSERT INTO userinfo
  (userType,first_name,last_name,email,phone,
  userURL,company,facebook,twitter,linkedin,active,verified,
  want1,want2,want3,avoid1,avoid2,avoid3) 
  VALUES('Developer','Ken','Koder','kenkoder@mail.com','888-212-0123',
  'kenkoder@nunya.com','Gunslinger','kenkoder@facebook','@kenkoder','kenkoder@linkedin.com',1,0,
  'Money','Bonus','Vacation','Meetings','Paperwork','Bad Office Coffee');

INSERT INTO userinfo
  (userType,first_name,last_name,email,phone,
  userURL,company,facebook,twitter,linkedin,active,verified) 
  VALUES('Recruiter','Robbie','Recruiter','robbieR@mail.com','800-800-8080',
  'robbieR@wewantyou.com','We Want You Recruiting','robbieR@facebook','@robbieR','robbieR@linkedin.com',1,0
  );

INSERT INTO userinfo
  (userType,first_name,last_name,email,phone,
  userURL,company,facebook,twitter,linkedin,active,verified) 
  VALUES('Recruiter','Real','Gogetter','bigmoney@youbetcha.com','212-212-1212',
  'https://youbetcha.com','Show Me The Money Talent Scouts','bigmoney@facebook','@bigMoney','bigmoney@linkedin.com',1,0
  );

/* Question Categories Seed Data */
INSERT INTO questioncategories(category,categoryRank) VALUES('Dealbreaker',10);
INSERT INTO questioncategories(category,categoryRank) VALUES('Compensation',9);
INSERT INTO questioncategories(category,categoryRank) VALUES('Benefits',8);
INSERT INTO questioncategories(category,categoryRank) VALUES('Workplace Environment',7);
INSERT INTO questioncategories(category,categoryRank) VALUES('Perks',6);
INSERT INTO questioncategories(category,categoryRank) VALUES('Location',5);
INSERT INTO questioncategories(category,categoryRank) VALUES('Travel',4);
INSERT INTO questioncategories(category,categoryRank) VALUES('Education',3);
INSERT INTO questioncategories(category,categoryRank) VALUES('Work History',2);
INSERT INTO questioncategories(category,categoryRank) VALUES('Citizenship',1);
INSERT INTO questioncategories(category,categoryRank) VALUES('Criminal Record',0);
INSERT INTO questioncategories(category,categoryRank) VALUES('Work Experience',0);
INSERT INTO questioncategories(category,categoryRank) VALUES('Company Policy',0);

/* Question and Answer Template Seed Data  */
/*------ Question 1 ---------*/
INSERT INTO questions(questionCategory_fk,answers_fk,isDealBreaker,questionType,questionText,sortOrder,questionBaseScore) VALUES(7,1,1,'ChooseOne','How many hours per week?',1,15);
INSERT INTO answertemplate(answerType,isDealBreaker,answerInteger,sortOrder) VALUES('integer',1,20,1);
INSERT INTO answers(answerTemplateID_fk,answerQuestionID_fk, answerScoreModifier) VALUES(1,1,0.00);
INSERT INTO answertemplate(answerType,isDealBreaker,answerInteger,sortOrder) VALUES('integer',0,25,2);
INSERT INTO answers(answerTemplateID_fk,answerQuestionID_fk,answerScoreModifier) VALUES(2,1,0.75);
INSERT INTO answertemplate(answerType,isDealBreaker,answerInteger,sortOrder) VALUES('integer',0,30,3);
INSERT INTO answers(answerTemplateID_fk,answerQuestionID_fk,answerScoreModifier) VALUES(3,1,0.95);
INSERT INTO answertemplate(answerType,isDealBreaker,answerInteger,sortOrder) VALUES('integer',0,35,4);
INSERT INTO answers(answerTemplateID_fk,answerQuestionID_fk,answerScoreModifier) VALUES(4,1,1.10);
INSERT INTO answertemplate(answerType,isDealBreaker,answerInteger,sortOrder) VALUES('integer',0,40,5);
INSERT INTO answers(answerTemplateID_fk,answerQuestionID_fk,answerScoreModifier) VALUES(5,1,1.25);
INSERT INTO answertemplate(answerType,isDealBreaker,answerInteger,sortOrder) VALUES('integer',0,45,6);
INSERT INTO answers(answerTemplateID_fk,answerQuestionID_fk,answerScoreModifier) VALUES(6,1,0.85);
/*
--------- Question 2 ------------ */
INSERT INTO questions(questionCategory_fk,answers_fk,isDealBreaker,questionType,questionText,sortOrder,questionBaseScore) VALUES(3,2,1,'Text','Do you allow for telecommute?',2,8);
INSERT INTO answertemplate(answerType,isDealBreaker,answerBoolean,sortOrder) VALUES('boolean',0,0,1);
INSERT INTO answers(answerTemplateID_fk,answerQuestionID_fk,answerScoreModifier) VALUES(7,2,0.00);
INSERT INTO answertemplate(answerType,isDealBreaker,answerBoolean,sortOrder) VALUES('boolean',0,1,2);
INSERT INTO answers(answerTemplateID_fk,answerQuestionID_fk,answerScoreModifier) VALUES(8,2,1.00);
/*
----------- Question 3 ----------------------------------*/
INSERT INTO questions(questionCategory_fk,answers_fk,isDealBreaker,questionType,questionText,sortOrder,questionBaseScore) VALUES(7,3,1,'ChooseOne','What is the required education level?',3,10);
INSERT INTO answertemplate(answerType,isDealBreaker,answerText,sortOrder) VALUES('text',0,'High School',1);
INSERT INTO answers(answerTemplateID_fk,answerQuestionID_fk,answerScoreModifier) VALUES(9,3,1.00);
INSERT INTO answertemplate(answerType,isDealBreaker,answerText,sortOrder) VALUES('text',0,'College',2);
INSERT INTO answers(answerTemplateID_fk,answerQuestionID_fk,answerScoreModifier) VALUES(10,3,1.00);
INSERT INTO answertemplate(answerType,isDealBreaker,answerText,sortOrder) VALUES('text',0,'Associates Degree',2);
INSERT INTO answers(answerTemplateID_fk,answerQuestionID_fk,answerScoreModifier) VALUES(11,3,1.00);
INSERT INTO answertemplate(answerType,isDealBreaker,answerText,sortOrder) VALUES('text',0,'Bachelors Degree',2);
INSERT INTO answers(answerTemplateID_fk,answerQuestionID_fk,answerScoreModifier) VALUES(12,3,1.00);
INSERT INTO answertemplate(answerType,isDealBreaker,answerText,sortOrder) VALUES('text',0,'Masters Degree',2);
INSERT INTO answers(answerTemplateID_fk,answerQuestionID_fk,answerScoreModifier) VALUES(13,3,0.5);
INSERT INTO answertemplate(answerType,isDealBreaker,answerText,sortOrder) VALUES('text',1,'Doctorate Degree',2);
INSERT INTO answers(answerTemplateID_fk,answerQuestionID_fk,answerScoreModifier) VALUES(14,3,0.25);
/*
----------- Question 4 ----------------------------------*/
INSERT INTO questions(questionCategory_fk,answers_fk,isDealBreaker,questionType,questionText,sortOrder,questionBaseScore) VALUES
(5,4,1,'ChooseOne','Where is the job location?',4,20);
INSERT INTO answertemplate(answerType,isDealBreaker,answerText,sortOrder) VALUES('text',0,'Downtown Nashville',1);
INSERT INTO answers(answerTemplateID_fk,answerQuestionID_fk,answerScoreModifier) VALUES(15,4,1.0);
INSERT INTO answertemplate(answerType,isDealBreaker,answerText,sortOrder) VALUES('text',0,'Metro Nashville Area',1);
INSERT INTO answers(answerTemplateID_fk,answerQuestionID_fk,answerScoreModifier) VALUES(16,4,0.90);
INSERT INTO answertemplate(answerType,isDealBreaker,answerText,sortOrder) VALUES('text',0,'Within 25 Miles of Downtown',1);
INSERT INTO answers(answerTemplateID_fk,answerQuestionID_fk,answerScoreModifier) VALUES(17,4,0.8);
INSERT INTO answertemplate(answerType,isDealBreaker,answerText,sortOrder) VALUES('text',0,'Within 50 Miles of Downtown',1);
INSERT INTO answers(answerTemplateID_fk,answerQuestionID_fk,answerScoreModifier) VALUES(18,4,0.7);
INSERT INTO answertemplate(answerType,isDealBreaker,answerText,sortOrder) VALUES('text',1,'More than 50 Miles from Downtown',1);
INSERT INTO answers(answerTemplateID_fk,answerQuestionID_fk,answerScoreModifier) VALUES(19,4,0.2);
INSERT INTO answertemplate(answerType,isDealBreaker,answerText,sortOrder) VALUES('text',0,'Full Remote',1);
INSERT INTO answers(answerTemplateID_fk,answerQuestionID_fk,answerScoreModifier) VALUES(20,4,1.15);

/* Job Details 

------- Job 1 ----- */
 INSERT INTO jobdetails(recruiterID_fk,jobQuestionsID_fk,jobClassification,jobTitle,
 jobDescription,
 baseSalary,bonusFlat,bonusPercentage,retirementPlanAvail,employerMatchingFlat,
 employerMatchingPercentage,paidVacationDays,paidSickDays,paidHolidays,medicalCoverageAvail,
 familyCoverageAvail,medicalCoverageEmployerPercentage,dentalCoverageAvail,visionCoverageAvail,
 lifeInsuranceAvail,spouseLifeInsuranceAvail,addBenefitsEmployerPercentage) VALUES
 (3,1,'Full Time Employee','Jr. Software Full Stack Developer',
 'Our premier Fortune 100 telecommunications client currently provides service to over 25 million customers across more than 40 states. This company believes in providing their employees with high-quality benefits to live healthier, physically, financially, and emotionally. Besides competitive health benefits they also provide support to you and your loved ones including perks such as education assistance, childcare discounts, legal services, and discounted products and services. Want to work for a company that is focused on diversity, inclusion and helping their employees grow? This may be the place for you! This is an exciting opportunity to join a large telecommunications company in order to assist with the development of a major company initiative - focused around outage management with their regional operational centers. The successful candidate will be working amongst a talented team to develop and improve the performance of the websites and add new features, as necessary.'
 ,67500.00,0.00,2.00,1,0,2.00,5,5,5,1,0,90.00,0,0,1,0,100);

/*  Job 2 */
  INSERT INTO jobdetails(recruiterID_fk,jobQuestionsID_fk,jobClassification,jobTitle,
  jobDescription,
  baseSalary,bonusFlat,bonusPercentage,retirementPlanAvail,employerMatchingPercentage,
  paidVacationDays,paidSickDays,paidHolidays,medicalCoverageAvail,familyCoverageAvail,
  medicalCoverageEmployerPercentage,dentalCoverageAvail,visionCoverageAvail,lifeInsuranceAvail,
  spouseLifeInsuranceAvail,addBenefitsEmployerPercentage) VALUES
  (4,2,'Contract to Hire','Front End Developer CTH',
  'Stoxen is looking for a Front-End Software Engineer to join its entrepreneurial team who will be responsible for designing, building, and deploying web-based user interfaces atop Rest APIs within our technical stack for both internal and external stakeholders. You will have significant ownership of features which are developed and must excel at creative and progressive problem solving to advance and differentiate the Stoxen platform. This is a technical role for which you are expected to engineer, debug, review, and contribute code to advance the user experience while bringing a high level of attention to design in effort to optimize the front-end customer experience.'
  ,98750.00,0,0,1,4.00,12,2,4,0,0,0,0,0,0,0,0);

/* Job Questions */

INSERT INTO jobquestions(jobDetailsID_fk,questionsID_fk) VALUES(1,1);
INSERT INTO jobquestions(jobDetailsID_fk,questionsID_fk) VALUES(1,3);
INSERT INTO jobquestions(jobDetailsID_fk,questionsID_fk) VALUES(1,4);
INSERT INTO jobquestions(jobDetailsID_fk,questionsID_fk) VALUES(2,1);
INSERT INTO jobquestions(jobDetailsID_fk,questionsID_fk) VALUES(2,2);
INSERT INTO jobquestions(jobDetailsID_fk,questionsID_fk) VALUES(2,4);


