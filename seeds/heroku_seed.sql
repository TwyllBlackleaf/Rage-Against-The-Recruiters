DROP DATABASE IF EXISTS  ratr_db;
CREATE DATABASE  ratr_db;
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
-- Question 1: What is the base salary? (compensation)
INSERT INTO answertemplate(answer_type,is_deal_breaker,answer_integer_max,answer_integer_min) VALUES('integer',1,1000000,40000);
INSERT INTO answers(answer_templateid_fk,answer_questionid_fk,answer_score_modifier) VALUES(1,1,1.00);
INSERT INTO questions(question_category_fk,answers_fk,question_type,is_deal_breaker,question_text,question_base_score,sort_order) VALUES(9,1,'integer',1,'What is the yearly base salary?',10.00,1);
-- Question 2: What is the yearly bonus? (compensation)
INSERT INTO answertemplate(answer_type,is_deal_breaker) VALUES('integer',0);
INSERT INTO answers(answer_templateid_fk,answer_questionid_fk,answer_score_modifier) VALUES(2,2,1.00);
INSERT INTO questions(question_category_fk,answers_fk,question_type,is_deal_breaker,question_text,question_base_score,sort_order) VALUES(9,2,'integer',0,'What is the yearly base salary?',10.00,1);
