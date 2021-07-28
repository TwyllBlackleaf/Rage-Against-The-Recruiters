const router = require('express').Router();
const { Questions, QuestionCategories } = require('../../models');

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
    res.locals.username = req.session.username;
    //     Post.create({
    //     });
});



module.exports = router;