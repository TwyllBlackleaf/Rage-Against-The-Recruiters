/* Create Database and schema */

DROP DATABASE IF EXISTS  ratr_db;
CREATE DATABASE  ratr_db;
USE ratr_db;
CREATE TABLE IF NOT EXISTS `ratr_db`.`UserInfo` (
  `userID_pk` INT NOT NULL AUTO_INCREMENT,
  `userType` VARCHAR(30) NOT NULL DEFAULT 'Recruiter',
  `first_name` VARCHAR(20) NULL,
  `last_name` VARCHAR(30) NULL,
  `email` VARCHAR(50) NOT NULL,
  `phone` VARCHAR(15) NULL,
  `preferredLocation` VARCHAR(25) NULL,
  `userURL` VARCHAR(50) NULL,
  `company` VARCHAR(50) NULL,
  `facebook` VARCHAR(50) NULL,
  `twitter` VARCHAR(50) NULL,
  `linkedin` VARCHAR(50) NULL,
  `active` TINYINT NULL DEFAULT True,
  `verified` TINYINT NULL DEFAULT False,
  `want1` VARCHAR(45) NULL,
  `want2` VARCHAR(45) NULL,
  `want3` VARCHAR(45) NULL,
  `avoid1` VARCHAR(45) NULL,
  `avoid2` VARCHAR(45) NULL,
  `avoid3` VARCHAR(45) NULL,
  PRIMARY KEY (`userID_pk`),
  UNIQUE INDEX `email_UNIQUE` (`email` ASC) VISIBLE);

CREATE TABLE IF NOT EXISTS `ratr_db`.`UserAuthentication` (
  `userauthentication_pk` INT NOT NULL AUTO_INCREMENT,
  `userID_fk` INT NULL,
  `userPWD` VARCHAR(50) NULL,
  `userPWDFailAttempts` INT NOT NULL DEFAULT 0,
  `userAccountLockout` TINYINT NOT NULL DEFAULT False,
  `userTempPWD` VARCHAR(20) NULL,
  `userPWDResetAttempts` INT NOT NULL DEFAULT 0,
  PRIMARY KEY (`userauthentication_pk`),
  INDEX `userID_fk_idx` (`userID_fk` ASC) VISIBLE,
  CONSTRAINT `userauthentication_userID_fk`
    FOREIGN KEY (`userID_fk`)
    REFERENCES `ratr_db`.`UserInfo` (`userID_pk`)
    ON DELETE SET NULL
    ON UPDATE SET NULL);

CREATE TABLE IF NOT EXISTS `ratr_db`.`QuestionCategories` (
  `categoryID_pk` INT NOT NULL AUTO_INCREMENT,
  `category` VARCHAR(25) NOT NULL,
  `categoryRank` INT NOT NULL DEFAULT 0,
  PRIMARY KEY (`categoryID_pk`));


CREATE TABLE IF NOT EXISTS `ratr_db`.`AnswerTemplate` (
  `answerID_pk` INT NOT NULL AUTO_INCREMENT,
  `answerType` VARCHAR(20) NULL,
  `isDealBreaker` TINYINT NOT NULL DEFAULT 0,
  `answerInteger` INT NULL,
  `answerIntegerMax` INT NULL,
  `answerIntegerMin` INT NULL,
  `answerDecimal` DECIMAL(19,4) NULL,
  `answerText` VARCHAR(50) NULL,
  `answerBoolean` TINYINT NULL,
  `answerDate` DATE NULL,
  `sortOrder` INT NULL,
  PRIMARY KEY (`answerID_pk`));


CREATE TABLE IF NOT EXISTS `ratr_db`.`Questions` (
  `questionID_pk` INT NOT NULL AUTO_INCREMENT,
  `questionCategory_fk` INT NULL,
  `answers_fk` INT NULL,
  `questionType` VARCHAR(20) NULL,
  `isDealBreaker` TINYINT NOT NULL DEFAULT 0,
  `questionText` VARCHAR(100) NULL,
  `questionBaseScore` DECIMAL(4,2) NOT NULL DEFAULT 10.00,
  `sortOrder` INT NULL,
  PRIMARY KEY (`questionID_pk`),
  INDEX `questionCategoryID_fk_idx` (`questionCategory_fk` ASC) VISIBLE,
  INDEX `answersID_fk_idx` (`answers_fk` ASC) VISIBLE,
  CONSTRAINT `questions_questionCategoryID_fk`
    FOREIGN KEY (`questionCategory_fk`)
    REFERENCES `ratr_db`.`QuestionCategories` (`categoryID_pk`)
    ON DELETE SET NULL
    ON UPDATE SET NULL);

