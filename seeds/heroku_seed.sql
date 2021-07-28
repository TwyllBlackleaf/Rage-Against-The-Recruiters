
USE ratr_db;

/* Question Categories */
 INSERT INTO questioncategories(category,category_rank) VALUES('Compensation',9);
  INSERT INTO questioncategories(category,category_rank) VALUES('Benefits',8);
   INSERT INTO questioncategories(category,category_rank) VALUES('Workplace Environment',7);
    INSERT INTO questioncategories(category,category_rank) VALUES('Perks',6);
     INSERT INTO questioncategories(category,category_rank) VALUES('Location',5);
      INSERT INTO questioncategories(category,category_rank) VALUES('Travel',4);
       INSERT INTO questioncategories(category,category_rank) VALUES('Citizenship',3);

/* Adding questions and answers */
-- Question 1: What is the base salary? (compensation/deal breaker)
INSERT INTO answertemplate(answer_type,is_deal_breaker,answer_integer_max,answer_integer_min) VALUES('integer',1,1000000,40000);
INSERT INTO answers(answer_templateid_fk,answer_questionid_fk,answer_score_modifier) VALUES(1,1,1.00);
INSERT INTO questions(question_category_fk,answers_fk,question_type,is_deal_breaker,question_text,question_base_score,sort_order) VALUES(1,1,'integer',1,'What is the yearly base salary?',10.00,1);
-- Question 2: What is the yearly bonus? (compensation)
INSERT INTO answertemplate(answer_type,is_deal_breaker, answer_integer_max, answer_integer_min) VALUES('integer',0,100000,0);
INSERT INTO answers(answer_templateid_fk,answer_questionid_fk,answer_score_modifier) VALUES(2,2,1.00);
INSERT INTO questions(question_category_fk,answers_fk,question_type,is_deal_breaker,question_text,question_base_score,sort_order) VALUES(2,2,'integer',0,'What is the approximate yearly bonus?',10.00,1);
-- Question 3: Is there a retirement plan available? (benefits)
INSERT INTO answertemplate(answer_type,is_deal_breaker, answer_boolean) VALUES('boolean',0,1);
INSERT INTO answers(answer_templateid_fk,answer_questionid_fk,answer_score_modifier) VALUES(3,3,1.00);
INSERT INTO answertemplate(answer_type,is_deal_breaker, answer_boolean) VALUES('boolean',0,0);
INSERT INTO answers(answer_templateid_fk,answer_questionid_fk,answer_score_modifier) VALUES(4,3,0.40);
INSERT INTO questions(question_category_fk,answers_fk,question_type,is_deal_breaker,question_text,question_base_score,sort_order) VALUES(2,3,'boolean',0,'Is there a retirement plan?',10.00,1);
-- Question 4: Is there an employer funding match? (benefits)
INSERT INTO answertemplate(answer_type,is_deal_breaker) VALUES('decimal',0);
INSERT INTO answers(answer_templateid_fk,answer_questionid_fk,answer_score_modifier) VALUES(5,4,1.00);
INSERT INTO questions(question_category_fk,answers_fk,question_type,is_deal_breaker,question_text,question_base_score,sort_order) VALUES(2,4,'decimal',0,'What amount of employer matching funds for retirement?',10.00,1);
-- Question 5: Is there medical coverage? (benefits/dealbreaker)
INSERT INTO answertemplate(answer_type,is_deal_breaker, answer_boolean) VALUES('boolean',0,1);
INSERT INTO answers(answer_templateid_fk,answer_questionid_fk,answer_score_modifier) VALUES(6,5,1.00);
INSERT INTO answertemplate(answer_type,is_deal_breaker, answer_boolean) VALUES('boolean',1,0);
INSERT INTO answers(answer_templateid_fk,answer_questionid_fk,answer_score_modifier) VALUES(7,5,0.30);
INSERT INTO questions(question_category_fk,answers_fk,question_type,is_deal_breaker,question_text,question_base_score,sort_order) VALUES(2,6,'boolean',1,'Do you provide medical insurance?',10.00,1);
-- Question 6: Is there medical coverage? (benefits/dealbreaker)
INSERT INTO answertemplate(answer_type,is_deal_breaker, answer_boolean) VALUES('boolean',0,1);
INSERT INTO answers(answer_templateid_fk,answer_questionid_fk,answer_score_modifier) VALUES(8,6,1.00);
INSERT INTO answertemplate(answer_type,is_deal_breaker, answer_boolean) VALUES('boolean',1,0);
INSERT INTO answers(answer_templateid_fk,answer_questionid_fk,answer_score_modifier) VALUES(9,6,0.30);
INSERT INTO questions(question_category_fk,answers_fk,question_type,is_deal_breaker,question_text,question_base_score,sort_order) VALUES(4,8,'boolean',1,'Is family medical coverage available?',10.00,1);
-- Question 7: Is there vision coverage? (Perks)
INSERT INTO answertemplate(answer_type,is_deal_breaker, answer_boolean) VALUES('boolean',0, 1);
INSERT INTO answers(answer_templateid_fk,answer_questionid_fk,answer_score_modifier) VALUES(10,7,1.00);
INSERT INTO answertemplate(answer_type,is_deal_breaker, answer_boolean) VALUES('boolean',0, 0);
INSERT INTO answers(answer_templateid_fk,answer_questionid_fk,answer_score_modifier) VALUES(11,7,0.6);
INSERT INTO questions(question_category_fk,answers_fk,question_type,is_deal_breaker,question_text,question_base_score,sort_order) VALUES(4,10,'boolean',1,'Vision coverage provided?',5.50,1);
-- Question 8: Is there dental coverage? (Perks)
INSERT INTO answertemplate(answer_type,is_deal_breaker, answer_boolean) VALUES('boolean',0, 1);
INSERT INTO answers(answer_templateid_fk,answer_questionid_fk,answer_score_modifier) VALUES(12,8,1.00);
INSERT INTO answertemplate(answer_type,is_deal_breaker, answer_boolean) VALUES('boolean',0, 0);
INSERT INTO answers(answer_templateid_fk,answer_questionid_fk,answer_score_modifier) VALUES(13,8,0.6);
INSERT INTO questions(question_category_fk,answers_fk,question_type,is_deal_breaker,question_text,question_base_score,sort_order) VALUES(4,12,'boolean',0,'Dental coverage provided?',7.50,1);
-- Question 9: Paid vacation days? (Workplace Environment/Dealbreaker)
INSERT INTO answertemplate(answer_type,is_deal_breaker,answer_integer_max,answer_integer_min) VALUES('integer',1,100,5);
INSERT INTO answers(answer_templateid_fk,answer_questionid_fk,answer_score_modifier) VALUES(14,9,1.00);
INSERT INTO questions(question_category_fk,answers_fk,question_type,is_deal_breaker,question_text,question_base_score,sort_order) VALUES(3,14,'integer',1,'Paid vacation days per year?',10.00,1);
-- Question 10: Paid sick days? (Workplace Environment)
INSERT INTO answertemplate(answer_type,is_deal_breaker,answer_integer_max,answer_integer_min) VALUES('integer',0,100,3);
INSERT INTO answers(answer_templateid_fk,answer_questionid_fk,answer_score_modifier) VALUES(15,10,1.00);
INSERT INTO questions(question_category_fk,answers_fk,question_type,is_deal_breaker,question_text,question_base_score,sort_order) VALUES(3,15,'integer',0,'Paid sick days per year?',10.00,1);
-- Question 11: Paid holidays/personal days? (Workplace Environment)
INSERT INTO answertemplate(answer_type,is_deal_breaker,answer_integer_max,answer_integer_min) VALUES('integer',0,100,2);
INSERT INTO answers(answer_templateid_fk,answer_questionid_fk,answer_score_modifier) VALUES(16,10,1.00);
INSERT INTO questions(question_category_fk,answers_fk,question_type,is_deal_breaker,question_text,question_base_score,sort_order) VALUES(3,16,'integer',0,'Paid holiday/personal days per year?',10.00,1);
-- Question 12: Is there life insurance coverage? (Perks)
INSERT INTO answertemplate(answer_type,is_deal_breaker, answer_boolean) VALUES('boolean',0, 1);
INSERT INTO answers(answer_templateid_fk,answer_questionid_fk,answer_score_modifier) VALUES(17,12,1.00);
INSERT INTO answertemplate(answer_type,is_deal_breaker, answer_boolean) VALUES('boolean',0, 0);
INSERT INTO answers(answer_templateid_fk,answer_questionid_fk,answer_score_modifier) VALUES(18,12,0.6);
INSERT INTO questions(question_category_fk,answers_fk,question_type,is_deal_breaker,question_text,question_base_score,sort_order) VALUES(4,17,'boolean',0,'Is there life insurance provided?',7.50,1);
-- Question 13: Is there spouse/partner life insurance coverage? (Perks)
INSERT INTO answertemplate(answer_type,is_deal_breaker, answer_boolean) VALUES('boolean',0, 1);
INSERT INTO answers(answer_templateid_fk,answer_questionid_fk,answer_score_modifier) VALUES(19,13,1.00);
INSERT INTO answertemplate(answer_type,is_deal_breaker, answer_boolean) VALUES('boolean',0, 0);
INSERT INTO answers(answer_templateid_fk,answer_questionid_fk,answer_score_modifier) VALUES(20,13,0.6);
INSERT INTO questions(question_category_fk,answers_fk,question_type,is_deal_breaker,question_text,question_base_score,sort_order) VALUES(4,19,'boolean',0,'Is there spouse or partner life insurance available?',7.50,1);
-- Question 14: Within how many miles is this position from my location? (Location/Dealbreaker)
INSERT INTO answertemplate(answer_type,is_deal_breaker,answer_integer_max,answer_integer_min) VALUES('integer',1,50,0);
INSERT INTO answers(answer_templateid_fk,answer_questionid_fk,answer_score_modifier) VALUES(21,14,1.00);
INSERT INTO questions(question_category_fk,answers_fk,question_type,is_deal_breaker,question_text,question_base_score,sort_order) VALUES(5,21,'integer',1,'Within how many miles is this position from my location? Remote = 0',10.00,1);
-- Question 15: What percentage of time will travel be required? (Travel/Dealbreaker)
INSERT INTO answertemplate(answer_type,is_deal_breaker,answer_integer_max,answer_integer_min) VALUES('integer',1,50,0);
INSERT INTO answers(answer_templateid_fk,answer_questionid_fk,answer_score_modifier) VALUES(22,15,1.00);
INSERT INTO questions(question_category_fk,answers_fk,question_type,is_deal_breaker,question_text,question_base_score,sort_order) VALUES(6,22,'integer',1,'What percentage of time will travel be required?',10.00,1);
-- Question 16: Does this position require a security clearance? (Citizenship)
INSERT INTO answertemplate(answer_type,is_deal_breaker, answer_boolean) VALUES('boolean',0, 0);
INSERT INTO answers(answer_templateid_fk,answer_questionid_fk,answer_score_modifier) VALUES(23,16,1.00);
INSERT INTO answertemplate(answer_type,is_deal_breaker, answer_boolean) VALUES('boolean',0, 1);
INSERT INTO answers(answer_templateid_fk,answer_questionid_fk,answer_score_modifier) VALUES(24,16,0.6);
INSERT INTO questions(question_category_fk,answers_fk,question_type,is_deal_breaker,question_text,question_base_score,sort_order) VALUES(7,23,'boolean',0,'Does this position require a security clearance?',7.50,1);
-- Question 17: Does your company sponser visa applicants? (Citizenship)
INSERT INTO answertemplate(answer_type,is_deal_breaker, answer_boolean) VALUES('boolean',0, 1);
INSERT INTO answers(answer_templateid_fk,answer_questionid_fk,answer_score_modifier) VALUES(25,17,1.00);
INSERT INTO answertemplate(answer_type,is_deal_breaker, answer_boolean) VALUES('boolean',0, 1);
INSERT INTO answers(answer_templateid_fk,answer_questionid_fk,answer_score_modifier) VALUES(26,17,0.6);
INSERT INTO questions(question_category_fk,answers_fk,question_type,is_deal_breaker,question_text,question_base_score,sort_order) VALUES(7,25,'boolean',0,'Does your company sponser visa applicants?',7.50,1);

