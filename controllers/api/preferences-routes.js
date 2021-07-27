const router = require('express').Router();
const { Questions, QuestionCategories } = require('../../models');

router.get('/', async (req, res) => {
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
    //     Post.create({
    //     });
});



module.exports = router;