CREATE TABLE IF NOT EXISTS `ratr_db`.`Answers` (
  `answersID_pk` INT NOT NULL AUTO_INCREMENT,
  `answerTemplateID_fk` INT NULL,
  `answerQuestionID_fk` INT NULL,
  `answerScoreModifier` DECIMAL(5,2) NOT NULL DEFAULT 0.00,
  PRIMARY KEY (`answersID_pk`),
  INDEX `answersTemplateID_fk_idx` (`answerTemplateID_fk` ASC) VISIBLE,
  CONSTRAINT `answers_questionID_fk`
    FOREIGN KEY (`answerQuestionID_fk`)
    REFERENCES `ratr_db`.`Questions` (`questionID_pk`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `answers_answersTemplateID_fk`
    FOREIGN KEY (`answerTemplateID_fk`)
    REFERENCES `ratr_db`.`AnswerTemplate` (`answerID_pk`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION);

CREATE TABLE IF NOT EXISTS `ratr_db`.`JobDetails` (
  `jobDetailsID_pk` INT NOT NULL AUTO_INCREMENT,
  `recruiterID_fk` INT NULL,
  `jobQuestionsID_fk` INT NULL,
  `jobClassification` VARCHAR(20) NULL,
  `jobTitle` VARCHAR(50) NULL,
  `jobDescription` MEDIUMTEXT NULL,
  `baseSalary` DECIMAL(19,4) NULL,
  `bonusFlat` DECIMAL(19,4) NULL,
  `bonusPercentage` DECIMAL(5,2) NULL,
  `retirementPlanAvail` TINYINT NULL,
  `employerMatchingFlat` DECIMAL(10,4) NULL,
  `employerMatchingPercentage` DECIMAL(5,2) NULL,
  `paidVacationDays` INT NULL,
  `paidSickDays` INT NULL,
  `paidHolidays` INT NULL,
  `medicalCoverageAvail` TINYINT NULL,
  `familyCoverageAvail` TINYINT NULL,
  `medicalCoverageEmployerPercentage` DECIMAL(10,4) NULL,
  `dentalCoverageAvail` TINYINT NULL,
  `visionCoverageAvail` TINYINT NULL,
  `lifeInsuranceAvail` TINYINT NULL,
  `spouseLifeInsuranceAvail` TINYINT NULL,
  `addBenefitsEmployerPercentage` DECIMAL(10,4) NULL,
  PRIMARY KEY (`jobDetailsID_pk`),
  INDEX `recruiterID_fk_idx` (`recruiterID_fk` ASC) VISIBLE,
  INDEX `jobQuestionsID_fk_idx` (`jobQuestionsID_fk` ASC) VISIBLE,
  CONSTRAINT `jobdetails_userID_fk`
    FOREIGN KEY (`recruiterID_fk`)
    REFERENCES `ratr_db`.`UserInfo` (`userID_pk`)
    ON DELETE SET NULL
    ON UPDATE SET NULL);

CREATE TABLE IF NOT EXISTS `ratr_db`.`JobQuestions` (
  `jobQuestionsID_pk` INT NOT NULL AUTO_INCREMENT,
  `jobDetailsID_fk` INT NULL,
  `questionsID_fk` INT NULL,
  PRIMARY KEY (`jobQuestionsID_pk`),
  INDEX `jobDetailsID_fk_idx` (`jobDetailsID_fk` ASC) VISIBLE,
  INDEX `questionsID_fk_idx` (`questionsID_fk` ASC) VISIBLE,
  CONSTRAINT `jobquestions_jobDetailsID_fk`
    FOREIGN KEY (`jobDetailsID_fk`)
    REFERENCES `ratr_db`.`JobDetails` (`jobDetailsID_pk`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION);
    
CREATE TABLE IF NOT EXISTS `ratr_db`.`Scorecard` (
  `scorecardID_pk` INT NOT NULL AUTO_INCREMENT,
  `recruiterID_fk` INT NULL,
  `jobDetailsID_fk` INT NULL,
  `opportunityScore` DECIMAL(10,4) NULL,
  `maximumScorePossible` DECIMAL(10,4) NULL,
  `answerDeductions` DECIMAL(10,4) NULL,
  `evaluationDT` DATE NULL,
  PRIMARY KEY (`scorecardID_pk`),
  INDEX `recruiterID_fk_idx` (`recruiterID_fk` ASC) VISIBLE,
  INDEX `jobDetailsID_fk_idx` (`jobDetailsID_fk` ASC) VISIBLE,
  CONSTRAINT `scorecard_recruiterID_fk`
    FOREIGN KEY (`recruiterID_fk`)
    REFERENCES `ratr_db`.`UserInfo` (`userID_pk`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `scorecard_jobDetailsID_fk`
    FOREIGN KEY (`jobDetailsID_fk`)
    REFERENCES `ratr_db`.`JobDetails` (`jobDetailsID_pk`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION); 
  
