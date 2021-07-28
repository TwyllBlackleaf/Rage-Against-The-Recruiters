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
        //   req.session.usertype
          req.session.loggedIn = true;
    
          res.json(dbUserData);
        });
      })
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
  });  

// router.post('/login', passport.authenticate('local', {
//     successRedirect: '/',
//     failureRedirect: '/login',
//     failureMessage: false
// }));

router.post('/login', passport.authenticate('local', { 
  successRedirect: '/',
  failureRedirect: '/login' 
}),
function(req, res) {
  res.json({ user: req.user })
  console.log('loggedin user ', req.user)
});

router.get('/logout', (req, res) => {
  req.logout();
  if (req.session.loggedIn) {
    req.session.destroy(() => {
      res.status(204).end();
    });
  }
  else {
    res.status(404).end();
  }
  res.redirect('/');
});

module.exports = router;
  