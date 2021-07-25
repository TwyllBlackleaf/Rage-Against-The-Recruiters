const passport = require('passport');

const router = require('express').Router();
const User = require('../../models/User');

router.get('/', (req, res) => {
    User.findAll({
      attributes: { exclude: ['password'] }
    })
      .then(dbUserData => res.json(dbUserData))
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
  });  

router.post('/', (req, res) => {
    // expects {username: 'Lernantino', email: 'lernantino@gmail.com', password: 'password1234'}
    User.create({
      username: req.body.username,
      email: req.body.email,
      password: req.body.password
    })
      .then(dbUserData => {
        req.session.save(() => {
          req.session.user_id = dbUserData.id;
          req.session.username = dbUserData.username;
          req.session.loggedIn = true;
    
          res.json(dbUserData);
        });
      })
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
  });  

router.post('/login', passport.authenticate('local', {
    successRedirect: '/',
    failureRedirect: '/api/users',
    failureMessage: false
  }));


module.exports = router;
  

// router.post('/login', (req, res) => {
//     User.findOne({
//         where: {
//             email: req.body.email
//         }
//     }).then(dbUserData => {
//         // check email address
//         if (!dbUserData) {
//             res.status(400).json({ message: 'No user with that email address!' });
//             return;
//         }

//         // check password
//         const validPassword = dbUserData.checkPassword(req.body.password);

//         if (!validPassword) {
//             res.status(400).json({ message: 'Incorrect password!' });
//             return;
//         }

//         // session not addeed on server.js yet
//         req.session.save(() => {
//             req.session.user_id = dbUserData.id;
//             req.session.username = dbUserData.username;
//             req.session.loggedIn = true;

//             res.json({ user: dbUserData, message: 'You are now logged in!' });
//         });
//     });
// });


// // Passport oauth
// // callback
// app.get('/login', function(req, res, next) {
//     passport.authenticat('local', function(err, user, info) {
//         if (err) { return next(err); }
//         if (!user) { return res.redirect('/login'); }
//         req.logIn(user, function(err) {
//             if (err) { return next(err); }
//             return res.redirect('/user');
//         });
//     })(req, res, next);
// });

// // npm install passport-local 
// // configuration
// const passport = require('passport');
// const LocalStrategy = require('passport-local').Strategy;

// passport.use(new LocalStrategy(
//     function(username, password, done) {
//         User.findOne({ username: username }, function (err, user) {
//             if (err) { return done(err); }
//             if (!user) {
//                 // verify callback
//                 return done(null, false, { message: 'Incorrect username' });
//             }
//             if (!user.validPassowrd(password)) {
//                 // verify callback
//                 return done(null, false, { message: 'Incorrect password' });
//             }
//             // verify callback
//             return done(null, user);
//         });
//     }
// ));

// // route
// app.post('/login',
//     passport.authenticat('local', { successRedirect: '/',
//                                     failureRedirect: '/login'}));

// // parameter
// passport.use(new LocalStrategy({
//     usernameField: 'email',
//     passwordField: 'passwd'
// },
// function(username, password, done) {

// }
// ));


// // OAuth

// // npm install passport-oauth
// // Config
// const passport = require('passport');
// const Oauth2Strategy = require('passport-oauth').Oauth2Strategy;

// passport.use('provider', new Oauth2Strategy({
//     authorizationURL: '',
//     tokenURL: '',
//     clientID: '',
//     clientSecret: '',
//     callbackURL: ''
//     },
// function(accessToken, refreshToken, profile, done) {
//     User.findOne({ username: username }, function(err, user) {
//         done(err, user);
//         });
//     }
// ));

// // routes
// app.get('/', passport.authenticate('provider'))
