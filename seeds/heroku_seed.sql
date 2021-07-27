
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
INSERT INTO answertemplate(answer_type,is_deal_breaker) VALUES('integer',0);
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