/* User Info */
-- Developer User 1 - Donna Developer
 INSERT INTO userinfo(user_type,first_name,last_name,
 email,phone,preferred_location,
 user_url,company,facebook,
 twitter,linkedin,active,
 verified,want1,want2,
 want3,avoid1,avoid2,avoid3) VALUES
 ('Developer','Donna','Developer',
 'donna@codemonkey.com','212-555-1234','New York City',
 'www.codemonkey.com','CodeMonkey','donnaD@facebook',
 '@donnaDevMonkey','donnaDev@linkedin.com',1,
 0,'Corner Office','Pet Friendly',
 'Close to Coffee','Meetings','Company Outings','Bad office coffee');

 -- Developer User 2 - Kolby Coder
 INSERT INTO userinfo(user_type,first_name,last_name,
 email,phone,preferred_location,
 user_url,company,facebook,
 twitter,linkedin,active,
 verified,want1,want2,
 want3,avoid1,avoid2,avoid3) VALUES
 ('Developer','Kolby','Coder',
 'kakakacolby@gmail.net','808-808-0987','Wailea Point',
 'www.surferdude.net','SurfNSoftware','kcolby@facebook',
 '@kakakacolby','kakakacolby@linkedin.com',1,
 0,'Cool Buzz','Tasty Waves',
 'Short Board','Meetings','Company Outings','Bad office coffee');
