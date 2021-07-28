const router = require('express').Router();
const { User } = require('../../models');

router.get('/submit/:id', (req, res) => {
    res.locals.username = req.session.username;
    User.findOne({
    });
});

router.post('/submit/:id', (req, res) => {
    res.locals.username = req.session.username;
    User.create({
    });
});



module.exports = router;
