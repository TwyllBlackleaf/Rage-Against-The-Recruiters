const router = require('express').Router();
const { } = require('../../models');

router.get('/user/:id', (req, res) => {
    User.findOne({
    });
});


module.exports = router;