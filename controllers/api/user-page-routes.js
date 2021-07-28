const router = require('express').Router();
const { User, UserInfo } = require('../../models');

// router.get('/', async (req, res) => {
//     const talent = await User.findAll({
//         attributes: [
//             'id',
//             'username',
//             'email',
//             'password',
//             'user_type'
//         ],
//         include: [
//             {
//                 model: UserInfo,
//                 attributes: [
//                     'userid_pk',
//                     'user_fk',
//                     'user_type',
//                     'first_name',
//                     'last_name',
//                     'email',
//                     'phone',
//                     'preferred_location',
//                     'user_url',
//                     'company',
//                     'facebook',
//                     'twitter',
//                     'linkedin',
//                     'active',
//                     'verified',
//                     'want1',
//                     'want2',
//                     'want3',
//                     'avoid1',
//                     'avoid2',
//                     'avoid3'
//                 ]
//             }
//         ]
//     })

//     res.render('choose', { categories })
// });

// router.post('/', (req, res) => {
//     JobQuestions.create({
//         questionsid_fk: req.body.questionsid_fk,
//         userid_fk: req.body.userid_fk
//     }).then(dbJobQuestionsData => res.json(dbJobQuestionsData))
//         .catch(err => {
//             console.log(err);
//             res.status(500).json(err);
//         });
// });
router.get('/user/:id', (req, res) => {
    res.locals.username = req.session.username;
    User.findOne({
    });
});


module.exports = router;