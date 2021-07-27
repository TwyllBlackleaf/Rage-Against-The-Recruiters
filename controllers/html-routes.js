const router = require('express').Router();
const sequelize = require('../config/connection');
// const {  } = require('../models');

router.get('/signup', (req, res) => {
    res.locals.username = req.session.username;
    res.render('signup')
})

module.exports = router;