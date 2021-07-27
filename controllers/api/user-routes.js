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
    console.log("signup-body", req.body)
    // expects {username: 'Lernantino', email: 'lernantino@gmail.com', password: 'password1234'}
    User.create({
      username: req.body.username,
      email: req.body.email,
      password: req.body.password,
      userType: req.body.accountType
    })
      .then(dbUserData => {
        req.session.save(() => {
          req.session.user_id = dbUserData.id;
          req.session.username = dbUserData.username;
          req.session.email = dbUserData.email;
          req.session.userType = dbUserData.userType;
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
  