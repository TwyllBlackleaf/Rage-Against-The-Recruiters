const router = require('express').Router();
const { User } = require('../../models');

router.get('/submit/:id', (req, res) => {
    User.findOne({
    });
});

router.post('/submit/:id', (req, res) => {
    User.create({
    });
});



module.exports = router;
