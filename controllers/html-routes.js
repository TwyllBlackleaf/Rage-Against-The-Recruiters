const router = require('express').Router();
const sequelize = require('../config/connection');
const path = require("path");

router.get('/signup', (req, res) => {
    res.locals.username = req.session.username;
    res.render('signup', { user: req.user });
})

router.get('/login', (req, res) => {
    res.locals.username = req.session.username;
    res.render('login', { user: req.user });
})

router.get('/submit', (req, res) => {
    res.sendFile(path.join(__dirname, "../public/submit.html"), { user: req.user });
})

router.get('/', (req, res) => {
    res.locals.username = req.session.username;
    res.render('index', { user: req.user });
})



module.exports = router;