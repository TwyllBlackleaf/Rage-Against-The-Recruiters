const router = require('express').Router();
const sequelize = require('../config/connection');
// const {  } = require('../models');

router.get('/signup', (req, res) => {
    res.locals.username = req.session.username;
    res.render('signup');
})

router.get('/login', (req, res) => {
    res.locals.username = req.session.username;
    res.render('login');
})

router.get('/', (req, res) => {
    res.locals.username = req.session.username;
    res.render('index');
})

module.exports = router;