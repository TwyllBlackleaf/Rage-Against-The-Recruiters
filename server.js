const path = require('path');
const express = require('express');
const ejs = require('ejs');
const session = require('express-session');
const passport = require('passport');


const app = express();
const PORT = process.env.PORT || 3001;

const sequelize = require("./config/connection");

const SequelizeStore = require('connect-session-sequelize')(session.Store);
const sess = {
    secret: 'Super secret secret',
    cookie: {},
    resave: false,
    saveUninitialized: true,
    store: new SequelizeStore({
        db: sequelize
    })
};

require('./utils/auth')();

// view engine setup
// app.set('views', path.join(__dirname, 'views'));
// app.set('view engine', 'ejs');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/public", express.static(path.join(__dirname, 'public')));


app.use(session(sess));

app.use(function (req, res, next) {
    var msgs = req.session.messages || [];
    res.locals.messages = msgs;
    res.locals.hasMessages = !!msgs.length;
    req.session.messages = [];
    next();
});

app.use(passport.initialize());
app.use(passport.authenticate('session'));

app.use(require('./controllers/'));

sequelize.sync({ force: false }).then(() => {
    app.listen(PORT, () => console.log('Now listening'));
});

