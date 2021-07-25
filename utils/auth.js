var passport = require('passport');
var Strategy = require('passport-local');
var User = require('../models/User');


module.exports = function() {
    // Configure the local strategy for use by Passport.
    //
    // The local strategy requires a `verify` function which receives the credentials
    // (`username` and `password`) submitted by the user.  The function must verify
    // that the password is correct and then invoke `cb` with a user object, which
    // will be set at `req.user` in route handlers after authentication.
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

        // session not addeed on server.js yet
        // req.session.save(() => {
        //     req.session.user_id = dbUserData.id;
        //     req.session.username = dbUserData.username;
        //     req.session.loggedIn = true;

        //     res.json({ user: dbUserData, message: 'You are now logged in!' });
        // });
        const user = {
            id: dbUserData.id,
            email: dbUserData.email
        };
        return cb(null, user);
    });
  }));


  // Configure Passport authenticated session persistence.
  //
  // In order to restore authentication state across HTTP requests, Passport needs
  // to serialize users into and deserialize users out of the session.  The
  // typical implementation of this is as simple as supplying the user ID when
  // serializing, and querying the user record by ID from the database when
  // deserializing.
  passport.serializeUser(function(user, cb) {
    process.nextTick(function() {
      cb(null, { id: user.id, email: user.email });
    });
  });

  passport.deserializeUser(function(user, cb) {
    process.nextTick(function() {
      return cb(null, user);
    });
  });

};
