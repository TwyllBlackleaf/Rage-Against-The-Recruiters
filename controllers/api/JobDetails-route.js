const router = require('express').Router();
const sequelize = require('../../config/connection');
const { UserInfo, JobDetails } = require('../../models');

//Data needed to GET for “Submit an Opportunity” page
//GET id for talent(put as parameter in the URL?)
//GET id for recruiters(get from the session object?)
//GET questions selected by talent(get from the database)

//GET id for talent(put as parameter in the URL)
router.get('/newOpportunity', (req, res) => {
    res.render('submit')
});

router.post('/newOpportunity', (req, res) => {
    JobDetails.create()
});




router.get('/submit/:id', async (req, res) => {
    const talent = await UserInfo.findByPk(req.params.userid_pk, {
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
            'avoid3',
            [sequelize.literal('(SELECT (*) FROM')]
        ]
    });
    res.render('submit', { talent })

});

// router.post('/submit/:id', (req, res) => {
//     User.create({
//     });
// });



module.exports = router;
