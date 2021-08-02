const router = require('express').Router();
const sequelize = require('../config/connection');
const path = require("path");

router.get('/signup', (req, res) => {
    res.locals.username = req.session.username;
    res.sendFile(path.join(__dirname, "../public/HTML/signup.html"), { user: req.user });
})

router.get('/login', (req, res) => {
    res.locals.username = req.session.username;
    res.sendFile(path.join(__dirname, "../public/HTML/login.html"), { user: req.user });
})

router.get('/submit', (req, res) => {
    res.sendFile(path.join(__dirname, "../public/HTML/submit.html"), { user: req.user });
})

router.get('/recruiter_dash', (req, res) => {
    res.sendFile(path.join(__dirname, "../public/HTML/recruiterDashboard.html"), { user: req.user });
})

router.get('/create', (req, res) => {
    res.sendFile(path.join(__dirname, "../public/HTML/createOpportunities.html"), { user: req.user });
})

router.get('/', (req, res) => {
    res.locals.user = req.user;
    res.sendFile(path.join(__dirname, "../public/index.html"));
})



module.exports = router;