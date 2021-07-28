var passport = require('passport');
var Strategy = require('passport-local');
var User = require('../models/User');


module.exports = function() {
    passport.use(new Strategy({
        usernameField: 'email',
        passwordField: 'password'
    }, function(username, password, cb) {
    User.findOne({
        where: {
            email: username
        }
    }).then(dbUserData => {
        // check email address
        if (!dbUserData) { return cb(null, false, { message: 'No user with that email address!' }); }

        // check password
        const validPassword = dbUserData.checkPassword(password);

        if (!validPassword) {
            return cb(null, false, { message: 'Incorrect password' });
        }

        const user = {
            id: dbUserData.id,
            username: dbUserData.username,
            email: dbUserData.email,
        };
        // user logged in
        return cb(null, user);
    });
  }));

  passport.serializeUser(function(user, cb) {
    process.nextTick(function() {
      cb(null, { id: user.id, username: user.username, email: user.email });
    });
  });

  passport.deserializeUser(function(user, cb) {
    process.nextTick(function() {
      return cb(null, user);
    });
  });

};
