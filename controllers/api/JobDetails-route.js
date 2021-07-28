const router = require('express').Router();
const { UserInfo, JobDetails } = require('../../models');

//Data needed to GET for “Submit an Opportunity” page
//GET id for talent(put as parameter in the URL?)
//GET id for recruiters(get from the session object?)
//GET questions selected by talent(get from the database)

//GET id for talent(put as parameter in the URL)

router.get('/submit', async (req, res) => {
    const talent = await JobDetails.findAll({
        attributes: [
            'job_detailsid_pk',
            'recruiterid_fk',
            'job_questionsid_fk',
            'job_classification',
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
                model: UserInfo,
                attributes: [
                    'userid_pk',
                    'user_fk',
                    'user_type',
                    'first_name',
                    'last_name',
                    'email',
                    'phone',
                    'preferred_location',
                    'user_url',
                    'company',
                    'facebook',
                    'twitter',
                    'linkedin',
                    'active',
                    'verified',
                    'want1',
                    'want2',
                    'want3',
                    'avoid1',
                    'avoid2',
                    'avoid3'
                ]
            }
        ]
    })

    res.render('submit', { talent })
});

router.post('/', (req, res) => {
    JobQuestions.create({
        questionsid_fk: req.body.questionsid_fk,
        userid_fk: req.body.userid_fk
    }).then(dbJobQuestionsData => res.json(dbJobQuestionsData))
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});






// router.get('/submit/:id', async (req, res) => {
//     const talent = await UserInfo.findByPk(req.params.userid_pk, {
//         attributes: [
//             'userid_pk',
//             'user_fk',
//             'user_type',
//             'first_name',
//             'last_name',
//             'email',
//             'phone',
//             'preferred_location',
//             'user_url',
//             'company',
//             'facebook',
//             'twitter',
//             'linkedin',
//             'active',
//             'verified',
//             'want1',
//             'want2',
//             'want3',
//             'avoid1',
//             'avoid2',
//             'avoid3',
//             [sequelize.literal('(SELECT (*) FROM')]
//         ]
//     });
//     res.render('submit', { talent })

// });

// router.post('/submit/:id', (req, res) => {
//     User.create({
//     });
// });



module.exports = router;
