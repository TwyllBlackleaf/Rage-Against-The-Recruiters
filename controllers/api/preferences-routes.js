const router = require('express').Router();
const { Questions, QuestionCategories, JobQuestions } = require('../../models');

router.get('/', async (req, res) => {
    res.locals.username = req.session.username;
    const categories = await QuestionCategories.findAll({
        attributes: [
            "categoryid_pk",
            "category"
        ],
        include: [
            {
                model: Questions,
                attributes: [
                    'questionid_pk',
                    'question_type',
                    'question_text'
                ]
            }
        ]
    })

    res.render('choose', { categories })
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
    res.locals.username = req.session.username;
    //     Post.create({
    //     });
});



module.exports = router;