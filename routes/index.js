var express = require('express');
var router = express.Router();
var indexCtrl = require("../controllers/index");
const passport = require("passport");


/* GET home page. */
router.get('/', indexCtrl.index);

// Google OAuth login route
router.get('/auth/google', passport.authenticate(
    'google',
    { scope: ['profile', 'email'] }
  ));
  
  // Google OAuth callback route
  router.get('/oauth2callback', passport.authenticate(
    'google',
    {
      successRedirect : '/',
      failureRedirect : '/'
    }
  ));
  
  // OAuth logout route
  router.get('/logout', function(req, res, next){
    req.logout(function(err) {
      if (err) { return next(err); }
      res.redirect('/');
    });
  });
  
  module.exports = router;
  