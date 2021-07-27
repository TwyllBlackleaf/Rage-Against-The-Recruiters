const router = require('express').Router();
const { User } = require('../../models');

router.get('/submit', (req, res) => {
    User.findAll({
    });
});

router.post('/submit/:id', (req, res) => {
    User.create({
    });
});



module.exports = router;
