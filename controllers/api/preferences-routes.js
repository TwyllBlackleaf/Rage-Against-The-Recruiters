const router = require('express').Router();
const { } = require('../../models');

router.get('/', (req, res) => {
    User.findOne({
    });
});

router.post('/', withAuth, (req, res) => {
    Post.create({
    });
});



module.exports = router;