-- Recruiter User 1 - Robbie Recruiter
 INSERT INTO userinfo(user_type,first_name,last_name,
 email,phone,preferred_location,
 user_url,company,facebook,
 twitter,linkedin,active,
 verified,want1,want2,
 want3,avoid1,avoid2,avoid3) VALUES
 ('Recruiter','Robbie','Recruiter',
 'rrecruiter@hirepeople.com','615-321-3210','Nashville',
 'www.hirepeople.com','HirePeople','rrHirePeople@facebook',
 '@rrHirePeople','rrecruiter@linkedin.com',1,
 0,'','',
 '','','','');
 -- Recruiter User 2 - Alice Cooper
  INSERT INTO userinfo(user_type,first_name,last_name,
 email,phone,preferred_location,
 user_url,company,facebook,
 twitter,linkedin,active,
 verified,want1,want2,
 want3,avoid1,avoid2,avoid3) VALUES
 ('Recruiter','Alice','Cooper',
 'alicecooper@madman.com','555-123-4567','Norfolk',
 'www.madman.com','MadMan','alicecooper@facebook',
 '@alicecooper','alicecooperr@linkedin.com',1,
 0,'','',
 '','','','');

 /* Job Details */
 -- Job 1 Jr Developer
  INSERT INTO jobdetails(recruiterid_fk,job_questionsid_fk,job_classification,
  job_title,job_description,base_salary,
  bonus_flat,retirement_plan_avail,
  employer_matching_percentage,paid_vacation_days,paid_sick_days,
  paid_holidays,medical_coverage_avail,family_coverage_avail,
  medical_coverage_employer_percentage,dental_coverage_avail,
  vision_coverage_avail,life_insurance_avail,spouse_life_insurance_avail,
  add_benefits_employer_percentage) VALUES
  (3,1,'Full Time Employee',
  'Jr Developer','Mega Commerce is a one-of-a-kind retail platform that sits at the intersection of content and commerce. As one of the fastest growing bootstrapped companies in the Midwest, we are looking for more of the core team to help us scale. We connect trusted editorial content written by experts with online retailers to drive consumer engagement and conversion. Our innovations help Consumers win in their online shopping journey. When Consumers win— retailers, publishers, and brands win too.We are currently looking to build out a development team that is super adaptable to develop, manage, and maintain a wide range of internal and external facing software applications.Our scale is big. Our vision is bigger. If you want to grow with a tight-knit team in a fast-paced environment that is disrupting the way the world shops online then we have the opportunity for you.',57500,
  3500,1,50,
  8,5,6,
  1,0,80,
  1,0,0,0,0);

    INSERT INTO jobdetails(recruiterid_fk,job_questionsid_fk,job_classification,
  job_title,job_description,base_salary,
  bonus_flat,retirement_plan_avail,
  employer_matching_percentage,paid_vacation_days,paid_sick_days,
  paid_holidays,medical_coverage_avail,family_coverage_avail,
  medical_coverage_employer_percentage,dental_coverage_avail,
  vision_coverage_avail,life_insurance_avail,spouse_life_insurance_avail,
  add_benefits_employer_percentage) VALUES
  (4,1,'Contract to Hire',
  'QA Analyst','Summary:

Are you passionate about working in a company that serves a meaningful purpose?
Do you love releasing high-quality products?
Want to work with modern technology in the cloud?
We are excited to talk to you! Aymira Healthcare Technologies, owner and creator of OnTarget, is looking for a QA Automation Test Engineer to join us on this journey and be a core member of the team. This position will impact a rapidly growing organization. We offer great compensation, benefits and work with a great team!

Position does not qualify for work visa sponsorship.',67500,
  3500,1,50,
  8,5,6,
  1,0,80,
  1,0,0,0,0);

  /* Job Questions */
  -- Job 1 Questions --
  
  INSERT INTO jobquestions(job_detailsid_fk,questionsid_fk,userid_fk) VALUES(1,1,1);
   INSERT INTO jobquestions(job_detailsid_fk,questionsid_fk,userid_fk) VALUES(1,2,1);
    INSERT INTO jobquestions(job_detailsid_fk,questionsid_fk,userid_fk) VALUES(1,3,1);
     INSERT INTO jobquestions(job_detailsid_fk,questionsid_fk,userid_fk) VALUES(1,4,1);
      INSERT INTO jobquestions(job_detailsid_fk,questionsid_fk,userid_fk) VALUES(1,5,1);
       INSERT INTO jobquestions(job_detailsid_fk,questionsid_fk,userid_fk) VALUES(1,6,1);
        INSERT INTO jobquestions(job_detailsid_fk,questionsid_fk,userid_fk) VALUES(1,7,1);
         INSERT INTO jobquestions(job_detailsid_fk,questionsid_fk,userid_fk) VALUES(1,8,1);
          INSERT INTO jobquestions(job_detailsid_fk,questionsid_fk,userid_fk) VALUES(1,9,1);
           INSERT INTO jobquestions(job_detailsid_fk,questionsid_fk,userid_fk) VALUES(1,10,1);
            INSERT INTO jobquestions(job_detailsid_fk,questionsid_fk,userid_fk) VALUES(1,11,1);
             INSERT INTO jobquestions(job_detailsid_fk,questionsid_fk,userid_fk) VALUES(1,12,1);
              INSERT INTO jobquestions(job_detailsid_fk,questionsid_fk,userid_fk) VALUES(1,13,1);
              INSERT INTO jobquestions(job_detailsid_fk,questionsid_fk,userid_fk) VALUES(1,14,1);
              INSERT INTO jobquestions(job_detailsid_fk,questionsid_fk,userid_fk) VALUES(1,15,1);
              INSERT INTO jobquestions(job_detailsid_fk,questionsid_fk,userid_fk) VALUES(1,16,1);
              INSERT INTO jobquestions(job_detailsid_fk,questionsid_fk,userid_fk) VALUES(1,17,1);

