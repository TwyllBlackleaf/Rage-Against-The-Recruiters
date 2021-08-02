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

// create an account
router.post('/', (req, res) => {
    User.create({
      username: req.body.username,
      email: req.body.email,
      password: req.body.password
    })
      .then(dbUserData => {
        req.session.save(() => {
          req.session.user_id = dbUserData.id;
          req.session.username = dbUserData.username;
          req.session.email = dbUserData.email;
          req.session.loggedIn = true;
    
          res.json(dbUserData);
        });
        let user = {
          email: req.body.email,
          username: req.body.username,
          password: dbUserData.password,
          user_type: "Recruiter"
        }
        req.login(user, function(err) {
          if (err) {
            return next(err);
          }
          res.redirect('/');
        })
      })
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
  });  

// login
router.post('/login', passport.authenticate('local', { 
  failureRedirect: '/login' 
}),
function(req, res) {
  res.json({ user: req.user })
});

// logout
router.post('/logout', (req, res) => {
  req.logout();
  if (req.session.loggedIn) {
    req.session.destroy(() => {
      res.status(204).end();
    });
  }
  else {
    res.status(404).end();
  }
  // res.redirect('/');
});

module.exports = router;
  