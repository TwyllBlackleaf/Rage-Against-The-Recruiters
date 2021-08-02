const router = require('express').Router();
const { User, JobDetails, surveyAnswers, Questions, JobQuestions } = require('../../models');

router.get('/recruiter/:id', async (req, res) => {
    const opportunities = await JobDetails.findAll({
        // nest: true,
        // raw: true,
        where: {recruiterid_fk: req.params.id},
        attributes: [
            'job_detailsid_pk',
            'recruiterid_fk',
            'job_questionsid_fk',
            'job_classification',
            'company',
            'job_title',
            'job_description',
            'base_salary',
            'bonus_flat',
            'bonus_percentage',
            'retirement_plan_avail',
            'employer_matching_flat',
            'employer_matching_percentage',
            'paid_vacation_days',
            'paid_sick_days',
            'paid_holidays',
            'medical_coverage_avail',
            'family_coverage_avail',
            'medical_coverage_employer_percentage',
            'dental_coverage_avail',
            'vision_coverage_avail',
            'life_insurance_avail',
            'spouse_life_insurance_avail',
            'add_benefits_employer_percentage'
        ],
        include: [
            {
                model: surveyAnswers,
                attributes: [
                    //             'survey_answers_pk',
                    'questionsid_fk',
                    //             'job_detailsid_fk',
                    'answer',
                    'answer_score'],
                include: [
                    {
                        model: Questions,
                    }
                ]
            }
        ]
    })
    console.log (req.params.id)
    res.json({ opportunities });

    // res.render('talent-user', { opportunities });
});

router.get('/:id', async (req, res) => {
    const opportunities = await JobDetails.findOne({
        // nest: true,
        // raw: true,
        where: {
            job_detailsid_pk: req.params.id
        },
        attributes: [
            'job_detailsid_pk',
            'recruiterid_fk',
            'job_questionsid_fk',
            'job_classification',
            'company',
            'job_title',
            'job_description',
            'base_salary',
            'bonus_flat',
            'bonus_percentage',
            'retirement_plan_avail',
            'employer_matching_flat',
            'employer_matching_percentage',
            'paid_vacation_days',
            'paid_sick_days',
            'paid_holidays',
            'medical_coverage_avail',
            'family_coverage_avail',
            'medical_coverage_employer_percentage',
            'dental_coverage_avail',
            'vision_coverage_avail',
            'life_insurance_avail',
            'spouse_life_insurance_avail',
            'add_benefits_employer_percentage'
        ],
        include: [
            {
                model: surveyAnswers,
                attributes: [
                    //             'survey_answers_pk',
                    'questionsid_fk',
                    //             'job_detailsid_fk',
                    'answer',
                    'answer_score'],
                include: [
                    {
                        model: Questions,
                    }
                ]
            }
        ]
    })

    console.log ('Find One')
    console.log(req.params.id)
    res.json({ opportunities });

    // res.render('talent-user', { opportunities });
});

router.get('/', async (req, res) => {
    const opportunities = await JobDetails.findAll({
        // nest: true,
        // raw: true,
        attributes: [
            'job_detailsid_pk',
            'recruiterid_fk',
            'job_questionsid_fk',
            'job_classification',
            'company',
            'job_title',
            'job_description',
            'base_salary',
            'bonus_flat',
            'bonus_percentage',
            'retirement_plan_avail',
            'employer_matching_flat',
            'employer_matching_percentage',
            'paid_vacation_days',
            'paid_sick_days',
            'paid_holidays',
            'medical_coverage_avail',
            'family_coverage_avail',
            'medical_coverage_employer_percentage',
            'dental_coverage_avail',
            'vision_coverage_avail',
            'life_insurance_avail',
            'spouse_life_insurance_avail',
            'add_benefits_employer_percentage'
        ],
        include: [
            {
                model: surveyAnswers,
                attributes: [
                    //             'survey_answers_pk',
                    'questionsid_fk',
                    //             'job_detailsid_fk',
                    'answer',
                    'answer_score'],
                include: [
                    {
                        model: Questions,
                    }
                ]
            }
        ]
    })

    res.json({ opportunities });

    // res.render('talent-user', { opportunities });
});

router.post('/:id', (req, res) => {
    //res.locals.username = req.session.username;
    JobDetails.create({
        // job_detailsid_pk: req.body.job_detailsid_pk,
        recruiterid_fk: req.body.recruiterid_fk,
        job_questionsid_fk: req.body.job_questionsid_fk,
        job_classification: req.body.job_classification,
        company: req.body.company,
        job_title: req.body.job_title,
        job_description: req.body.job_description
        // ----- All of the data below is going to be handled by the post --------
        // base_salary: req.body.base_salary,
        // bonus_flat: req.body.bonus_flat,
        // bonus_percentage: req.body.bonus_percentage,
        // retirement_plan_avail: req.body.retirement_plan_avail,
        // employer_matching_flat: req.body.employer_matching_flat,
        // employer_matching_percentage: req.body.employer_matching_percentage,
        // paid_vacation_days: req.body.paid_vacation_days,
        // paid_sick_days: req.body.paid_sick_days,
        // paid_holidays: req.body.paid_holidays,
        // medical_coverage_avail: req.body.medical_coverage_avail,
        // family_coverage_avail: req.body.family_coverage_avail,
        // medical_coverage_employer_percentage: req.body.medical_coverage_employer_percentage,
        // dental_coverage_avail: req.body.dental_coverage_avail,
        // vision_coverage_avail: req.body.vision_coverage_avail,
        // life_insurance_avail: req.body.life_insurance_avail,
        // spouse_life_insurance_avail: req.body.spouse_life_insurance_avail,
        // add_benefits_employer_percentage: req.body.add_benefits_employer_percentage,
    })
        .then(dbJobDetailsData => res.json(dbJobDetailsData))
        .catch(err => {
            console.log(err);
            res.status(400).json(err);
        });
    // .then(dbUserData => {
    //     req.session.save(() => {
    //         req.session.job_detailsid_pk = dbUserData.id;
    //         req.session.username = dbUserData.username;
    //         req.session.loggedIn = true;

    //         res.json(dbUserData);
    //     });
    // })
    // .catch(err => {
    //     console.log(err);
    //     res.status(500).json(err);
    // });
});

// update surveyAnswers
router.put('/surveyAnswers/:id', async (req, res) => {
    // update Answer data
    surveyAnswers.update(
        {
            answer: req.body.answer,
            answer_score: req.body.answer_score,
        },
        {
            where: {
                survey_answers_pk: req.params.survey_answers_pk
            }
        }
    )
        .then(dbSurveyAnswersData => {
            if (!dbSurveyAnswersData) {
                res.status(404).json({ message: '' });
                return;
            }
            res.json(dbSurveyAnswersData);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

// router.put('/submit/:id', (req, res) => {

//     User.update(req.body, {

//         where: {
//             job_detailsid_pk: req.params.job_detailsid_pk
//         }
//     })
//         .then(dbUserData => {
//             if (!dbUserData) {
//                 res.status(404).json({ message: 'No user found with this id' });
//                 return;
//             }
//             res.json(dbUserData);
//         })
//         .catch(err => {
//             console.log(err);
//             res.status(500).json(err);
//         });
// });


module.exports = router;
