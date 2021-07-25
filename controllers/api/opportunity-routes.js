const router = require('express').Router();
const { } = require('../../models');

router.get('/submit/:id', (req, res) => {
    User.findOne({
    });
});

router.post('/submit/:id', withAuth, (req, res) => {
    Post.create({
    });
});



module.exports = router;
