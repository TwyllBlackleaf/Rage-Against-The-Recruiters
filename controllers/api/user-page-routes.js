const router = require('express').Router();
const { } = require('../../models');

router.get('/user/:id', (req, res) => {
    res.locals.username = req.session.username;
    User.findOne({
    });
});


module.exports = router;